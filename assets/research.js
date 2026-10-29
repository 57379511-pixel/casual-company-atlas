/* Revenue geography and explainable relationship paths; original atlas data is immutable. */
(()=>{
 const R=window.AtlasResearch,ledger=window.ATLAS_REVENUE;
 ledger.directions=window.ATLAS_DIRECTIONS;
 $('.canvas-card').id='atlasCanvas';
 Object.assign(state,{revenue:'all',marketDirection:'all',routeActive:false,routeFrom:'',routeTo:'',routeEvidence:'public',routeDirection:'connectivity',routeKind:'all'});
 const income=n=>R.revenue(n,ledger),tag=n=>{const r=income(n);return `<span class="revenue-tag revenue-${r.key}">${esc(r.label)}${r.record?' · '+esc(r.record.period)+' · '+esc(r.record.scope):''}</span>`;};
 const bar=document.createElement('section');bar.className='research-bar';bar.setAttribute('aria-label','收入与市场方向');
 bar.innerHTML='<label>收入重心<select id="revenueFilter" aria-label="收入重心"><option value="all">全部收入方向</option><option value="domestic">国内为主</option><option value="overseas">海外为主</option><option value="unscoped">仅关系主体</option></select></label><label>原表市场方向<select id="marketDirection" aria-label="原表市场方向"><option value="all">全部原表方向</option><option>国内市场</option><option>海外出海</option><option>国内外双线</option></select></label><span id="revenueCoverage"></span><p>蓝色：国内为主 · 紫色：海外为主。优先参考源表产品收入，结合国内／出海分级与主力产品；具体口径见公司详情。</p>';
 $('#filters').after(bar);
 const sourceMatch=genreMatch;genreMatch=n=>sourceMatch(n)&&R.matches(n,state,ledger);
 const oldFiltered=filteredGraph;
 function route(){return R.path(DATA.nodes,DATA.links,state.routeFrom,state.routeTo,{evidence:state.routeEvidence,direction:state.routeDirection,kind:state.routeKind});}
 filteredGraph=function(){
  if(state.routeActive){const p=route();return {nodes:p.nodes.map(id=>byId.get(id)),edges:p.steps.map(s=>s.edge)};}
  const g=oldFiltered();if(state.focus)return g;
  if(state.revenue==='all'&&state.marketDirection==='all')return g;
  const nodes=g.nodes.filter(n=>R.matches(n,state,ledger));
  // Show matching seed companies even if they have no relation in the selected evidence layer.
  if(!state.group&&state.genre==='all')for(const n of baseSelection(false))if(!nodes.some(x=>x.id===n.id))nodes.push(n);
  const ids=new Set(nodes.map(n=>n.id));return {nodes,edges:g.edges.filter(e=>ids.has(e.source)&&ids.has(e.target))};
 };
 const panel=document.createElement('details');panel.className='route-panel';panel.id='routePanel';panel.hidden=state.mode!=='graph';
 panel.innerHTML='<summary>查两家公司之间的关系路径</summary><div class="route-controls"><label>起点公司<input id="routeFrom" list="routeCompanies" placeholder="公司名称或 ID" autocomplete="off"></label><button class="btn" id="routeSwap" aria-label="交换起点终点">⇄</button><label>终点公司<input id="routeTo" list="routeCompanies" placeholder="公司名称或 ID" autocomplete="off"></label><label>证据范围<select id="routeEvidence"><option value="public">仅公开证据</option><option value="all">公开 + 原始 MCP</option></select></label><label>连接方式<select id="routeDirection"><option value="connectivity">查关联（允许反向查找）</option><option value="directed">仅沿已记录方向</option></select></label><label>关系类型<select id="routeKind"><option value="all">全部类型</option><option value="capital">股权／交易</option><option value="business">业务关联</option><option value="people">人员／履历</option></select></label><button class="btn primary" id="routeFind">查找路径</button><button class="btn" id="routeClear">退出路径</button></div><datalist id="routeCompanies"></datalist><p class="route-hint">在全量主体中查找，不受地图、品类和梯队筛选限制。优先使用公开证据，再选择较短路径；展示一条最优路径。连通不等于控制，历史交易不代表当前持股。</p><div id="routeResult" class="route-result" aria-live="polite"></div>';
 $('#factionEvidence').after(panel);
 $('#routeCompanies').innerHTML=sorted(DATA.nodes).map(n=>`<option value="${esc(n.id+' · '+n.name)}">${esc(n.full||n.name)}</option>`).join('');
 function resolve(value){value=value.trim();const id=value.split(' · ')[0];if(byId.has(id))return id;const found=DATA.nodes.filter(n=>n.name===value||n.full===value);return found.length===1?found[0].id:null;}
 function sync(){
  $('#revenueFilter').value=state.revenue;$('#marketDirection').value=state.marketDirection;
  bar.hidden=state.mode==='audit';panel.hidden=state.mode!=='graph';
  for(const key of ['routeEvidence','routeDirection','routeKind'])$('#'+key).value=state[key];
  for(const key of ['routeFrom','routeTo'])$('#'+key).value=state[key]&&byId.has(state[key])?state[key]+' · '+byId.get(state[key]).name:state[key]||'';
  const rows=DATA.nodes.filter(n=>n.originalRecord),known=rows.filter(n=>income(n).key!=='unscoped');
  $('#revenueCoverage').textContent=`国内为主 ${rows.filter(n=>income(n).key==='domestic').length} · 海外为主 ${rows.filter(n=>income(n).key==='overseas').length} · 仅关系主体 ${rows.length-known.length}`;
  document.body.classList.toggle('route-mode',state.mode==='graph'&&state.routeActive);
  if(state.routeActive)panel.open=true;renderRoute();
 }
 function renderRoute(){
  if(!state.routeActive){$('#routeResult').replaceChildren();return;}
  const p=route();if(p.error){$('#routeResult').textContent=p.error;return;}
  if(p.missing){$('#routeResult').innerHTML='<h3>当前证据范围内未找到连接路径</h3><p>不代表两家公司没有关系。可调整关系类型、连接方向或证据范围；系统不会补造连线。</p>';return;}
  $('#routeResult').innerHTML=`<h3>${esc(byId.get(state.routeFrom).name)} → ${esc(byId.get(state.routeTo).name)} · ${p.steps.length} 跳</h3>${p.steps.length===0?'<p>起点与终点是同一条主体记录，无需经过关系边。</p>':''}${p.originalEdges?`<p class="route-warning">含 ${p.originalEdges} 条原始 MCP 关系，尚无独立公开确认，不能作为已核实的完整关系链。</p>`:''}<details class="route-evidence"><summary>逐段关系与来源（${p.steps.length} 段）</summary><ol>${p.steps.map(s=>{const e=s.edge;return `<li><button data-company="${esc(e.source)}">${esc(byId.get(e.source).name)}</button> ${e.directed?'→':'—'} <button data-company="${esc(e.target)}">${esc(byId.get(e.target).name)}</button>　<strong>${esc(e.type)}</strong>${s.reverse?' <span class="route-warning">（本次反向查找，箭头仍为原记录方向）</span>':''}<p>${e.evidenceLayer==='public'?'公开限定证据':'原始 MCP 资料'} · ${esc(e.time||'时点未记录')} · ${esc(e.info||'')}</p><p>${esc(e.note||'只解释所列证据时点，不外推当前完整控制链。')}</p><button data-edge="${esc(e.id)}">查看该段证据</button> ${linksHTML(e.url)||'<span class="route-warning">无公开来源链接</span>'}</li>`;}).join('')}</ol></details>`;
 }
 const beforeLayout=calculateLayout;
 calculateLayout=function(nodes,w,h){if(!state.routeActive)return beforeLayout(nodes,w,h);state.componentBoxes=[];state.tierBands=[];const p=route(),cols=Math.min(p.nodes.length||1,Math.max(1,Math.floor((w-70)/175))),rows=Math.ceil(p.nodes.length/cols),gap=Math.min(150,Math.max(110,(h-175)/Math.max(1,rows)));return new Map(p.nodes.map((id,i)=>{const row=Math.floor(i/cols),col=row%2?cols-1-i%cols:i%cols;return [id,{id,x:w/2+(col-(cols-1)/2)*Math.min(190,(w-70)/cols),y:145+row*gap,r:25}];}));};
 const beforeGraph=renderGraph;
 renderGraph=function(resetView=true){beforeGraph(resetView);if(state.mode!=='graph')return;sync();
  for(const el of $$('#nodeLayer .node')){const n=byId.get(el.dataset.node),p=state.positions.get(n.id),r=income(n);el.append(svgEl('circle',{cx:-p.r+2,cy:-p.r+2,r:5,fill:r.color,stroke:'white','stroke-width':2,class:'revenue-node'}));el.querySelector('title').textContent+='\n'+r.label+(r.record?' · '+r.record.period+' · '+r.record.scope:' · 原表方向：'+(n.market||'未记录'));
   if(state.routeActive){el.classList.remove('dim');el.querySelector('.node-label').textContent=(route().nodes.indexOf(n.id)+1)+' · '+n.name;el.append(svgEl('text',{y:p.r+34,'text-anchor':'middle',fill:r.color,'font-size':10},r.label));}
  }
  if(state.routeActive){const p=route();$('#stageTitle').textContent=p.nodes.length?'关系路径 · '+p.steps.length+' 跳':'当前范围未找到关系路径';$('#stageSubtitle').textContent='按路径顺序排列；箭头保留原记录方向。逐段证据见上方路径面板。';$('#viewCount').textContent=p.nodes.length+' 个主体 · '+p.steps.length+' 段关系';$('#emptyState h3').textContent='当前范围未找到关系路径';$('#emptyText').textContent='请调整上方路径条件，不代表公司没有关系。';for(const el of $$('#edgeLayer .edge')){el.setAttribute('opacity','0.9');el.setAttribute('stroke-width','2');}}
  if(state.routeActive)for(const s of route().steps){const e=s.edge,a=state.positions.get(e.source),b=state.positions.get(e.target);if(a&&b){const label=svgEl('text',{x:(a.x+b.x)/2,y:(a.y+b.y)/2-22,'text-anchor':'middle',fill:'#48677e','font-size':10,'paint-order':'stroke',stroke:'#f7fafb','stroke-width':3},e.type.length>17?e.type.slice(0,16)+'…':e.type);$('#edgeLayer').append(label);}}
  else if(state.focus&&(state.revenue!=='all'||state.marketDirection!=='all'))$('#stageSubtitle').textContent+=' · 展开关系保留跨市场邻接主体';
 };
 const beforeGeo=renderGeo;
 renderGeo=function(){beforeGeo();sync();for(const el of $$('#geoRail [data-geo-company]')){const n=byId.get(el.dataset.geoCompany),entry=geoSelection().find(v=>v.id===n.id),ids=entry?.mapMatchedIds||[n.id],members=ids.map(id=>byId.get(id));const labels=[...new Set(members.map(m=>income(m).key))];el.querySelector('.company-info').insertAdjacentHTML('beforeend',labels.length>1?'<span class="revenue-tag">合并入口：'+members.map(m=>esc(m.name)+' · '+income(m).label).join('；')+'</span>':(ids.length===1&&ids[0]!==n.id?'<span class="tiny">命中成员：'+esc(members[0].name)+'</span>':'')+tag(members[0]));}$('#geoPane .geo-heading>p').textContent='按原表地域与主营品类展示；收入重心参考源表产品收入及国内／出海分级。';};
 const beforeList=renderList;
 renderList=function(){beforeList();sync();for(const tr of $$('#tableBody [data-company]')){const n=byId.get(tr.dataset.company);tr.cells[0].insertAdjacentHTML('beforeend',tag(n)+`<div class="tiny">原表市场方向：${esc(n.market||'未记录')}</div>`);}};
 const beforeDetail=showDetail;
 showDetail=function(n){beforeDetail(n);const r=income(n),record=r.record,assessment=r.assessment,section=document.createElement('section');section.className='detail-section';
  section.innerHTML=`<h3>收入重心与判定依据</h3>${tag(n)}${record?`<div class="revenue-bar"><i style="width:${r.domesticShare*100}%"></i><b style="width:${(1-r.domesticShare)*100}%"></b></div><p>国内 ${(r.domesticShare*100).toFixed(2)}% ／ 海外 ${((1-r.domesticShare)*100).toFixed(2)}%</p><dl class="facts">${field('统计期',record.period)}${field('收入口径',record.scope)}${field('国内收入',record.domestic.toLocaleString('zh-CN')+' '+record.unit)}${field('海外收入',record.overseas.toLocaleString('zh-CN')+' '+record.unit)}</dl><p>${esc(record.basis)}</p>${record.sources.map(s=>`<p><a href="${esc(s.url)}" target="_blank" rel="noopener noreferrer">${esc(s.title)} ↗</a></p>`).join('')}`:`<p>${esc(assessment?.basis||'关联辅助主体，不单列经营收入方向。')}</p>${assessment?`<dl class="facts">${field('研究口径',assessment.scope)}${field('原表分级依据',assessment.signals.tierEvidence)}${field('主力产品',assessment.signals.sourceProducts)}${field('原表渠道',assessment.signals.sourceChannel)}${field('海外10Q收入（美元）',assessment.signals.overseas10QUSD==null?'未提供':assessment.signals.overseas10QUSD.toLocaleString('zh-CN'))}${field('超休闲榜7Q收入（美元）',assessment.signals.hypercasual7QUSD==null?'未提供':assessment.signals.hypercasual7QUSD.toLocaleString('zh-CN'))}</dl><p class="tiny">${esc(assessment.limitations)}</p>${assessment.sources.length?`<details><summary>判定参考来源</summary>${assessment.sources.map(u=>linksHTML(u)).join('')}</details>`:''}`:''}`}<p>原表市场方向：${esc(n.market||'未记录')}（不等于收入结构）</p><div class="detail-actions"><button class="btn" data-route-start="${esc(n.id)}">设为路径起点</button><button class="btn" data-route-end="${esc(n.id)}">设为路径终点</button></div>`;
  $('#detail .detail-header').after(section);
 };
 const beforeMode=setMode;setMode=function(mode){beforeMode(mode);sync();};
 const beforeReset=reset;reset=function(){Object.assign(state,{revenue:'all',marketDirection:'all',routeActive:false,routeFrom:'',routeTo:'',routeEvidence:'public',routeDirection:'connectivity',routeKind:'all'});beforeReset();sync();};
 const beforeFocus=focusCompany;focusCompany=function(id){state.routeActive=false;beforeFocus(id);};
 for(const [id,key]of [['revenueFilter','revenue'],['marketDirection','marketDirection']])$('#'+id).onchange=e=>{state[key]=e.target.value;state.routeActive=false;state.focus=null;state.selected=null;state.peerPage=0;geoState.city=null;closeDetail();refresh();sync();};
 $('#routeFind').onclick=()=>{const from=resolve($('#routeFrom').value),to=resolve($('#routeTo').value);if(!from||!to){$('#routeResult').textContent='请从建议列表选择公司，或输入唯一的公司全名／ID。';return;}Object.assign(state,{routeFrom:from,routeTo:to,routeActive:true,focus:null,selected:null,group:'',query:''});for(const key of ['routeEvidence','routeDirection','routeKind'])state[key]=$('#'+key).value;$('#search').value='';closeDetail();setMode('graph');refresh();$('#atlasCanvas').scrollTop=0;};
 $('#routeSwap').onclick=()=>{const a=$('#routeFrom').value;$('#routeFrom').value=$('#routeTo').value;$('#routeTo').value=a;state.routeFrom=resolve($('#routeFrom').value)||'';state.routeTo=resolve($('#routeTo').value)||'';if(state.routeActive)$('#routeFind').click();};
 $('#routeClear').onclick=()=>{state.routeActive=false;state.selected=null;closeDetail();refresh();sync();};
 for(const key of ['routeEvidence','routeDirection','routeKind'])$('#'+key).onchange=e=>{state[key]=e.target.value;if(state.routeActive){closeDetail();refresh();}};
 for(const key of ['routeFrom','routeTo'])$('#'+key).onchange=e=>{state[key]=resolve(e.target.value)||'';if(state.routeActive){state.routeActive=false;refresh();} };
 document.addEventListener('click',e=>{const b=e.target.closest('[data-route-start],[data-route-end]');if(!b)return;state[b.dataset.routeStart?'routeFrom':'routeTo']=b.dataset.routeStart||b.dataset.routeEnd;state.routeActive=false;closeDetail();setMode('graph');panel.open=true;sync();$('#'+(b.dataset.routeStart?'routeTo':'routeFrom')).focus();});
 // Ordinary navigation exits path isolation, so subsequent category controls work normally.
 for(const el of $$('[data-scope],#factionBack,#clearSearch')){const handler=el.onclick;el.onclick=function(e){state.routeActive=false;return handler?.call(this,e);};}
 for(const el of $$('#genre,#factionSelect,#audience,#graphTier,#peerRole,#peerCategory')){const handler=el.onchange;el.onchange=function(e){state.routeActive=false;return handler?.call(this,e);};}
 $('#search').addEventListener('input',()=>{if(state.routeActive){state.routeActive=false;refresh();}});
 $('#csvBtn').onclick=()=>{const rows=[['ID','公司','主体全称','主营品类','业务形态','梯队','核查角色','原表市场方向','收入判断','国内占比','海外占比','统计期','收入口径','依据','收入来源','原表产品','公开产品','核查结论','限制','原资料来源'],...sorted(baseSelection(true).filter(matches)).map(n=>{const r=income(n),d=r.record;return [n.id,n.name,n.full,n.category,n.business,n.originalTier,n.role,n.market,r.label,d?(r.domesticShare*100).toFixed(2)+'%':'',d?((1-r.domesticShare)*100).toFixed(2)+'%':'',d?.period||'源表产品组合',d?.scope||r.assessment?.scope,d?.basis||r.assessment?.basis,d?.sources.map(s=>s.url).join(' | ')||r.assessment?.sources.join(' | '),n.originalProducts,n.verifiedProducts,n.claim,[n.limitations,r.assessment?.limitations].filter(Boolean).join('；'),n.url];})];const cell=v=>'"'+String(v??'').replace(/^[=+@-]/,s=>"'"+s).replaceAll('"','""')+'"';download(new Blob(['\ufeff'+rows.map(r=>r.map(cell).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'}),'公司图谱-收入与市场方向.csv');};
 const beforeAudit=renderAudit;renderAudit=function(){beforeAudit();$('#auditGrid').insertAdjacentHTML('afterbegin',`<article class="audit-card"><div class="idline">2026-10-29 · 收入与关系路径</div><h3>收入方向单独取证</h3><p>${esc(ledger.directions.policy)}</p><p>363条原始记录逐条处理：327条国内为主，33条海外为主，3条无经营产品资料的关系端点单列。仅5条有可用的完整收入拆分，其余方向根据源表产品、国内/出海分级及市场资料判断，不补造占比。原表市场方向完整保留。路径只使用原有177条关系，公开关系也仅在所列事实、时点和主体范围内成立。</p></article>`);sync();};
 $('.top-meta .date').innerHTML='<i class="dot"></i>收入与关系路径版 · 2026.10.29';document.title='国内休闲游戏公司图谱 · 收入与关系路径';
 $('#methodContent').insertAdjacentHTML('afterbegin',`<p><strong>收入分类：</strong>${esc(ledger.directions.policy)}</p><p><strong>关系路径：</strong>查关联可反向走边；仅沿已记录方向不反转箭头。两种模式均不证明控制权。原始MCP边仅在主动选择时参与路径，先减少这类边，再减少跳数。</p>`);
 refresh();sync();
})();
