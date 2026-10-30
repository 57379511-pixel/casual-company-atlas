/* Full company search and source-category browsing share one paginated result view. */
(()=>{
 Object.assign(state,{readerSearchPage:0,readerSourceCategory:''});
 const size=24,main=$('#rrMain'),results=document.createElement('section');results.id='browseResults';results.hidden=true;main.prepend(results);
 const back=document.createElement('button');back.id='mobileDirectoryBack';back.className='btn';back.textContent='↑ 返回目录';main.prepend(back);
 back.onclick=()=>$('.rr-directory').scrollIntoView({block:'start'});
 const match=(n,q)=>[n.id,n.name,n.full,n.alias,n.originalProducts,n.verifiedProducts,n.raw?.['常用名/品牌'],n.raw?.['别名/关联主体']].join(' ').toLowerCase().includes(q);
 function selection(){
  const q=String(state.readerSearch||'').trim().toLowerCase(),g=groupByName.get(state.readerSourceCategory);
  return DATA.nodes.filter(n=>(!g||(n.originalRecord&&g.selectionCategories.some(c=>n.category.split('、').includes(c))))&&(!q||match(n,q))).sort((a,b)=>a.name.localeCompare(b.name,'zh')||a.id.localeCompare(b.id));
 }
 function sync(){
  const on=state.mode==='graph'&&!state.routeActive&&!state.readerNetwork&&!!(String(state.readerSearch||'').trim()||state.readerSourceCategory);
  main.classList.toggle('browse-active',on);document.body.classList.toggle('browse-results-mode',on);results.hidden=!on;
  if(!on)return;
  const rows=selection(),pages=Math.max(1,Math.ceil(rows.length/size)),page=Math.min(Math.max(0,Number(state.readerSearchPage)||0),pages-1);state.readerSearchPage=page;
  const g=groupByName.get(state.readerSourceCategory),title=g?g.selectionCategories.join('、')+' · 全部公司':'公司搜索结果';
  const label=n=>['domestic','overseas'].map(d=>{const t=AtlasGrades.entry(n,d)?.tier;return t==null?'':`公司${AtlasGrades.labels[d]}评级 T${t}`;}).filter(Boolean).join(' · ')||'查看主体资料与来源';
  results.innerHTML=`<div class="browse-heading"><h2>${esc(title)}</h2><button class="btn" data-browse-close>返回原视图</button></div><p class="browse-scope">${rows.length} 个匹配主体 · ${g?'范围：本品类全部角色与评级记录':'范围：全部 '+DATA.nodes.length+' 个主体，不受品类、角色或评级筛选限制'}</p>${state.readerSearch?`<p>搜索：${esc(state.readerSearch)}</p>`:''}<div class="browse-grid">${rows.slice(page*size,(page+1)*size).map(n=>`<button class="browse-company" data-company="${esc(n.id)}">${iconHTML(n)}<span><strong>${esc(n.name)}</strong><small>${esc(n.full||n.name)} · ${esc(n.id)}</small><small>${esc(n.category||'关联主体')} · ${esc(n.role||'公司资料')}</small><small>${esc(label(n))}</small></span></button>`).join('')||'<p>没有匹配结果，可尝试公司简称、工商全称或代表产品。</p>'}</div><nav class="browse-pages" aria-label="搜索结果分页"><button class="btn" data-result-page="${page-1}" ${page===0?'disabled':''}>上一页</button><span>第 ${page+1} / ${pages} 页${rows.length?' · '+(page*size+1)+'–'+Math.min(rows.length,(page+1)*size)+' / '+rows.length:''}</span><button class="btn" data-result-page="${page+1}" ${page+1>=pages?'disabled':''}>下一页</button></nav>`;
 }
 function locate(){if(matchMedia('(max-width:760px)').matches)requestAnimationFrame(async()=>{await AtlasRelationReader.whenReady();main.scrollIntoView({block:'start'});});}
 const oldInput=$('#rrSearch').oninput;$('#rrSearch').oninput=e=>{state.readerSearchPage=0;state.readerSourceCategory='';oldInput(e);sync();};
 $('#rrSearch').addEventListener('keydown',e=>{if(e.key==='Enter'){sync();locate();}});
 document.addEventListener('click',e=>{
  if(e.target.closest('[data-source-category]')){state.readerSourceCategory=state.group;state.readerSearch='';state.readerSearchPage=0;$('#rrSearch').value='';refresh();locate();}
  if(e.target.closest('[data-browse-close]')){state.readerSearch='';state.readerSearchPage=0;state.readerSourceCategory='';$('#rrSearch').value='';refresh();}
  const page=e.target.closest('[data-result-page]');if(page){state.readerSearchPage=Number(page.dataset.resultPage);sync();main.scrollTop=0;locate();}
  if(e.target.closest('[data-rr-group]'))locate();
 });
 const oldRefresh=refresh;refresh=function(...args){const r=oldRefresh(...args);sync();return r;};
 const oldRender=renderGraph;renderGraph=function(...args){const r=oldRender(...args);sync();return r;};
 const oldMode=setMode;setMode=function(...args){const r=oldMode(...args);sync();return r;};
 // Source browse scope belongs to its original view, not another navigation section.
 document.addEventListener('click',e=>{if(e.target.closest('[data-section],#allCompanies,#viewHome,[data-peer-relations],[data-open-family]'))state.readerSourceCategory='';},true);
 window.AtlasBrowse={sync,selection};sync();
})();
