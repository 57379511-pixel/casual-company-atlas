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
  const scope=component?{...m,nodes:component.nodes,edges:component.edges,focus:component.lead.id}:m;
  const overview=peer&&groups.length>1&&!component;
  const capital=scope.edges.filter(e=>AtlasRelations.kind(e)==='capital');
  const backbone=state.readerKind==='all'&&!state.readerAllLinks&&capital.length>0;
  const edges=backbone?capital:scope.edges,ids=new Set(edges.flatMap(e=>[e.source,e.target]));
  const nodes=scope.nodes.filter(n=>ids.has(n.id));
  const focus=ids.has(scope.focus)?scope.focus:nodes[0]?.id;
  return {groups,component,scope,overview,backbone,other:scope.edges.filter(e=>!edges.includes(e)),graph:{...scope,nodes,edges,focus}};
 }
 function product(n){
  const g=groupByName.get(state.group),cats=g?.selectionCategories||[],raw=String(n.raw?.['品类依据']||'');
  const selected=state.genre!=='all'?[state.genre]:cats;
  const title=String(n.icon?.title||'');
  if(selected.includes('三消')&&n.id==='G008')return {text:'Truck Star',exact:true,basis:'开发商官方 App Store 页面明确标注 Match-3',url:'https://apps.apple.com/us/app/truck-star/id6476976929',icon:{title:'Truck Star',data:'./assets/product-icons/truck-star.jpg',store:'https://apps.apple.com/us/app/truck-star/id6476976929'}};
  // Explicit product identity only: a generic company hit is not genre evidence.
  if(selected.includes('二合')&&/merge/i.test(title))return {text:title,exact:true,basis:'产品商店标题标注 Merge',url:n.icon.store};
  if(selected.includes('三消')&&n.id==='G050')return {text:'开心消消乐 · 海滨消消乐',exact:true,basis:'原表代表产品与三消记录',url:n.icon?.store};
  if(selected.includes('三消')&&n.id==='G177')return {text:'梦幻庭院',exact:false,basis:'原表品类依据明确记载',url:''};
  const entries=selected.filter(c=>String(n.category||'').split('、').includes(c)).map(c=>{
   const start=raw.indexOf(c+'('),end=start<0?-1:raw.indexOf(')',start),entry=start<0?'':raw.slice(start,end<0?undefined:end+1),count=entry.match(/共(\d+)款/);
   return c+(count?' · 原表收录 '+count[1]+' 款':' · 原表主营品类');
  });
  return {text:entries.slice(0,2).join('；')||'查看原表品类依据',exact:false,basis:raw,url:''};
 }
 const productNode=n=>product(n).icon?{...n,icon:product(n).icon}:n;
 window.AtlasExecutive={canonical,components,plan,product,productNode};
})();
