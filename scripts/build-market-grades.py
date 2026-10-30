"""Read-only extraction of independent market grades from the supplied workbook."""
import csv
import hashlib
import json
import re
import sys
import zipfile
from collections import Counter
from pathlib import Path
from xml.etree import ElementTree as ET

ROOT = Path(__file__).resolve().parents[1]
SOURCE = Path(sys.argv[1]) if len(sys.argv) > 1 else Path('C:/Users/admin/Downloads/小闪/国内休闲游戏公司图谱_整合版 (2).xlsx')
NS = {'m': 'http://schemas.openxmlformats.org/spreadsheetml/2006/main'}

with zipfile.ZipFile(SOURCE) as z:
    names = [s.get('name') for s in ET.fromstring(z.read('xl/workbook.xml')).findall('m:sheets/m:sheet', NS)]
    assert names[:3] == ['说明', '配置', '公司表']
    strings = [''.join(s.itertext()) for s in ET.fromstring(z.read('xl/sharedStrings.xml')).findall('m:si', NS)] if 'xl/sharedStrings.xml' in z.namelist() else []
    def sheet(number):
        rows = []
        for r in ET.fromstring(z.read(f'xl/worksheets/sheet{number}.xml')).findall('.//m:sheetData/m:row', NS):
            values = {}
            for c in r.findall('m:c', NS):
                v = c.find('m:v', NS)
                value = v.text if v is not None else ''
                if c.get('t') == 's':
                    value = strings[int(value)]
                elif c.get('t') == 'inlineStr':
                    inline = c.find('m:is', NS)
                    value = ''.join(inline.itertext()) if inline is not None else ''
                values[re.sub(r'\d+$', '', c.get('r'))] = value
            rows.append((int(r.get('r')), values))
        return rows
    explanation, config, companies = sheet(1), sheet(2), sheet(3)

assert companies[0][1]['AA'] == '梯队依据'
atlas = json.loads((ROOT / 'data/atlas.json').read_text(encoding='utf-8'))
source_ids = {n['id'] for n in atlas['nodes'] if n.get('originalRecord')}
records = {}
for row, cells in companies[1:]:
    identity = cells.get('A')
    if not identity:
        continue
    assert identity not in records
    evidence = cells.get('AA', '')
    parts = [p.strip() for p in evidence.split('；') if p.strip()]
    domestic = [p for p in parts if re.match(r'国内T[0-4]', p)]
    overseas = [p for p in parts if re.match(r'(?:出海|海外)T[0-4]', p)]
    assert len(domestic) <= 1 and len(overseas) <= 1
    monitor = [p for p in parts if p == '消除类监控名单入选→T3']
    if not domestic and monitor:
        domestic = monitor
    def grade(parts, direction):
        if not parts:
            return {'tier': None, 'evidence': '', 'basis': 'not_recorded', 'metrics': {}}
        text = parts[0]
        tier = int(re.search(r'T([0-4])', text).group(1))
        metrics = {}
        if direction == 'domestic':
            for key, pattern in {'listedProducts': r'在榜(\d+)款', 'numberOneProducts': r'登顶(\d+)个', 'effectiveNumberOnes': r'有效(\d+)', 'totalDays': r'总天数(\d+)', 'longestDays': r'最长(\d+)天'}.items():
                match = re.search(pattern, text)
                if match:
                    metrics[key] = int(match.group(1))
        else:
            for key, col in {'casual10QDownloads': 'V', 'casual10QRevenueUSD': 'W', 'hypercasual7QDownloads': 'X', 'hypercasual7QRevenueUSD': 'Y'}.items():
                if cells.get(col) not in (None, ''):
                    metrics[key] = float(cells[col])
        return {'tier': tier, 'evidence': text, 'basis': 'domestic_monitor_rule' if text.startswith('消除类') else 'explicit_track_grade', 'metrics': metrics}
    records[identity] = {
        'id': identity, 'name': cells.get('D') or cells.get('B'), 'source': {'sheet': '公司表', 'row': row, 'cell': f'AA{row}'},
        'sourceCategories': cells.get('O', ''), 'sourceCombinedTier': cells.get('Z', ''), 'sourceEvidence': evidence,
        'domestic': grade(domestic, 'domestic'), 'overseas': grade(overseas, 'overseas'),
        'combinedAdjustments': [p for p in parts if p not in domestic + overseas],
    }
assert len(records) == 363 and set(records) == source_ids
for n in atlas['nodes']:
    if n.get('originalRecord'):
        assert records[n['id']]['sourceEvidence'] == n['raw']['梯队依据'], n['id']
stats = {direction: {'graded': sum(r[direction]['tier'] is not None for r in records.values()), 'byTier': dict(sorted(Counter('T' + str(r[direction]['tier']) for r in records.values() if r[direction]['tier'] is not None).items()))} for direction in ['domestic', 'overseas']}
ledger = {
    'version': 19, 'sourceFile': SOURCE.name, 'sourceSHA256': hashlib.sha256(SOURCE.read_bytes()).hexdigest(),
    'sourceRules': {'explanation': {f'A{i}': r['A'] for i, r in explanation if i in [10, 11, 13]}, 'tiers': {f'B{i}': r['B'] for i, r in config if 30 <= i <= 34}},
    'policy': ['分轨T级直接读取公司表梯队依据，不重新按四舍五入数据计算。', '消除类监控名单入选T3按说明A10及配置B33计入国内轨。', '上市升档、境外对标封顶保留为原表综合修正，不改写分轨T级。', '没有本方向证据保持空缺，不套用另一方向、综合梯队或收入重心。', '两方向均使用原表主营品类；公司分轨评级不等于该品类单独评级。', '海外10Q、超休闲7Q指标分开记录，不相加、不重新年化。'],
    'stats': stats, 'records': records,
}
encoded = json.dumps(ledger, ensure_ascii=False, indent=2)
(ROOT / 'data/market-grades.json').write_text(encoded, encoding='utf-8')
(ROOT / 'data/market-grades.js').write_text('window.ATLAS_MARKET_GRADES=' + json.dumps(ledger, ensure_ascii=False, separators=(',', ':')) + ';\n', encoding='utf-8')
print(json.dumps({'records': len(records), 'stats': stats, 'both': sum(r['domestic']['tier'] is not None and r['overseas']['tier'] is not None for r in records.values()), 'sourceSHA256': ledger['sourceSHA256']}, ensure_ascii=False))
