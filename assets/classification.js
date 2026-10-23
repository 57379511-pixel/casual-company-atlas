/* Workbook classifications and map-only company grouping. No product-based label inference. */
document.title='国内休闲游戏公司图谱 · 标签与T0修订版';
$('.top-meta .date').innerHTML='<i class="dot"></i>标签与T0修订版 · 2026.10.23';
const strictCategoryMatch=n=>state.genre==='all'||(n.originalRecord&&String(n.category||'').split('、').includes(state.genre));
genreMatch=strictCategoryMatch;
baseSelection=function(forList=false){
 let arr=companyNodes.filter(genreMatch).filter(audienceMatch);
 if(state.group)arr=arr.filter(n=>groupMatch(n,state.group));
 if(state.query)arr=arr.filter(matches);
 if(state.scope==='all'||(forList&&state.listAll))return arr;
 const t=Number(state.scope);return t?arr.filter(n=>n.tier===t):(state.genre!=='all'||state.group)?arr:arr.filter(n=>n.tier>0&&n.tier<=2);
};
geoSelection=function(){
 let rows=DATA.nodes.filter(n=>n.originalRecord).filter(genreMatch);
 if(state.group)rows=rows.filter(n=>groupMatch(n,state.group));
 if(state.query)rows=rows.filter(n=>matches(n)||matches(byId.get(n.mapRepresentativeId||n.id)));
 const t=Number(state.scope);
 if(t)rows=rows.filter(n=>n.tier===t);
 else if(state.scope!=='all'&&!state.query&&state.genre==='all'&&!state.group)rows=rows.filter(n=>n.tier>0&&n.tier<=2);
 const merged=new Map();
 for(const n of rows){const id=n.mapRepresentativeId||n.id;if(!merged.has(id))merged.set(id,{...byId.get(id),mapMatchedIds:[]});merged.get(id).mapMatchedIds.push(n.id);}
 return [...merged.values()];
};
filteredGraph=function(){
 const available=DATA.links.filter(enabledEdge);let ids;
 if(state.focus){ids=new Set([state.focus]);for(const e of available)if(e.source===state.focus||e.target===state.focus){ids.add(e.source);ids.add(e.target);}}
 else if(state.group||state.genre!=='all'){
  // Do not pull cross-category neighbors into a peer set or replace a row with a differently tagged alias.
  ids=new Set(baseSelection(false).filter(matches).map(n=>n.id));
 }else{
  const canonical=id=>DATA.aliases[id]||id,seeds=new Set(baseSelection(false).filter(matches).map(n=>canonical(n.id)));
  ids=new Set(state.query?[...seeds]:[]);for(const e of available)if(seeds.has(e.source)||seeds.has(e.target)){ids.add(e.source);ids.add(e.target);}
 }
 return {nodes:DATA.nodes.filter(n=>ids.has(n.id)),edges:available.filter(e=>ids.has(e.source)&&ids.has(e.target))};
};
const classificationGeo=renderGeo;
renderGeo=function(){
 classificationGeo();$('#geoPane .geo-heading>p').textContent='标签与T0采用最新工作簿 · 柠檬体系在地图合并展示 · 关系图保留各主体';
 $('#geoStats .geo-stat small').textContent='个地图入口';
 $('#geoStats .geo-stat:last-child small').textContent='个标杆／头部入口';
 const matched=geoSelection().find(n=>n.id==='G007');
 if(matched){const button=$('#geoRail [data-geo-company="G007"]');if(button){const note=document.createElement('small');note.className='classification-note';note.textContent='合并柠檬微趣／柠檬曲奇；当前命中：'+matched.mapMatchedIds.map(id=>byId.get(id).name).join('、');button.querySelector('.company-info').append(note);}}
 const details=$('#geoRail details');if(details)details.innerHTML='<summary>地域、分类与合并口径</summary><p>主营品类、梯队严格采用新表。地图入口数不是工商主体数；柠檬曲奇归并至柠檬微趣入口，品类筛选仍按命中成员各自原始标签。关系图保留两条主体记录。城市不等同实际研发办公室。</p>';
};
const classificationDetail=showDetail;
showDetail=function(n){
 classificationDetail(n);const section=document.createElement('section');section.className='detail-section classification-source';
 section.innerHTML=n.originalRecord?`<h3>最新工作簿分类</h3><dl class="facts">${field('主营品类',n.category)}${field('业务形态',n.business)}${field('品类依据',n.categoryEvidence)}</dl><p class="tiny">分类采用新表；公开核查角色独立保留，不由品类或图标反推自研。</p>`:'<h3>关联辅助主体</h3><p>未列入最新公司表，不参与主营品类筛选与T0名单。</p>';
 if(n.id==='G007'||n.id==='G053')section.innerHTML+=`<h3>柠檬体系展示</h3><p>地图统一使用“柠檬微趣”入口；关系图保留两个主体。原表标签：柠檬微趣为二合、解谜、消除；柠檬曲奇为三消。此处不互相覆盖标签，也不把两个工商主体合为一条。</p><button class="relationship" data-company="${n.id==='G007'?'G053':'G007'}">查看${n.id==='G007'?'柠檬曲奇':'柠檬微趣'}主体</button>`;
 $('#detail .detail-header').after(section);
};
const classificationGraph=renderGraph;
renderGraph=function(reset=true){
 classificationGraph(reset);if(state.mode!=='graph')return;
 const g=groupByName.get(state.group);
 if(!state.focus&&(state.genre!=='all'||g?.analysisType==='categoryPeer'))$('#stageSubtitle').textContent='按新表主营品类筛选；并列不代表资本关系。图标为公司代表产品，未按当前品类换图。';
 if(!state.focus&&state.genre!=='all'&&!state.group)$('#stageTitle').textContent=state.genre+' · 原表品类对象';
 if(!state.focus&&g?.analysisType==='categoryPeer'){$('#filterNote').textContent='原表主营品类 × 自研／研运一体 × 国内研发证据';}
};
const classificationAudit=renderAudit;
renderAudit=function(){classificationAudit();const card=document.createElement('article');card.className='audit-card';card.innerHTML=`<div class="idline">2026-10-23 · 分类与T0修订</div><h3>${DATA.meta.t0SourceRecords}条T0记录 · ${DATA.meta.t0MapEntries}个T0地图入口</h3><p>${esc(DATA.meta.classificationPolicy)}</p><p>共${DATA.categories.length}个原表主营品类。二合与三消研发对标按主营品类、原表业务形态及已有研发证据交集重建。纯发行、资本背景和境外对标不会被当成国内研发公司。</p>`;$('#auditGrid').prepend(card);};
$('#genre').setAttribute('aria-label','主营品类（严格按Excel）');
$('#genre').options[0].textContent='全部主营品类';
// Keep source labels intact; SLG is outside this atlas's selectable research scope.
for(const option of [...$('#genre').options])if(option.value==='SLG')option.remove();
$('#genre').title='按原表主营品类筛选；SLG不属于本次研究主题，不提供筛选入口';
$('#methodContent').insertAdjacentHTML('afterbegin','<p>品类筛选不提供SLG选项；原表中的SLG标签仍保留在公司资料与导出中，不删除相关公司或关系。</p>');
$('#methodContent').insertAdjacentHTML('afterbegin',`<p><strong>本版T0：${DATA.meta.t0SourceRecords}条原始记录；地图合并柠檬体系后为${DATA.meta.t0MapEntries}个入口。评级采用原表结果与V3标准，不自行重算或改档。</strong></p>`);
const classificationGroupChange=$('#factionSelect').onchange;
$('#factionSelect').onchange=e=>{state.genre='all';state.scope='all';state.audience='all';state.listAll=false;$('#genre').value='all';scopeControl.value='all';classificationGroupChange(e);};
$('#csvBtn').onclick=()=>{const rows=[['ID','商号','主体全称','主营品类（新表）','品类依据（新表）','业务形态（新表）','梯队（新表）','梯队依据（新表）','公开核查角色','原表产品','公开资料产品','核查结论','限制','来源'],...sorted(baseSelection(true).filter(matches)).map(n=>[n.id,n.name,n.full,n.category,n.categoryEvidence,n.business,n.originalTier,n.tierReason,n.role,n.originalProducts,n.verifiedProducts,n.claim,n.limitations,n.url])];const cell=v=>'"'+String(v??'').replace(/^[=+@-]/,s=>"'"+s).replaceAll('"','""')+'"';download(new Blob(['\ufeff'+rows.map(r=>r.map(cell).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'}),'公司清单-最新标签与梯队.csv');};
refresh();
