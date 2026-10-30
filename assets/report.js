/* Claim-scoped reporting UI. Full source rows remain in the separately delivered archive. */
state.audience='developer';
const audienceNames={developer:'国内研发／研运',publisher:'发行与供应商',overseas:'境外对象',capital:'资本与服务',all:'全部汇报对象'};
const audienceMatch=n=>state.audience==='source'?n.originalRecord&&!n.publicEvidence:state.audience==='all'||n.scope===state.audience||(state.audience==='publisher'&&n.scope==='brand');
const field=(label,value)=>value?`<dt>${esc(label)}</dt><dd>${esc(value)}</dd>`:'';
const productRole=n=>n.scope==='publisher'?'发行／供应产品':n.scope==='capital'?'集团关联产品':n.scope==='brand'?'工作室署名产品':'代表产品';
const scopeControl=document.createElement('select');scopeControl.id='audience';scopeControl.setAttribute('aria-label','研究对象范围');scopeControl.innerHTML=Object.entries(audienceNames).map(([v,t])=>`<option value="${v}">${t}</option>`).join('');
$('#filters').insertBefore(scopeControl,$('#genre'));
scopeControl.onchange=()=>{state.audience=scopeControl.value;state.group='';state.focus=null;state.selected=null;state.listAll=true;refresh();};
$('#pendingToggle').hidden=true;
$('#peopleToggle').textContent='显示团队履历';
$('.top-meta .date').innerHTML='<i class="dot"></i>汇报选编 · 2026.10.23';
$('#boundaryText').textContent=`${DATA.meta.originalCompanies}条原始记录已归档 · 正式页${DATA.nodes.length}个研究对象、${DATA.links.length}条有来源关系 · 分层为样本评级`;
$('#auditShortcut').textContent='来源与修订说明 →';
$('#auditPane .list-title h2').textContent='来源与修订说明';
$('#auditPane .list-title p').textContent='每条结论限定到具体主体、产品版本与披露时点。';
document.querySelector('[data-mode="audit"]').textContent='证据与口径';
document.querySelector('[data-mode="graph"]').textContent='关系图谱';
$('#factionSelect').previousElementSibling.textContent='分析分组';
$('#factionSelect').options[0].textContent='重点关系总览';
$('#search').placeholder='搜索公司、品牌、产品';
$('.sidebar-top h2').textContent='汇报对象';
$('.sidebar-top .tiny').textContent='品牌、法人、发行方分开。点击展开直接关系。';
$('.legend').innerHTML='<span><i style="color:#6faea3"></i>股权／历史交易</span><span><i class="dash" style="color:#a19ac6"></i>人员履历</span><span><i style="color:#91b2d5"></i>业务／发行</span>';

