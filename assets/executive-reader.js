(()=>{
 const previous=showDetail;
 showDetail=function(n){previous(n);if(!n)return;
  const detail=$('#detail'),canonical=AtlasExecutive.canonical(n.id);
  const income=AtlasResearch.revenue(n,window.ATLAS_REVENUE);detail.querySelector('.detail-header .badges')?.insertAdjacentHTML('beforeend','<span class="revenue-tag revenue-'+income.key+'">'+esc(income.label)+'</span>');
  const families=DATA.groups.filter(g=>g.companyFamily&&g.memberIds.some(id=>AtlasExecutive.canonical(id)===canonical));
  const preferred=families.find(g=>g.name===state.group)||families[0];
  const genreProduct=state.mode==='graph'&&isCategoryPeer()?AtlasExecutive.product(n):null;
  if(genreProduct?.icon){const section=document.createElement('section');section.className='detail-section';section.innerHTML='<h3>当前品类代表产品</h3><div class="product">'+iconHTML(AtlasExecutive.productNode(n))+'<strong>'+esc(genreProduct.text)+'</strong></div><details class="detail-reference"><summary>产品品类依据</summary><p>'+esc(genreProduct.basis)+'</p>'+linksHTML(genreProduct.url)+'</details>';detail.querySelector('.detail-header').after(section);}
  const compare=detail.querySelector('[data-route-start]');
  detail.querySelector('.pr-family-links')?.remove();detail.querySelector('[data-focus]')?.remove();
  const actions=document.createElement('div');actions.className='executive-actions';
  actions.innerHTML=`<button class="btn primary" ${preferred?'data-open-family="'+esc(preferred.name)+'"':'data-focus="'+esc(canonical)+'"'}>查看关系 →</button>`;
  if(compare){compare.textContent='与另一家公司看关系';compare.classList.remove('primary');actions.append(compare);}
  detail.querySelector('.detail-header').append(actions);
  const sections=[...detail.querySelectorAll('.detail-section')],revenue=sections.find(s=>s.querySelector('h3')?.textContent==='收入重心');
  if(revenue){
   const facts=revenue.querySelector('.facts');
   if(facts?.textContent.includes('样本')){const fold=document.createElement('details');fold.className='executive-sources';fold.innerHTML='<summary>收入样本与统计口径</summary><p class="tiny">样本统计期间与覆盖范围不同，不据此直接相加或计算国内／海外占比。</p>';facts.before(fold);fold.append(facts);}
   const products=sections.find(s=>s.querySelector('h3')?.textContent==='代表产品');if(products)products.after(revenue);
  }
  const related=sections.find(s=>s.querySelector('h3')?.textContent.startsWith('公司关系'));
  if(related){const fold=document.createElement('details');fold.className='executive-sources';const title=related.querySelector('h3');fold.innerHTML='<summary>'+esc(title.textContent)+' · 展开逐条记录</summary>';title.remove();while(related.firstChild)fold.append(related.firstChild);related.append(fold);}
 };
 // Export the overview itself, never a stale canvas from the previously opened group.
 AtlasExecutive.exportOverview=async p=>{
  const rows=p.groups,w=1200,rowH=140,h=125+rows.length*rowH,scale=Math.min(2,16000/h),canvas=document.createElement('canvas');canvas.width=w*scale;canvas.height=h*scale;
  const c=canvas.getContext('2d');c.scale(scale,scale);c.fillStyle='#f5f8fb';c.fillRect(0,0,w,h);c.fillStyle='#233e52';c.font='600 24px '+getComputedStyle(document.body).fontFamily;c.fillText($('#rrTitle').textContent,30,45);c.font='14px sans-serif';c.fillText(rows.length+' 组独立关联网络 · '+p.scope.edges.length+' 条关系 · 同品类不等于相互关联',30,76);
  rows.forEach((r,i)=>{const y=100+i*rowH;c.fillStyle='white';c.fillRect(25,y,w-50,rowH-15);c.fillStyle='#233e52';c.font='600 19px sans-serif';c.fillText(r.lead.name+'等 · '+r.nodes.length+' 个主体 / '+r.edges.length+' 条关系',45,y+35);c.fillStyle='#6b8091';c.font='14px sans-serif';let line='',dy=64;for(const n of r.nodes){const next=(line?' · ':'')+n.name;if(c.measureText(line+next).width>w-100){c.fillText(line,45,y+dy);line=n.name;dy+=23;if(dy>110)break;}else line+=next;}if(dy<=110)c.fillText(line,45,y+dy);});
  const blob=await new Promise(r=>canvas.toBlob(r,'image/png'));if(blob)download(blob,'品类关联分组.png');
 };
})();
