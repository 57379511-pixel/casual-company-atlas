/* Market-specific grades never mutate node.tier or reuse the other market. */
(()=>{
 const ledger=window.ATLAS_MARKET_GRADES;
 const requested=new URLSearchParams(location.search).get('grading');
 state.gradeDirection=requested==='overseas'?'overseas':'domestic';state.gradeViews={};
 const labels={domestic:'国内',overseas:'海外'};
 // Build navigation from actual source tags; keep the historical casual shortcut separate.
 const sourceTags=new Set(DATA.nodes.filter(n=>n.originalRecord).flatMap(n=>String(n.category||'').split('、')).filter(c=>c&&!['SLG','棋牌'].includes(c)));
 const categoryOrder=[...new Set(['二合','三消','消除','解谜','超休闲','找茬','休闲综合',...sourceTags])].filter(c=>sourceTags.has(c));
 const template=DATA.groups.find(g=>g.analysisType==='categoryPeer'&&g.selectionCategories.length===1);
 for(const category of categoryOrder){
  let g=DATA.groups.find(g=>g.analysisType==='categoryPeer'&&g.selectionCategories.length===1&&g.selectionCategories[0]===category);
  if(!g){
   const rows=DATA.nodes.filter(n=>n.originalRecord&&String(n.category||'').split('、').includes(category));
   const rule='严格按原表主营品类“'+category+'”筛选；公司研发角色与国内／海外评级分别判断。';
   g={...template,name:category+' · 原表品类',displayName:category,category,selectionCategories:[category],memberIds:rows.map(n=>n.id),researchMemberIds:rows.filter(n=>n.scope==='developer').map(n=>n.id),members:rows.map(n=>n.name).join('、'),description:rule,selectionRule:rule};
   DATA.groups.push(g);groupByName.set(g.name,g);$('#factionSelect').add(new Option(g.name,g.name));
  }
  g.sourceCategory=true;g.categoryOrder=categoryOrder.indexOf(category);
 }
 // One presentation row per existing canonical company; source records stay unchanged.
 const companyMap=new Map();
 for(const n of DATA.nodes.filter(n=>n.originalRecord)){
  const id=AtlasExecutive.canonical(n.id);if(!companyMap.has(id))companyMap.set(id,[]);companyMap.get(id).push(n);
 }
 const companyRows=[...companyMap].map(([id,rows])=>{
  const primary=rows.find(n=>n.id===id)||rows[0];
  return {...primary,category:[...new Set(rows.flatMap(n=>String(n.category||'').split('、')).filter(Boolean))].join('、'),sourceRecordIds:rows.map(n=>n.id)};
 });
 const companyById=new Map(companyRows.map(n=>[n.id,n]));
 const tags=n=>String((companyById.get(AtlasExecutive.canonical(n.id))||n).category||'').split('、').filter(c=>sourceTags.has(c));
 const allGroup={...template,name:'全部品类 · 公司总览',displayName:'全部品类',category:'全部品类',allCategories:true,sourceCategory:false,selectionCategories:categoryOrder,memberIds:companyRows.map(n=>n.id),researchMemberIds:companyRows.filter(n=>n.scope==='developer').map(n=>n.id),description:'按公司去重，展示全部业务品类。',selectionRule:'公司按既有主体映射合并展示，评级按国内与海外方向独立排序。'};
 DATA.groups.push(allGroup);groupByName.set(allGroup.name,allGroup);$('#factionSelect').add(new Option(allGroup.name,allGroup.name));
 // Navigation union only: keep the original categories and deep links intact.
 const mergedCategories=['二合','三消','消除'];
 const mergedRows=companyRows.filter(n=>mergedCategories.some(c=>String(n.category||'').split('、').includes(c)));
 const mergedGroup={...template,name:'合成与消除 · 品类合集',displayName:'合成与消除',category:'合成与消除',sourceCategory:false,navigationBundle:true,categoryOrder:-1,selectionCategories:mergedCategories,memberIds:mergedRows.map(n=>n.id),researchMemberIds:mergedRows.filter(n=>n.scope==='developer').map(n=>n.id),description:'二合、三消与消除公司的去重合集。',selectionRule:'任一原始标签命中即可纳入；公司只列一次，国内海外独立评级。'};
 DATA.groups.push(mergedGroup);groupByName.set(mergedGroup.name,mergedGroup);$('#factionSelect').add(new Option(mergedGroup.name,mergedGroup.name));
 for(const g of DATA.groups)if(g.sourceCategory&&g.selectionCategories.length===1&&mergedCategories.includes(g.selectionCategories[0]))g.navigationParent=mergedGroup.name;
 const record=n=>ledger.records[n.id];
 const entry=(n,d=state.gradeDirection)=>record(n)?.[d];
 const tier=(n,d=state.gradeDirection)=>entry(n,d)?.tier==null?null:entry(n,d).tier+1;
 function pool(options={}){
  const group=groupByName.get(options.group??state.group),genre=options.genre??state.genre,role=options.audience??state.audience,query=String(options.query??state.query??'').trim().toLowerCase();
  return companyRows.filter(n=>(group?.allCategories||group?.selectionCategories.some(c=>String(n.category||'').split('、').includes(c)))&&(genre==='all'||String(n.category||'').split('、').includes(genre))&&(role!=='developer'||n.scope==='developer')&&(!query||[n.name,n.full,n.originalProducts,n.verifiedProducts,n.id].join(' ').toLowerCase().includes(query)));
 }
 function universe(options={}){const d=options.direction??state.gradeDirection;return pool(options).filter(n=>tier(n,d)!==null);}
 function select(options={}){
  const d=options.direction??state.gradeDirection,scope=String(options.scope??state.scope);
  return universe(options).filter(n=>scope==='all'||(scope==='key'?tier(n,d)<=2:tier(n,d)===Number(scope))).sort((a,b)=>tier(a,d)-tier(b,d)||a.name.localeCompare(b.name,'zh')||a.id.localeCompare(b.id));
 }
 const number=n=>new Intl.NumberFormat('zh-CN',{maximumFractionDigits:1}).format(n);
 const amount=n=>n>=1e8?number(n/1e8)+'亿美元':n>=1e4?number(n/1e4)+'万美元':number(n)+'美元';
 const downloads=n=>n>=1e8?number(n/1e8)+'亿':n>=1e4?number(n/1e4)+'万':number(n);
 function metric(n,d=state.gradeDirection){
  const e=entry(n,d);if(e?.tier==null)return '未纳入该方向评级';const m=e.metrics;
  if(d==='domestic')return e.basis==='domestic_monitor_rule'?'消除类监控名单入选':[['在榜',m.listedProducts,'款'],['登顶',m.numberOneProducts,'个'],['有效登顶',m.effectiveNumberOnes,'个'],['总在榜',m.totalDays,'天'],['最长',m.longestDays,'天']].filter(([,v])=>v!=null).map(([k,v,u])=>k+' '+v+' '+u).join(' · ');
  return [['休闲榜累计',m.casual10QRevenueUSD,m.casual10QDownloads],['超休闲榜7Q',m.hypercasual7QRevenueUSD,m.hypercasual7QDownloads]].filter(([,a,b])=>a!=null||b!=null).map(([label,a,b])=>label+'：'+[a!=null?'收入 '+amount(a):'',b!=null?'下载 '+downloads(b):''].filter(Boolean).join(' · ')).join('\n');
 }
 // Explain the recorded grade without changing it or adding unlike samples.
 function basis(n,d=state.gradeDirection){
  const e=entry(n,d);if(e?.tier==null)return '';
  if(d==='domestic')return e.basis==='domestic_monitor_rule'?'消除类监控名单':'在榜与登顶表现';
  if(e.tier>=3)return '海外收入／下载样本';
  const thresholds=[[3e8,1.5e8],[5e7,2e7],[1e7,5e6]][e.tier],m=e.metrics;
  const revenue=Math.max(m.casual10QRevenueUSD||0,(m.hypercasual7QRevenueUSD||0)*10/7),downloads=Math.max(m.casual10QDownloads||0,(m.hypercasual7QDownloads||0)*10/7);
  const hits=[revenue>=thresholds[0]?'收入':'',downloads>=thresholds[1]?'下载':''].filter(Boolean);
  return hits.length?hits.join('、')+(hits.length===2?'均':'')+'达T'+e.tier+'门槛':'分级记录见依据';
 }
 function representative(n){
  const text=String(n.icon?.title||n.verifiedProducts||n.originalProducts||'查看产品资料');
  const short=String(n.verifiedProducts||n.originalProducts||'').split(/[；;、\n]/).map(v=>v.trim()).find(v=>v.length>=2&&v.length<20&&text.startsWith(v));
  return (text.length>24&&short?short:text).replace(/ - 官方预约 - TapTap$/,'').replace(/（抖音投放榜与运营署名）/g,'').split(/[；;、\n]/)[0].replace(/等$/,'').trim();
 }
 window.AtlasGrades={companyRows,tags,allGroup,mergedGroup,ledger,labels,record,entry,tier,pool,universe,select,metric,basis,representative,amount,downloads};
})();
