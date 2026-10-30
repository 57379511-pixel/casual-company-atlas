/* Read a route as a sequence of explicit relations, not an implied control chain. */
(()=>{
 const R=window.AtlasResearch;
 const panel=$('#routePanel'),quick=document.createElement('div'),advanced=document.createElement('details'),clear=$('#routeClear');
 quick.className='route-quick';advanced.className='route-advanced';advanced.innerHTML='<summary>高级选项：证据范围与方向</summary>';
 panel.querySelector('summary').textContent='点选两家公司，查看关联';
 advanced.append($('#routePanel .route-controls'));panel.querySelector('summary').after(quick);quick.after(advanced);
 const picker=document.createElement('dialog');picker.className='route-picker';picker.setAttribute('aria-labelledby','routePickerTitle');
 picker.innerHTML='<header><h2 id="routePickerTitle">选择公司</h2><button class="btn" data-picker-close aria-label="关闭公司选择">关闭 ×</button></header><input id="routePickerSearch" aria-label="搜索要关联的公司" placeholder="搜索公司名称、游戏产品" autocomplete="off"><p id="routePickerHint"></p><div id="routePickerList"></div>';
 document.body.append(picker);let picking='routeFrom',choices=[],pickerOther=null;
 function pickerList(){const q=$('#routePickerSearch').value.trim().toLowerCase(),rows=choices.filter(x=>(q||!pickerOther||Number.isFinite(x.hops))&&[x.n.name,x.n.full,x.n.products,x.n.originalProducts,x.n.id].join(' ').toLowerCase().includes(q));
  $('#routePickerList').innerHTML=rows.map(x=>`<button data-picker-company="${esc(x.n.id)}">${iconHTML(x.n)}<span><strong>${esc(x.n.name)}</strong><small>${esc(x.n.full||x.n.role||'')}</small></span><em>${esc(x.hint)}</em></button>`).join('')||'<p>没有匹配公司，请换个名称或产品搜索。</p>';
 }
 function openPicker(key,seed=null){picking=key;const other=seed||state[key==='routeFrom'?'routeTo':'routeFrom'];pickerOther=other;
  choices=DATA.nodes.filter(n=>n.id!==other&&!DATA.aliases[n.id]).map(n=>{const p=other?R.path(DATA.nodes,DATA.links,other,n.id,{evidence:state.routeEvidence,direction:'connectivity',kind:state.routeKind}):null;return {n,hops:p?.nodes.length?p.steps.length:Infinity,hint:!other?'选择':p?.nodes.length?(p.steps.length===1?'直接关系记录':'通过 '+(p.steps.length-1)+' 家主体间接连接'):'当前范围未收录连接'};}).sort((a,b)=>a.hops-b.hops||(a.n.tier||9)-(b.n.tier||9)||a.n.name.localeCompare(b.n.name,'zh'));
  $('#routePickerTitle').textContent=other?'查看与'+byId.get(other).name+'的关系':'先选一家公司';$('#routePickerHint').textContent=other?'先展示有连接的公司；点击即展开。输入名称可搜索全部公司。':'可以搜索名称或代表游戏，点选后再选另一家公司。';$('#routePickerSearch').value='';pickerList();picker.showModal();$('#routePickerSearch').focus();
 }
 $('#routePickerSearch').addEventListener('input',pickerList);picker.querySelector('[data-picker-close]').onclick=()=>picker.close();
 picker.addEventListener('keydown',e=>{if(e.key==='Escape')e.stopPropagation();},true);
 picker.addEventListener('click',e=>{const b=e.target.closest('[data-picker-company]');if(!b)return;
  const id=b.dataset.pickerCompany;picker.close();closeDetail();state[picking]=id;if(pickerOther)state[picking==='routeFrom'?'routeTo':'routeFrom']=pickerOther;
  if(state.routeFrom&&state.routeTo){$('#routeFrom').value=state.routeFrom;$('#routeTo').value=state.routeTo;$('#routeFind').click();}
  else{setMode('graph');panel.open=true;refresh();openPicker(picking==='routeFrom'?'routeTo':'routeFrom');}
 });
 function quickSync(){quick.innerHTML=['routeFrom','routeTo'].map((key,i)=>{const n=byId.get(state[key]);return `${i?'<span class="route-quick-join">与</span>':''}<button class="route-select-card" data-pick-route="${key}">${n?iconHTML(n):'<span class="route-plus">＋</span>'}<span><small>${i?'另一家公司':'先看这家公司'}</small><strong>${esc(n?.name||'点击选择公司')}</strong></span><span class="route-change">更换 ›</span></button>`;}).join('');quick.append(clear);clear.hidden=!state.routeActive;}
 document.addEventListener('click',e=>{const select=e.target.closest('[data-pick-route]');if(select)openPicker(select.dataset.pickRoute);const start=e.target.closest('[data-route-start]');if(start)openPicker('routeTo',DATA.aliases[start.dataset.routeStart]||start.dataset.routeStart);});
 window.AtlasRoutePicker={open:openPicker};
 const oldDetail=showDetail;showDetail=function(n){oldDetail(n);const b=$('#detail [data-route-start]');if(b){b.textContent='查看与其他公司的关系';b.classList.add('primary');}$('#detail [data-route-end]')?.remove();};
 const getRoute=()=>R.path(DATA.nodes,DATA.links,state.routeFrom,state.routeTo,{evidence:state.routeEvidence,direction:state.routeDirection,kind:state.routeKind});
 const shortName=id=>byId.get(id)?.name||id;
 function summary(p){
  if(!p.nodes.length)return '当前资料中没有找到连接路径';
  if(!p.steps.length)return '你选择的是同一条公司记录';
  if(p.steps.length===1)return shortName(p.nodes[0])+'与'+shortName(p.nodes[1])+'有直接关系记录';
  return shortName(p.nodes[0])+'与'+shortName(p.nodes.at(-1))+'通过'+p.nodes.slice(1,-1).map(shortName).join('、')+'间接连接（'+p.steps.length+'段关系）';
 }
 function sourceLine(e){return shortName(e.source)+(e.directed?' → ':' — ')+shortName(e.target);}
 const base=renderGraph;
 renderGraph=function(resetView=true){
  base(resetView);quickSync();if(state.mode!=='graph'||!state.routeActive)return;
  const p=getRoute();
  const h3=$('#routeResult h3');if(h3)h3.textContent=summary(p);
  $('#routeResult .path-read-guide')?.remove();
  if(p.steps.length){const note=document.createElement('p');note.className='path-read-guide';note.textContent=`共 ${p.steps.length} 段关系${p.originalEdges?'，其中 '+p.originalEdges+' 段仅有原始记录':'，均有公开来源'}。各段按标注时点解释；路径连通不代表直接持股或同一实控人。`;h3?.after(note);}
  $('#routePanel > summary').textContent='两家公司，怎样关联？';
  $('#routePanel .route-hint').textContent='按阅读顺序看公司；按箭头判断关系方向。点击连线或“查看依据”核对原始事实。';
  if(!p.nodes.length)return;
  const measure=document.createElement('canvas').getContext('2d'),font=getComputedStyle(document.body).fontFamily;
  const fit=(value,width,size=12)=>{measure.font=size+'px '+font;const text=String(value);if(measure.measureText(text).width<=width)return text;let short=text;while(short&&measure.measureText(short+'…').width>width)short=short.slice(0,-1);return short+'…';};
  const w=$('#stage').clientWidth,availableCardWidth=(w-100-(p.nodes.length-1)*130)/p.nodes.length,vertical=w<820||p.nodes.length>4||availableCardWidth<180,cw=vertical?Math.min(350,w-60):Math.min(226,availableCardWidth),ch=122,gap=vertical?110:130;
  const height=vertical?140+p.nodes.length*ch+(p.nodes.length-1)*gap:300;
  const network=$('#network');network.style.height=height+'px';network.setAttribute('viewBox',`0 0 ${w} ${height}`);
  $('#stage').style.height=Math.min(height,600)+'px';
  $('#stageTitle').textContent='关系怎么读';$('#stageSubtitle').textContent=vertical?'从上往下看，箭头仍指向原记录中的关系对象。':'从左往右看，箭头仍指向原记录中的关系对象。';
  $('#stageSubtitle').style.maxWidth='none';
  for(const id of ['clusterLayer','nodeLayer','edgeLayer','defs'])$('#'+id).replaceChildren();
  const colorsByKind={capital:'#357c78',business:'#397caf',people:'#9271a4',pending:'#b5843d'};
  for(const [kind,color]of Object.entries(colorsByKind)){const marker=svgEl('marker',{id:'route-arrow-'+kind,viewBox:'0 0 10 10',refX:9,refY:5,markerWidth:8,markerHeight:8,orient:'auto-start-reverse'});marker.append(svgEl('path',{d:'M 0 0 L 10 5 L 0 10 z',fill:color}));$('#defs').append(marker);}
  const total=p.nodes.length*cw+(p.nodes.length-1)*gap;
  const points=p.nodes.map((id,i)=>({id,x:vertical?(w-cw)/2:(w-total)/2+i*(cw+gap),y:vertical?100+i*(ch+gap):100}));
  const pos=new Map(points.map(v=>[v.id,v]));state.positions=new Map(points.map(v=>[v.id,{id:v.id,x:v.x+cw/2,y:v.y+ch/2,r:32}]));
  p.steps.forEach((step,i)=>{
   const e=step.edge,a=pos.get(e.source),b=pos.get(e.target),isForward=vertical?a.y<b.y:a.x<b.x;
   const kind=e.evidenceLayer==='public'?(e.semanticKind||e.kind):'pending',color=colorsByKind[kind]||colorsByKind.business;
   const x1=vertical?a.x+cw/2:isForward?a.x+cw:a.x,y1=vertical?(isForward?a.y+ch:a.y):a.y+ch/2;
   const x2=vertical?b.x+cw/2:isForward?b.x:b.x+cw,y2=vertical?(isForward?b.y:b.y+ch):b.y+ch/2;
   const line=svgEl('path',{d:`M${x1},${y1} L${x2},${y2}`,fill:'none',stroke:color,'stroke-width':2.5,'stroke-dasharray':e.evidenceLayer==='public'?'':'6 5',...(e.directed?{'marker-end':'url(#route-arrow-'+kind+')'}:{})});
   const hit=svgEl('path',{d:line.getAttribute('d'),fill:'none',stroke:'transparent','stroke-width':16,'data-edge':e.id,style:'cursor:pointer'});hit.addEventListener('pointerdown',ev=>ev.stopPropagation());$('#edgeLayer').append(hit,line);line.setAttribute('pointer-events','none');
   const mx=(x1+x2)/2,my=(y1+y2)/2,lw=vertical?Math.min(cw+30,w-30):gap-28,lh=96;
   const button=svgEl('g',{class:'route-edge-card',role:'button',tabindex:0,'data-edge':e.id,'aria-label':sourceLine(e)+'：'+e.type+'，查看依据'});
   button.append(svgEl('rect',{x:mx-lw/2,y:my-lh/2,width:lw,height:lh,rx:9,fill:'#fff',stroke:color,'stroke-opacity':.35}));
   const limit=vertical?22:8,relationText=e.type.replace(/（原始MCP记录）/g,''),parts=relationText.match(new RegExp('.{1,'+limit+'}','g'))||['关系记录'];
   parts.slice(0,2).forEach((txt,j)=>button.append(svgEl('text',{x:mx,y:my-25+j*17,'text-anchor':'middle',fill:color,'font-size':12,'font-weight':600},j===1&&parts.length>2?txt.slice(0,-1)+'…':txt)));
   const time=e.time?'资料：'+e.time:'';if(time)button.append(svgEl('text',{x:mx,y:my+12,'text-anchor':'middle',fill:'#6d8191','font-size':12},fit(time,lw-12)));
   button.append(svgEl('text',{x:mx,y:my+34,'text-anchor':'middle',fill:'#6d8191','font-size':11},'查看依据 ↗'));
   button.append(svgEl('title',{},sourceLine(e)+'\n'+AtlasRelations.label(e)+'\n'+(e.info||'')));
   button.addEventListener('pointerdown',ev=>ev.stopPropagation());
   button.addEventListener('keydown',ev=>{if(ev.key==='Enter')showEdge(e);});$('#edgeLayer').append(button);
  });
  points.forEach((v,i)=>{
   const n=byId.get(v.id),isEnd=i===0||i===points.length-1,accent=isEnd?'#296b91':'#6c828e';
   const g=svgEl('g',{class:'route-company-card',role:'button',tabindex:0,'data-company':n.id,'aria-label':'查看'+n.name,transform:`translate(${v.x},${v.y})`});
   g.append(svgEl('rect',{width:cw,height:ch,rx:13,fill:'#fff',stroke:state.selected===n.id?'#2a84c3':isEnd?'#a8c5d7':'#d8e2e8','stroke-width':state.selected===n.id?2.4:1.3}));
   g.append(svgEl('text',{x:16,y:22,fill:accent,'font-size':11,'font-weight':600},i===0?'起点公司':i===points.length-1?'终点公司':'中间关联公司'));
   if(n.icon){const clip=svgEl('clipPath',{id:'route-icon-'+n.id});clip.append(svgEl('rect',{x:16,y:38,width:42,height:42,rx:10}));$('#defs').append(clip);g.append(svgEl('image',{href:n.icon.data,x:16,y:38,width:42,height:42,'clip-path':'url(#route-icon-'+n.id+')'}));}
   else{g.append(svgEl('rect',{x:16,y:38,width:42,height:42,rx:10,fill:'#edf3f7'}),svgEl('text',{x:37,y:65,'text-anchor':'middle',fill:accent,'font-size':13},n.name.slice(0,2)));}
   const name=n.name.split(' · ')[0],space=Math.max(5,Math.floor((cw-84)/14)),chunks=name.match(new RegExp('.{1,'+space+'}','g'))||[name];
   chunks.slice(0,2).forEach((txt,j)=>g.append(svgEl('text',{x:70,y:55+j*20,fill:'#243f52','font-size':15,'font-weight':650},txt)));
   g.append(svgEl('text',{x:16,y:104,fill:'#708492','font-size':12},fit('代表作：'+AtlasGrades.representative(n),cw-32,12)));
   g.append(svgEl('title',{},n.name+'\n'+n.full));g.addEventListener('pointerdown',ev=>ev.stopPropagation());g.addEventListener('keydown',ev=>{if(ev.key==='Enter')selectCompany(n.id);});$('#nodeLayer').append(g);
  });
  state.componentBoxes=[];state.tierBands=[];applyTransform();
 };
 const previousMode=setMode;setMode=function(mode){if(mode!=='graph')$('#stage').style.height='';previousMode(mode);};
 const previousRefresh=refresh;refresh=function(){if(!state.routeActive)$('#stage').style.height='';previousRefresh();};
 quickSync();
})();
