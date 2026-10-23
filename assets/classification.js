/* Workbook classifications and map-only company grouping. No product-based label inference. */
document.title='国内休闲游戏公司图谱 · 标签与T0修订版';
$('.top-meta .date').innerHTML='<i class="dot"></i>标签与T0修订版 · 2026.10.23';
state.peerPage=0;
const strictCategoryMatch=n=>state.genre==='all'||(n.originalRecord&&String(n.category||'').split('、').includes(state.genre));
genreMatch=strictCategoryMatch;
baseSelection=function(forList=false){
 let arr=companyNodes.filter(genreMatch).filter(audienceMatch);
 if(state.group)arr=arr.filter(n=>groupMatch(n,state.group));
 if(state.query)arr=arr.filter(matches);
 if(state.scope==='all'||(forList&&state.listAll))return arr;
 const t=Number(state.scope);return t?arr.filter(n=>n.tier===t):arr.filter(n=>n.tier>0&&n.tier<=2);
};
geoSelection=function(){
 let rows=DATA.nodes.filter(n=>n.originalRecord).filter(genreMatch);
 if(groupByName.get(state.group)?.analysisType==='categoryPeer')rows=rows.filter(audienceMatch);
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
 let nodes=DATA.nodes.filter(n=>ids.has(n.id));
 if(!state.focus&&groupByName.get(state.group)?.analysisType==='categoryPeer'){
  state.peerTotal=nodes.length;state.peerPage=Math.min(Math.max(0,state.peerPage||0),Math.max(0,Math.ceil(nodes.length/40)-1));
  nodes=sorted(nodes).slice(state.peerPage*40,(state.peerPage+1)*40);ids=new Set(nodes.map(n=>n.id));
 }
 return {nodes,edges:available.filter(e=>ids.has(e.source)&&ids.has(e.target))};
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
 const peer=groupByName.get(state.group);if(peer?.analysisType==='categoryPeer')section.innerHTML+=`<h3>本组纳入依据</h3><p>原表命中：${esc(String(n.category||'').split('、').filter(c=>peer.selectionCategories.includes(c)).join('、'))}。核查角色：${esc(n.role)}。原表业务形态与核查角色分别保留；入组不等于该品类的每款产品均已确认自研。</p>`;
 $('#detail .detail-header').after(section);
};
const classificationGraph=renderGraph;
const isCategoryPeer=()=>!state.focus&&groupByName.get(state.group)?.analysisType==='categoryPeer';
const classificationLayout=calculateLayout;
calculateLayout=function(nodes,w,h){
 state.tierBands=[];
 if(!isCategoryPeer())return classificationLayout(nodes,w,h);
 state.componentBoxes=[];
 const pos=new Map();if(!nodes.length)return pos;
 const width=Math.max(240,w-100),cols=Math.max(1,Math.floor((width-28)/120));
 const bands=[1,2,3,4,5,0].map(t=>({tier:t,nodes:sorted(nodes.filter(n=>(n.tier||0)===t))})).filter(b=>b.nodes.length);
 const heights=bands.map(b=>40+Math.ceil(b.nodes.length/cols)*104),total=heights.reduce((a,b)=>a+b,0)+(bands.length-1)*12;
 const k=Math.min(1,Math.max(160,h-150)/total),x=24,top=112;let cursor=0;
 bands.forEach((b,j)=>{const y=top+cursor*k,bh=heights[j]*k;
  state.tierBands.push({x,y,w:width,h:bh,tier:b.tier,count:b.nodes.length});
  b.nodes.forEach((n,i)=>{const column=i%cols,row=Math.floor(i/cols),rowCount=Math.min(cols,b.nodes.length-row*cols),cell=Math.min(150,(width-28)/rowCount);
   pos.set(n.id,{id:n.id,x:x+width/2+(column-(rowCount-1)/2)*cell,y:y+(76+row*104)*k,r:({1:28,2:26,3:24,4:22,5:21}[n.tier]||21)*k});
  });cursor+=heights[j]+12;
 });return pos;
};
renderGraph=function(reset=true){
 document.body.classList.toggle('peer-mode',state.mode==='graph'&&isCategoryPeer());
 if(reset&&state.mode==='graph')$('#stage').scrollTop=0;
 if(state.mode==='graph'){
  let height=$('#stage').clientHeight;
  if(isCategoryPeer()){const nodes=filteredGraph().nodes,cols=Math.max(1,Math.floor((Math.max(240,$('#stage').clientWidth-100)-28)/120)),counts=[1,2,3,4,5,0].map(t=>nodes.filter(n=>(n.tier||0)===t).length).filter(Boolean);height=Math.max(height,150+counts.reduce((sum,n)=>sum+40+Math.ceil(n/cols)*104,0)+Math.max(0,counts.length-1)*12);}
  $('#network').style.height=isCategoryPeer()?height+'px':'100%';
 }
 classificationGraph(reset);if(state.mode!=='graph')return;
 const g=groupByName.get(state.group);
 $('#graphTier').value=state.scope;
 if(g?.analysisType==='categoryPeer'){
  $('#peerRole').value=state.audience==='developer'?'developer':'all';
  $('#peerCategory').innerHTML='<option value="all">全部组内品类</option>'+g.selectionCategories.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');$('#peerCategory').value=state.genre;
 }
 if(!state.focus&&(state.genre!=='all'||g?.analysisType==='categoryPeer'))$('#stageSubtitle').textContent='按新表主营品类筛选；并列不代表资本关系。图标为公司代表产品，未按当前品类换图。';
 if(!state.focus&&state.genre!=='all'&&!state.group)$('#stageTitle').textContent=state.genre+' · 原表品类对象';
 if(isCategoryPeer()){
  const names={1:'T0 · 标杆',2:'T1 · 头部',3:'T2 · 中坚',4:'T3 · 长尾',5:'T4 · 观察',0:'未分级'};
  for(const b of state.tierBands||[]){$('#clusterLayer').append(svgEl('rect',{x:b.x,y:b.y,width:b.w,height:b.h,rx:12,fill:'#fff',stroke:colors[b.tier]||'#c8d2df','stroke-opacity':.4}));$('#clusterLayer').append(svgEl('text',{x:b.x+16,y:b.y+23,class:'tier-band-title',fill:'#405b70','font-size':13,'font-weight':600},names[b.tier]+' · '+b.count+' 家'));}
  const summary=[1,2,3,4,5].map(t=>{const count=state.visible.filter(n=>n.tier===t).length;return count?'T'+(t-1)+'：'+count+'家':'';}).filter(Boolean).join('　');
  const allRoles=state.audience!=='developer',total=state.peerTotal||0,pages=Math.max(1,Math.ceil(total/40));
  $('#stageTitle').textContent=g.name.split(' · ')[0]+(allRoles?' · 原表品类公司':' · 研发／研运对标')+(state.genre==='all'?'':' · '+state.genre);
  $('#stageSubtitle').textContent=(pages>1?'本页 ':'')+summary+'。'+(allRoles?'含发行、运营、境外等其他角色，不等同研发商名单。':'品类按原表；公司研发资料不等于每个品类均已确认自研。')+' 图标为公司代表产品；向下滚动查看其余梯队。';
  $('#viewCount').textContent='显示 '+state.visible.length+' / 筛选 '+total+' 条 · '+state.edges.length+' 条本页关系';
  const summaryEl=$('#factionEvidence summary');if(summaryEl)summaryEl.textContent=g.name.split(' · ')[0]+' · 原表品类候选 '+g.memberIds.length+' 条 · 国内研发／研运资料 '+g.researchMemberIds.length+' 条';
  $('#filterNote').textContent='原表标签决定品类；角色单独筛选';
  $('#peerPageInfo').textContent=(state.peerPage+1)+' / '+pages+' 页';$('#peerPrev').disabled=state.peerPage===0;$('#peerNext').disabled=state.peerPage+1>=pages;$('#peerPager').hidden=pages<=1;
  if(allRoles)for(const el of $$('#nodeLayer .node')){const n=byId.get(el.dataset.node),p=state.positions.get(n.id);el.append(svgEl('text',{y:p.r+32,'text-anchor':'middle',fill:'#647a8c','font-size':10,class:'peer-role-note'},({developer:'研发／研运资料',overseas:'境外主体',capital:'资本／平台关联',source:'原表资料'}[n.scope]||'发行／运营等资料')));}
  $('#emptyState h3').textContent='当前梯队或搜索条件下没有公司';$('#emptyText').textContent='请切换“全部梯队”或清空搜索；不会用其他品类公司补位。';
 }
};
const classificationAudit=renderAudit;
renderAudit=function(){classificationAudit();const card=document.createElement('article');card.className='audit-card';card.innerHTML=`<div class="idline">2026-10-23 · 分类与T0修订</div><h3>${DATA.meta.t0SourceRecords}条T0记录 · ${DATA.meta.t0MapEntries}个T0地图入口</h3><p>${esc(DATA.meta.classificationPolicy)}</p><p>共${DATA.categories.length}个原表主营品类。${esc(DATA.meta.peerSelectionPolicy)} 公司层研发资料不等于所有主营品类均已独立确认自研。</p>`;$('#auditGrid').prepend(card);};
$('#genre').setAttribute('aria-label','主营品类（严格按Excel）');
$('#genre').options[0].textContent='全部主营品类';
const graphTier=document.createElement('select');graphTier.id='graphTier';graphTier.setAttribute('aria-label','图谱研究梯队');graphTier.innerHTML='<option value="all">全部梯队</option><option value="key">头部优先（T0/T1）</option><option value="1">T0 标杆</option><option value="2">T1 头部</option><option value="3">T2 中坚</option><option value="4">T3 长尾</option><option value="5">T4 观察</option>';
$('#filters').insertBefore(graphTier,$('#peopleToggle'));
const peerControls=document.createElement('div');peerControls.className='peer-controls';peerControls.innerHTML='<select id="peerRole" aria-label="品类纳入范围"><option value="developer">国内研发／研运资料</option><option value="all">原表品类全量（含其他角色）</option></select><select id="peerCategory" aria-label="组内主营品类"></select><span id="peerPager" hidden><button id="peerPrev" aria-label="上一页品类公司">←</button><span id="peerPageInfo"></span><button id="peerNext" aria-label="下一页品类公司">→</button></span>';
$('#filters').insertBefore(peerControls,graphTier);
$('#peerRole').onchange=e=>{state.audience=e.target.value;scopeControl.value=state.audience;state.peerPage=0;state.selected=null;closeDetail();refresh();};
$('#peerCategory').onchange=e=>{state.genre=e.target.value;$('#genre').value=state.genre;state.peerPage=0;state.selected=null;closeDetail();refresh();};
$('#peerPrev').onclick=()=>{state.peerPage--;state.selected=null;closeDetail();refresh();};$('#peerNext').onclick=()=>{state.peerPage++;state.selected=null;closeDetail();refresh();};
graphTier.onchange=()=>{state.scope=graphTier.value;state.peerPage=0;state.listAll=false;state.focus=null;state.selected=null;closeDetail();refresh();};
$('#genre').onchange=e=>{state.genre=e.target.value;state.group='';state.scope='all';state.listAll=false;state.focus=null;state.selected=null;closeDetail();refresh();};
// Keep source labels intact; SLG is outside this atlas's selectable research scope.
for(const option of [...$('#genre').options])if(option.value==='SLG')option.remove();
$('#genre').title='按原表主营品类筛选；SLG不属于本次研究主题，不提供筛选入口';
$('#methodContent').insertAdjacentHTML('afterbegin','<p>品类筛选不提供SLG选项；原表中的SLG标签仍保留在公司资料与导出中，不删除相关公司或关系。</p>');
$('#methodContent').insertAdjacentHTML('afterbegin',`<p><strong>本版T0：${DATA.meta.t0SourceRecords}条原始记录；地图合并柠檬体系后为${DATA.meta.t0MapEntries}个入口。评级采用原表结果与V3标准，不自行重算或改档。</strong></p>`);
const classificationGroupChange=$('#factionSelect').onchange;
$('#factionSelect').onchange=e=>{state.genre='all';state.scope='all';state.peerPage=0;state.audience=groupByName.get(e.target.value)?.defaultAudience||'all';state.listAll=false;$('#genre').value='all';scopeControl.value=state.audience;classificationGroupChange(e);};
// Search can add/remove nodes: recalculate positions rather than reusing an old subset.
const classificationSearch=$('#search').oninput,classificationClear=$('#clearSearch').onclick;
$('#search').oninput=e=>{state.peerPage=0;classificationSearch(e);if(state.mode==='graph')renderGraph();};
$('#clearSearch').onclick=e=>{state.peerPage=0;classificationClear(e);if(state.mode==='graph')renderGraph();};
const classificationListTab=$('[data-mode="list"]'),classificationListClick=classificationListTab.onclick;
classificationListTab.onclick=()=>{const keepFilter=!!state.group||state.genre!=='all'||Number(state.scope)>0;classificationListClick();if(keepFilter){state.listAll=false;refresh();}};
$('#csvBtn').onclick=()=>{const rows=[['ID','商号','主体全称','主营品类（新表）','品类依据（新表）','业务形态（新表）','梯队（新表）','梯队依据（新表）','公开核查角色','原表产品','公开资料产品','核查结论','限制','来源'],...sorted(baseSelection(true).filter(matches)).map(n=>[n.id,n.name,n.full,n.category,n.categoryEvidence,n.business,n.originalTier,n.tierReason,n.role,n.originalProducts,n.verifiedProducts,n.claim,n.limitations,n.url])];const cell=v=>'"'+String(v??'').replace(/^[=+@-]/,s=>"'"+s).replaceAll('"','""')+'"';download(new Blob(['\ufeff'+rows.map(r=>r.map(cell).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'}),'公司清单-最新标签与梯队.csv');};
refresh();
