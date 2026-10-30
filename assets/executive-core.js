/* Presentation only: source classifications, tiers and relationship records are immutable. */
(()=>{
 const canonical=id=>DATA.aliases[id]||id;
 function components(m){
  const adjacency=new Map(m.nodes.map(n=>[n.id,new Set()]));
  for(const e of m.edges){adjacency.get(e.source)?.add(e.target);adjacency.get(e.target)?.add(e.source);}
  const seen=new Set(),result=[];
  for(const n of m.nodes){if(seen.has(n.id))continue;const ids=[n.id];seen.add(n.id);
   for(let i=0;i<ids.length;i++)for(const id of adjacency.get(ids[i])||[])if(!seen.has(id)){seen.add(id);ids.push(id);}
   const set=new Set(ids),nodes=m.nodes.filter(n=>set.has(n.id)),edges=m.edges.filter(e=>set.has(e.source)&&set.has(e.target));
   const roots=nodes.filter(n=>!edges.some(e=>e.directed&&e.target===n.id&&AtlasRelations.kind(e)==='capital'));
   const order=(a,b)=>(a.tier||9)-(b.tier||9)||edges.filter(e=>e.source===b.id).length-edges.filter(e=>e.source===a.id).length||a.id.localeCompare(b.id);
   const lead=[...roots].sort(order)[0]||[...nodes].sort(order)[0];
   result.push({id:[...ids].sort()[0],nodes,edges,lead});
  }
  return result.sort((a,b)=>(a.lead.tier||9)-(b.lead.tier||9)||b.edges.length-a.edges.length||a.id.localeCompare(b.id));
 }
 function plan(m){
  const groups=components(m),peer=m.group?.analysisType==='categoryPeer'&&!state.focus;
  const component=peer&&groups.find(g=>g.id===state.readerComponent);
  const scope=component?{...m,nodes:component.nodes,edges:component.edges,focus:component.nodes.some(n=>n.id===state.readerFocus)?state.readerFocus:component.lead.id}:m;
  const overview=peer&&groups.length>1&&!component;
  const capital=scope.edges.filter(e=>AtlasRelations.kind(e)==='capital');
  const backbone=state.readerKind==='all'&&!state.readerAllLinks&&capital.length>0;
  const edges=backbone?capital:scope.edges,ids=new Set(edges.flatMap(e=>[e.source,e.target]));
  const nodes=scope.nodes.filter(n=>ids.has(n.id));
  const focus=ids.has(scope.focus)?scope.focus:nodes[0]?.id;
  return {groups,component,scope,overview,backbone,other:scope.edges.filter(e=>!edges.includes(e)),graph:{...scope,nodes,edges,focus}};
 }
 function product(n){
  const g=groupByName.get(state.group),selected=state.genre!=='all'?[state.genre]:g?.allCategories?[]:g?.selectionCategories||[];
  const p=window.AtlasPortfolio?.profile(n),exact=p?.products.find(p=>selected.includes(p.category));
  if(exact)return {text:exact.title,exact:true,basis:exact.basis,url:exact.source||'',icon:exact.icon?{title:exact.title,data:exact.icon,store:exact.source}:null};
  return {text:String(n.icon?.title||n.verifiedProducts||n.originalProducts||''),exact:false,basis:n.categoryEvidence||'',url:n.icon?.store};
 }
 const productNode=n=>product(n).icon?{...n,icon:product(n).icon}:n;
 window.AtlasExecutive={canonical,components,plan,product,productNode};
})();
