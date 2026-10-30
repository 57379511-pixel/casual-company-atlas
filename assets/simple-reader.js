/* Keep the reading path visible; preserve optional controls and source data. */
(()=>{
 const reader=$('#relationReader'),advanced=document.createElement('details');
 advanced.id='rrAdvanced';advanced.innerHTML='<summary>高级选项<span id="rrFilterStatus"></span></summary><div id="rrAdvancedBody"></div>';
 $('#rrMain .rr-heading').after(advanced);
 const body=$('#rrAdvancedBody'),peerFilters=document.createElement('div');peerFilters.id='rrPeerFilters';
 peerFilters.append($('.pr-controls'));body.append(peerFilters,$('.rr-controls'));
 // Keep the existing elements/handlers, without nesting a second options menu.
 $('.rr-options').open=true;$('.rr-options').classList.add('rr-inline-options');
 const research=$('.research-bar'),home=document.createComment('research-bar position');research.before(home);
 $('#rrSearch').type='search';$('#rrSearch').placeholder='搜公司或代表产品';
 $('#rrSearch').setAttribute('aria-label','搜索公司或代表产品');
 $('.rr-directory-title').innerHTML='找公司，看关系';
 for(const b of $$('[data-peer-view]'))b.textContent=b.dataset.peerView==='relations'?'查看关联图谱 →':'← 返回分层对标';
 const clear=document.createElement('button');clear.className='btn';clear.id='rrClearOptions';clear.textContent='恢复默认';body.append(clear);
 clear.onclick=()=>{
  if(isCategoryPeer())$('#prReset').click();
  else{Object.assign(state,{scope:'all',genre:'all',query:'',audience:'all',revenue:'all',marketDirection:'all'});$('#genre').value='all';$('#search').value='';scopeControl.value='all';}
  state.readerKind='all';state.pending=true;state.readerExpanded=true;refresh();
 };
 const oldClear=$('#clearViewFilters').onclick;
 $('#clearViewFilters').onclick=()=>document.body.classList.contains('relation-reader-mode')?clear.click():oldClear();
 let lastView='';
 function sync(){
  const active=document.body.classList.contains('relation-reader-mode'),peer=active&&isCategoryPeer();
  if(active&&research.parentElement!==body)body.insertBefore(research,clear);
  if(!active&&research.parentNode!==home.parentNode)home.after(research);
  peerFilters.hidden=!peer;
  const view=[state.mode,state.group,state.focus,state.peerView,state.routeActive,state.readerNetwork].join('|');
  if(view!==lastView){advanced.open=false;if($('#rrMoreGroups'))$('#rrMoreGroups').open=false;lastView=view;}
  $('.rr-options').open=true;
  const relations=!peer||state.peerView==='relations';
  const filtered=(state.genre!=='all'||(peer&&state.scope!=='all')||state.revenue!=='all'||state.marketDirection!=='all'||(relations&&state.readerKind!=='all')||!!state.query||(peer&&state.audience!=='developer')||(relations&&!state.pending));
  $('#rrFilterStatus').textContent=filtered?' · 已设置筛选':'';
  // A short status remains visible if optional filters are collapsed.
  advanced.classList.toggle('has-filters',filtered);
 }
 const previousRender=renderGraph;renderGraph=function(...args){const result=previousRender(...args);sync();return result;};
 const previousMode=setMode;setMode=function(...args){const result=previousMode(...args);sync();return result;};
 const previousRefresh=refresh;refresh=function(...args){const result=previousRefresh(...args);sync();return result;};
 document.addEventListener('click',e=>{if(e.target.closest('[data-rr-group],[data-open-family]'))advanced.open=false;});
 window.addEventListener('DOMContentLoaded',sync);sync();
})();
