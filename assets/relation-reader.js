/* G6-backed company cards with explicit, source-preserving relationship labels. */
(()=>{
 const C=window.AtlasRelations,defaultGroup='腾讯 · 历史投资与团队';
 Object.assign(state,{readerKind:'all',readerExpanded:false,readerFocus:'',readerSearch:'',readerNetwork:false,peerView:'cards',readerComponent:'',readerAllLinks:false});
 const panel=document.createElement('section');panel.id='relationReader';panel.hidden=true;
 panel.innerHTML=`<aside class="rr-directory"><div class="rr-directory-title">公司关系目录<small>选一组，逐层看关系</small></div><input id="rrSearch" aria-label="搜索关系组" placeholder="搜索公司或关系组"><div id="rrGroups"></div></aside><div class="rr-main" id="rrMain"><header class="rr-heading"><div class="rr-eyebrow">COMPANY RELATIONSHIPS</div><h2 id="rrTitle"></h2><p id="rrSummary"></p></header><div class="rr-controls"><div class="rr-kinds" role="group" aria-label="关系类型">${[['all','全部关系'],['capital','投资与交易'],['business','业务关联'],['people','人员履历']].map(([k,v])=>`<button data-rr-kind="${k}">${v}</button>`).join('')}</div><div class="rr-actions"><button id="rrExpand">展开整组关系</button><details class="rr-options"><summary>更多选项</summary><label><input id="rrMcp" type="checkbox">包含原始 MCP 关系</label><button id="rrOldGraph">完整网络视图</button></details></div></div><div id="rrOverview" hidden></div><div id="rrReadingBar" hidden></div><div class="rr-caption"><span id="rrScope"></span><span>有箭头：按原记录方向 · 虚线：原表来源</span></div><div class="rr-scroll" id="rrScroll"><div id="rrGraph" role="img" aria-label="公司关系卡片图"></div></div><div class="rr-mobile" id="rrMobile"></div><div id="rrEmpty" class="rr-empty" hidden></div><section id="rrBranches" hidden></section><details class="rr-rows" id="rrRows"><summary id="rrRowsTitle">逐条关系与来源</summary><div id="rrEdges"></div></details><footer class="rr-footer">点击公司看资料，点击关系看依据。交易按标注时点解释。</footer></div>`;
 $('#stage').before(panel);
 let graph=null,signature='',serial=0,scheduled=0,graphReady=false,renderTask=Promise.resolve(),resolveRender=null;
 const eligible=()=>state.mode==='graph'&&!state.routeActive&&!state.readerNetwork;
 const income=n=>AtlasResearch.revenue(n,window.ATLAS_REVENUE);
 const model=()=>C.select(DATA,{group:state.group||defaultGroup,focus:state.focus,readerFocus:state.readerFocus,kind:state.readerKind,expanded:state.readerExpanded,pending:state.pending,people:true,...(isCategoryPeer()?{seedIds:window.AtlasPeerReader.selection().map(n=>n.id)}:{match:n=>AtlasResearch.matches(n,state,window.ATLAS_REVENUE)})});
 const groupEdges=g=>C.select(DATA,{group:g.name,pending:g.companyFamily?true:state.pending,expanded:true}).edges;
 const products=n=>String(n.verifiedProducts||n.originalProducts||n.products||'').split(/[；;、]/).filter(Boolean).slice(0,2).join(' · ');
 function directory(){
  const research=isCategoryPeer()&&state.peerView!=='relations'&&!state.routeActive;
  const query=(state.readerSearch||state.query).trim().toLowerCase();
  const groups=DATA.groups.filter(g=>[g.name,...g.memberIds.map(id=>byId.get(id)?.name||'')].join(' ').toLowerCase().includes(query));
  const section=(name,rows)=>rows.length?`<h3>${name}</h3>`+rows.map(g=>`<button class="rr-group ${!state.focus&&(state.group||defaultGroup)===g.name?'active':''}" data-rr-group="${esc(g.name)}"><strong>${esc((g.displayName||g.name).split(' · ')[0])}</strong><span>${esc(g.companyFamily?(g.groupLabel||'投资 · 团队 · 业务'):g.name.split(' · ')[1]||'公司关系')}</span><small>${g.analysisType==='categoryPeer'?(g.sourceCategory?'原表品类':'组合品类'):groupEdges(g).length+' 条关系'}</small></button>`).join(''):'';
  const families=groups.filter(g=>g.companyFamily),primary=groups.filter(g=>!g.raw&&!g.analysisType&&!g.companyFamily),peers=groups.filter(g=>g.analysisType==='categoryPeer'),raw=groups.filter(g=>g.raw&&!g.companyFamily&&!g.supersededBy);
  const companies=query?DATA.nodes.filter(n=>(!research||AtlasGrades.tier(n)!==null)&&[n.name,n.full,n.id,n.alias,n.originalProducts,n.verifiedProducts].join(' ').toLowerCase().includes(query)):[];
  const results=companies.length?'<h3>匹配公司 · '+companies.length+'</h3>'+companies.slice(0,12).map(n=>`<button class="rr-search-company" data-company="${esc(n.id)}"><strong>${esc(n.name)}</strong><small>${esc(products(n)||n.full)}</small></button>`).join(''):'';
  const all=[...families,...primary],pinned=['指色系 · 投资与关联团队','腾讯 · 历史投资与团队','豪腾 · 产品与创业团队'];
  const featured=pinned.map(name=>all.find(g=>g.name===name)).filter(Boolean),current=all.find(g=>g.name===state.group);
  if(current&&!featured.includes(current))featured.push(current);
  const more=all.filter(g=>!featured.includes(g)),open=$('#rrMoreGroups')?.open;
  const sourcePeers=peers.filter(g=>g.sourceCategory).sort((a,b)=>a.categoryOrder-b.categoryOrder),shortcuts=peers.filter(g=>!g.sourceCategory);
  const categoryRows=sourcePeers.map(g=>{const count=AtlasGrades.universe({group:g.name,genre:'all',query:''}).length;return `<button class="rr-group rr-source-category ${state.group===g.name?'active':''}" data-rr-group="${esc(g.name)}" title="${AtlasGrades.labels[state.gradeDirection]}分级 · 当前公司范围 ${count} 家"><strong>${esc(g.selectionCategories[0])}</strong><small>${count} 家</small></button>`;}).join('');
  $('#rrGroups').innerHTML=research?(query?results:'')+(sourcePeers.length?'<h3>原表主营品类</h3><div class="rr-category-grid">'+categoryRows+'</div>':'')+section('快捷汇总',shortcuts)+(query&&!results&&!peers.length?'<p class="rr-no-results">没有匹配结果。</p>':'')+'<button id="allCompanies">全部公司 →</button>':
   query?(results+section('相关公司系',all)+section('原表分组',raw)||'<p class="rr-no-results">没有匹配结果，试试公司简称或产品名。</p>'):
   section('公司系',featured)+`<details id="rrMoreGroups" ${open?'open':''}><summary>查看全部公司系</summary>${section('公司系与关联团队',more)}${section('其他原表分组',raw)}</details>`;
  $('#rrSearch').value=state.readerSearch;
 }
 const label=e=>e.type.replace(/持股[\d.]+%（公开工商平台记录）/g,'投资／持股').replace(/（原始MCP记录）/g,'').replace('共同任职／自然人关联','共同任职').replace('同法定代表人线索','同法人记录')+(/^\d{4}(?:-\d{2})?(?:-\d{2})?$/.test(e.time||'')&&!e.type.includes(e.time.slice(0,4))?' · '+e.time:'')+(e.evidenceLayer==='public'?'':' · 原表');
 const colors={capital:'#3a7e75',business:'#477fb0',people:'#8a68a3',pending:'#9b8050'};
 function companyCard(n,focus){const r=income(n);return `<button class="rr-company ${focus?'is-focus':''}" data-company="${esc(n.id)}" aria-label="查看 ${esc(n.name)} 的公司资料"><span class="rr-company-top"><strong>${esc(n.name)}</strong><em>${n.tier?'T'+(n.tier-1):'关联主体'}</em></span><span class="rr-company-product">${iconHTML(n)}<span>${esc(products(n)||n.role||'关系主体')}</span></span><span class="rr-company-bottom"><span class="revenue-${r.key}">${esc(r.label)}</span><span>${focus?'当前聚焦':'查看资料 ›'}</span></span></button>`;}
 function edgeRows(m){return m.edges.map(e=>`<button class="rr-edge-row" data-edge="${esc(e.id)}"><span>${esc(byId.get(e.source).name)}</span><strong style="color:${colors[C.kind(e)]||colors.pending}">${e.directed?'→':'—'} ${esc(label(e))} ${e.directed?'→':'—'}</strong><span>${esc(byId.get(e.target).name)}</span><small>${esc(e.time||'原表资料')} · 查看依据 ↗</small></button>`).join('');}
 function mobile(m){
  const depth=new Map([[m.focus,0]]),queue=[m.focus];for(let i=0;i<queue.length;i++)for(const e of m.edges){const next=e.source===queue[i]?e.target:e.target===queue[i]?e.source:null;if(next&&!depth.has(next)){depth.set(next,depth.get(queue[i])+1);queue.push(next);}}
  const ordered=[...m.nodes].sort((a,b)=>(depth.get(a.id)??99)-(depth.get(b.id)??99)||(a.tier||9)-(b.tier||9)||a.name.localeCompare(b.name,'zh'));
  return ordered.map(n=>{
  const own=m.edges.filter(e=>e.source===n.id),incoming=m.edges.filter(e=>e.target===n.id);
  return `<article class="rr-mobile-company">${companyCard(n,n.id===m.focus)}${own.length?`<details><summary>${own.length} 条发出／关联记录</summary>${own.map(e=>`<button class="rr-mobile-edge" data-edge="${esc(e.id)}"><b>${e.directed?'→':'↔'} ${esc(byId.get(e.target).name)}</b><span>${esc(label(e))}</span></button>`).join('')}</details>`:''}${incoming.length?`<small class="rr-mobile-incoming">${incoming.length} 条来自其他主体的记录，见来源公司</small>`:''}</article>`;
 }).join('');}
 function presentation(m){
  const p=AtlasExecutive.plan(m),overview=$('#rrOverview'),bar=$('#rrReadingBar'),branches=$('#rrBranches');
  overview.hidden=!p.overview;bar.hidden=p.overview||!m.edges.length;
  $('#rrScroll').hidden=p.overview;$('#rrMobile').hidden=p.overview;$('#rrRows').hidden=p.overview;
  overview.innerHTML=p.overview?`<p class="rr-overview-intro">${p.groups.length} 组已收录的关联网络 · 点击一组展开；同品类不代表相互关联。</p><div class="rr-component-grid">${p.groups.map(c=>`<button class="rr-component" data-rr-component="${esc(c.id)}"><span class="rr-component-heading">${iconHTML(c.lead)}<strong>${esc(c.lead.name)}等</strong><span>展开 →</span></span><span class="rr-component-names">${c.nodes.filter(n=>n.id!==c.lead.id).slice(0,4).map(n=>esc(n.name)).join(' · ')}${c.nodes.length>5?' …':''}</span><span class="rr-component-count">${c.nodes.length} 个主体 · ${c.edges.length} 条关系</span></button>`).join('')}</div>`:'';
  bar.innerHTML=`${p.component?'<button class="btn" data-rr-component="">← 返回本品类全部关系组</button>':''}<span class="rr-desktop-reading">${p.backbone?'投资与交易主线':'已收录关系'} · ${p.graph.nodes.length} 个主体 / ${p.graph.edges.length} 条${p.other.length?'；另有 '+p.other.length+' 条人员／业务记录':''}</span><span class="rr-mobile-reading">按公司逐条阅读 · ${p.scope.nodes.length} 个主体 / ${p.scope.edges.length} 条关系</span>${p.scope.edges.some(e=>AtlasRelations.kind(e)==='capital')&&p.scope.edges.some(e=>AtlasRelations.kind(e)!=='capital')?`<button class="btn" id="rrAllLinks">${state.readerAllLinks?'收起为投资主线':'所有关系叠加显示'}</button>`:''}`;
  branches.hidden=p.overview||!p.other.length;
  branches.innerHTML=p.other.length?`<h3>其他关联 · ${p.other.length} 条</h3><p>以下单独列出，不并入投资层级。</p>`+['business','people','pending'].map(kind=>{const edges=p.other.filter(e=>AtlasRelations.kind(e)===kind);return edges.length?`<details><summary>${{business:'业务与产品关联',people:'人员与团队履历',pending:'原表其他关系'}[kind]} · ${edges.length} 条</summary>${edgeRows({...m,edges})}</details>`:'';}).join(''):'';
  $('#rrMobile').innerHTML=mobile(p.scope);
  $('#rrEdges').innerHTML=edgeRows(p.scope);$('#rrRowsTitle').textContent=`逐条阅读与查证 · ${p.scope.edges.length} 条`;
  return p;
 }
 function sync(){
  const on=eligible(),peer=on&&isCategoryPeer();panel.hidden=!on;document.body.classList.toggle('relation-reader-mode',on);panel.classList.toggle('rr-peer-mode',peer);panel.classList.toggle('rr-peer-cards',peer&&state.peerView!=='relations');
  if($('#rrPeerBoard'))$('#rrPeerBoard').hidden=!peer;
  if(!on)return null;
  if(peer){directory();window.AtlasPeerReader?.sync();if(state.peerView!=='relations')return null;}
  $('#rrMain .rr-eyebrow').textContent='COMPANY RELATIONSHIPS';
  const m=model();directory();const root=byId.get(m.focus);
  $('#rrTitle').textContent=peer?m.group.name.split(' · ')[0]+' · 关联图谱':state.focus?root.name+'的关联公司':m.group?.name||'公司关系';
  $('#rrSummary').textContent=peer?'从当前品类公司向外连接投资、团队与业务关系；跨品类主体一并展示。':state.focus?'查看直接关联的公司与主体，点开连线可查来源。':(m.group?.summary||m.group?.description||'按已收录关系逐层查看。').replace(/不存在.*$/,'');
  const publicCount=m.edges.filter(e=>e.evidenceLayer==='public').length;
  $('#rrScope').textContent=`${m.nodes.length} 个主体 · ${m.edges.length} 条关系 · ${publicCount} 条公开来源${m.edges.length-publicCount?' / '+(m.edges.length-publicCount)+' 条原表记录':''}`;
  $('#rrExpand').textContent=peer?(state.readerExpanded?'收起公司系延伸':'展开关联公司系'):state.readerExpanded?'收起为直接关系':m.remaining?'展开整组关系（另 '+m.remaining+' 条）':'已展示全部直接关系';
  $('#rrExpand').disabled=!peer&&!state.readerExpanded&&!m.remaining;
  for(const b of panel.querySelectorAll('[data-rr-kind]')){b.classList.toggle('active',state.readerKind===b.dataset.rrKind);b.setAttribute('aria-pressed',String(state.readerKind===b.dataset.rrKind));}
  $('#rrMcp').checked=state.pending;$('#rrEmpty').hidden=!!m.edges.length;
  $('#rrEmpty').textContent=m.remaining?'当前聚焦公司没有此类直接关系；展开整组查看其余已收录关系。':'当前筛选下没有已收录关系，可切换关系类型或清除筛选。';
  $('#rrRowsTitle').textContent=`逐条阅读与查证 · ${m.edges.length} 条`;$('#rrEdges').innerHTML=edgeRows(m);$('#rrMobile').innerHTML=mobile(m);
  state.visible=m.nodes;state.edges=m.edges;$('#viewCount').textContent=m.nodes.length+' 个主体 · '+m.edges.length+' 条关系';
  $('#revenueCoverage').textContent='当前关系组 · 全部收入方向';
  if(state.revenue!=='all')$('#revenueCoverage').textContent='关系至少一端匹配：'+{domestic:'国内为主',overseas:'海外为主',balanced:'国内海外并重',unscoped:'仅关系主体'}[state.revenue];
  presentation(m);return m;
 }
 async function draw(){
  const all=sync();if(!all)return;const projection=AtlasExecutive.plan(all);if(projection.overview){signature='';return;}const m=projection.graph;
  const width=Math.max(720,$('#rrScroll').clientWidth),key=JSON.stringify([m.nodes.map(n=>n.id),m.edges.map(e=>e.id),m.focus,width,state.readerAllLinks]);
  if(signature===key)return;signature=key;graphReady=false;const ticket=++serial;
  if(graph){graph.destroy();graph=null;}$('#rrGraph').replaceChildren();
  if(!m.edges.length){$('#rrGraph').style.height='0px';return;}
  if(!window.G6){$('#rrRows').open=true;$('#rrGraph').style.height='0px';return;}
  const element=$('#rrGraph');element.style.width=width+'px';element.style.height='540px';
  const pairs=new Map();for(const e of m.edges){const k=[e.source,e.target].sort().join('|');pairs.set(k,[...(pairs.get(k)||[]),e.id]);}
  const parallel=[...pairs.values()].filter(ids=>ids.length>1).flat();
  // Family levels follow distance from the chosen company; undirected personnel
  // records must not push the root behind its subsidiaries in a DAG layout.
  const family=m.group?.companyFamily&&!state.focus,positions=new Map();
  if(family){
   const depth=new Map([[m.focus,0]]),queue=[m.focus];for(let i=0;i<queue.length;i++){const id=queue[i];for(const e of m.edges){const next=e.source===id?e.target:e.target===id?e.source:null;if(next&&!depth.has(next)){depth.set(next,depth.get(id)+1);queue.push(next);}}}
   const levels=new Map();for(const n of m.nodes){const level=depth.get(n.id)??0;if(!levels.has(level))levels.set(level,[]);levels.get(level).push(n);}
   const descendants=id=>m.edges.filter(e=>e.source===id&&e.directed).length;
   for(const [level,rows] of levels){rows.sort((a,b)=>(a.id===m.focus?-1:b.id===m.focus?1:0)||descendants(b.id)-descendants(a.id)||((a.tier||9)-(b.tier||9))||a.name.localeCompare(b.name,'zh'));rows.forEach((n,i)=>positions.set(n.id,{x:120+level*350,y:75+i*130}));}
  }
  const graphEdges=m.edges.map(e=>{
   const a=positions.get(e.source),b=positions.get(e.target),sameColumn=family&&a&&b&&a.x===b.x;
   return {id:e.id,source:e.source,target:e.target,...(sameColumn?{type:'polyline'}:{}),style:{labelText:label(e),stroke:colors[C.kind(e)]||colors.pending,endArrow:e.directed===true,lineDash:e.evidenceLayer!=='public'?[5,4]:undefined,...(sameColumn?{controlPoints:[[a.x+160,a.y],[b.x+160,b.y]],labelMaxWidth:84,labelFontSize:11}: {})}};
  });
  const instance=new G6.Graph({container:element,width,height:540,animation:false,autoResize:false,padding:24,
   data:{nodes:m.nodes.map(n=>({id:n.id,style:{innerHTML:companyCard(n,n.id===m.focus),...positions.get(n.id)}})),edges:graphEdges},
   node:{type:'html',style:{size:[196,88],dx:-98,dy:-44}},
   edge:{type:d=>d.type||'cubic-horizontal',style:{lineWidth:1.7,endArrowSize:8,labelFontSize:13,labelFontWeight:500,labelFill:'#304f65',labelAutoRotate:false,labelWordWrap:true,labelMaxWidth:170,labelMaxLines:3,labelBackground:true,labelBackgroundFill:'#f5f8fb',labelBackgroundRadius:5,labelPadding:[5,7],labelOffsetY:-14,cursor:'pointer'}},
   ...(family?{}:{layout:{type:'dagre',rankdir:'LR',nodesep:38,ranksep:160}}),transforms:parallel.length?[{type:'process-parallel-edges',mode:'bundle',edges:parallel,distance:70}]:[],behaviors:[]});
  graph=instance;
  instance.on('edge:click',ev=>{const e=DATA.links.find(e=>e.id===ev.target.id);if(e)showEdge(e);});
  try{
   await instance.render();if(ticket!==serial||instance.destroyed)return;
   const points=m.nodes.map(n=>instance.getElementPosition(n.id)),xs=points.map(p=>p[0]),ys=points.map(p=>p[1]);
   const naturalW=Math.max(width,Math.max(...xs)-Math.min(...xs)+260),naturalH=Math.max(260,Math.max(...ys)-Math.min(...ys)+150);
   element.style.width=naturalW+'px';element.style.height=naturalH+'px';element.style.zoom=family?String(Math.max(.75,Math.min(1,width/naturalW))):'1';instance.setSize(naturalW,naturalH);await instance.fitCenter(false);graphReady=ticket===serial;
  }catch(err){if(ticket!==serial||instance.destroyed)return;console.error('Relationship renderer:',err);element.style.height='0px';$('#rrRows').open=true;signature='';}
 }
 function schedule(){cancelAnimationFrame(scheduled);resolveRender?.();renderTask=new Promise(resolve=>{resolveRender=resolve;scheduled=requestAnimationFrame(()=>draw().finally(resolve));});}
 const oldRender=renderGraph;renderGraph=function(reset=true){if(eligible()){sync();schedule();return;}sync();oldRender(reset);};
 const oldMode=setMode;setMode=function(mode){if(mode==='graph'&&!state.routeActive&&!state.group&&!state.focus&&!state.readerNetwork){state.group=defaultGroup;state.scope='all';state.readerExpanded=true;state.pending=true;}oldMode(mode);sync();if(eligible())schedule();};
 const oldReset=reset;reset=function(){Object.assign(state,{readerKind:'all',readerExpanded:false,readerFocus:'',readerSearch:'',readerNetwork:false});$('.rr-options').open=false;oldReset();};
 $('#rrSearch').oninput=e=>{state.readerSearch=e.target.value;directory();};
 panel.addEventListener('click',e=>{const group=e.target.closest('[data-rr-group]'),kind=e.target.closest('[data-rr-kind]');
  const component=e.target.closest('[data-rr-component]');if(component){state.readerComponent=component.dataset.rrComponent;state.readerAllLinks=false;renderGraph();$('#rrMain').scrollTop=0;return;}if(e.target.closest('#rrAllLinks')){state.readerAllLinks=!state.readerAllLinks;renderGraph();return;}
  if(group){state.peerView='cards';state.readerComponent='';state.readerAllLinks=false;state.readerKind='all';state.readerExpanded=false;state.readerFocus='';state.readerNetwork=false;$('.rr-options').open=false;$('#factionSelect').value=group.dataset.rrGroup;$('#factionSelect').dispatchEvent(new Event('change',{bubbles:true}));return;}
  if(kind){state.readerComponent='';state.readerKind=kind.dataset.rrKind;closeDetail();renderGraph();}
 });
 $('#rrExpand').onclick=()=>{state.readerExpanded=!state.readerExpanded;renderGraph();};
 $('#rrMcp').onchange=e=>{state.pending=e.target.checked;refresh();};
 $('#rrOldGraph').onclick=()=>{state.readerNetwork=true;renderGraph();};
 const back=document.createElement('button');back.id='rrReturn';back.className='btn';back.textContent='返回关系阅读';$('#filters').append(back);back.onclick=()=>{state.readerNetwork=false;if(isCategoryPeer()){state.group=defaultGroup;state.audience='all';state.genre='all';state.scope='all';state.focus=null;}refresh();};
 window.addEventListener('resize',()=>{if(eligible())schedule();});
 const resize=new ResizeObserver(()=>{if(eligible())schedule();});resize.observe($('#rrScroll'));
 const originalExport=$('#exportBtn').onclick;
 $('#exportBtn').onclick=async()=>{
  if(!eligible())return originalExport();
  if(isCategoryPeer()&&state.peerView!=='relations')return window.AtlasPeerReader.export();
  const projection=AtlasExecutive.plan(model());if(projection.overview)return window.AtlasExecutive.exportOverview(projection);const m=projection.graph,instance=graph;
  if(!m.edges.length){notify('当前筛选没有可导出的关系');return;}
  if(!graphReady){notify('图谱正在排版，请稍后保存');return;}
  const button=$('#exportBtn');button.disabled=true;
  try{
   await document.fonts.ready;
   const w=$('#rrGraph').clientWidth,h=$('#rrGraph').clientHeight,scale=Math.min(2,16000/Math.max(w,h+110+projection.other.length*26));
   const canvas=document.createElement('canvas');canvas.width=Math.ceil(w*scale);canvas.height=Math.ceil((h+110+projection.other.length*26)*scale);
   const ctx=canvas.getContext('2d'),font=getComputedStyle(document.body).fontFamily;
   const load=url=>new Promise((resolve,reject)=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=reject;img.src=url;});
   // G6 HTML nodes are DOM elements. Export its canvas edges and draw the same
   // card content explicitly so downloaded images never omit companies/icons.
   const layers=[...$('#rrGraph').querySelectorAll('canvas')].map(c=>({image:c,x:c.offsetLeft,y:c.offsetTop,w:parseFloat(c.style.width)||w,h:parseFloat(c.style.height)||h}));
   const points=new Map(m.nodes.map(n=>[n.id,instance.getViewportByCanvas(instance.getElementPosition(n.id))]));
   const icons=new Map(await Promise.all(m.nodes.map(async n=>[n.id,n.icon?await load(n.icon.data).catch(()=>null):null])));
   if(instance!==graph){notify('视图已切换，请重新保存当前图谱');return;}
   ctx.scale(scale,scale);ctx.fillStyle='#f5f8fb';ctx.fillRect(0,0,w,h+110+projection.other.length*26);
   const write=(value,x,y,width,maxLines,size,color,weight=400)=>{
    ctx.font=weight+' '+size+'px '+font;ctx.fillStyle=color;const lines=[];let line='';
    for(const char of String(value)){if(ctx.measureText(line+char).width>width&&line){lines.push(line);line='';}line+=char;}if(line)lines.push(line);
    lines.slice(0,maxLines).forEach((text,i)=>{if(i===maxLines-1&&lines.length>maxLines){while(ctx.measureText(text+'…').width>width)text=text.slice(0,-1);text+='…';}ctx.fillText(text,x,y+i*(size+4));});
   };
   write($('#rrTitle').textContent,28,30,w-56,1,19,'#233e52',600);
   write($('#rrScope').textContent,28,51,w-56,1,12,'#748898');
   ctx.save();ctx.translate(0,64);for(const layer of layers)ctx.drawImage(layer.image,layer.x,layer.y,layer.w,layer.h);
   for(const n of m.nodes){const p=points.get(n.id),x=p[0]-98,y=p[1]-44,r=income(n),focus=n.id===m.focus;
    ctx.beginPath();ctx.roundRect(x,y,196,88,10);ctx.fillStyle='#fff';ctx.fill();ctx.strokeStyle=focus?'#3e79a6':'#cfdeea';ctx.lineWidth=focus?2:1;ctx.stroke();
    write(n.name,x+12,y+23,147,1,14,'#29475b',600);write(n.tier?'T'+(n.tier-1):'关联',x+164,y+22,28,1,10,'#9b804c');
    const icon=icons.get(n.id);if(icon){ctx.save();ctx.beginPath();ctx.roundRect(x+12,y+35,26,26,6);ctx.clip();ctx.drawImage(icon,x+12,y+35,26,26);ctx.restore();}
    write(products(n)||n.role||'关系主体',x+44,y+46,140,1,10,'#7b8f9e');write(r.label,x+12,y+76,130,1,10,r.color||'#59788d');

   }
   ctx.restore();write('箭头沿原记录方向；历史交易按披露时点解释。'+(state.pending?'含标注“原表”的 MCP 关系。':''),28,h+91,w-56,1,11,'#748898');
   projection.other.forEach((e,i)=>write(byId.get(e.source).name+(e.directed?' → ':' — ')+byId.get(e.target).name+'：'+label(e),28,h+116+i*26,w-56,1,12,colors[C.kind(e)]||'#526f84'));
   const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw Error('PNG export failed');download(blob,'公司关系图谱-'+$('#rrTitle').textContent.replace(/[\\/:*?"<>|]/g,'-')+'.png');notify('已保存当前关系图谱，含公司与产品图标');
  }catch(err){console.error('Relationship export:',err);notify('图片导出失败，请稍后重试');}finally{button.disabled=false;}
 };
 window.AtlasRelationReader={sync,model,whenReady:()=>renderTask};
})();
