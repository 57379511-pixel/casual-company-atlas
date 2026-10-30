/* Category peers share a card directory with relationship views, but never
   imply relationships between companies just because they share a category. */
(()=>{
 const tierNames={1:'T0 · 标杆',2:'T1 · 头部',3:'T2 · 中坚',4:'T3 · 长尾',5:'T4 · 观察',0:'未分级'};
 const board=document.createElement('section');board.id='rrPeerBoard';board.hidden=true;
 board.innerHTML=`<div class="pr-controls"><label>公司范围<select id="prRole"><option value="developer">研发／研运公司</option><option value="all">全部品类公司</option></select></label><label>业务品类<select id="prCategory"></select></label><label><span id="prTierLabel">分轨梯队</span><select id="prTier"><option value="all">全部梯队</option><option value="key">头部优先 · T0/T1</option>${[1,2,3,4,5].map(t=>`<option value="${t}">${tierNames[t]}</option>`).join('')}</select></label><button class="btn" id="prReset">重置本组</button></div><nav id="prTierSummary" aria-label="按研究梯队筛选"></nav><div id="prCards"></div><p class="pr-footnote">公司评级不等于品类实力；图标为代表产品，补充标签见公司详情。</p>`;
 $('#rrMain .rr-heading').after(board);
 board.insertAdjacentHTML('afterbegin','<nav class="pr-view-switch" aria-label="品类展示方式"><button data-peer-view="cards">分层对标</button><button data-peer-view="relations">公司关系图</button></nav>');
 $('#relationReader .rr-directory-title').innerHTML='公司研究目录<small>品类对标 · 公司关系</small>';
 const viewSwitch=board.querySelector('.pr-view-switch');$('#rrMain .rr-heading').after(viewSwitch);
 const income=n=>AtlasResearch.revenue(n,window.ATLAS_REVENUE);
 const selection=()=>AtlasGrades.select();
 const expandedSamples=new Set();
 board.addEventListener('toggle',e=>{if(e.target.matches('.pr-samples')){const id=e.target.dataset.sampleCompany;if(e.target.open)expandedSamples.add(id);else expandedSamples.delete(id);}},true);
 const selectedCategories=()=>state.genre!=='all'?[state.genre]:groupByName.get(state.group)?.allCategories?[]:groupByName.get(state.group)?.selectionCategories||[];
 const representative=n=>String(n.icon?.title||n.verifiedProducts||n.originalProducts||'公司资料').replace(/ - 官方预约 - TapTap$/,'');
 function portfolio(n){
  const p=AtlasPortfolio.profile(n),selected=selectedCategories();
  const products=[...p.products].sort((a,b)=>Number(selected.includes(b.category))-Number(selected.includes(a.category)));
  const match=selected.filter(c=>p.tags.includes(c)&&!products.some(v=>v.category===c));
  const note=match.length?`<p class="pr-match-note">${match.map(c=>esc(c)+'：'+(p.supplement.some(v=>v.category===c)?'补充标签命中':p.samples.find(v=>v.category===c)?.count?'分类样本 '+p.samples.find(v=>v.category===c).count+' 款':'分类记录命中')).join('；')}</p>`:'';
  const productRows=products.map(v=>`<button class="pr-product-row ${selected.includes(v.category)?'is-matched':''}" data-company="${esc(n.id)}" data-portfolio-product="${esc(v.key)}" aria-label="查看 ${esc(v.title)} 的品类依据">${v.icon?`<img class="pr-product-icon" src="${esc(v.icon)}" alt="${esc(v.title)} 图标" loading="lazy">`:''}<span><small>${esc(v.category)}${v.mechanic?' · '+esc(v.mechanic):''}</small><strong>${esc(v.title)}</strong></span></button>`).join('');
  const fallback=!products.length?`<div class="pr-representative"><small>公司代表作</small><span>${esc(representative(n))}</span></div>`:'';
  const samples=p.samples.length?`<details class="pr-samples" data-sample-company="${esc(n.id)}" ${expandedSamples.has(n.id)?'open':''}><summary>样本分类 · ${p.samples.length} 项</summary><ul>${p.samples.map(c=>`<li class="${selected.includes(c.category)?'is-matched':''}"><span>${esc(c.category)}</span><small>${c.count?c.count+' 款样本':'分类记录'}</small></li>`).join('')}</ul><p>分类样本可能交叉，不相加为产品总数或独立业务数。</p></details>`:'';
  return `<div class="pr-portfolio" data-portfolio-company="${esc(n.id)}">${note}${selected.length&&products.length&&!products.some(v=>selected.includes(v.category))?'<small class="pr-other-products">其他品类代表产品</small>':''}${productRows}${fallback}${samples}<button class="pr-portfolio-more" data-company="${esc(n.id)}" data-portfolio-open>查看产品与分类 ›</button></div>`;
 }
 function card(n){const r=income(n),id=AtlasExecutive.canonical(n.id),count=DATA.links.filter(e=>e.source===id||e.target===id).length;return `<article class="pr-company-tile" data-directory-company="${esc(n.id)}"><button class="pr-company" data-company="${esc(n.id)}" data-peer-company="${esc(n.id)}" aria-label="查看 ${esc(n.name)} 的公司资料"><span class="pr-company-head"><span title="公司代表作图标：${esc(n.icon?.title||n.name)}">${iconHTML(n)}</span><span><strong>${esc(n.name)}</strong><small>${esc(n.city||'')} · 查看公司</small></span></span></button>${portfolio(n)}<div class="pr-company-foot"><span class="pr-grade-tag">公司${AtlasGrades.labels[state.gradeDirection]}评级 T${AtlasGrades.entry(n).tier}</span><span class="pr-grade-metric">${esc(AtlasGrades.metric(n))}</span><span class="revenue-tag revenue-${r.key}">${esc(r.label)}</span></div><div class="pr-card-actions">${count?`<button data-peer-relations="${esc(n.id)}" aria-label="查看 ${esc(n.name)} 的关系">看关系 →<span>${count} 条直接记录</span></button>`:'<span class="pr-no-relations">未收录关系</span>'}</div></article>`;}
 function sync(){
  const g=groupByName.get(state.group),nodes=selection();
  const universe=AtlasGrades.universe();
  $('#rrMain .rr-eyebrow').textContent='CATEGORY BENCHMARKS';
  $('#rrTitle').textContent=AtlasGrades.labels[state.gradeDirection]+'分级 · '+(g.allCategories?'公司总览':g.name.split(' · ')[0]);
  $('#rrSummary').textContent=`${nodes.length} 家公司 · ${state.audience==='developer'?'研发／研运':'全部角色'} · 按公司${AtlasGrades.labels[state.gradeDirection]}评级排序 · 每家公司仅列一次`;
  viewSwitch.querySelector('[data-peer-view="cards"]').textContent='公司对标 · '+nodes.length;viewSwitch.querySelector('[data-peer-view="relations"]').textContent='公司关系图';
  const relations=state.peerView==='relations';for(const b of viewSwitch.querySelectorAll('[data-peer-view]'))b.setAttribute('aria-pressed',String(b.dataset.peerView===state.peerView));
  $('#prCards').hidden=relations;$('#prTierSummary').hidden=relations;board.querySelector('.pr-footnote').hidden=relations;
  $('#prRole').value=state.audience==='developer'?'developer':'all';
  $('#prCategory').innerHTML='<option value="all">不限业务品类</option>'+g.selectionCategories.map(c=>`<option value="${esc(c)}">${esc(c)}</option>`).join('');$('#prCategory').value=state.genre;
  $('#prTier').value=String(state.scope);$('#prTierLabel').textContent=AtlasGrades.labels[state.gradeDirection]+'分轨梯队';
  $('#prTierSummary').innerHTML=[1,2,3,4,5,0].map(t=>({t,count:universe.filter(n=>AtlasGrades.tier(n)===t).length})).filter(x=>x.count).map(({t,count})=>`<button data-pr-tier="${t||'all'}" aria-pressed="${String(state.scope)===String(t)}"><span>${tierNames[t]}</span><strong>${count}<small>家</small></strong></button>`).join('');
  $('#prCards').classList.add('pr-company-list');
  $('#prCards').innerHTML=[1,2,3,4,5,0].map(t=>({t,rows:nodes.filter(n=>AtlasGrades.tier(n)===t)})).filter(b=>b.rows.length).map(b=>`<section class="pr-tier" data-pr-band="${b.t}"><header><h3 class="market-grade-label">${AtlasGrades.labels[state.gradeDirection]} ${tierNames[b.t]}</h3><span>${b.rows.length} 家公司</span><i></i></header><div class="pr-list-head" aria-hidden="true"><span>公司</span><span>代表产品 / 品类</span><span>${AtlasGrades.labels[state.gradeDirection]}评级 / 表现</span><span>关联</span></div><div class="pr-grid">${b.rows.map(card).join('')}</div></section>`).join('')||'<div class="pr-empty">符合当前条件 0 家。可放宽条件查看本品类其他公司。<br><button class="btn" data-source-category>查看本品类全部公司</button></div>';
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
  const direction=state.gradeDirection,nodes=selection(),selected=selectedCategories(),title=$('#rrTitle').textContent;if(!nodes.length){notify('当前筛选没有可导出的公司');return;}
  const portfolios=new Map(nodes.map(n=>[n.id,AtlasPortfolio.profile(n)]));
  const button=$('#exportBtn');button.disabled=true;
  try{
   await document.fonts.ready;
   const load=url=>new Promise(resolve=>{const img=new Image();img.onload=()=>resolve(img);img.onerror=()=>resolve(null);img.src=url;});
   const icons=new Map(await Promise.all(nodes.map(async n=>[n.id,n.icon?.data?await load(n.icon.data):null])));
   const bands=[1,2,3,4,5,0].map(t=>({t,rows:nodes.filter(n=>AtlasGrades.tier(n,direction)===t)})).filter(b=>b.rows.length),w=1240,cw=575,ch=310,gap=18,cols=2;
   const h=120+bands.reduce((sum,b)=>sum+56+Math.ceil(b.rows.length/cols)*(ch+gap),0),scale=Math.min(2,16000/h,Math.sqrt(32000000/(w*h)));
   const canvas=document.createElement('canvas');canvas.width=Math.ceil(w*scale);canvas.height=Math.ceil(h*scale);const c=canvas.getContext('2d'),font=getComputedStyle(document.body).fontFamily;
   c.scale(scale,scale);c.fillStyle='#f5f8fb';c.fillRect(0,0,w,h);
   const text=(str,x,y,width,maxLines,size,color,weight=400)=>{c.font=weight+' '+size+'px '+font;c.fillStyle=color;const lines=[];let line='';for(const char of String(str)){if(c.measureText(line+char).width>width&&line){lines.push(line);line='';}line+=char;}if(line)lines.push(line);lines.slice(0,maxLines).forEach((value,i)=>{if(i===maxLines-1&&lines.length>maxLines){while(c.measureText(value+'…').width>width)value=value.slice(0,-1);value+='…';}c.fillText(value,x,y+i*(size+4));});};
   text(title,36,38,w-72,1,24,'#233e52',600);text(nodes.length+' 家公司 · 代表产品与品类 · '+AtlasGrades.labels[direction]+'公司评级不等于品类评级',36,65,w-72,1,13,'#718797');
   let y=95;for(const band of bands){text(AtlasGrades.labels[direction]+' '+tierNames[band.t]+' · '+band.rows.length+' 家',36,y+24,w-72,1,16,'#375b75',600);y+=44;
    band.rows.forEach((n,i)=>{const x=36+i%cols*(cw+gap),top=y+Math.floor(i/cols)*(ch+gap),r=income(n);c.beginPath();c.roundRect(x,top,cw,ch,10);c.fillStyle='white';c.fill();c.strokeStyle='#d5e2ec';c.lineWidth=1;c.stroke();
     const icon=icons.get(n.id);if(icon){c.save();c.beginPath();c.roundRect(x+16,top+17,44,44,10);c.clip();c.drawImage(icon,x+16,top+17,44,44);c.restore();}else text(initial(n),x+20,top+45,36,1,15,'#7b8f9e');
     const portfolio=portfolios.get(n.id),mapped=[...portfolio.products].sort((a,b)=>Number(selected.includes(b.category))-Number(selected.includes(a.category)));
     const matched=selected.filter(c=>portfolio.tags.includes(c)),reason=matched.map(c=>c+'：'+(portfolio.supplement.some(v=>v.category===c)?'补充标签命中':portfolio.samples.find(v=>v.category===c)?.count?'分类样本 '+portfolio.samples.find(v=>v.category===c).count+' 款':'产品／分类记录')).join('；');
     text(n.name,x+72,top+32,cw-88,2,18,'#29475b',600);
     text(reason||'代表产品',x+16,top+84,cw-32,1,12,'#526777');
     const other=selected.length&&!mapped.some(p=>selected.includes(p.category));
     const lines=mapped.length?mapped.map(p=>(other?'其他代表作 · ':'')+p.category+' · '+p.title):['公司代表作：'+representative(n)];
     lines.slice(0,2).forEach((line,j)=>text(line,x+16,top+112+j*26,cw-32,1,14,'#29475b'));
     text('分类样本：'+(portfolio.samples.map(AtlasPortfolio.sampleText).join('；')||'见公司分类资料'),x+16,top+174,cw-32,2,12,'#526777');
     text('分类可交叉，不代表独立业务线；补充标签见详情',x+16,top+216,cw-32,1,12,'#5c7182');
     text('公司'+AtlasGrades.labels[direction]+'评级 T'+AtlasGrades.entry(n,direction).tier,x+16,top+252,cw-32,1,13,'#29475b',600);text('收入重心：'+r.label,x+16,top+280,cw-32,1,13,r.color);

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
