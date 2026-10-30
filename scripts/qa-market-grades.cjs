const fs=require('node:fs'),path=require('node:path'),assert=require('node:assert/strict');
const {chromium}=require(process.env.PLAYWRIGHT_MODULE||'C:/Users/admin/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright');
const root=path.resolve(__dirname,'..'),out=process.env.QA_OUT||'G:/outputs/casual-atlas-20261030-r19',base=process.env.QA_URL||'http://127.0.0.1:8765/';
fs.mkdirSync(out,{recursive:true});
const atlas=JSON.parse(fs.readFileSync(root+'/data/atlas.json')),ledger=JSON.parse(fs.readFileSync(root+'/data/market-grades.json'));
// Independent expected grades from the original imported AA evidence, not from the new grade API.
const expected={};for(const n of atlas.nodes.filter(n=>n.originalRecord)){
 const e=n.raw['梯队依据'];const domestic=e.match(/国内T(\d)/),overseas=e.match(/(?:出海|海外)T(\d)/);
 expected[n.id]={domestic:domestic?Number(domestic[1]):e.includes('消除类监控名单入选→T3')?3:null,overseas:overseas?Number(overseas[1]):null};
 for(const d of ['domestic','overseas'])assert.equal(ledger.records[n.id][d].tier,expected[n.id][d],n.id+' '+d);
}
assert.equal(Object.keys(expected).length,363);assert.equal(Object.values(expected).filter(r=>r.domestic!==null).length,334);assert.equal(Object.values(expected).filter(r=>r.overseas!==null).length,36);assert.equal(Object.values(expected).filter(r=>r.domestic!==null&&r.overseas!==null).length,16);
for(const [id,d,o] of [['G017',2,1],['G239',0,1],['G001',null,3],['G050',1,null],['G007',null,0]])assert.deepEqual(expected[id],{domestic:d,overseas:o});
(async()=>{
 const b=await chromium.launch({channel:'msedge',headless:true}),p=await b.newPage({viewport:{width:1440,height:1000}}),errors=[];
 p.on('pageerror',e=>errors.push(String(e)));const ready=async()=>{await p.waitForTimeout(85);await p.evaluate(()=>AtlasRelationReader.whenReady());};
 const go=async(query='')=>{await p.goto(base+query);await p.waitForFunction(()=>window.AtlasGradeViews&&window.AtlasNavigation);await ready();};
 const advanced=async()=>{if(!await p.locator('#rrAdvanced').evaluate(e=>e.open))await p.locator('#rrAdvanced>summary').click();};
 const ids=()=>p.locator('#prCards [data-company]').evaluateAll(es=>es.map(e=>e.dataset.company).sort());
 const snap=()=>p.evaluate(()=>({direction:state.gradeDirection,group:state.group,scope:state.scope,genre:state.genre,role:state.audience,query:state.query,section:AtlasNavigation.section(),ids:state.visible.map(n=>n.id)}));
 const reload=async()=>{const s=await snap();await p.reload();await ready();assert.deepEqual(await snap(),s);};
 await go();assert.equal((await snap()).direction,'domestic');assert.deepEqual(await ids(),['G062','G186','G233']);
 assert.deepEqual(await p.evaluate(()=>[DATA.nodes.filter(n=>n.originalRecord).length,DATA.nodes.length,DATA.links.length]),[363,391,186]);
 await p.screenshot({path:out+'/国内分级-二合.png',fullPage:true});
 const groups=await p.evaluate(()=>DATA.groups.filter(g=>g.analysisType==='categoryPeer').map(g=>({name:g.name,categories:g.selectionCategories})));
 let combos=0;
 for(const direction of (process.env.QA_SKIP_MATRIX?[]:['domestic','overseas'])){
  await p.locator('button[data-grade-direction="'+direction+'"]').click();await ready();
  for(const g of groups){await p.locator('[data-rr-group='+JSON.stringify(g.name)+']').click();await ready();await advanced();
   for(const role of ['developer','all']){await p.locator('#prRole').selectOption(role);
    for(const category of ['all',...g.categories]){await p.locator('#prCategory').selectOption(category);
     for(const tier of ['all','key','1','2','3','4','5']){await p.locator('#prTier').selectOption(tier);await ready();
      const want=atlas.nodes.filter(n=>n.originalRecord&&g.categories.some(c=>n.category.split('、').includes(c))&&(role==='all'||n.scope==='developer')&&(category==='all'||n.category.split('、').includes(category))&&expected[n.id][direction]!==null&&(tier==='all'||(tier==='key'?expected[n.id][direction]<=1:expected[n.id][direction]+1===Number(tier)))).map(n=>n.id).sort();
      assert.deepEqual(await ids(),want,[direction,g.name,role,category,tier].join('/'));combos++;
     }
    }
   }
   await p.locator('#rrClearOptions').click();await ready();
  }
 }
 // Filters and search are independent; returning to the other direction restores its view.
 await go('?grading=domestic&peer=casual');await advanced();await p.locator('#prCategory').selectOption('超休闲');await p.locator('#prTier').selectOption('3');await p.locator('#prRole').selectOption('all');
 await p.evaluate(()=>{state.query='G017';document.querySelector('#search').value=state.query;refresh();});await ready();const domesticState=await snap();assert.deepEqual(await ids(),['G017']);
 await p.locator('button[data-grade-direction="overseas"]').click();await ready();assert.deepEqual(await ids(),['G007','G008','G009','G011','G013','G020']);
 await p.locator('[data-rr-group="三消 · 国内研发对标"]').click();await ready();const overseasState=await snap();
 await p.locator('button[data-grade-direction="domestic"]').click();await ready();assert.deepEqual(await snap(),domesticState);
 await p.locator('button[data-grade-direction="overseas"]').click();await ready();assert.deepEqual(await snap(),overseasState);
 await p.goBack();await ready();assert.deepEqual(await snap(),domesticState);await p.goForward();await ready();assert.deepEqual(await snap(),overseasState);await reload();
 // A pretty overseas URL must remain overseas after serialization/reload.
 await go('?grading=overseas&peer=merge');await reload();assert.equal((await snap()).direction,'overseas');
 await p.screenshot({path:out+'/海外分级-二合.png',fullPage:true});
 const selected=await ids();await p.evaluate(()=>{window._oldTiers=DATA.nodes.map(n=>n.tier);for(const n of DATA.nodes)n.tier=5;state.revenue='domestic';state.marketDirection='国内市场';refresh();});await ready();assert.deepEqual(await ids(),selected);
 await p.evaluate(()=>{DATA.nodes.forEach((n,i)=>n.tier=window._oldTiers[i]);state.revenue='all';state.marketDirection='all';refresh();});await ready();
 // Export snapshots the selected direction and source evidence.
 await p.locator('#gradeMethod>summary').click();assert.equal(await p.locator('.grade-thresholds tbody tr').count(),4);
 const csvPromise=p.waitForEvent('download');await p.locator('#gradeCsv').click();const csv=await csvPromise;await csv.saveAs(out+'/海外分级-二合.csv');const csvText=fs.readFileSync(out+'/海外分级-二合.csv','utf8');assert.match(csvText,/海外/);assert.match(csvText,/出海T0/);assert.equal(csvText.split('\r\n').length,7);
 await p.locator('#gradeMethod>summary').click();const pngPromise=p.waitForEvent('download');await p.evaluate(()=>AtlasPeerReader.export());const png=await pngPromise;await png.saveAs(out+'/海外分级-二合-导出.png');
 // Relationship navigation/back preserves market, filters and position.
 const beforeRelations=await snap();await p.locator('[data-peer-relations="G008"]').click();await ready();assert.equal((await snap()).section,'relations');assert.equal(await p.locator('#gradeDirections').isVisible(),false);
 await p.locator('#viewBack').click();await ready();assert.deepEqual(await snap(),beforeRelations);
 await p.locator('[data-rr-group="轻度休闲 · 研发对标"]').click();await ready();await p.locator('#prCards [data-company="G239"]').click();await ready();
 assert.match(await p.locator('.grade-domestic>strong').textContent(),/T0/);assert.match(await p.locator('.grade-overseas>strong').textContent(),/T1/);assert.match(await p.locator('.grade-overseas>p').textContent(),/超休闲榜7Q/);
 await p.screenshot({path:out+'/指色-双轨详情.png',fullPage:true});await p.locator('#detail .detail-dismiss').click();await ready();
 await p.locator('.tab-set [data-section="geo"]').click();await ready();assert.equal((await snap()).section,'geo');assert.equal(await p.locator('#gradeDirections').isVisible(),false);
 await p.locator('.tab-set [data-section="companies"]').click();await ready();assert.equal((await snap()).direction,'overseas');
 await p.locator('#allCompanies').click();await ready();assert.equal(await p.locator('#tableBody [data-company]').count(),391);
 await go('?grading=domestic&peer=match3');assert.deepEqual(await ids(),['G050','G062','G085','G177','G196','G341']);
 await go('?grading=overseas&peer=match3');assert.deepEqual(await ids(),['G008','G009']);
 await p.setViewportSize({width:390,height:844});await ready();assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));assert.equal(await p.locator('#gradeDirections button:visible').count(),2);await p.screenshot({path:out+'/海外分级-手机.png',fullPage:true});
 await p.locator('button[data-grade-direction="domestic"]').click();await ready();assert.ok(await p.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1));await p.screenshot({path:out+'/国内分级-手机.png',fullPage:true});
 assert.deepEqual(errors,[]);const report={passed:true,sourceRows:363,gradedDomestic:334,gradedOverseas:36,bothTracks:16,filterCombinations:combos,sourceEvidenceMatch:true,independentFilters:true,independentOfCombinedAndRevenue:true,backForward:true,shareReload:true,relationshipReturn:true,exports:true,mobile:true,preservedObjects:391,preservedLinks:186,errors};fs.writeFileSync(out+'/validation-r19.json',JSON.stringify(report,null,2));console.log(JSON.stringify(report));await b.close();
})().catch(e=>{console.error(e);process.exit(1)});
