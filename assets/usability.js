/* View history contains only UI state, never company data or evidence. */
(()=>{
 const names={geo:'地域分布',graph:'关系图谱',list:'公司清单',audit:'证据与口径'};
 const keys=['mode','scope','genre','group','query','people','pending','selected','focus','listAll','navQuery','audience','peerPage','revenue','marketDirection','routeActive','routeFrom','routeTo','routeEvidence','routeDirection','routeKind','readerKind','readerExpanded','readerFocus','readerSearch','readerNetwork','peerView'];
 const scrollIds=['geoPane','geoRail','listPane','auditPane','companyNav','detail','stage','routePanel','atlasCanvas','rrMain','rrScroll','rrGroups','relationReader'];
 const session='atlas-'+Date.now();let entries=[],index=0,restoring=false,pending=null,detail=null,lastTrigger=null;
 const bar=document.createElement('nav');bar.className='navigation-bar';bar.setAttribute('aria-label','浏览路径');
 bar.innerHTML='<div class="navigation-actions"><button id="viewBack" aria-label="返回上一页" disabled>← 返回</button><button id="viewHome">全国概览</button></div><div class="navigation-path" id="viewPath" aria-live="polite"></div><span class="navigation-hint">返回后保留筛选与浏览位置</span>';
 $('.toolbar').after(bar);
 const native={setMode,showDetail,showEdge,selectCompany,focusCompany,closeDetail,renderGeo,reset};
 const snapshot=()=>({values:Object.fromEntries(keys.map(k=>[k,state[k]])),city:geoState.city,detail:$('#detail').classList.contains('open')?detail:null,transform:{...state.transform},scroll:Object.fromEntries(scrollIds.map(id=>[id,$('#'+id)?.scrollTop||0])),scrollX:Object.fromEntries(scrollIds.map(id=>[id,$('#'+id)?.scrollLeft||0])),focus:lastTrigger});
 const same=(a,b)=>JSON.stringify([a.values,a.city,a.detail])===JSON.stringify([b.values,b.city,b.detail]);
 const save=(s,replace=false)=>{try{history[replace?'replaceState':'pushState']({atlas:session,index,snapshot:s},'');}catch{/* Local-file hosts may restrict history; in-page history still works. */}};
 const title=s=>s.detail?(s.detail.kind==='company'?byId.get(s.detail.id)?.name+'详情':'关系详情'):s.values.focus?byId.get(s.values.focus)?.name+'关系':s.city&&s.values.mode==='geo'?s.city+'名单':names[s.values.mode];
 function chrome(){
  const s=snapshot(),prev=entries[index-1];$('#viewBack').disabled=index===0;$('#viewBack').title=prev?'返回'+title(prev):'当前为起始页';
  const parts=[names[state.mode]];if(state.mode==='geo'&&geoState.city)parts.push(geoState.city);if(state.mode==='graph'&&state.focus)parts.push(byId.get(state.focus)?.name+'关系');if(s.detail)parts.push(s.detail.kind==='company'?byId.get(s.detail.id)?.name:'关系详情');
  $('#viewPath').innerHTML=parts.map((p,i)=>`${i?'<span class="navigation-separator">/</span>':''}<${i===parts.length-1?'strong':'span'}>${esc(p)}</${i===parts.length-1?'strong':'span'}>`).join('');
  document.body.classList.toggle('detail-open',!!s.detail);
  if(s.detail){let nav=$('#detail .detail-navigation');if(!nav){nav=document.createElement('div');nav.className='detail-navigation';$('#detail').prepend(nav);}nav.innerHTML=`<button data-history-back>${prev?'← 返回'+esc(title(prev)):'← 返回'+names[state.mode]}</button><button class="detail-dismiss" data-close aria-label="关闭详情，保留当前视图">关闭 ×</button>`;$('#detail').setAttribute('tabindex','-1');}
 }
 function begin(){if(restoring||pending)return;pending=snapshot();entries[index]=pending;save(pending,true);setTimeout(finish,0);}
 function finish(){if(!pending)return;const before=pending;pending=null;const after=snapshot();if(!same(before,after)){entries=entries.slice(0,index+1);entries.push(after);index++;save(after);}chrome();if(after.detail&&JSON.stringify(before.detail)!==JSON.stringify(after.detail))$('#detail [data-history-back]')?.focus({preventScroll:true});}
 function action(fn){begin();return fn();}
 function restore(s){
  restoring=true;Object.assign(state,s.values);geoState.city=s.city;detail=s.detail;$('#search').value=state.query;$('#companySearch').value=state.navQuery;$('#genre').value=state.genre;scopeControl.value=state.audience;
  native.setMode(state.mode);refresh();
  if(detail?.kind==='company')native.showDetail(byId.get(detail.id));else if(detail?.kind==='edge')native.showEdge(DATA.links.find(e=>e.id===detail.id));else $('#detail').classList.remove('open');
  state.transform={...s.transform};applyTransform();chrome();
  requestAnimationFrame(async()=>{await window.AtlasRelationReader?.whenReady();if(state.mode==='graph'){state.transform={...s.transform};applyTransform();}for(const id of scrollIds)if($('#'+id)){$('#'+id).scrollTop=s.scroll[id]||0;$('#'+id).scrollLeft=s.scrollX?.[id]||0;}const target=s.detail?$('#detail [data-history-back]'):s.focus?document.querySelector(s.focus):$('#viewBack');target?.focus({preventScroll:true});restoring=false;});
 }
 function back(){finish();if(index>0){entries[index]=snapshot();save(entries[index],true);if(history.state?.atlas===session)history.back();else{index--;restore(entries[index]);}}else if($('#detail').classList.contains('open'))closeDetail();}
 setMode=mode=>action(()=>{detail=null;return native.setMode(mode);});
 showDetail=n=>{if(!n)return;return action(()=>{detail={kind:'company',id:n.id};native.showDetail(n);});};
 showEdge=e=>{if(!e)return;return action(()=>{detail={kind:'edge',id:e.id};native.showEdge(e);});};
 // A company opens in place; only the explicit relationship action switches views.
 selectCompany=(id)=>action(()=>{if(!byId.has(id))return;state.selected=id;$('#sidebar').classList.remove('mobile-open');if(state.mode==='graph')renderGraph(false);showDetail(byId.get(id));refreshNav();});
 focusCompany=id=>action(()=>native.focusCompany(id));
 closeDetail=()=>action(()=>{detail=null;native.closeDetail();});
 reset=()=>action(()=>{detail=null;native.reset();});$('#resetBtn').onclick=reset;$('#emptyReset').onclick=reset;
 renderGeo=()=>{native.renderGeo();if($('#geoBack'))$('#geoBack').textContent='← 全国概览';};
 // Capture before direct filter/city handlers mutate state. Input typing replaces
 // the current view when leaving it, rather than creating one entry per letter.
 document.addEventListener('click',e=>{const target=e.target.closest('button,[data-node],[data-company],.edge-hit');if(target){for(const attr of ['data-geo-company','data-company','data-node','data-edge'])if(target.hasAttribute(attr)){lastTrigger='['+attr+'="'+CSS.escape(target.getAttribute(attr))+'"]';break;}}
  if(e.target.closest('[data-history-back]')){e.preventDefault();e.stopImmediatePropagation();back();return;}
  if(e.target.closest('#viewBack,#viewHome'))return;
  if(e.target.closest('[data-mode],[data-scope],[data-geo-city],[data-city],[data-group],[data-company],[data-geo-company],[data-node],[data-focus],[data-edge],[data-close],#geoBack,#factionBack,#peopleToggle,#pendingToggle,#clearSearch,#auditShortcut,#peerPrev,#peerNext,#clearViewFilters,[data-rr-group],[data-rr-kind],#rrExpand,#rrOldGraph,#rrReturn,[data-open-family],[data-peer-view],[data-pr-tier],#prReset,#rrClearOptions,#routeFind,#routeClear,#routeSwap,[data-route-start],[data-route-end]'))begin();
 },true);
 document.addEventListener('change',e=>{if(e.target.closest('#prRole,#prCategory,#prTier,#rrMcp,#genre,#factionSelect,#audience,#graphTier,#peerRole,#peerCategory,#revenueFilter,#marketDirection,#routeFrom,#routeTo,#routeEvidence,#routeDirection,#routeKind'))begin();},true);
 document.addEventListener('keydown',e=>{if(e.key==='Escape'&&!$('#method').open){if($('#sidebar').classList.contains('mobile-open')){$('#sidebar').classList.remove('mobile-open');e.stopImmediatePropagation();return;}if($('#detail').classList.contains('open')){e.preventDefault();e.stopImmediatePropagation();back();}}if(e.key==='Enter'&&e.target.matches('tr[data-company]')){e.preventDefault();selectCompany(e.target.dataset.company);}},true);
 $('#viewBack').onclick=back;$('#viewHome').onclick=()=>action(()=>{detail=null;geoState.city=null;native.reset();$('#routePanel').open=false;native.setMode('geo');refresh();});
 window.addEventListener('popstate',e=>{if(e.state?.atlas===session&&entries[e.state.index]){pending=null;index=e.state.index;restore(entries[index]);}});
 $('#factionBack').onclick=()=>action(()=>{$('#routePanel').open=false;state.routeActive=false;state.focus=null;state.selected=null;state.group='';state.scope='key';state.genre='all';state.query='';state.audience='all';scopeControl.value='all';state.listAll=false;$('#genre').value='all';$('#search').value='';detail=null;$('#detail').classList.remove('open');refresh();});
 $('.data-table thead th:last-child').textContent='角色与证据';
 entries=[snapshot()];save(entries[0],true);renderGeo();chrome();
})();
