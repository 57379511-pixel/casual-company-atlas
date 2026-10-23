const DATA=window.ATLAS_DATA;
const $=s=>document.querySelector(s), $$=s=>[...document.querySelectorAll(s)], NS='http://www.w3.org/2000/svg';
const esc=s=>String(s??'').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const companyNodes=DATA.nodes, byId=new Map(DATA.nodes.map(n=>[n.id,n]));
const state={mode:'graph',scope:'key',genre:'all',group:'',query:'',people:true,pending:false,selected:null,focus:null,listAll:false,navQuery:'',positions:new Map(),visible:[],edges:[],transform:{x:0,y:0,k:1}};
const groupByName=new Map(DATA.groups.map(g=>[g.name,g]));
const factionIds=new Set(DATA.groups.flatMap(g=>g.memberIds));
const colors={1:'#c7a963',2:'#bd9959',3:'#7eacd9',4:'#a8a0c9',5:'#b6c4d2'};
const tierName=n=>n.tier?n.rawTier:'关联主体';
const tierClass=n=>({1:'head',2:'head',3:'second',4:'third'}[n.tier]||'');
const initial=n=>/^[A-Za-z]/.test(n.name)?n.name.split(/\s+/).slice(0,2).map(s=>s[0]).join('').toUpperCase():n.name.slice(0,2);
const iconHTML=(n,cls='mini-icon')=>n.icon?`<img class="${cls}" loading="lazy" decoding="async" src="${n.icon.data}" alt="${esc(n.icon.title)} 游戏图标">`:`<span class="${cls}">${esc(initial(n))}</span>`;
const shortProduct=n=>String(n.products||'暂无产品资料').split(/[、；]/)[0];
const urls=s=>[...new Set((Array.isArray(s)?s:String(s||'').split(/[\n；;\s]+/)).filter(v=>/^https?:\/\//i.test(v)))];
const linksHTML=(s)=>urls(s).map((u,i)=>{let label;try{label=new URL(u).hostname.replace(/^www\./,'');}catch{label='来源';}return `<a class="source-link" target="_blank" rel="noopener noreferrer" href="${esc(u)}">${i+1}. ${esc(label)} ↗</a>`;}).join('');
function sorted(arr){return [...arr].sort((a,b)=>(a.tier||9)-(b.tier||9)||b.degree-a.degree||(b.sampleGames||0)-(a.sampleGames||0)||a.name.localeCompare(b.name,'zh-CN'));}
function matches(n){const q=state.query.trim().toLowerCase();return !q||[n.id,n.name,n.brand,n.full,n.originalFull,n.alias,n.products,n.originalProducts,n.icon?.title,n.category].join(' ').toLowerCase().includes(q);}
function genreMatch(n){return state.genre==='all'||String(n.category||'').split('、').includes(state.genre);}
function groupMatch(n,name){return !!groupByName.get(name)?.memberIds.includes(n.id);}
function baseSelection(forList=false){let arr=companyNodes.filter(genreMatch);if(state.group)return arr.filter(n=>groupMatch(n,state.group));if(forList&&state.listAll)return arr;if(state.scope==='all')return arr;const tier=Number(state.scope);return tier?arr.filter(n=>n.tier===tier):arr.filter(n=>n.tier<=2);}
function enabledEdge(e){return state.mode==='graph'||((e.kind!=='people'||state.people)&&(e.kind!=='pending'||state.pending));}
function refreshStats(){$('#stats').innerHTML=[1,2,3].map(t=>`<div class="stat"><b style="color:${colors[t]}">${companyNodes.filter(n=>n.tier===t).length}</b><span>T${t-1}</span></div>`).join('');}
function refreshNav(){
 const q=state.navQuery.trim().toLowerCase();
 const arr=companyNodes.filter(n=>!q||[n.id,n.name,n.brand,n.full].join(' ').toLowerCase().includes(q)).sort((a,b)=>a.name.localeCompare(b.name,'zh-CN')||a.id.localeCompare(b.id));
 $('#navHeading').textContent=`${q?'匹配':'全部'} ${arr.length} 条记录`;
 $('#companyNav').innerHTML=arr.map(n=>`<button class="company-item ${state.focus===n.id?'selected':''}" data-company="${esc(n.id)}" aria-label="查看 ${esc(n.name)} ${esc(n.full||'工商全称未记录')} 的关联图谱">${iconHTML(n)}<span class="company-nav-info"><strong>${esc(n.name)}</strong><small>${esc(n.full||'工商全称未记录')}</small><em>${esc(n.id)}</em></span><span class="rank">${esc(n.rawTier.split('-')[0])}</span></button>`).join('')||'<p class="tiny" style="padding:15px">没有匹配的公司，请更换商号、工商全称或 ID。</p>';
}
function refreshFactionControls(){
 const select=$('#factionSelect');if(!select)return;select.value=state.group;
 $('#factionBack').textContent=state.focus?'返回派系总览':'派系总览';
 const g=groupByName.get(state.group),notice=$('#factionEvidence');
 notice.hidden=state.mode!=='graph'||!!state.focus||!g;
 if(g){notice.innerHTML=`<summary>${esc(g.name)} · ${g.memberIds.length} 条表内记录 · 派系表第 ${g.provenance.row} 行</summary><p>${esc(g.description||'源流/特征未记录')}</p><p>归类维度：${esc(g.dimension||'未记录')} · 置信度：${esc(g.confidence||'未记录')}</p><p>成员公司：${esc(g.members||'派系表未填写成员公司')}</p>${g.unresolvedMembers.length?`<p>待匹配成员：${g.unresolvedMembers.map(m=>esc(m.token)).join('、')}</p>`:''}<p>派系归类仅表示工作簿中的分组；连线逐条来自关系表，归类不自动证明共同控制。</p>`;}
}
function filteredGraph(){
 let ids;
 if(state.focus){ids=new Set([state.focus]);DATA.links.forEach(e=>{if(e.source===state.focus||e.target===state.focus){ids.add(e.source);ids.add(e.target);}});}
 else ids=state.group?new Set(groupByName.get(state.group)?.memberIds||[]):new Set(factionIds);
 const nodes=DATA.nodes.filter(n=>ids.has(n.id));
 return {nodes,edges:DATA.links.filter(e=>ids.has(e.source)&&ids.has(e.target))};
}
function svgEl(tag,attrs={},text){const el=document.createElementNS(NS,tag);for(const[k,v]of Object.entries(attrs))el.setAttribute(k,v);if(text!=null)el.textContent=text;return el;}
function calculateLayout(nodes,w,h){
 const pos=new Map();if(!nodes.length)return pos;
 if(nodes.length<=12){
  const cx=w/2,cy=h/2+12,rx=Math.max(65,Math.min(w/2-60,230)),ry=Math.max(75,Math.min(h/2-85,205));
  const focused=nodes.find(n=>n.id===state.focus),ring=sorted(nodes.filter(n=>n.id!==focused?.id));
  const radius=n=>({1:29,2:24,3:20,4:16,5:15}[n.tier]||16);
  if(focused)pos.set(focused.id,{id:focused.id,x:cx,y:cy,r:radius(focused)+3});
  ring.forEach((n,i)=>{const a=-Math.PI/2+i*Math.PI*2/ring.length;pos.set(n.id,{id:n.id,x:ring.length===1&&!focused?cx:cx+Math.cos(a)*rx,y:ring.length===1&&!focused?cy:cy+Math.sin(a)*ry,r:radius(n)});});
  return pos;
 }
 const W=Math.max(w,1160),H=Math.max(h,670),ids=new Set(nodes.map(n=>n.id));
 const edges=DATA.links.filter(e=>ids.has(e.source)&&ids.has(e.target)&&enabledEdge(e));
 const adj=new Map(nodes.map(n=>[n.id,[]]));edges.forEach(e=>{adj.get(e.source).push(e.target);adj.get(e.target).push(e.source);});
 const seen=new Set(),components=[];
 for(const n of sorted(nodes)){if(seen.has(n.id))continue;const q=[n.id],c=[];while(q.length){const id=q.pop();if(seen.has(id))continue;seen.add(id);c.push(byId.get(id));q.push(...adj.get(id).filter(t=>!seen.has(t)));}components.push(c);}
 components.sort((a,b)=>b.length-a.length||Math.min(...a.map(n=>n.tier||9))-Math.min(...b.map(n=>n.tier||9)));
 const weights=components.map(c=>Math.max(2.8,Math.sqrt(c.length)*1.35));
 const rows=components.length>9?3:components.length>3?2:1,lanes=Array.from({length:rows},()=>[]),sums=Array(rows).fill(0);
 components.forEach((c,i)=>{const j=sums.indexOf(Math.min(...sums));lanes[j].push({c,weight:weights[i]});sums[j]+=weights[i];});
 const seed=id=>[...id].reduce((a,c)=>((a*31+c.charCodeAt(0))>>>0),7)/4294967296;
 const particles=[];
 lanes.forEach((lane,row)=>{let cursor=70;const available=W-140;lane.forEach(({c,weight},ci)=>{const span=weight/sums[row]*available,cx=cursor+span/2,cy=80+(row+.5)*(H-150)/rows+(ci%2?16:-12);cursor+=span;
  sorted(c).forEach((n,i)=>{const a=i*2.399963+seed(n.id)*1.6,rr=c.length===1?0:Math.sqrt(i)*32;const p={id:n.id,x:cx+Math.cos(a)*rr,y:cy+Math.sin(a)*rr,ax:cx,ay:cy,r:n.tier===1?29:n.layoutIcon?23:n.tier===2?21:n.tier===3?17:n.external?16:12,vx:0,vy:0,main:!!(n.tier||n.layoutIcon||n.external)};particles.push(p);pos.set(n.id,p);});
 });});
 if(state.focus){const center=pos.get(state.focus);if(center){center.ax=W/2;center.ay=H/2;}}
 for(let step=0;step<340;step++){
  const cooling=1-step/420;
  for(const p of particles){p.vx+=(p.ax-p.x)*.035;p.vy+=(p.ay-p.y)*.035;}
  for(let i=0;i<particles.length;i++)for(let j=i+1;j<particles.length;j++){const a=particles[i],b=particles[j];let dx=b.x-a.x,dy=b.y-a.y,dist=Math.hypot(dx,dy)||.1;const min=a.r+b.r+((a.main&&b.main)?55:30);if(dist<min){const force=(min-dist)*.21,fx=dx/dist*force,fy=dy/dist*force;a.vx-=fx;a.vy-=fy;b.vx+=fx;b.vy+=fy;}const rep=5/(dist*dist+25);a.vx-=dx*rep;a.vy-=dy*rep;b.vx+=dx*rep;b.vy+=dy*rep;}
  for(const e of edges){const a=pos.get(e.source),b=pos.get(e.target),dx=b.x-a.x,dy=b.y-a.y,d=Math.hypot(dx,dy)||1;const f=(d-118)*.008;a.vx+=dx/d*f;a.vy+=dy/d*f;b.vx-=dx/d*f;b.vy-=dy/d*f;}
  for(const p of particles){p.vx*=.72;p.vy*=.72;p.x=Math.max(65,Math.min(W-70,p.x+p.vx*cooling));p.y=Math.max(85,Math.min(H-68,p.y+p.vy*cooling));}
 }
 const scale=Math.min((w-38)/(W-60),(h-55)/(H-80));
 for(const p of particles){p.x=w/2+(p.x-W/2)*scale;p.y=h/2+8+(p.y-H/2)*scale;p.r*=Math.max(.7,scale);}
 return pos;
}
function renderGraph(reset=true){if(state.mode!=='graph')return;const {nodes,edges}=filteredGraph();state.visible=nodes;state.edges=edges;const w=$('#stage').clientWidth,h=document.body.classList.contains('peer-mode')?$('#network').clientHeight:$('#stage').clientHeight;$('#network').setAttribute('viewBox',`0 0 ${w} ${h}`);if(reset)state.positions=calculateLayout(nodes,w,h);const pos=state.positions;$('#edgeLayer').replaceChildren();$('#nodeLayer').replaceChildren();$('#clusterLayer').replaceChildren();$('#defs').replaceChildren();
 for(const [kind,c]of Object.entries({capital:'#6faea3',people:'#a19ac6',pending:'#c4a76c',business:'#91b2d5'})){const marker=svgEl('marker',{id:'arrow-'+kind,viewBox:'0 0 10 10',refX:9,refY:5,markerWidth:6,markerHeight:6,orient:'auto-start-reverse'});marker.append(svgEl('path',{d:'M 0 0 L 10 5 L 0 10 z',fill:c}));$('#defs').append(marker);}
 const selected=state.selected,neighborIds=new Set([selected]);if(selected)edges.forEach(e=>{if(e.source===selected)neighborIds.add(e.target);if(e.target===selected)neighborIds.add(e.source);});
 // Disconnected components remain disconnected; position alone does not imply affiliation.
 edges.forEach((e,i)=>{const a=pos.get(e.source),b=pos.get(e.target);if(!a||!b)return;const dx=b.x-a.x,dy=b.y-a.y,len=Math.hypot(dx,dy)||1,ax=a.x+dx/len*(a.r+3),ay=a.y+dy/len*(a.r+3),bx=b.x-dx/len*(b.r+7),by=b.y-dy/len*(b.r+7);let bend=state.group?Math.min(35,len*.12):18;if(e.source>e.target)bend=-bend;const mx=(ax+bx)/2-dy/len*bend,my=(ay+by)/2+dx/len*bend,d=`M${ax},${ay} Q${mx},${my} ${bx},${by}`,color={capital:'#6faea3',people:'#a19ac6',pending:'#c4a76c',business:'#91b2d5'}[e.kind],active=selected&&(e.source===selected||e.target===selected),dim=selected&&!active;const p=svgEl('path',{d,stroke:color,'stroke-width':active?2:1.3,opacity:dim?.12:active?.95:.52,class:'edge','stroke-dasharray':e.kind==='people'?'5 5':e.kind==='pending'?'3 6':'',...(e.kind==='capital'&&e.directed!==false?{'marker-end':'url(#arrow-capital)'}:{})});const hit=svgEl('path',{d,class:'edge-hit',tabindex:0,role:'button','aria-label':`${byId.get(e.source).name}与${byId.get(e.target).name}：${e.type}`});hit.addEventListener('click',ev=>{ev.stopPropagation();showEdge(e);});hit.addEventListener('keydown',ev=>{if(ev.key==='Enter')showEdge(e);});$('#edgeLayer').append(p,hit);if(active||state.focus){$('#edgeLayer').append(svgEl('text',{x:mx,y:my-4,'text-anchor':'middle',class:'edge-label'},e.type));}});
 nodes.forEach(n=>{const p=pos.get(n.id);if(!p)return;const active=selected===n.id,dim=(selected&&!neighborIds.has(n.id))||(state.query&&!matches(n)&&!active),color=n.reviewed?'#c2a877':colors[n.tier]||'#c8d2df';const minor=n.tier>=3&&nodes.length>65;
 const g=svgEl('g',{transform:`translate(${p.x},${p.y})`,class:`node${minor?' minor':''}${active?' selected':''}${dim?' dim':''}`,role:'button',tabindex:0,'aria-label':`${n.id} ${n.name} ${tierName(n)}`,'data-node':n.id});
 g.append(svgEl('circle',{r:p.r+3,fill:'#fff',stroke:active?'#5b97d2':color,'stroke-width':active?2.8:n.tier===1?1.8:1,opacity:1,class:'node-halo'}));
 if(n.icon){const id='clip-'+n.id.replace(/[^\w-]/g,'_'),clip=svgEl('clipPath',{id});clip.append(svgEl('circle',{r:p.r}));$('#defs').append(clip);g.append(svgEl('image',{href:n.icon.data,x:-p.r,y:-p.r,width:p.r*2,height:p.r*2,'clip-path':`url(#${id})`,preserveAspectRatio:'xMidYMid slice'}));}
 else{g.append(svgEl('circle',{r:p.r-1,fill:n.tier===1?'#f9f4e7':n.tier===2?'#eff4fb':'#ffffff'}));g.append(svgEl('text',{'text-anchor':'middle',dy:3.5,fill:n.external?'#8a98aa':minor?'#aab4bf':'#6684a8','font-size':minor?7:n.external?9:11,'font-weight':500},initial(n)));}
 const graphName=n.name.length>10&&n.name.includes(' · ')?n.name.split(' · ')[0]:n.name,limit=/^[A-Za-z]/.test(graphName)?12:7,label=graphName.length>limit?graphName.slice(0,limit)+'…':graphName;g.append(svgEl('text',{y:p.r+18,'text-anchor':'middle',class:'node-label',fill:'#273746','font-size':n.tier===1?14:n.external?11:12.5,'font-weight':n.tier===1?650:500,'paint-order':'stroke',stroke:'#f8fafc','stroke-width':2.5,'stroke-linejoin':'round'},label));
 if(n.tier>=1&&n.tier<=5){const ink=colors[n.tier];g.append(svgEl('rect',{x:p.r-9,y:-p.r-8,width:26,height:18,rx:7,fill:'#fff',stroke:ink,'stroke-width':1,class:'tier-badge-bg'}));g.append(svgEl('text',{x:p.r+4,y:-p.r+5,'text-anchor':'middle',class:'tier-badge-label',fill:'#344e65','font-size':11,'font-weight':600},'T'+(n.tier-1)));}
 g.append(svgEl('title',{},`${n.name}\n${n.full||n.role}\n${shortProduct(n)}\n${tierName(n)} · ${n.tierStatus}`));g.addEventListener('click',ev=>{ev.stopPropagation();selectCompany(n.id,false);});g.addEventListener('dblclick',ev=>{ev.stopPropagation();focusCompany(n.id);});g.addEventListener('keydown',ev=>{if(ev.key==='Enter')selectCompany(n.id,false);});$('#nodeLayer').append(g);});
 if(reset){state.transform={x:0,y:0,k:1};applyTransform();}
 $('#emptyState').classList.toggle('show',!nodes.length);
 $('#emptyState h3').textContent='当前派系暂无可映射成员';
 $('#emptyText').textContent='派系表没有填写成员公司，保留该派系选项；不从备注或外部关系自行补入公司。';
 $('#stageTitle').textContent=state.focus?`${byId.get(state.focus).name} · 公司关联图谱`:state.group||'国内休闲游戏公司派系图谱';
 $('#stageSubtitle').textContent=state.focus?(byId.get(state.focus).full||'工商全称未记录'):state.group?'仅显示派系表所列成员及成员间已登记关系':'按派系表成员映射 · 公司可归属多个派系 · 归类不等于持股关系';
 $('#viewCount').textContent=`${nodes.length} 条记录 · ${edges.length} 条关系`;
 refreshFactionControls();
}
function applyTransform(){const {x,y,k}=state.transform;$('#viewport').setAttribute('transform',`translate(${x} ${y}) scale(${k})`);$('#network').classList.toggle('show-labels',k>1.35);}
function zoom(factor,cx=$('#stage').clientWidth/2,cy=$('#stage').clientHeight/2){const t=state.transform,k=Math.max(.35,Math.min(3.5,t.k*factor)),ratio=k/t.k;t.x=cx-(cx-t.x)*ratio;t.y=cy-(cy-t.y)*ratio;t.k=k;applyTransform();}
function selectCompany(id,ensure=true){
 if(!byId.has(id))return;
 if(ensure){focusCompany(id);return;}
 state.selected=id;renderGraph(false);showDetail(byId.get(id));refreshNav();
}
function focusCompany(id){
 if(!byId.has(id))return;
 state.focus=id;state.group='';state.selected=id;state.query='';$('#search').value='';
 $('#sidebar').classList.remove('mobile-open');setMode('graph');renderGraph();showDetail(byId.get(id));refreshNav();
}
function closeDetail(){state.selected=null;$('#detail').classList.remove('open');refreshNav();renderGraph(false);}
function showDetail(n){
 const rels=DATA.links.filter(e=>e.source===n.id||e.target===n.id);
 const facts=Object.entries(n.raw).filter(([k])=>!['公司ID','常用名/品牌','工商全称','商号','梯队依据','信息来源','来源链接','备注'].includes(k));
 $('#detail').innerHTML=`<div class="detail-header"><button class="close" data-close aria-label="关闭详情">×</button><div class="idline">${esc(n.id)} · 公司表第 ${n.provenance.row} 行</div><h2>${esc(n.name)}</h2><div class="full">${esc(n.full||'工商全称未记录')}</div><div class="badges"><span class="badge ${tierClass(n)}">${esc(tierName(n))}</span><span class="badge">${esc(n.confidence||'置信度未记录')}</span></div><div class="detail-actions"><button class="btn primary" data-focus="${n.id}">展开 ${rels.length} 条关系</button><button class="btn" data-close>关闭卡片</button></div></div><div class="detail-section"><h3>代表产品</h3><div class="product">${iconHTML(n)}<div><strong>${esc(n.products||'未记录')}</strong><span>工作簿未提供图片，使用简称占位</span></div></div></div><div class="detail-section"><h3>梯队依据</h3><p>${esc(n.tierReason||'未记录')}</p></div><div class="detail-section"><h3>公司资料</h3><dl class="facts">${facts.map(([k,v])=>`<dt>${esc(k)}</dt><dd>${esc(v===null||v===''?'未记录':v)}</dd>`).join('')}</dl></div><div class="detail-section"><h3>关系证据 · ${rels.length} 条</h3>${rels.map(e=>`<button class="relationship" data-edge="${esc(e.id)}">${esc(byId.get(e.source===n.id?e.target:e.source).name)} · ${esc(e.type)}<small>${esc(e.confidence)} · ${esc(e.status)}${e.kind==='pending'?' · 主图默认隐藏':''}</small></button>`).join('')||'<p>表内没有登记关系，不代表不存在关联。</p>'}</div><div class="detail-section"><h3>资料出处</h3><p>${esc(n.source||'未记录')}</p>${linksHTML(n.url)}<details><summary>原表备注与完整记录</summary><p>${esc(n.note||'无额外备注')}</p><p>来源：${esc(DATA.meta.sourceFile)} / 公司表第 ${n.provenance.row} 行。指标沿用原表时间窗与单位。</p></details></div>`;
 $('#detail').classList.add('open');$('#detail').scrollTop=0;
}
function showEdge(e){if(!e)return;const a=byId.get(e.source),b=byId.get(e.target);$('#detail').innerHTML=`<div class="detail-header"><button class="close" data-close aria-label="关闭关系详情">×</button><div class="idline">${esc(e.id)} · 关系表第 ${e.provenance.row} 行</div><h2>${esc(e.type)}</h2><div class="full">${esc(a.full||'工商全称未记录')} → ${esc(b.full||'工商全称未记录')}</div><div class="badges"><span class="badge ${e.kind==='pending'?'alert':''}">${esc(e.confidence)}</span><span class="badge">${esc(e.status||'状态未记录')}</span></div></div><div class="detail-section"><h3>依据与限制</h3><p>${esc(e.info)}</p>${e.kind==='people'?'<div class="audit-strip">同法人、共同股东与人员交叉是不同证据；不能仅凭同法人或任职交叉证明同一实际控制人。</div>':''}<p>${esc(e.note)}</p><p>记录时间：${esc(e.time||'原表未填写')}</p>${e.originalType!==e.type?`<p>原表关系标签：${esc(e.originalType)}。图谱按证据内容作保守展示，底表原记录保留。</p>`:''}</div><div class="detail-section"><h3>信息来源</h3><p>${esc(e.citation||'原表未标来源')}</p>${linksHTML(e.url)||'<p>原表未提供可直接复核的来源链接。</p>'}</div><div class="detail-section"><button class="relationship" data-company="${a.id}">查看 ${esc(a.name)}</button><button class="relationship" data-company="${b.id}">查看 ${esc(b.name)}</button></div>`;$('#detail').classList.add('open');$('#detail').scrollTop=0;}
function renderList(){const arr=sorted(baseSelection(true).filter(matches));$('#listSummary').textContent=`当前 ${arr.length} 条 / 工作簿 ${companyNodes.length} 条 · 点击查看完整资料与来源`;
 $('#tableBody').innerHTML=arr.map(n=>`<tr tabindex="0" data-company="${esc(n.id)}" aria-label="查看 ${esc(n.name)}"><td><div class="title-cell">${iconHTML(n)}<div><strong>${esc(n.name)}</strong><p>${esc(n.full||'工商全称未记录')}</p></div></div></td><td><span class="badge ${tierClass(n)}">${esc(tierName(n))}</span></td><td class="optional"><div class="line-clamp">${esc(n.tierReason||'未记录')}</div></td><td><span class="tiny">${esc(n.confidence||'未记录')}</span></td></tr>`).join('')||'<tr><td colspan="4" class="geo-empty">当前筛选暂无公司，请清空搜索或选择完整名单。</td></tr>';
}
function renderAudit(){
 const pending=DATA.links.filter(e=>e.kind==='pending');
 $('#auditGrid').innerHTML=`<article class="audit-card"><div class="idline">WORKBOOK · DATA COVERAGE</div><h3>${DATA.nodes.length} 条记录 · ${DATA.links.length} 条关系</h3><p>${esc(DATA.meta.sourceFile)}</p><div class="verdict">${DATA.groups.length} 个派系 · ${pending.length} 条待核关系</div><p>本页展示工作簿已有证据。没有沿用参考站的外部核验结论，也没有新增独立核验。</p><h4>置信度分布 · 公司表</h4>${Object.entries(DATA.nodes.reduce((a,n)=>(a[n.confidence||'未记录']=(a[n.confidence||'未记录']||0)+1,a),{})).map(([k,v])=>`<p>${esc(k)}：${v} 条</p>`).join('')}</article><article class="audit-card"><div class="idline">METHODOLOGY · FROM WORKBOOK</div><h3>数据与分层口径</h3><p>五档分层按原表显示，未重新评级；合并、主体识别与指标口径保留原表说明。</p><details><summary>展开工作簿完整说明</summary>${DATA.instructions.map(v=>`<p>${esc(v)}</p>`).join('')}</details><h4>数据接入</h4><p>每条公司与关系均保留工作表、行号与原始字段，便于追溯。</p><a class="source-link" href="./data/atlas.json" download="atlas.json">下载当前数据 JSON ↗</a></article>`;
 $('#newRelations').innerHTML=`<h3>待核关系 · ${pending.length} 条</h3><p class="tiny">依据原表置信度中的“待核实 / 传闻”标识，默认不在关系图中显示。点击查看表内来源。</p>`+pending.map(e=>`<button class="relationship" data-edge="${esc(e.id)}">${esc(byId.get(e.source).name)} → ${esc(byId.get(e.target).name)} · ${esc(e.type)}<small>${esc(e.confidence)} · ${esc(e.info)}</small></button>`).join('');
}
function setMode(mode){state.mode=mode;document.body.classList.toggle('graph-mode',mode==='graph');refreshFactionControls();$$('[data-mode]').forEach(b=>{b.classList.toggle('active',b.dataset.mode===mode);b.setAttribute('aria-selected',String(b.dataset.mode===mode));});$('#stage').style.display=mode==='graph'?'':'none';$('#listPane').classList.toggle('active',mode==='list');$('#auditPane').classList.toggle('active',mode==='audit');$('#filters').style.display=mode==='audit'?'none':'';$('#canvasFooter').style.display=mode==='graph'?'':'none';$('#detail').classList.remove('open');if(mode==='list')renderList();else if(mode==='audit')renderAudit();else requestAnimationFrame(()=>renderGraph());}
function refresh(){refreshNav();refreshFactionControls();$$('[data-scope]').forEach(b=>b.classList.toggle('active',b.dataset.scope===state.scope&&!state.listAll));$('#peopleToggle').classList.toggle('active',state.people);$('#pendingToggle').classList.toggle('active',state.pending);$('#peopleToggle').setAttribute('aria-pressed',String(state.people));$('#pendingToggle').setAttribute('aria-pressed',String(state.pending));if(state.mode==='graph')renderGraph();else if(state.mode==='list')renderList();}
function reset(){Object.assign(state,{scope:'key',genre:'all',group:'',focus:null,selected:null,query:'',listAll:false,people:true,pending:false});$('#genre').value='all';$('#search').value='';$('#detail').classList.remove('open');refresh();}

document.addEventListener('click',ev=>{const company=ev.target.closest('[data-company]');if(company){selectCompany(company.dataset.company);return;}const edge=ev.target.closest('[data-edge]');if(edge){showEdge(DATA.links.find(e=>e.id===edge.dataset.edge));return;}const focus=ev.target.closest('[data-focus]');if(focus){focusCompany(focus.dataset.focus);return;}if(ev.target.closest('[data-close]'))closeDetail();const group=ev.target.closest('[data-group]');if(group){state.group=group.dataset.group;state.focus=null;state.selected=null;setMode('graph');$('#detail').classList.remove('open');$('#sidebar').classList.remove('mobile-open');refresh();}});
$$('[data-mode]').forEach(b=>b.onclick=()=>{if(b.dataset.mode==='list')state.listAll=true;setMode(b.dataset.mode);refresh();});$$('[data-scope]').forEach(b=>b.onclick=()=>{state.scope=b.dataset.scope;state.listAll=false;state.group='';state.focus=null;state.selected=null;$('#detail').classList.remove('open');refresh();});$('#genre').onchange=ev=>{state.genre=ev.target.value;state.focus=null;state.selected=null;$('#detail').classList.remove('open');refresh();};$('#peopleToggle').onclick=()=>{state.people=!state.people;refresh();};$('#pendingToggle').onclick=()=>{state.pending=!state.pending;refresh();};$('#navToggle').onclick=()=>{const open=!$('#sidebar').classList.contains('mobile-open');$('#sidebar').classList.toggle('mobile-open',open);if(open){refreshNav();$('#companySearch').focus();}};$('#search').oninput=ev=>{state.query=ev.target.value;refreshNav();if(state.mode==='list')renderList();else renderGraph(false);};$('#clearSearch').onclick=()=>{state.query='';$('#search').value='';refreshNav();if(state.mode==='list')renderList();else renderGraph(false);};$('#zoomIn').onclick=()=>zoom(1.2);$('#zoomOut').onclick=()=>zoom(1/1.2);$('#fitBtn').onclick=()=>{state.transform={x:0,y:0,k:1};applyTransform();};$('#resetBtn').onclick=reset;$('#emptyReset').onclick=reset;$('#auditShortcut').onclick=()=>setMode('audit');$('#methodBtn').onclick=()=>$('#method').showModal();$('#methodClose').onclick=$('#methodDone').onclick=()=>$('#method').close();
let pan=null;$('#network').addEventListener('pointerdown',ev=>{if(ev.target.closest('.node,.edge-hit')||(document.body.classList.contains('peer-mode')&&ev.pointerType==='touch'))return;pan={x:ev.clientX,y:ev.clientY,tx:state.transform.x,ty:state.transform.y};$('#network').setPointerCapture(ev.pointerId);$('#network').classList.add('grabbing');});$('#network').addEventListener('pointermove',ev=>{if(!pan)return;state.transform.x=pan.tx+ev.clientX-pan.x;state.transform.y=pan.ty+ev.clientY-pan.y;applyTransform();});const endPan=()=>{pan=null;$('#network').classList.remove('grabbing');};$('#network').addEventListener('pointerup',endPan);$('#network').addEventListener('pointercancel',endPan);$('#network').addEventListener('wheel',ev=>{if(document.body.classList.contains('peer-mode')&&!ev.ctrlKey)return;ev.preventDefault();const r=$('#network').getBoundingClientRect();zoom(ev.deltaY>0?.92:1.08,ev.clientX-r.left,ev.clientY-r.top);},{passive:false});
document.addEventListener('keydown',ev=>{if(ev.key==='Escape'){if($('#method').open)$('#method').close();closeDetail();$('#sidebar').classList.remove('mobile-open');}if(ev.key==='Enter'&&ev.target.matches('tr[data-company]'))selectCompany(ev.target.dataset.company);});
function notify(s){$('#toast').textContent=s;$('#toast').classList.add('show');clearTimeout(notify.timer);notify.timer=setTimeout(()=>$('#toast').classList.remove('show'),2600);}
function download(blob,name){const a=document.createElement('a'),u=URL.createObjectURL(blob);a.href=u;a.download=name;a.click();setTimeout(()=>URL.revokeObjectURL(u),2000);}
$('#csvBtn').onclick=()=>{const rows=[['公司ID','商号','工商全称','研究梯队','分层状态','分层依据','代表产品','来源链接'],...sorted(baseSelection(true).filter(matches)).map(n=>[n.id,n.name,n.full,tierName(n),n.tierStatus,n.tierReason,n.products,urls([...(n.tierSources||[]),...urls(n.url)]).join('; ')])];const cell=v=>'"'+String(v??'').replace(/^[=+@-]/,s=>"'"+s).replace(/"/g,'""')+'"';download(new Blob(['\ufeff'+rows.map(r=>r.map(cell).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'}),'公司研究清单-当前筛选.csv');notify('已导出当前筛选清单');};
let resizeTimer;new ResizeObserver(()=>{clearTimeout(resizeTimer);resizeTimer=setTimeout(()=>{if(state.mode==='graph')renderGraph();},80);}).observe($('#stage'));
$('#navToggle').textContent='公司列表';
$('#peopleToggle').textContent='团队 / 任职';
$('#filterNote').textContent='分层来自工作簿 · 节点大小仅表示梯队';
$('#stage').querySelector('.stage-bottom').textContent='滚轮缩放 · 拖动画布 · 放大显示全部名称 · 历史关系以来源时点为准';
$('#search').placeholder='搜索公司、产品、ID';
$('#search').oninput=ev=>{state.query=ev.target.value;refreshNav();if(state.mode==='list')renderList();else renderGraph(false);};
$('#clearSearch').onclick=()=>{state.query='';$('#search').value='';$('#sidebar').classList.remove('mobile-open');refreshNav();if(state.mode==='list')renderList();else renderGraph(false);};

$('#companySearch').oninput=e=>{state.navQuery=e.target.value;refreshNav();};
$('#companyNavClose').onclick=()=>$('#sidebar').classList.remove('mobile-open');
$('#factionSelect').innerHTML='<option value="">全部派系</option>'+DATA.groups.map(g=>`<option value="${esc(g.name)}">${esc(g.name)}</option>`).join('');
$('#factionSelect').onchange=e=>{state.group=e.target.value;state.focus=null;state.selected=null;state.query='';$('#search').value='';$('#detail').classList.remove('open');refresh();};
$('#factionBack').onclick=()=>{state.group='';state.focus=null;state.selected=null;state.query='';$('#search').value='';$('#detail').classList.remove('open');refresh();};
refreshStats();requestAnimationFrame(()=>refresh());
