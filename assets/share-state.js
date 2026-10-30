/* Versioned, allow-listed URL state. No company facts are stored in the URL. */
(()=>{
 const initial=new URL(location.href),defaults={...state,gradeDirection:'domestic'},params=initial.searchParams;
 const enums={gradeDirection:['domestic','overseas'],mode:['geo','graph','list','audit'],scope:['all','key','1','2','3','4','5'],audience:['all','developer'],revenue:['all','domestic','overseas','balanced','unscoped'],marketDirection:['all','国内市场','海外出海','国内外双线'],readerKind:['all','capital','business','people'],routeKind:['all','capital','business','people'],routeEvidence:['all','public'],routeDirection:['connectivity','directed'],peerView:['cards','relations']};
 const fields=['gradeDirection','mode','scope','genre','group','query','readerSearch','navQuery','people','pending','focus','listAll','audience','revenue','marketDirection','routeActive','routeFrom','routeTo','routeEvidence','routeDirection','routeKind','readerKind','readerExpanded','readerFocus','readerNetwork','readerComponent','readerAllLinks','peerView'];
 function valid(key,v){
  if(enums[key])return enums[key].includes(v);
  if(['focus','readerFocus','routeFrom','routeTo','readerComponent'].includes(key))return !v||byId.has(v);
  if(key==='group')return !v||groupByName.has(v);
  if(key==='genre')return v==='all'||DATA.nodes.some(n=>String(n.category||'').split('、').includes(v));
  return typeof defaults[key]==='boolean'?['1','0'].includes(v):v.length<=200;
 }
 function url(s){
  const u=new URL(location.href);u.search='';u.hash='';u.searchParams.set('a','16');
  for(const key of fields){const value=s.values[key];if(value!=null&&String(value)!==String(defaults[key]))u.searchParams.set(key,typeof value==='boolean'?(value?'1':'0'):String(value));}
  if(s.city)u.searchParams.set('city',s.city);
  if(s.detail)u.searchParams.set('detail',s.detail.kind+':'+s.detail.id);
  return u.href;
 }
 function read(base){
  if(params.get('a')!=='16')return null;
  const values={...base.values};for(const key of fields){values[key]=defaults[key];const value=params.get(key);if(value!==null&&valid(key,value))values[key]=typeof defaults[key]==='boolean'?value==='1':value;}
  if(values.routeActive&&(!byId.has(values.routeFrom)||!byId.has(values.routeTo)))values.routeActive=false;
  const detail=params.get('detail')||'',kind=detail.slice(0,detail.indexOf(':')),id=detail.slice(detail.indexOf(':')+1);
  const d=kind==='company'&&byId.has(id)||kind==='edge'&&DATA.links.some(e=>e.id===id)?{kind,id}:null;
  const city=params.get('city');return {...base,values,city:DATA.nodes.some(n=>n.city===city)?city:null,detail:d};
 }
 window.AtlasShare={url,read,hasState:params.get('a')==='16'};
})();
