/* Product examples and source classification remain separate from company grades. */
(()=>{
 const previous=showDetail;
 showDetail=function(n){
  previous(n);if(!n?.originalRecord)return;
  const p=AtlasPortfolio.profile(n),section=$('#detail .classification-source');if(!section)return;
  section.classList.add('portfolio-detail');
  const productRows=p.products.map(v=>`<article class="portfolio-detail-product">${v.icon?`<img src="${esc(v.icon)}" alt="${esc(v.title)} 图标" loading="lazy">`:''}<div><strong>${esc(v.title)}</strong><span>${esc(v.category)}${v.mechanic?' · '+esc(v.mechanic):''}</span><details><summary>品类依据</summary><p>${esc(v.basis)}</p>${v.source?`<a href="${esc(v.source)}" target="_blank" rel="noopener noreferrer">官网／商店说明 ↗</a>`:`<p>公司资料记录 ${esc(v.sourceId)}</p>`}</details></div></article>`).join('');
  const samples=p.samples.length?`<details class="portfolio-detail-samples"><summary>分类样本 · ${p.samples.length} 项</summary><table><thead><tr><th>分类</th><th>样本记录</th></tr></thead><tbody>${p.samples.map(c=>`<tr><td>${esc(c.category)}</td><td>${c.count?c.count+' 款':'产品分类记录'}</td></tr>`).join('')}</tbody></table><p>样本分类可能交叉，不相加为产品总数或独立业务数；样本数量不等于上方展示产品数量。</p></details>`:'';
  const supplements=p.supplement.length?`<details class="portfolio-supplement"><summary>补充标签 · ${p.supplement.length} 项</summary><p>${p.supplement.map(c=>esc(c.category)).join(' · ')}</p><p>用于检索，不单独代表一条业务线或该品类实力。</p></details>`:'';
  const evidence=p.categories.flatMap(c=>c.evidence),unique=[...new Map(evidence.map(e=>[e.id,e])).values()];
  section.innerHTML='<h3>'+esc(n.name)+' · 产品与品类</h3>'+productRows+(!productRows?'<p>公司代表产品见产品资料；下方分类记录用于检索，不把公司标签直接套到每款产品。</p>':'')+samples+supplements+(p.classifications.length?'<details><summary>其他分类资料</summary><p>'+p.classifications.map(c=>esc(c.category)).join(' · ')+'</p></details>':'')+`<details class="detail-reference"><summary>查看分类来源</summary>${unique.map(e=>`<p>${esc(byId.get(e.id)?.name||e.id)} · ${esc(e.id)}：${esc(e.raw)}</p>`).join('')}<p>同一产品按明确的核心玩法只展示一次；未改动检索标签与公司评级。</p></details>`;
  if(n.id==='G007'||n.id==='G053')section.insertAdjacentHTML('beforeend',`<button class="relationship" data-company="${n.id==='G007'?'G053':'G007'}">查看${n.id==='G007'?'柠檬曲奇':'柠檬微趣'}</button>`);
  for(const s of $$('#detail .detail-section')){const title=s.querySelector('h3');if(title?.textContent==='当前品类代表产品')s.remove();else if(p.products.length&&title?.textContent==='代表产品'){const fold=document.createElement('details');fold.className='portfolio-product-archive';fold.innerHTML='<summary>更多产品资料</summary>';title.remove();while(s.firstChild)fold.append(s.firstChild);s.append(fold);}}
 };
 document.addEventListener('click',e=>{if(e.target.closest('[data-portfolio-open],[data-portfolio-product]'))requestAnimationFrame(()=>{const box=$('#detail'),section=box.querySelector('.portfolio-detail');if(section)box.scrollTop+=section.getBoundingClientRect().top-box.getBoundingClientRect().top-(box.querySelector('.detail-navigation')?.offsetHeight||0)-16;});});
})();
