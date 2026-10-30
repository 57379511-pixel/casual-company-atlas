/* Primary navigation follows research tasks. Existing data and renderers are reused. */
(()=>{
 const defaultCompany='二合 · 国内研发对标',defaultFamily='指色系 · 投资与关联团队';
 const section=(s=state)=>s.mode==='geo'?'geo':s.mode==='audit'?'audit':s.mode==='list'||(s.mode==='graph'&&!s.routeActive&&!s.readerNetwork&&!s.focus&&groupByName.get(s.group)?.analysisType==='categoryPeer'&&s.peerView!=='relations')?'companies':'relations';
 const labels={companies:'公司研究',relations:'公司关系图',geo:'地域分布',audit:'证据与口径'};
 const retained=['mode','scope','genre','group','query','audience','revenue','marketDirection','listAll','readerSearch','navQuery'];
 let research=null;
 const audit=$('[data-mode="audit"]');audit.className='btn';audit.textContent='证据与口径';$('.top-meta').append(audit);
 $('.tab-set').innerHTML=Object.entries(labels).filter(([k])=>k!=='audit').map(([k,v])=>`<button class="tab" data-section="${k}" role="tab">${v}</button>`).join('');
 $('#listPane .list-title h2').textContent='全部公司';
 const toResearch=document.createElement('button');toResearch.className='btn';toResearch.dataset.section='companies';toResearch.textContent='返回品类公司';$('#listPane .list-title').append(toResearch);
 function remember(){if(section()==='companies'&&state.mode==='graph')research={values:Object.fromEntries(retained.map(k=>[k,state[k]])),scroll:$('#rrMain').scrollTop,listScroll:$('#listPane').scrollTop};}
 function clear(){Object.assign(state,{routeActive:false,routeFrom:'',routeTo:'',focus:null,selected:null,readerFocus:'',readerComponent:'',readerAllLinks:false,readerNetwork:false,readerKind:'all',readerSearch:'',query:'',genre:'all',revenue:'all',marketDirection:'all',listAll:false});$('#search').value='';$('#genre').value='all';$('#routePanel').open=false;geoState.city=null;}
 function chooseGroup(name){$('#factionSelect').value=name;$('#factionSelect').dispatchEvent(new Event('change',{bubbles:true}));setMode('graph');refresh();}
 function home(){clear();state.peerView='cards';chooseGroup(defaultCompany);}
 function open(target){
  if(target===section()&&target!=='companies')return;
  if(target==='companies'){
   if(section()==='companies'&&state.mode!=='list')return;
   const saved=research;clear();state.peerView='cards';
   if(saved&&saved.values.mode!=='list'){
    Object.assign(state,saved.values);state.peerView='cards';$('#search').value=state.query;$('#genre').value=state.genre;scopeControl.value=state.audience;setMode('graph');refresh();requestAnimationFrame(()=>{$('#rrMain').scrollTop=saved.scroll;});
   }else home();
  }else if(target==='relations'){remember();clear();state.pending=true;state.readerExpanded=true;chooseGroup(defaultFamily);}
  else if(target==='geo'){remember();clear();Object.assign(state,{group:'',scope:'key',audience:'all'});scopeControl.value='all';setMode('geo');refresh();}
 }
 function all(){remember();clear();Object.assign(state,{group:'',scope:'all',audience:'all',listAll:true});scopeControl.value='all';setMode('list');refresh();}
 function openFamily(name){clear();state.pending=true;state.readerExpanded=true;chooseGroup(name);}
 function openCompany(id){
  id=AtlasExecutive.canonical(id);
  const family=DATA.groups.find(g=>g.companyFamily&&g.memberIds.some(member=>AtlasExecutive.canonical(member)===id));
  if(family)openFamily(family.name);
  else{clear();Object.assign(state,{group:'',scope:'all',audience:'all',pending:true,readerExpanded:true,focus:id,selected:id});scopeControl.value='all';setMode('graph');refresh();}
  $('#rrMain').scrollTop=0;
 }
 function sync(){
  const active=section();document.body.dataset.section=active;
  for(const b of $$('.tab-set [data-section]')){b.classList.toggle('active',b.dataset.section===active);b.setAttribute('aria-selected',String(b.dataset.section===active));}
  const title=$('.rr-directory-title');if(title)title.textContent=active==='companies'?'按品类找公司':'按公司系看关系';
  if($('#viewHome'))$('#viewHome').textContent='公司研究首页';
  $('#geoPane .geo-heading h2').textContent='国内休闲游戏公司地域分布';
 }
 document.addEventListener('click',e=>{
  if(e.target.closest('[data-peer-relations],[data-open-family],[data-focus],[data-route-start],[data-section],#allCompanies'))remember();
 },true);
 document.addEventListener('click',e=>{const b=e.target.closest('[data-section]');if(b)open(b.dataset.section);if(e.target.closest('#allCompanies'))all();});
 const oldMode=setMode;setMode=function(...args){const r=oldMode(...args);sync();return r;};
 const oldRender=renderGraph;renderGraph=function(...args){const r=oldRender(...args);sync();return r;};
 const oldRefresh=refresh;refresh=function(...args){const r=oldRefresh(...args);sync();return r;};
 window.AtlasNavigation={section,label:s=>labels[section(s)],home,open,openCompany,openFamily,sync};
 window.addEventListener('DOMContentLoaded',()=>{const p=new URLSearchParams(location.search);if(!p.has('a')&&!p.has('peer')&&!p.has('family'))home();sync();});
 sync();
})();
