/* Category peers share a card directory with relationship views, but never
   imply relationships between companies just because they share a category. */
(()=>{
 const tierNames={1:'T0 · 标杆',2:'T1 · 头部',3:'T2 · 中坚',4:'T3 · 长尾',5:'T4 · 观察',0:'未分级'};
 const board=document.createElement('section');board.id='rrPeerBoard';board.hidden=true;
 board.innerHTML=`<div class="pr-controls"><label>公司范围<select id="prRole"><option value="developer">研发／研运公司</option><option value="all">全部品类公司</option></select></label><label>主营品类<select id="prCategory"></select></label><label><span id="prTierLabel">分轨梯队</span><select id="prTier"><option value="all">全部梯队</option><option value="key">头部优先 · T0/T1</option>${[1,2,3,4,5].map(t=>`<option value="${t}">${tierNames[t]}</option>`).join('')}</select></label><button class="btn" id="prReset">重置本组</button></div><nav id="prTierSummary" aria-label="按研究梯队筛选"></nav><div id="prCards"></div><p class="pr-footnote">公司评级反映该方向的样本表现，具体产品与业务角色见公司资料。</p>`;
 $('#rrMain .rr-heading').after(board);
 board.insertAdjacentHTML('afterbegin','<nav class="pr-view-switch" aria-label="品类展示方式"><button data-peer-view="cards">分层对标</button><button data-peer-view="relations">公司关系图</button></nav>');
 $('#relationReader .rr-directory-title').innerHTML='公司研究目录<small>品类对标 · 公司关系</small>';
 const viewSwitch=board.querySelector('.pr-view-switch');$('#rrMain .rr-heading').after(viewSwitch);
 const income=n=>AtlasResearch.revenue(n,window.ATLAS_REVENUE);
 const product=n=>AtlasExecutive.product(n).text;
 const selection=()=>AtlasGrades.select();
 const categories=n=>String(n.category||'').split('、').filter(c=>groupByName.get(state.group).selectionCategories.includes(c));
 function card(n){const r=income(n),id=AtlasExecutive.canonical(n.id),count=DATA.links.filter(e=>e.source===id||e.target===id).length;return `<article class="pr-company-tile"><button class="pr-company" data-company="${esc(n.id)}" data-peer-company="${esc(n.id)}" aria-label="查看 ${esc(n.name)} 的公司资料"><span class="pr-company-head">${iconHTML(AtlasExecutive.productNode(n))}<span><strong>${esc(n.name)}</strong><small>${esc(product(n))}</small><small class="pr-icon-context">${AtlasExecutive.product(n).exact?'图示：本品类产品':'公司代表作：'+esc(n.icon?.title||'简称标识')}</small></span></span><span class="pr-categories">${categories(n).map(c=>`<span>${esc(c)}</span>`).join('')}</span><span class="pr-grade-metric">${esc(AtlasGrades.metric(n))}</span><span class="pr-company-foot"><span class="pr-grade-tag">公司${AtlasGrades.labels[state.gradeDirection]}评级 T${AtlasGrades.entry(n).tier}</span><span class="revenue-tag revenue-${r.key}">收入重心：${esc(r.label)}</span><span>${state.audience==='developer'?'查看公司 ›':esc(n.role||'公司资料')}</span></span></button><div class="pr-card-actions">${count?`<button data-peer-relations="${esc(n.id)}" aria-label="查看 ${esc(n.name)} 的关系">看关系 <span>${count} 条直接记录</span> →</button>`:'<span class="pr-no-relations">资料中未收录关联</span>'}</div></article>`;}
 function sync(){
  const g=groupByName.get(state.group),nodes=selection();
  const universe=AtlasGrades.universe();
  $('#rrMain .rr-eyebrow').textContent='CATEGORY BENCHMARKS';
  $('#rrTitle').textContent=AtlasGrades.labels[state.gradeDirection]+'分级 · '+g.name.split(' · ')[0]+' · '+(state.audience==='developer'?'研发／研运公司':'品类公司');
  $('#rrSummary').textContent=`${nodes.length} 家公司 · 按公司${AtlasGrades.labels[state.gradeDirection]}评级排序`;
  viewSwitch.querySelector('[data-peer-view="cards"]').textContent='公司对标 · '+nodes.length;viewSwitch.querySelector('[data-peer-view="relations"]').textContent='公司关系图';
  const relations=state.peerView==='relations';for(const b of viewSwitch.querySelectorAll('[data-peer-view]'))b.setAttribute('aria-pressed',String(b.dataset.peerView===state.peerView));
  $('#prCards').hidden=relations;$('#prTierSummary').hidden=relations;board.querySelector('.pr-footnote').hidden=relations;
  $('#prRole').value=state.audience==='developer'?'developer':'all';
  $('#prCategory').innerHTML='<option value="all">全部组内品类</option>'+g.selectionCategories.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');$('#prCategory').value=state.genre;
  $('#prTier').value=String(state.scope);$('#prTierLabel').textContent=AtlasGrades.labels[state.gradeDirection]+'分轨梯队';
  $('#prTierSummary').innerHTML=[1,2,3,4,5,0].map(t=>({t,count:universe.filter(n=>AtlasGrades.tier(n)===t).length})).filter(x=>x.count).map(({t,count})=>`<button data-pr-tier="${t||'all'}" aria-pressed="${String(state.scope)===String(t)}"><span>${tierNames[t]}</span><strong>${count}<small>家</small></strong></button>`).join('');
  $('#prCards').innerHTML=[1,2,3,4,5,0].map(t=>({t,rows:nodes.filter(n=>AtlasGrades.tier(n)===t)})).filter(b=>b.rows.length).map(b=>`<section class="pr-tier" data-pr-band="${b.t}"><header><h3 class="market-grade-label">${AtlasGrades.labels[state.gradeDirection]} ${tierNames[b.t]}</h3><span>${b.rows.length} 家公司</span><i></i></header><div class="pr-grid">${b.rows.map(card).join('')}</div></section>`).join('')||'<div class="pr-empty">符合当前条件 0 家。可放宽条件查看本品类其他公司。<br><button class="btn" data-source-category>查看本品类全部公司</button></div>';
  state.visible=nodes;state.edges=[];$('#viewCount').textContent=nodes.length+' 家公司';
  $('#revenueCoverage').textContent=`当前 ${nodes.length} 家公司 · ${state.revenue==='all'?'全部收入方向':{domestic:'国内为主',overseas:'海外为主',balanced:'国内海外并重',unscoped:'仅关系主体'}[state.revenue]}`;
 }
 function change(){state.readerFocus='';state.readerComponent='';state.readerAllLinks=false;state.peerPage=0;state.selected=null;closeDetail();refresh();}
 viewSwitch.addEventListener('click',e=>{const b=e.target.closest('[data-peer-view]');if(!b)return;state.peerView=b.dataset.peerView;if(state.peerView==='relations'){state.pending=true;state.readerExpanded=true;}change();});
 board.addEventListener('click',e=>{const b=e.target.closest('[data-peer-relations]');if(!b)return;
  AtlasNavigation.openCompany(b.dataset.peerRelations);
 });
 const groupChange=$('#factionSelect').onchange;
 $('#factionSelect').onchange=e=>{state.readerComponent='';state.readerAllLinks=false;const g=groupByName.get(e.target.value);state.readerKind='all';state.readerExpanded=!g?.analysisType;if(!g?.analysisType)state.pending=true;groupChange(e);};
 $('#prRole').onchange=e=>{state.audience=e.target.value;scopeControl.value=state.audience;change();};
 $('#prCategory').onchange=e=>{state.genre=e.target.value;$('#genre').value=state.genre;change();};
 $('#prTier').onchange=e=>{state.scope=e.target.value;state.listAll=false;change();};
 $('#prReset').onclick=()=>{state.audience='developer';scopeControl.value='developer';state.genre='all';$('#genre').value='all';state.scope='all';state.query='';$('#search').value='';state.revenue='all';state.marketDirection='all';change();};
 const clearFilters=$('#clearViewFilters').onclick;
 const companyDetail=showDetail;showDetail=function(n){companyDetail(n);if(!n)return;const canonical=DATA.aliases[n.id]||n.id;const families=DATA.groups.filter(g=>g.companyFamily&&g.memberIds.some(id=>(DATA.aliases[id]||id)===canonical));if(families.length)$('#detail').insertAdjacentHTML('afterbegin','<div class="pr-family-links">'+families.map(g=>`<button class="btn" data-open-family="${esc(g.name)}">查看${esc(g.displayName||g.name)}完整关系 →</button>`).join('')+'</div>');};
 document.addEventListener('click',e=>{const b=e.target.closest('[data-open-family]');if(b)AtlasNavigation.openFamily(b.dataset.openFamily);});
 $('#clearViewFilters').onclick=()=>{if(state.mode==='graph'&&isCategoryPeer()&&!state.routeActive)$('#prReset').click();else clearFilters();};
 $('#prTierSummary').onclick=e=>{const b=e.target.closest('[data-pr-tier]');if(b){state.scope=String(state.scope)===b.dataset.prTier?'all':b.dataset.prTier;change();}};
 async function exportCards(){
  const direction=state.gradeDirection,nodes=selection(),group=state.group,title=$('#rrTitle').textContent;if(!nodes.length){notify('当前筛选没有可导出的公司');return;}
  const products=new Map(nodes.map(n=>[n.id,{text:product(n),exact:AtlasExecutive.product(n).exact,icon:AtlasExecutive.productNode(n).icon?.data}]));
  const button=$('#exportBtn');button.disabled=true;
  try{
   await document.fonts.ready;
   const load=url=>new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=url;});
   const icons=new Map(await Promise.all(nodes.map(async n=>[n.id,products.get(n.id).icon?await load(products.get(n.id).icon):null])));
   const bands=[1,2,3,4,5,0].map(t=>({t,rows:nodes.filter(n=>AtlasGrades.tier(n,direction)===t)})).filter(b=>b.rows.length),w=1240,cw=378,ch=248,gap=16,cols=3;
   const h=120+bands.reduce((sum,b)=>sum+56+Math.ceil(b.rows.length/cols)*(ch+gap),0),scale=Math.min(2,16000/h,Math.sqrt(32000000/(w*h)));
   const canvas=document.createElement('canvas');canvas.width=Math.ceil(w*scale);canvas.height=Math.ceil(h*scale);const c=canvas.getContext('2d'),font=getComputedStyle(document.body).fontFamily;
   c.scale(scale,scale);c.fillStyle='#f5f8fb';c.fillRect(0,0,w,h);
   const text=(str,x,y,width,maxLines,size,color,weight=400)=>{c.font=weight+' '+size+'px '+font;c.fillStyle=color;const lines=[];let line='';for(const char of String(str)){if(c.measureText(line+char).width>width&&line){lines.push(line);line='';}line+=char;}if(line)lines.push(line);lines.slice(0,maxLines).forEach((value,i)=>{if(i===maxLines-1&&lines.length>maxLines){while(c.measureText(value+'…').width>width)value=value.slice(0,-1);value+='…';}c.fillText(value,x,y+i*(size+4));});};
   text(title,36,38,w-72,1,24,'#233e52',600);text(nodes.length+' 家公司 · '+AtlasGrades.labels[direction]+'公司评级；不等于该品类单独评级',36,65,w-72,1,13,'#718797');
   let y=95;for(const band of bands){text(AtlasGrades.labels[direction]+' '+tierNames[band.t]+' · '+band.rows.length+' 家',36,y+24,w-72,1,16,'#375b75',600);y+=44;
    band.rows.forEach((n,i)=>{const x=36+i%cols*(cw+gap),top=y+Math.floor(i/cols)*(ch+gap),r=income(n);c.beginPath();c.roundRect(x,top,cw,ch,10);c.fillStyle='white';c.fill();c.strokeStyle='#d5e2ec';c.lineWidth=1;c.stroke();
     const icon=icons.get(n.id);if(icon){c.save();c.beginPath();c.roundRect(x+16,top+17,44,44,10);c.clip();c.drawImage(icon,x+16,top+17,44,44);c.restore();}else text(initial(n),x+20,top+45,36,1,15,'#7b8f9e');
     text(n.name,x+72,top+32,cw-88,2,18,'#29475b',600);text(products.get(n.id).text||n.role,x+16,top+92,cw-32,2,14,'#526777');text(products.get(n.id).exact?'图示：本品类产品':'图标：公司代表作',x+16,top+142,cw-32,1,12,'#5c7182');
     const g=groupByName.get(group),tags=String(n.category||'').split('、').filter(t=>g.selectionCategories.includes(t));text(tags.join(' · '),x+16,top+170,cw-32,1,12,'#526777');text('公司'+AtlasGrades.labels[direction]+'评级 T'+AtlasGrades.entry(n,direction).tier,x+16,top+198,cw-32,1,13,'#29475b',600);text('收入重心：'+r.label,x+16,top+224,cw-32,1,13,r.color);
    });y+=Math.ceil(band.rows.length/cols)*(ch+gap)+12;
   }
   const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw Error('PNG export failed');download(blob,title+'.png');notify('已保存当前品类公司与产品图标');
  }catch(e){console.error('Peer card export:',e);notify('导出失败，请稍后重试');}finally{button.disabled=false;}
 }
 window.AtlasPeerReader={sync,selection,export:exportCards};
 window.addEventListener('DOMContentLoaded',()=>{
  if(window.AtlasShare?.hasState)return;const params=new URLSearchParams(location.search),family=params.get('family');
  const familyGroup=DATA.groups.find(g=>g.slug===family);if(familyGroup){$('#factionSelect').value=familyGroup.name;$('#factionSelect').dispatchEvent(new Event('change',{bubbles:true}));setMode('graph');return;}
  const name={merge:'二合 · 国内研发对标',match3:'三消 · 国内研发对标',casual:'轻度休闲 · 研发对标'}[new URLSearchParams(location.search).get('peer')];
  if(name){if(params.get('view')==='relations'){state.peerView='relations';state.pending=true;}$('#factionSelect').value=name;$('#factionSelect').dispatchEvent(new Event('change',{bubbles:true}));if(state.peerView==='relations')state.readerExpanded=true;setMode('graph');}
 });
})();