baseSelection=function(forList=false){
 let arr=companyNodes.filter(genreMatch).filter(audienceMatch);
 if(state.group)return DATA.nodes.filter(n=>groupMatch(n,state.group)&&genreMatch(n));
 if(state.scope==='all'||(forList&&state.listAll))return arr;
 const t=Number(state.scope);if(t)return arr.filter(n=>n.tier===t);
 // A specific genre is useful only if its full peer set survives the default head-first view.
 if(state.genre!=='all'||state.audience!=='developer')return arr;
 return arr.filter(n=>n.tier<=2&&n.tier>0);
};
enabledEdge=e=>(e.kind!=='people'||state.people)&&e.kind!=='pending';
filteredGraph=function(){
 let ids;
 if(state.focus){ids=new Set([state.focus]);DATA.links.filter(enabledEdge).forEach(e=>{if(e.source===state.focus||e.target===state.focus){ids.add(e.source);ids.add(e.target);}});}
 else if(state.group)ids=new Set(groupByName.get(state.group)?.memberIds||[]);
 else {const seeds=baseSelection(false).filter(matches);ids=new Set(seeds.map(n=>n.id));for(const e of DATA.links.filter(enabledEdge))if(seeds.some(n=>n.id===e.source||n.id===e.target)){ids.add(e.source);ids.add(e.target);}}
 return {nodes:DATA.nodes.filter(n=>ids.has(n.id)),edges:DATA.links.filter(e=>ids.has(e.source)&&ids.has(e.target)&&enabledEdge(e))};
};
refreshStats=function(){const d=DATA.nodes.filter(n=>n.scope==='developer');$('#stats').innerHTML=`<div class="stat"><b>${d.length}</b><span>国内研运对象</span></div><div class="stat"><b>${DATA.links.length}</b><span>来源关系</span></div><div class="stat"><b>${DATA.meta.iconCount}</b><span>产品图标</span></div>`;};
refreshNav=function(){
 const q=state.navQuery.trim().toLowerCase();const arr=sorted(DATA.nodes.filter(n=>!q||[n.id,n.name,n.full,n.alias,n.products].join(' ').toLowerCase().includes(q)));
 $('#navHeading').textContent=`${q?'匹配':'汇报对象'} ${arr.length} 个`;
 $('#companyNav').innerHTML=arr.map(n=>`<button class="company-item ${state.focus===n.id?'selected':''}" data-company="${esc(n.id)}" aria-label="查看 ${esc(n.name)} 的关联图谱">${iconHTML(n)}<span class="company-nav-info"><strong>${esc(n.name)}</strong><small>${esc(n.full)}</small><em>${esc(n.role)}</em></span><span class="rank">${n.tier?'T'+(n.tier-1):'关联'}</span></button>`).join('')||'<p class="tiny">本次汇报选编没有该对象。原始全量名单保留在交付底稿。</p>';
};
refreshFactionControls=function(){
 $('#factionSelect').value=state.group;$('#factionBack').textContent=state.focus?'返回关系总览':'关系总览';const g=groupByName.get(state.group),notice=$('#factionEvidence');notice.hidden=state.mode!=='graph'||!!state.focus||!g;
 if(g)notice.innerHTML=`<summary>${esc(g.name)} · ${g.memberIds.length} 个对象</summary><p>${esc(g.description)}</p><p>${esc(g.members)}</p><p>分组用于分析；只有有来源的关系才连线。</p>`;
};
showDetail=function(n){
 const rels=DATA.links.filter(e=>e.source===n.id||e.target===n.id);
 $('#detail').innerHTML=`<div class="detail-header"><button class="close" data-close aria-label="关闭详情">×</button><div class="idline">${esc(n.id)} · ${esc(n.role)}</div><h2>${esc(n.name)}</h2><div class="full">${esc(n.full)}</div><div class="badges"><span class="badge ${tierClass(n)}">${esc(tierName(n))}</span><span class="badge">${esc(n.category)}</span></div><div class="detail-actions"><button class="btn primary" data-focus="${esc(n.id)}">展开 ${rels.length} 条关系</button><button class="btn" data-close>关闭卡片</button></div></div><div class="detail-section"><h3>${productRole(n)}</h3><div class="product">${iconHTML(n)}<div><strong>${esc(n.products||'仅作背景主体')}</strong><span>${n.icon?'图示：'+esc(n.icon.title):'公司简称标识'}</span></div></div>${n.icon?`<p class="tiny">图标用于辨识关联产品，不代表该公司的全部研发归属。</p>${linksHTML(n.icon.store)}`:''}<div class="detail-section"><h3>可用于汇报的事实</h3><p>${esc(n.claim)}</p><dl class="facts">${field('对象类型',n.role)}${field('研究地域',n.city)}${field('产品方向',n.category)}${field('核查批次',n.reviewDate)}${field('底稿记录',n.sourceIds?.join('、'))}</dl></div>${n.tier?`<div class="detail-section"><h3>研究优先级</h3><p>${esc(n.tierReason)}</p><p class="tiny">国内稳榜与出海下载／收入分轨评级；不将T0等同全球收入第一梯队，不用来源不一致的季度合计推算年收入。</p></div>`:''}<div class="detail-section"><h3>关系与证据 · ${rels.length}</h3>${rels.map(e=>`<button class="relationship" data-edge="${esc(e.id)}">${esc(byId.get(e.source===n.id?e.target:e.source).name)} · ${esc(e.type)}<small>${esc(e.time)}</small></button>`).join('')||'<p>本次只采用公司与产品事实，不发布无材料支撑的关系。没有连线不代表不存在关联。</p>'}</div><div class="detail-section"><h3>公开来源</h3>${linksHTML(n.url)}</div>`;
 $('#detail').classList.add('open');$('#detail').scrollTop=0;
};
showEdge=function(e){if(!e)return;const a=byId.get(e.source),b=byId.get(e.target);$('#detail').innerHTML=`<div class="detail-header"><button class="close" data-close aria-label="关闭关系详情">×</button><div class="idline">${esc(e.id)} · ${e.kind==='capital'?'股权／交易':e.kind==='people'?'职业履历':'业务关联'}</div><h2>${esc(e.type)}</h2><div class="full">${esc(a.name)} ${e.kind==='capital'?'→':'—'} ${esc(b.name)}</div><div class="badges"><span class="badge">${esc(e.time)}</span></div></div><div class="detail-section"><h3>证据支持的结论</h3><p>${esc(e.info)}</p><dl class="facts">${field('起点主体',a.full)}${field('终点主体',b.full)}${field('来源批次',e.reviewDate)}${field('原记录',e.originalIds?.join('、')||e.previousId||'本次补充')}</dl><p class="tiny">历史交易、集团合并口径和人员履历分别解释；不据此推导核查日所有中间层法律持股。</p></div><div class="detail-section"><h3>证据来源</h3>${linksHTML(e.url)}</div><div class="detail-section"><button class="relationship" data-company="${a.id}">查看 ${esc(a.name)}</button><button class="relationship" data-company="${b.id}">查看 ${esc(b.name)}</button></div>`;$('#detail').classList.add('open');$('#detail').scrollTop=0;};
renderList=function(){const arr=sorted(baseSelection(true).filter(matches));$('#listSummary').textContent=`当前 ${arr.length} 个 · 全部汇报对象 ${DATA.nodes.length} 个 · 原始 ${DATA.meta.originalCompanies} 条记录另存底稿`;
 $('#tableBody').innerHTML=arr.map(n=>`<tr tabindex="0" data-company="${esc(n.id)}" aria-label="查看 ${esc(n.name)}"><td><div class="title-cell">${iconHTML(n)}<div><strong>${esc(n.name)}</strong><p>${esc(n.full)}</p></div></div></td><td><span class="badge ${tierClass(n)}">${esc(tierName(n))}</span></td><td class="optional"><div class="line-clamp">${esc(n.products||n.claim)}</div></td><td><span class="tiny">${esc(n.role)}</span></td></tr>`).join('')||'<tr><td colspan="4" class="geo-empty">没有符合筛选的汇报对象。</td></tr>';};
