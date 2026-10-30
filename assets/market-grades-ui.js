(()=>{
 const G=AtlasGrades,views=document.createElement('nav');views.id='gradeDirections';views.setAttribute('aria-label','按独立市场分级研究公司');
 views.innerHTML='<button data-grade-direction="domestic"><strong>国内分级</strong><span>H5稳榜与有效登顶</span></button><button data-grade-direction="overseas"><strong>海外分级</strong><span>海外收入与下载样本</span></button>';
 $('#rrMain .rr-heading').before(views);
 const note=document.createElement('details');note.id='gradeMethod';note.innerHTML='<summary>分级口径与本页明细</summary><div id="gradeMethodBody"></div><button class="btn" id="gradeCsv">导出当前方向明细</button>';
 $('#rrMain .rr-heading').after(note);
 const retained=['group','scope','genre','audience','query','readerSearch','readerSearchPage','readerSourceCategory'];
 const thresholds={domestic:[['T0','（在榜≥15款 或 单产品最长≥800天）且（登顶≥5个且有效登顶≥2个，或上榜总天数≥800天）'],['T1','（在榜≥10款 或 单产品≥400天 或 登顶≥3个）且（登顶≥2个 或 总天数≥400天 或 在榜≥20款）'],['T2','在榜5–19款，或登顶≥1个且在榜≥2款，或单产品≥300天，或总天数≥500天'],['T3','在榜1–4款且无稳榜信号，或入选消除类监控名单']],overseas:[['T0','收入≥3亿美元 或 下载≥1.5亿'],['T1','收入≥5000万美元 或 下载≥2000万'],['T2','收入≥1000万美元 或 下载≥500万'],['T3','有海外样本，但低于T2门槛']]};
 const capture=()=>({values:Object.fromEntries(retained.map(k=>[k,state[k]])),scroll:$('#rrMain').scrollTop});
 function switchDirection(direction){
  if(direction===state.gradeDirection)return;
  state.gradeViews={...state.gradeViews,[state.gradeDirection]:capture()};const saved=state.gradeViews[direction];
  state.gradeDirection=direction;Object.assign(state,saved?.values||{group:state.group,scope:'all',genre:'all',audience:state.audience,query:'',readerSearch:'',readerSearchPage:0,readerSourceCategory:''});
  Object.assign(state,{revenue:'all',marketDirection:'all',focus:null,selected:null,readerFocus:'',readerComponent:'',routeActive:false,peerView:'cards',readerNetwork:false,listAll:false});
  $('#search').value=state.query;$('#genre').value=state.genre;scopeControl.value=state.audience;closeDetail();setMode('graph');refresh();requestAnimationFrame(()=>{$('#rrMain').scrollTop=saved?.scroll||0;});
 }
 views.addEventListener('click',e=>{const b=e.target.closest('[data-grade-direction]');if(b)switchDirection(b.dataset.gradeDirection);});
 function sync(){
  const on=state.mode==='graph'&&isCategoryPeer()&&state.peerView!=='relations'&&!state.routeActive&&!state.readerNetwork;
  views.hidden=note.hidden=!on;document.body.classList.toggle('market-grade-mode',on);document.body.dataset.gradeDirection=state.gradeDirection;
  if(!on)return;
  for(const b of views.querySelectorAll('button'))b.setAttribute('aria-pressed',String(b.dataset.gradeDirection===state.gradeDirection));
  const d=state.gradeDirection,label=G.labels[d],rows=G.pool(),missing=rows.filter(n=>G.tier(n)==null);
  $('#gradeMethodBody').innerHTML=(d==='domestic'?'<p>国内评级依据在榜产品数、稳榜天数和有效登顶表现；消除类监控名单入选公司纳入T3。</p>':'<p>海外评级依据收入与下载样本。休闲榜与超休闲榜分别展示，按统计口径取高，不将两榜数据相加。</p>')+'<p>评级反映公司在本方向的样本表现，不等于某一品类的独立实力评级。国内、海外和综合评级分别展示；上市升档、境外主体封顶仅用于综合评级。</p><p>缺少'+label+'评级证据的公司不参与本方向排序，可在完整名单中查看。</p>'+`<details><summary>当前范围未纳入${label}评级的公司 · ${missing.length} 家</summary><div class="grade-unlisted">${missing.map(n=>`<button data-company="${esc(n.id)}">${esc(n.name)}</button>`).join('')||'当前范围均有本方向评级。'}</div></details>`;
  if(d==='overseas')$('#gradeMethodBody').insertAdjacentHTML('beforeend','<p class=\"sample-window-note\">样本时间说明：数据源标注“10Q”，但列示期间2024Q1—2026Q3对应连续11个季度。缺少可核对的逐季度明细，因此展示累计样本值，不据此换算年收入或调整评级。</p>');
  $('#gradeMethodBody').insertAdjacentHTML('afterbegin',`<table class="grade-thresholds"><caption>${label}公司评级标准</caption><thead><tr><th>级别</th><th>评级门槛</th></tr></thead><tbody>${thresholds[d].map(([t,s])=>`<tr><th>${t}</th><td>${s}</td></tr>`).join('')}</tbody></table><p>${d==='domestic'?'按T0至T3依次判级；有效登顶指最高名次为1且上榜≥60天。天数按固定监控窗口统计。':'按T0至T3依次判级；门槛采用数据源标注的10Q统计口径。超休闲榜7Q按10/7折算取高；页面展示7Q累计值，时间差异见下方说明。'}</p>`);
 }
 const previousDetail=showDetail;
 showDetail=function(n){previousDetail(n);const r=n&&G.record(n);if(!r)return;
  const original=$('#detail .detail-header .badges .badge');if(original)original.textContent='综合评级 '+r.sourceCombinedTier;
  const directions=['domestic','overseas'].filter(d=>r[d]?.tier!=null);
  if(!directions.length&&!r.combinedAdjustments.length)return;
  const section=document.createElement('section');section.className='detail-section grade-detail';
  section.innerHTML=(directions.length?'<h3>市场评级</h3>':'')+directions.map(d=>{const e=r[d],label=G.labels[d];return `<article class="grade-detail-track grade-${d}"><strong>公司${label}评级：${e.tier==null?'未纳入该方向评级':'T'+e.tier}</strong>${e.tier==null?'':`<p>${esc(G.metric(n,d))}</p><details class="detail-reference"><summary>${label}分级原始证据</summary><p>${esc(e.evidence)}</p>${d==='overseas'&&(e.metrics.hypercasual7QDownloads!=null||e.metrics.hypercasual7QRevenueUSD!=null)?`<p>另列超休闲榜7Q：${e.metrics.hypercasual7QRevenueUSD!=null?'收入 '+G.amount(e.metrics.hypercasual7QRevenueUSD):''} ${e.metrics.hypercasual7QDownloads!=null?'下载 '+G.downloads(e.metrics.hypercasual7QDownloads):''}。此处为原始7Q数值。</p>`:''}<p>来源：${esc(r.source.sheet)}!${esc(r.source.cell)}</p></details>`}</article>`;}).join('')+(r.combinedAdjustments.length?'<details class="detail-reference"><summary>综合评级调整依据</summary><p>'+esc(r.combinedAdjustments.join('；'))+'</p></details>':'');
  $('#detail .detail-header').after(section);
 };
 $('#gradeCsv').onclick=()=>{const d=state.gradeDirection,rows=[['公司ID','公司名称','方向','本方向分轨评级','本方向原始证据','主营品类','核查角色','综合评级','综合评级调整依据','来源单元格'],...G.select().map(n=>{const r=G.record(n);return [n.id,n.name,G.labels[d],'T'+r[d].tier,r[d].evidence,n.category,n.role,r.sourceCombinedTier,r.combinedAdjustments.join('；'),r.source.sheet+'!'+r.source.cell];})];const cell=v=>'"'+String(v??'').replace(/^[=+@-]/,s=>"'"+s).replaceAll('"','""')+'"';download(new Blob(['\ufeff'+rows.map(r=>r.map(cell).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'}),G.labels[d]+'分级-'+state.group.split(' · ')[0]+'.csv');};
 const oldRender=renderGraph;renderGraph=function(...args){const r=oldRender(...args);sync();return r;};
 const oldMode=setMode;setMode=function(...args){const r=oldMode(...args);sync();return r;};
 const oldRefresh=refresh;refresh=function(...args){const r=oldRefresh(...args);sync();return r;};
 window.AtlasGradeViews={sync,switchDirection};sync();
})();
