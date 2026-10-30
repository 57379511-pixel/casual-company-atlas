/* A reading projection of existing edges. Never synthesizes ownership or links. */
(function(root){
 const anchors={'腾讯 · 历史投资与团队':'G001','世纪华通 · 点点业务':'G002','Playtika · 投资与收购':'G021','汤姆猫 · 境外工作室':'G005','中文在线 · 参股企业':'G004','柠檬 · 产品运营':'G007','蓝飞 · 历史主体':'G134','授权与发行':'G186','吉比特 · 简游历史投资':'G059','途游 · 历史投资与品牌':'G006','Learnings · 团队履历':'G009','Hungry · 运营与广告合作':'G348','Mattel163 · 网易退出':'G357','勇往 · 发行主体':'C207','棋牌研运':'G006'};
 const kind=e=>e.semanticKind||e.kind;
 function select(data,options={}){
  const byId=new Map(data.nodes.map(n=>[n.id,n])),canonical=id=>data.aliases[id]||id;
  const g=data.groups.find(g=>g.name===options.group);
  const ids=new Set((options.seedIds||g?.memberIds||[]).map(canonical));
  const all=data.links.filter(e=>(options.pending||e.evidenceLayer==='public')&&(options.people!==false||kind(e)!=='people'));
  const focus=canonical(options.focus||options.readerFocus||g?.rootId||anchors[g?.name]||(options.seedIds?options.seedIds[0]:g?.memberIds[0])||'G001');
  let pool=options.seedIds?all.filter(e=>ids.has(e.source)||ids.has(e.target)):options.focus?all.filter(e=>e.source===focus||e.target===focus):all.filter(e=>ids.has(e.source)&&ids.has(e.target));
  if(options.seedIds&&options.expanded){
   // Expand only explicitly recorded company families, never all companies sharing a genre.
   const familyIds=new Set(ids);for(const family of data.groups.filter(g=>g.companyFamily))if(family.memberIds.some(id=>ids.has(canonical(id))))for(const id of family.memberIds)familyIds.add(canonical(id));
   pool=all.filter(e=>ids.has(e.source)||ids.has(e.target)||(familyIds.has(e.source)&&familyIds.has(e.target)));
  }
  if(options.match)pool=pool.filter(e=>options.match(byId.get(e.source))||options.match(byId.get(e.target)));
  const available=pool;
  pool=pool.filter(e=>!options.kind||options.kind==='all'||kind(e)===options.kind);
  const edges=options.expanded||options.seedIds?pool:pool.filter(e=>e.source===focus||e.target===focus);
  const visible=new Set(edges.flatMap(e=>[e.source,e.target]));if(!options.seedIds&&byId.has(focus))visible.add(focus);
  return {group:g,focus,nodes:data.nodes.filter(n=>visible.has(n.id)),edges,available,remaining:pool.length-edges.length};
 }
 function label(e){
  const type=String(e.type||'关系记录').replace(/持股[\d.]+%（公开工商平台记录）/g,'投资／持股').replace(/（原始MCP记录）/g,'').replace('共同任职／自然人关联','共同任职');
  const time=String(e.time||'').trim();
  return type+(time&&!type.includes(time)?' · '+time:'');
 }
 // Graph labels describe the relationship; provenance stays in the evidence view.
 function shortLabel(e){
  return String(e.type||'关系记录').replace(/持股[\d.]+%（公开工商平台记录）/g,'投资／持股').replace(/（(?:原始MCP记录|原始记录|公开工商平台记录|企业披露|公开数据库转述|采访披露|平台署名)）/g,'').replace('共同任职／自然人关联','任职／自然人关联');
 }
 root.AtlasRelations={select,kind,anchors,label,shortLabel};
})(typeof window==='undefined'?globalThis:window);