$('.data-table thead').innerHTML='<tr><th>商号／主体</th><th>样本梯队</th><th class="optional">代表产品／业务</th><th>对象类型</th></tr>';
renderAudit=function(){
 const used=new Set(DATA.links.flatMap(e=>e.originalIds||[]));
 $('#auditGrid').innerHTML=`<article class="audit-card"><div class="idline">REPORT SCOPE</div><h3>${DATA.meta.domesticResearchObjects} 个国内研运对象</h3><p>另有发行、境外工作室、资本和合作方节点。合计 ${DATA.nodes.length} 个研究对象、${DATA.links.length} 条有来源关系、${DATA.meta.iconCount} 个产品图标。</p><div class="verdict">汇报事实选编，不是全量工商尽调</div><p>${esc(DATA.meta.notice)}</p><p>原始 ${DATA.meta.originalCompanies} 条公司记录、${DATA.meta.originalRelations} 条关系、${DATA.meta.originalGroups} 个分组均保存在交付的全量合并底稿。${used.size} 条原关系经公开来源重写采用；另合并此前和本次新增的公开证据。</p></article><article class="audit-card"><div class="idline">READING THE GRAPH</div><h3>先分清研发、发行与资本</h3><p>实线箭头表示注明时点的股权或交易；紫色虚线表示人员履历；蓝线表示品牌、运营或发行合作。分组邻近不等于同一控制人。</p><p>地图只展示国内研发／研运研究对象。城市是研究地域示意，不把注册地当作全部团队办公地，也不把境外公司算作国内研发。</p><h4>T0—T4 是样本评级</h4><p>保留最新表逐行档位。国内稳榜与出海信号分轨评价；T0写为样本标杆，不能直接当作全球公司规模排序。原表季度窗口冲突的绝对数与年化推算不用于本次汇报。</p><a class="source-link" href="./data/atlas.json" download>下载汇报数据与证据 ↗</a></article>`;
 $('#newRelations').innerHTML='<h3>已完成的修订处理</h3>'+DATA.corrections.map(([kind,id,text])=>`<article class="correction"><span>${esc(kind)}</span><div><strong>${esc(id)}</strong><p>${esc(text)}</p></div></article>`).join('')+`<h3>关系证据索引 · ${DATA.links.length} 条</h3>`+DATA.links.map(e=>`<button class="relationship" data-edge="${e.id}">${esc(byId.get(e.source).name)} — ${esc(byId.get(e.target).name)}<small>${esc(e.type)} · ${esc(e.time)}</small></button>`).join('');
};
const reportRenderGraph=renderGraph;renderGraph=function(reset=true){reportRenderGraph(reset);if(state.mode!=='graph')return;$('#stageTitle').textContent=state.focus?byId.get(state.focus).name+' · 直接关系':state.group||'重点公司与有来源的直接关系';$('#stageSubtitle').textContent=state.focus?'点击连线查看结论、主体和披露时点':state.group?'分析分组不等于资本派系；只展示有来源关系':'头部优先 · 关联主体按需要展开 · 不绘制猜测关系';$('#viewCount').textContent=`${state.visible.length} 个对象 · ${state.edges.length} 条关系`;$('#emptyState h3').textContent='当前条件没有汇报对象';$('#emptyText').textContent='请选择其他梯队、品类或分析分组。';};
geoSelection=function(){let arr=DATA.nodes.filter(n=>n.scope==='developer').filter(genreMatch);if(state.query)return arr.filter(matches);if(state.group)return arr.filter(n=>groupMatch(n,state.group));if(state.scope==='all'||state.genre!=='all')return arr;const t=Number(state.scope);return t?arr.filter(n=>n.tier===t):arr.filter(n=>n.tier>0&&n.tier<=2);};
const reportGeo=renderGeo;renderGeo=function(){reportGeo();$('#geoPane .geo-heading h2').textContent='国内研发与研运，按地域看重点';$('#geoPane .geo-heading>p').textContent='三消、二合与轻度休闲分开筛选。选择城市，展开公司、产品和证据。';$('#geoStats .geo-stat small').textContent='个国内研运对象';$('#geoRail').querySelectorAll('details').forEach(el=>el.remove());$('#geoRail .geo-explain').textContent='地域只反映本次收录的研究对象，不是全国公司数量或市场份额。';};
const reportSetMode=setMode;setMode=function(mode){reportSetMode(mode);scopeControl.hidden=mode==='geo';$('#peopleToggle').hidden=mode!=='graph';$('#filterNote').textContent=mode==='geo'?'城市为研究地域示意':'公司评级与关系来源分别展示';};
$('#methodContent').innerHTML='<p>T0—T4用于区分公司研究优先级，不等于统一财务规模排名。</p><div class="method-row"><b>国内轨</b><span>按在榜产品数、登顶产品数、总在榜天数和单产品持续性双门槛判断。</span></div><div class="method-row"><b>出海轨</b><span>休闲与超休闲样本按统计口径取高。10Q标注与起止季度存在差异，因此仅展示累计样本，不换算年收入。</span></div><div class="method-row"><b>展示规则</b><span>T0样本标杆、T1头部、T2中坚、T3长尾、T4观察。上市身份对综合评级的调整不代表休闲研发能力达到同一水平。</span></div><p>具体门槛与数值可在分级口径和公司资料中查阅。每家公司的具体事实及关系以本页可点击的来源说明为准。</p>';
const originalReset=reset;reset=function(){state.audience='developer';scopeControl.value='developer';originalReset();};
const fullListBtn=document.querySelector('.atlas-all');fullListBtn.textContent='全部梯队';
refreshStats();setMode('geo');refresh();
