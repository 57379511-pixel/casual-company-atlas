/* No product genre is inferred from a company tag or a generic store category. */
(function(root,factory){if(typeof module==='object'&&module.exports)module.exports=factory;else root.AtlasPortfolio=factory(root.ATLAS_DATA,root.ATLAS_PORTFOLIO_PRODUCTS);})(typeof window==='undefined'?globalThis:window,(data,registry=[])=>{
 const hidden=new Set(['SLG','棋牌']),canonical=id=>data.aliases[id]||id;
 const records=new Map();for(const n of data.nodes.filter(n=>n.originalRecord)){const id=canonical(n.id);if(!records.has(id))records.set(id,[]);records.get(id).push(n);}
 const byId=new Map(data.nodes.map(n=>[n.id,n])),cache=new Map();
 const escRE=s=>s.replace(/[.*+?^${}()|[\]\\]/g,'\\$&');
 const normalize=s=>s.normalize('NFKC').toLowerCase().replace(/[\s®™:：·!！'’\-]/g,'');
 function profile(n){
  const id=canonical(n.id);if(cache.has(id))return cache.get(id);
  const source=records.get(id)||[n],tags=[...new Set(source.flatMap(r=>String(r.category||'').split('、')).filter(c=>c&&!hidden.has(c)))];
  const categories=tags.map(category=>{
   const evidence=source.filter(r=>String(r.category||'').split('、').includes(category)).map(r=>{
    const raw=String(r.categoryEvidence||r.raw?.['品类依据']||''),head=raw.split(/[；;](?:未收录|人工标签|被门槛挡住)/)[0];
    const m=head.match(new RegExp('(?:^|、)'+escRE(category)+'[（(]([^）)]*)[）)]'));
    const sample=m?.[1]&&!m[1].includes('人工')&&/代表|共\d+款|\d+天|收入|下载/.test(m[1]);
    const explicit=/取最好成绩产品《([^》]+)》/.exec(head),single=String(r.category||'').split('、').length===1;
    return {id:r.id,raw,kind:sample?'sample':explicit&&single?'named':m?.[1]?.includes('人工')?'supplement':'classification',count:sample?(Number(/共(\d+)款/.exec(m[1])?.[1])||null):null,product:explicit&&single?explicit[1]:null};
   });
   const primary=evidence.find(e=>e.kind==='sample')||evidence.find(e=>e.kind==='named')||evidence.find(e=>e.kind==='classification')||evidence[0];
   const counts=[...new Set(evidence.filter(e=>e.kind==='sample'&&e.count).map(e=>e.count))];
   return {category,kind:primary.kind,count:counts.length===1?counts[0]:null,evidence};
  });
  const candidates=registry.filter(p=>canonical(p.companyId)===id&&tags.includes(p.category)).map(p=>({...p,kind:'public',icon:p.icon||byId.get(p.iconCompany)?.icon?.data}));
  for(const c of categories)for(const e of c.evidence)if(e.product)candidates.push({key:'source:'+normalize(e.product),title:e.product,category:c.category,kind:'source',sourceId:e.id,basis:e.raw});
  const products=[],keys=new Set(),titles=new Set();for(const p of candidates){const title=normalize(p.title);if(keys.has(p.key)||titles.has(title))continue;keys.add(p.key);titles.add(title);products.push(p);}
  const result={id,tags,products,samples:categories.filter(c=>c.kind==='sample'||c.kind==='named'),supplement:categories.filter(c=>c.kind==='supplement'),classifications:categories.filter(c=>c.kind==='classification'),categories};cache.set(id,result);return result;
 }
 const sampleText=c=>c.category+(c.count?' · '+c.count+'款样本':' · 分类记录');
 return {profile,normalize,sampleText,canonical};
});
