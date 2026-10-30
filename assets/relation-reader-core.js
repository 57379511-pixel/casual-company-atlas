/* A reading projection of existing edges. Never synthesizes ownership or links. */
(function(root){
 const anchors={'腾讯 · 历史投资与团队':'G001','世纪华通 · 点点业务':'G002','Playtika · 投资与收购':'G021','汤姆猫 · 境外工作室':'G005','中文在线 · 参股企业':'G004','柠檬 · 产品运营':'G007','蓝飞 · 历史主体':'G134','授权与发行':'G186','吉比特 · 简游历史投资':'G059','途游 · 历史投资与品牌':'G006','Learnings · 团队履历':'G009','Hungry · 运营与广告合作':'G348','Mattel163 · 网易退出':'G357','勇往 · 发行主体':'C207','棋牌研运':'G006'};
 const kind=e=>e.semanticKind||e.kind;
 function select(data,options={}){
  const byId=new Map(data.nodes.map(n=>[n.id,n])),canonical=id=>data.aliases[id]||id;
  const g=data.groups.find(g=>g.name===options.group);
  const ids=new Set((g?.memberIds||[]).map(canonical));
  const all=data.links.filter(e=>(options.pending||e.evidenceLayer==='public')&&(options.people!==false||kind(e)!=='people'));
  const focus=canonical(options.focus||options.readerFocus||anchors[g?.name]||g?.memberIds[0]||'G001');
  let pool=options.focus?all.filter(e=>e.source===focus||e.target===focus):all.filter(e=>ids.has(e.source)&&ids.has(e.target));
  if(options.match)pool=pool.filter(e=>options.match(byId.get(e.source))||options.match(byId.get(e.target)));
  const available=pool;
  pool=pool.filter(e=>!options.kind||options.kind==='all'||kind(e)===options.kind);
  const edges=options.expanded?pool:pool.filter(e=>e.source===focus||e.target===focus);
  const visible=new Set(edges.flatMap(e=>[e.source,e.target]));if(byId.has(focus))visible.add(focus);
  return {group:g,focus,nodes:data.nodes.filter(n=>visible.has(n.id)),edges,available,remaining:pool.length-edges.length};
 }
 root.AtlasRelations={select,kind,anchors};
})(typeof window==='undefined'?globalThis:window);
