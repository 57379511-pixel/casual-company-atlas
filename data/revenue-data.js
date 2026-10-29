/* Separate evidence ledger; never overwrites workbook market labels or propagates to subsidiaries. */
window.ATLAS_REVENUE = {
  reviewedAt: '2026-10-29',
  policy: '按所列统计期、所列主体与业务口径，国内或海外收入占比超过50%归为该方向；仅代表该报告期。未取得可用拆分的记录为收入未判定，不用注册地、下载或原表市场方向代替。集团收入不下传到子公司，集团综合收入不等于休闲游戏收入。',
  records: {
    G001: {domestic:473, overseas:186, unit:'亿元', period:'2026 Q2', scope:'腾讯集团游戏业务', basis:'本土／国际市场游戏收入；非集团总收入，非单一工商主体', sources:[{title:'新华网：腾讯2026 Q2财报',url:'https://www.xinhuanet.com/tech/20260812/a1a5555bd774451592b94c57794202f4/c.html'},{title:'每日经济新闻：腾讯游戏二季度营收',url:'https://www.nbd.com.cn/articles/2026-08-13/4541383.html'}]},
    G002: {domestic:7809139135.84,overseas:14307900502.12,unit:'元',period:'2026 H1',scope:'世纪华通集团合并营业收入',basis:'内销／外销；含非游戏业务，不代表点点单体',sources:[{title:'深交所：2026半年报，第16页',url:'https://disc.static.szse.cn/disc/disk03/finalpage/2026-08-28/be9c0a31-3cd3-4b1d-a18d-e59f1d1da361.PDF#page=16'}]},
    G003: {domestic:4673273318.96,overseas:15455876.70,unit:'元',period:'2026 H1',scope:'巨人网络集团合并营业收入',basis:'境内／境外营业收入；非休闲产品专项收入',sources:[{title:'巨潮资讯：2026半年报，PDF第14页',url:'https://static.cninfo.com.cn/finalpage/2026-08-27/1225514014.PDF#page=14'}]},
    G004: {domestic:300353508.61,overseas:277582849.62,unit:'元',period:'2026 H1',scope:'中文在线集团合并营业收入',basis:'海外地区收入及总收入差额；含网文、短剧等非游戏业务。国内51.97%，接近均衡，不宜解释为单一国内业务公司',sources:[{title:'巨潮资讯：2026半年报，PDF第138—139页',url:'https://static.cninfo.com.cn/finalpage/2026-08-26/1225504423.PDF#page=138'}]},
    G005: {domestic:115704722.07,overseas:331779172.42,unit:'元',period:'2026 H1',scope:'汤姆猫集团合并营业收入',basis:'按经营地区分类；包含广告与其他业务。74.14%为计算所得收入占比，非毛利率',sources:[{title:'巨潮资讯：2026半年报，PDF第110—111页',url:'https://static.cninfo.com.cn/finalpage/2026-08-27/1225511444.PDF#page=110'}]}
  }
};
