/* Pure revenue and relationship functions shared by UI and regression checks. */
(function(root){
 function revenue(n,ledger){
  const r=ledger.records[n.id],assessment=ledger.directions?.records[n.id];
  if(!r){const key=assessment?.key||'unscoped';return {key,label:{domestic:'国内为主',overseas:'海外为主',unscoped:'仅关系主体'}[key],color:{domestic:'#2777b8',overseas:'#9a5aaf',unscoped:'#82909f'}[key],record:null,assessment};}
  const share=r.domestic/(r.domestic+r.overseas),key=share>.5?'domestic':share<.5?'overseas':'balanced';
  return {key,label:{domestic:'国内为主',overseas:'海外为主',balanced:'收入均衡'}[key],color:{domestic:'#2777b8',overseas:'#9a5aaf',balanced:'#388579'}[key],domesticShare:share,record:r,assessment};
 }
 function matches(n,filters,ledger){return (!filters.revenue||filters.revenue==='all'||revenue(n,ledger).key===filters.revenue)&&(!filters.marketDirection||filters.marketDirection==='all'||n.market===filters.marketDirection);}
 // Lexicographic cost: fewer original-only edges first, then fewer hops. No synthetic alias/group edges.
 function path(nodes,edges,from,to,options={}){
  const ids=new Set(nodes.map(n=>n.id));if(!ids.has(from)||!ids.has(to))return {error:'请选择有效的起点和终点公司',nodes:[],steps:[]};
  const graph=new Map([...ids].map(id=>[id,[]]));
  for(const e of [...edges].sort((a,b)=>a.id.localeCompare(b.id))){
   if(!ids.has(e.source)||!ids.has(e.target))continue;
   if(options.evidence!=='all'&&e.evidenceLayer!=='public')continue;
   if(options.kind&&options.kind!=='all'&&(e.semanticKind||e.kind)!==options.kind)continue;
   if(options.direction==='directed'&&!e.directed)continue;
   graph.get(e.source).push({to:e.target,edge:e,reverse:false});
   if(options.direction!=='directed')graph.get(e.target).push({to:e.source,edge:e,reverse:!!e.directed});
  }
  const best=new Map([[from,[0,0]]]),parent=new Map(),queue=[{id:from,cost:[0,0]}];
  const compare=(a,b)=>a[0]-b[0]||a[1]-b[1];
  while(queue.length){queue.sort((a,b)=>compare(a.cost,b.cost)||a.id.localeCompare(b.id));const cur=queue.shift();if(compare(cur.cost,best.get(cur.id))!==0)continue;if(cur.id===to)break;
   for(const step of graph.get(cur.id)){const cost=[cur.cost[0]+(step.edge.evidenceLayer==='public'?0:1),cur.cost[1]+1];if(!best.has(step.to)||compare(cost,best.get(step.to))<0){best.set(step.to,cost);parent.set(step.to,{from:cur.id,...step});queue.push({id:step.to,cost});}}
  }
  if(!best.has(to))return {nodes:[],steps:[],missing:true};
  const steps=[],result=[to];let id=to;while(id!==from){const p=parent.get(id);steps.unshift(p);result.unshift(p.from);id=p.from;}
  return {nodes:result,steps,originalEdges:best.get(to)[0]};
 }
 root.AtlasResearch={revenue,matches,path};
})(typeof window==='undefined'?globalThis:window);
