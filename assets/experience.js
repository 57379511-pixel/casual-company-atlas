/* Presentation and navigation only. Source records and selection rules stay unchanged. */
(()=>{
 const clean=document.createElement('button');clean.id='clearViewFilters';clean.className='btn clear-view-filters';clean.textContent='清除筛选';clean.title='恢复当前视图的默认筛选';$('.research-bar').append(clean);
 clean.onclick=()=>{geoState.city=null;state.audience='all';scopeControl.value='all';reset();if(state.mode==='list'){state.listAll=true;refresh();}};
 const scrim=document.createElement('button');scrim.id='detailScrim';scrim.setAttribute('aria-label','关闭公司详情');scrim.tabIndex=-1;$('.canvas-card').append(scrim);scrim.onclick=()=>closeDetail();
 $('#navToggle').textContent='快速找公司';$('#search').placeholder='搜索公司或代表游戏';
 const compactTier=document.createElement('select');compactTier.id='compactTier';compactTier.setAttribute('aria-label','选择研究梯队');compactTier.innerHTML=[['key','头部优先'],['1','T0 标杆'],['2','T1 头部'],['3','T2 中坚'],['4','T3 长尾'],['5','T4 观察'],['all','全部梯队']].map(([v,t])=>'<option value="'+v+'">'+t+'</option>').join('');$('#filters').insertBefore(compactTier,$('#filters [data-scope]'));compactTier.onchange=()=>$('#filters [data-scope="'+compactTier.value+'"]').click();
 function status(){
  const mode=state.mode,all=(mode==='list'&&state.listAll)||(mode==='geo'&&state.scope==='key'&&(state.genre!=='all'||state.query||state.group));
  const scope=all||state.scope==='all'?'全部梯队':state.scope==='key'?'头部优先':({1:'T0 标杆',2:'T1 头部',3:'T2 中坚',4:'T3 长尾',5:'T4 观察'}[state.scope]||'头部优先');
  const geo=mode==='geo'?geoSelection():[],mapped=geo.filter(n=>geoCityOf(n));
  const count=mode==='geo'?(geoState.city?mapped.filter(n=>geoCityOf(n)===geoState.city).length:mapped.length):mode==='list'?baseSelection(true).filter(matches).length:mode==='graph'?filteredGraph().nodes.length:0;
  const terms=[scope,state.genre!=='all'?state.genre:null,state.revenue!=='all'?{domestic:'国内为主',overseas:'海外为主',balanced:'国内海外并重',unscoped:'仅关系主体'}[state.revenue]:null,state.query?'搜索：'+state.query:null,geoState.city&&mode==='geo'?geoState.city:null].filter(Boolean);
  $('#revenueCoverage').textContent=`当前 ${count} ${mode==='geo'?'个地图入口':mode==='graph'?'个对象':'条记录'} · ${terms.join(' · ')}${mode==='geo'&&!geoState.city&&geo.length>mapped.length?' · 另有 '+(geo.length-mapped.length)+' 条境外／未定位记录':''}`;
  clean.hidden=!(state.query||state.genre!=='all'||state.revenue!=='all'||state.marketDirection!=='all'||state.group||state.audience!=='all'||geoState.city||(!all&&state.scope!=='key'));
  if(mode!=='graph')for(const b of $$('[data-scope]'))b.classList.toggle('active',b.dataset.scope===(all?'all':String(state.scope)));
  compactTier.value=all?'all':String(state.scope);
 }
 const beforeGeo=renderGeo;renderGeo=function(){beforeGeo();
  const rail=$('#geoRail'),original=rail.querySelector('.geo-city-list'),buttons=[...original.querySelectorAll('[data-geo-city]')];
  original.hidden=true;const label=document.createElement('label');label.className='city-picker';label.innerHTML='<span>选择城市</span><select id="geoCityPicker" aria-label="选择城市"><option value="">全部城市</option>'+buttons.map(b=>'<option value="'+esc(b.dataset.geoCity)+'">'+esc(b.textContent.replace(/(\D)(\d)/,'$1 · $2'))+' 家</option>').join('')+'</select>';original.before(label);
  const picker=label.querySelector('select');picker.value=geoState.city||'';picker.onchange=()=>{if(picker.value)buttons.find(b=>b.dataset.geoCity===picker.value)?.click();else $('#geoBack')?.click();};
  $('#geoPane .geo-heading h2').textContent=geoState.city?'聚焦'+geoState.city:'休闲游戏\n公司分布';
  $('#geoPane .geo-heading>p').textContent='点选城市看公司\n点开公司看产品与关系';
  $('#geoStats .geo-stat:last-child').remove();
  const heading=$('#geoRail .geo-rail-header h3');heading.innerHTML=geoState.city?esc(geoState.city)+'<small>按研究梯队排序</small>':'重点公司<small>按研究梯队排序</small>';
  $('#geoRail .geo-explain').textContent='当前筛选内的公司，优先展示标杆与头部。';
  for(const b of rail.querySelectorAll('[data-geo-company]')){const n=byId.get(b.dataset.geoCompany);const product=String(n.verifiedProducts||n.originalProducts||n.products||'').split(/[；;、]/).slice(0,2).join(' · ');const el=b.querySelector('.product-title');if(el){el.textContent=product||n.full;el.title=n.full;}b.title=n.full;}
  status();
 };
 const beforeList=renderList;renderList=function(){beforeList();status();};
 let roomy=null;
 const layout=calculateLayout;calculateLayout=function(nodes,w,h){
  if(!roomy)return layout(nodes,w,h);
  state.componentBoxes=[];state.tierBands=[];const adj=new Map(nodes.map(n=>[n.id,[]]));for(const e of roomy.edges)if(adj.has(e.source)&&adj.has(e.target)){adj.get(e.source).push(e.target);adj.get(e.target).push(e.source);}
  const seen=new Set(),groups=[];for(const n of nodes){if(seen.has(n.id))continue;const stack=[n.id],group=[];while(stack.length){const id=stack.pop();if(seen.has(id))continue;seen.add(id);group.push(byId.get(id));stack.push(...adj.get(id).filter(x=>!seen.has(x)));}groups.push(group);}
  groups.sort((a,b)=>b.length-a.length);const maxCols=Math.max(1,Math.floor((w-72)/136));let x=24,y=98,rowH=0;const positions=new Map();
  for(const group of groups){const cols=Math.min(maxCols,Math.max(1,Math.ceil(Math.sqrt(group.length)))),rows=Math.ceil(group.length/cols),bw=cols*136+24,bh=rows*130+42;if(x>24&&x+bw>w-24){x=24;y+=rowH+22;rowH=0;}
   const ordered=[...group].sort((a,b)=>adj.get(b.id).length-adj.get(a.id).length||(a.tier||9)-(b.tier||9));
   ordered.forEach((n,i)=>positions.set(n.id,{id:n.id,x:x+80+(i%cols)*136,y:y+65+Math.floor(i/cols)*130,r:n.tier===1?28:n.icon?25:22}));
   if(group.length>1)state.componentBoxes.push({x,y,w:bw,h:bh,name:ordered[0].name+' · '+group.length+'个关联对象'});x+=bw+22;rowH=Math.max(rowH,bh);
  }roomy.height=y+rowH+35;return positions;
 };
 const beforeGraph=renderGraph;renderGraph=function(reset=true){
  const graph=state.mode==='graph'?filteredGraph():null,isLarge=graph&&graph.nodes.length>12&&!state.routeActive&&!isCategoryPeer(),wasLarge=document.body.classList.contains('readable-network');
  document.body.classList.toggle('readable-network',!!isLarge);if(wasLarge&&!isLarge)$('#network').style.height='';roomy=isLarge?{...graph,height:roomy?.height||600}:null;
  beforeGraph(reset);if(isLarge){const h=roomy.height;$('#network').style.height=h+'px';$('#network').setAttribute('viewBox',`0 0 ${$('#stage').clientWidth} ${h}`);$('#stageSubtitle').textContent='按关联组展开 · 上下滚动查看 · 点击公司或连线看详情';}status();
 };
 $('#network').addEventListener('pointerdown',e=>{if(document.body.classList.contains('readable-network')&&e.pointerType==='touch')e.stopImmediatePropagation();},true);
 const beforeMode=setMode;setMode=function(mode){beforeMode(mode);status();};
 window.AtlasExperience={sync:status};refresh();
})();
