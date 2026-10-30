/* Category peers share a card directory with relationship views, but never
   imply relationships between companies just because they share a category. */
(()=>{
 const tierNames={1:'T0 · 标杆',2:'T1 · 头部',3:'T2 · 中坚',4:'T3 · 长尾',5:'T4 · 观察',0:'未分级'};
 const board=document.createElement('section');board.id='rrPeerBoard';board.hidden=true;
 board.innerHTML=`<div class="pr-controls"><label>公司范围<select id="prRole"><option value="developer">研发／研运公司</option><option value="all">全部原表品类公司</option></select></label><label>主营品类<select id="prCategory"></select></label><label>研究梯队<select id="prTier"><option value="all">全部梯队</option><option value="key">头部优先 · T0/T1</option>${[1,2,3,4,5].map(t=>`<option value="${t}">${tierNames[t]}</option>`).join('')}</select></label><button class="btn" id="prReset">重置本组</button></div><nav id="prTierSummary" aria-label="按研究梯队筛选"></nav><div id="prCards"></div><p class="pr-footnote">品类与梯队沿用原表；卡片展示公司代表产品。具体研发与关系依据可点开公司查看。</p>`;
 $('#rrMain .rr-heading').after(board);
 board.insertAdjacentHTML('afterbegin','<nav class="pr-view-switch" aria-label="品类展示方式"><button data-peer-view="cards">分层对标</button><button data-peer-view="relations">关联图谱</button></nav>');
 $('#relationReader .rr-directory-title').innerHTML='公司研究目录<small>品类对标 · 公司关系</small>';
 const income=n=>AtlasResearch.revenue(n,window.ATLAS_REVENUE);
 const product=n=>String(n.verifiedProducts||n.originalProducts||n.products||'').split(/[；;、]/).filter(Boolean).slice(0,2).join(' · ');
 const selection=()=>sorted(baseSelection(false).filter(matches));
 const categories=n=>String(n.category||'').split('、').filter(c=>groupByName.get(state.group).selectionCategories.includes(c));
 function card(n){const r=income(n);return `<button class="pr-company" data-company="${esc(n.id)}" data-peer-company="${esc(n.id)}" aria-label="查看 ${esc(n.name)} 的公司资料"><span class="pr-company-head">${iconHTML(n)}<span><strong>${esc(n.name)}</strong><small>${esc(product(n)||n.role||'公司资料')}</small></span></span><span class="pr-categories">${categories(n).map(c=>`<span>${esc(c)}</span>`).join('')}</span><span class="pr-company-foot"><span class="revenue-tag revenue-${r.key}">${esc(r.label)}</span><span>${state.audience==='developer'?'查看公司 ›':esc(n.role||'原表资料')}</span></span></button>`;}
 function sync(){
  const g=groupByName.get(state.group),nodes=selection();
  const universe=companyNodes.filter(genreMatch).filter(audienceMatch).filter(n=>groupMatch(n,state.group)).filter(matches);
  $('#rrMain .rr-eyebrow').textContent='CATEGORY BENCHMARKS';
  $('#rrTitle').textContent=g.name.split(' · ')[0]+' · '+(state.audience==='developer'?'研发／研运对标':'品类公司对标');
  $('#rrSummary').textContent=`${nodes.length} 家公司 · 品类与梯队按原表，图标为公司代表产品`;
  const relations=state.peerView==='relations';for(const b of board.querySelectorAll('[data-peer-view]'))b.setAttribute('aria-pressed',String(b.dataset.peerView===state.peerView));
  $('#prCards').hidden=relations;$('#prTierSummary').hidden=relations;board.querySelector('.pr-footnote').hidden=relations;
  $('#prRole').value=state.audience==='developer'?'developer':'all';
  $('#prCategory').innerHTML='<option value="all">全部组内品类</option>'+g.selectionCategories.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');$('#prCategory').value=state.genre;
  $('#prTier').value=String(state.scope);
  $('#prTierSummary').innerHTML=[1,2,3,4,5,0].map(t=>({t,count:universe.filter(n=>(n.tier||0)===t).length})).filter(x=>x.count).map(({t,count})=>`<button data-pr-tier="${t||'all'}" aria-pressed="${String(state.scope)===String(t)}"><span>${tierNames[t]}</span><strong>${count}<small>家</small></strong></button>`).join('');
  $('#prCards').innerHTML=[1,2,3,4,5,0].map(t=>({t,rows:nodes.filter(n=>(n.tier||0)===t)})).filter(b=>b.rows.length).map(b=>`<section class="pr-tier" data-pr-band="${b.t}"><header><h3>${tierNames[b.t]}</h3><span>${b.rows.length} 家公司</span><i></i></header><div class="pr-grid">${b.rows.map(card).join('')}</div></section>`).join('')||'<div class="pr-empty">当前筛选没有匹配公司，可重置本组或调整筛选。</div>';
  state.visible=nodes;state.edges=[];$('#viewCount').textContent=nodes.length+' 家公司';
  $('#revenueCoverage').textContent=`当前 ${nodes.length} 家公司 · ${state.revenue==='all'?'全部收入方向':{domestic:'国内为主',overseas:'海外为主',balanced:'国内海外并重',unscoped:'仅关系主体'}[state.revenue]}`;
 }
 function change(){state.peerPage=0;state.selected=null;closeDetail();refresh();}
 board.addEventListener('click',e=>{const b=e.target.closest('[data-peer-view]');if(!b)return;state.peerView=b.dataset.peerView;if(state.peerView==='relations'){state.pending=true;state.readerExpanded=true;}change();});
 const groupChange=$('#factionSelect').onchange;
 $('#factionSelect').onchange=e=>{const g=groupByName.get(e.target.value);state.readerKind='all';state.readerExpanded=!!g?.companyFamily;if(g?.companyFamily)state.pending=true;groupChange(e);};
 $('#prRole').onchange=e=>{state.audience=e.target.value;scopeControl.value=state.audience;change();};
 $('#prCategory').onchange=e=>{state.genre=e.target.value;$('#genre').value=state.genre;change();};
 $('#prTier').onchange=e=>{state.scope=e.target.value;state.listAll=false;change();};
 $('#prReset').onclick=()=>{state.audience='developer';scopeControl.value='developer';state.genre='all';$('#genre').value='all';state.scope='all';state.query='';$('#search').value='';state.revenue='all';state.marketDirection='all';change();};
 const clearFilters=$('#clearViewFilters').onclick;
 const companyDetail=showDetail;showDetail=function(n){companyDetail(n);if(!n)return;const canonical=DATA.aliases[n.id]||n.id;const families=DATA.groups.filter(g=>g.companyFamily&&g.memberIds.some(id=>(DATA.aliases[id]||id)===canonical));if(families.length)$('#detail').insertAdjacentHTML('afterbegin','<div class="pr-family-links">'+families.map(g=>`<button class="btn" data-open-family="${esc(g.name)}">查看${esc(g.displayName||g.name)}完整关系 →</button>`).join('')+'</div>');};
 document.addEventListener('click',e=>{const b=e.target.closest('[data-open-family]');if(!b)return;state.focus=null;state.readerNetwork=false;$('#factionSelect').value=b.dataset.openFamily;$('#factionSelect').dispatchEvent(new Event('change',{bubbles:true}));setMode('graph');});
 $('#clearViewFilters').onclick=()=>{if(state.mode==='graph'&&isCategoryPeer()&&!state.routeActive)$('#prReset').click();else clearFilters();};
 $('#prTierSummary').onclick=e=>{const b=e.target.closest('[data-pr-tier]');if(b){state.scope=String(state.scope)===b.dataset.prTier?'all':b.dataset.prTier;change();}};
 async function exportCards(){
  const nodes=selection(),group=state.group,title=$('#rrTitle').textContent;if(!nodes.length){notify('当前筛选没有可导出的公司');return;}
  const button=$('#exportBtn');button.disabled=true;
  try{
   await document.fonts.ready;
   const load=url=>new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=url;});
   const icons=new Map(await Promise.all(nodes.map(async n=>[n.id,n.icon?await load(n.icon.data):null])));
   const bands=[1,2,3,4,5,0].map(t=>({t,rows:nodes.filter(n=>(n.tier||0)===t)})).filter(b=>b.rows.length),w=1240,cw=280,ch=170,gap=16,cols=4;
   const h=120+bands.reduce((sum,b)=>sum+56+Math.ceil(b.rows.length/cols)*(ch+gap),0),scale=Math.min(2,16000/h,Math.sqrt(32000000/(w*h)));
   const canvas=document.createElement('canvas');canvas.width=Math.ceil(w*scale);canvas.height=Math.ceil(h*scale);const c=canvas.getContext('2d'),font=getComputedStyle(document.body).fontFamily;
   c.scale(scale,scale);c.fillStyle='#f5f8fb';c.fillRect(0,0,w,h);
   const text=(str,x,y,width,maxLines,size,color,weight=400)=>{c.font=weight+' '+size+'px '+font;c.fillStyle=color;const lines=[];let line='';for(const char of String(str)){if(c.measureText(line+char).width>width&&line){lines.push(line);line='';}line+=char;}if(line)lines.push(line);lines.slice(0,maxLines).forEach((value,i)=>{if(i===maxLines-1&&lines.length>maxLines){while(c.measureText(value+'…').width>width)value=value.slice(0,-1);value+='…';}c.fillText(value,x,y+i*(size+4));});};
   text(title,36,38,w-72,1,24,'#233e52',600);text(nodes.length+' 家公司 · 品类与梯队按原表；图标为公司代表产品',36,65,w-72,1,13,'#718797');
   let y=95;for(const band of bands){text(tierNames[band.t]+' · '+band.rows.length+' 家',36,y+24,w-72,1,16,'#375b75',600);y+=44;
    band.rows.forEach((n,i)=>{const x=36+i%cols*(cw+gap),top=y+Math.floor(i/cols)*(ch+gap),r=income(n);c.beginPath();c.roundRect(x,top,cw,ch,10);c.fillStyle='white';c.fill();c.strokeStyle='#d5e2ec';c.lineWidth=1;c.stroke();
     const icon=icons.get(n.id);if(icon){c.save();c.beginPath();c.roundRect(x+16,top+17,44,44,10);c.clip();c.drawImage(icon,x+16,top+17,44,44);c.restore();}else text(initial(n),x+20,top+45,36,1,15,'#7b8f9e');
     text(n.name,x+72,top+32,190,2,16,'#29475b',600);text(product(n)||n.role,x+16,top+88,cw-32,2,12,'#718797');
     const g=groupByName.get(group),tags=String(n.category||'').split('、').filter(t=>g.selectionCategories.includes(t));text(tags.join(' · '),x+16,top+134,cw-32,1,11,'#607d92');text(r.label,x+16,top+154,cw-32,1,11,r.color);
    });y+=Math.ceil(band.rows.length/cols)*(ch+gap)+12;
   }
   const blob=await new Promise(resolve=>canvas.toBlob(resolve,'image/png'));if(!blob)throw Error('PNG export failed');download(blob,title+'.png');notify('已保存当前品类对标卡片与产品图标');
  }catch(e){console.error('Peer card export:',e);notify('导出失败，请稍后重试');}finally{button.disabled=false;}
 }
 window.AtlasPeerReader={sync,selection,export:exportCards};
 window.addEventListener('DOMContentLoaded',()=>{
  const params=new URLSearchParams(location.search),family=params.get('family');
  const familyGroup=DATA.groups.find(g=>g.slug===family);if(familyGroup){$('#factionSelect').value=familyGroup.name;$('#factionSelect').dispatchEvent(new Event('change',{bubbles:true}));setMode('graph');return;}
  const name={merge:'二合 · 国内研发对标',match3:'三消 · 国内研发对标',casual:'轻度休闲 · 研发对标'}[new URLSearchParams(location.search).get('peer')];
  if(name){if(params.get('view')==='relations'){state.peerView='relations';state.pending=true;}$('#factionSelect').value=name;$('#factionSelect').dispatchEvent(new Event('change',{bubbles:true}));if(state.peerView==='relations')state.readerExpanded=true;setMode('graph');}
 });
})();
