/* Source-specific market assessment; financial amounts remain separate. */
window.ATLAS_DIRECTIONS = {
  "reviewedAt": "2026-10-30",
  "sourceFile": "国内休闲游戏公司图谱_整合版 (2).xlsx",
  "sourceWorkbookSHA256": "1e165679e883c656ba043155755d1d2e247de4c2e187adc2eb234910ff7c88b0",
  "policy": "按源表收录主体及产品组合区分国内为主、海外为主、国内海外并重。有同期间、同口径收入拆分时，两边各占30%至70%列为并重，其余按占比较高的一边分类；30%为本图谱的展示分组标准，不代表行业评级。没有完整拆分时，结合原表产品及国内/出海分级逐条判断：两边均有较强业务支撑的可列为并重，不因仅有产品上线或两边同级就自动归并重。并重不代表收入各占50%，不补造占比；具体依据及主体范围保留在详情中。",
  "records": {
    "G001": {
      "key": "domestic",
      "method": "financial",
      "scope": "腾讯集团游戏业务",
      "basis": "采用已披露的同期间、同口径国内外收入比较，详见收入拆分。",
      "limitations": "本土／国际市场游戏收入；非集团总收入，非单一工商主体",
      "signals": {
        "sourceRow": 2,
        "sourceMarket": "国内外双线",
        "sourceChannel": "平台",
        "sourceProducts": "王者荣耀、和平精英",
        "tierEvidence": "出海T3:收入0.1亿美元/下载89万(休闲榜10Q)；上市公司→T1",
        "domesticTier": null,
        "overseasTier": 3,
        "h5Products": null,
        "overseas10QUSD": 7485043,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://group.softbank/en/news/press/20160621",
        "https://gamesbeat.com/chinas-tencent-invests-in-europes-mobile-and-online-game-publisher-miniclip-exclusive/",
        "https://www.tencent.com/"
      ]
    },
    "G002": {
      "key": "balanced",
      "method": "financial",
      "scope": "世纪华通集团合并营业收入",
      "basis": "采用已披露的同期间、同口径国内外收入拆分，两边均占30%以上，按本图谱展示分组标准列为国内海外并重；完整占比、统计期和集团口径保留。",
      "limitations": "内销／外销；含非游戏业务，不代表点点单体",
      "signals": {
        "sourceRow": 3,
        "sourceMarket": "国内外双线",
        "sourceChannel": null,
        "sourceProducts": "Whiteout Survival",
        "tierEvidence": "上市公司→T1",
        "domesticTier": null,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80176445&gather=1&id=12286179",
        "https://static.cninfo.com.cn/finalpage/2024-11-07/1221641952.PDF"
      ]
    },
    "G003": {
      "key": "domestic",
      "method": "financial",
      "scope": "巨人网络集团合并营业收入",
      "basis": "采用已披露的同期间、同口径国内外收入比较，详见收入拆分。",
      "limitations": "境内／境外营业收入；非休闲产品专项收入",
      "signals": {
        "sourceRow": 4,
        "sourceMarket": "国内外双线",
        "sourceChannel": null,
        "sourceProducts": "征途",
        "tierEvidence": "上市公司→T1",
        "domesticTier": null,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://paper.cnstock.com/html/2026-04/27/content_2207100.htm",
        "https://apps.apple.com/cn/app/id996509117"
      ]
    },
    "G004": {
      "key": "balanced",
      "method": "financial",
      "scope": "中文在线集团合并营业收入",
      "basis": "采用已披露的同期间、同口径国内外收入拆分，两边均占30%以上，按本图谱展示分组标准列为国内海外并重；完整占比、统计期和集团口径保留。",
      "limitations": "海外地区收入及总收入差额；含网文、短剧等非游戏业务。国内51.97%，接近均衡，不宜解释为单一国内业务公司",
      "signals": {
        "sourceRow": 5,
        "sourceMarket": "国内外双线",
        "sourceChannel": "平台",
        "sourceProducts": "国内网文平台",
        "tierEvidence": "出海T2:收入0.4亿美元/下载613万(休闲榜10Q)；上市公司→T1",
        "domesticTier": null,
        "overseasTier": 2,
        "h5Products": null,
        "overseas10QUSD": 36927548,
        "hypercasual7QUSD": 7
      },
      "sources": [
        "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12154788&stockid=300364",
        "https://apps.apple.com/us/app/chapters-interactive-stories/id1277029359?uo=4"
      ]
    },
    "G005": {
      "key": "overseas",
      "method": "financial",
      "scope": "汤姆猫集团合并营业收入",
      "basis": "采用已披露的同期间、同口径国内外收入比较，详见收入拆分。",
      "limitations": "按经营地区分类；包含广告与其他业务。74.14%为计算所得收入占比，非毛利率",
      "signals": {
        "sourceRow": 6,
        "sourceMarket": "国内外双线",
        "sourceChannel": null,
        "sourceProducts": "Talking Tom系列",
        "tierEvidence": "出海T1:收入0.1亿美元/下载10121万(休闲榜10Q)；上市公司→T1",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 6699756,
        "hypercasual7QUSD": 65442
      },
      "sources": [
        "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12264625",
        "https://apps.apple.com/us/app/my-talking-tom/id657500465?uo=4"
      ]
    },
    "G006": {
      "key": "domestic",
      "method": "product-review",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内产品为途游斗地主、捕鱼大作战、富豪麻将，国内棋牌构成该记录的业务基础；境外BeheFun另列品牌，不把境外品牌收入直接并入该法人。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 7,
        "sourceMarket": "国内外双线",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "途游斗地主、捕鱼大作战、富豪麻将",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数3/单产品最长3天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/app/id1501314785",
        "https://m.zhipin.com/companys/c91d5df8602107781n193t8~.html"
      ]
    },
    "G007": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T0，主力产品为Gossip Harbor、Seaside Escape、Flambé: Merge & Cook；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 8,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Gossip Harbor、Seaside Escape、Flambé: Merge & Cook",
        "tierEvidence": "出海T0:收入13.7亿美元/下载7011万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 0,
        "h5Products": null,
        "overseas10QUSD": 1366870394,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.bingocrush.cn/",
        "https://www.microfun.com/",
        "https://apps.apple.com/us/app/id1623318294"
      ]
    },
    "G008": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T0，主力产品为Family Farm系列、Dragonscapes Adventure、Tasty Travels、Truck Star；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 9,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Family Farm系列、Dragonscapes Adventure、Tasty Travels、Truck Star",
        "tierEvidence": "出海T0:收入3.7亿美元/下载5933万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 0,
        "h5Products": null,
        "overseas10QUSD": 372435221,
        "hypercasual7QUSD": 15069120
      },
      "sources": [
        "https://www.centurygames.com/games/tasty-travels/",
        "https://www.centurygames.com/games/truck-star/",
        "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80176445&gather=1&id=12286179"
      ]
    },
    "G009": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T0，主力产品为Zen Color、Bible Word Puzzle、Sudoku、Mystery Town、Vita Mahjong；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 10,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Zen Color、Bible Word Puzzle、Sudoku、Mystery Town、Vita Mahjong",
        "tierEvidence": "出海T0:收入0.5亿美元/下载22270万(休闲榜10Q+超休闲榜7Q折算)",
        "domesticTier": null,
        "overseasTier": 0,
        "h5Products": null,
        "overseas10QUSD": 54366834,
        "hypercasual7QUSD": 21057158
      },
      "sources": [
        "https://www.learnings.ai/aboutus.html",
        "https://www.baijing.cn/article/56436",
        "https://www.baijing.cn/article/55825"
      ]
    },
    "G010": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T2，主力产品为TopTop、Yumy、MICO；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 11,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "TopTop、Yumy、MICO",
        "tierEvidence": "出海T2:收入0.5亿美元/下载1474万(休闲榜10Q)；上市公司→T1",
        "domesticTier": null,
        "overseasTier": 2,
        "h5Products": null,
        "overseas10QUSD": 46536205,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://pdf.dfcfw.com/pdf/H3_AP202406271636966457_1.pdf",
        "https://finance.sina.com.cn/stock/hkstock/ggscyd/2023-08-25/doc-imzikthc6666864.shtml",
        "https://www.newborntown.com/development",
        "https://apps.apple.com/us/app/alices-dream-merge-3d-game/id6444907010?uo=4"
      ]
    },
    "G011": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为Cooking Madness、Word Connect、Forest Mania、My Journey；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 12,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Cooking Madness、Word Connect、Forest Mania、My Journey",
        "tierEvidence": "出海T1:收入0.6亿美元/下载2745万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 56886752,
        "hypercasual7QUSD": 254260
      },
      "sources": [
        "https://www.baijing.cn/article/55316",
        "https://www.baijing.cn/article/31110"
      ]
    },
    "G012": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为Carnival Tycoon: Coin Games、Cash Tornado、Jackpot Master；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 13,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Carnival Tycoon: Coin Games、Cash Tornado、Jackpot Master",
        "tierEvidence": "出海T1:收入2.5亿美元/下载2387万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 249952105,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.zhipin.com/companys/9e16f46aaca2bca01n193966.html",
        "https://apps.apple.com/us/app/carnival-tycoon-coin-games/id6475709488"
      ]
    },
    "G013": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为Merge Cooking、Foodstars: Merge & Cook；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 14,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Merge Cooking、Foodstars: Merge & Cook",
        "tierEvidence": "出海T1:收入1.7亿美元/下载1562万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 166889170,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.baijing.cn/article/56525",
        "https://www.diandian.com/news/QhPg5sO7lljpKPSPyjTm",
        "https://apps.apple.com/us/app/id1643509748"
      ]
    },
    "G014": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为Chapters: Interactive Stories；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 15,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Chapters: Interactive Stories",
        "tierEvidence": "出海T1:收入0.6亿美元/下载1201万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 61750109,
        "hypercasual7QUSD": 7394
      },
      "sources": [
        "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12154788&stockid=300364"
      ]
    },
    "G015": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为Yalla Ludo、Yalla语音房；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 16,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Yalla Ludo、Yalla语音房",
        "tierEvidence": "出海T1:收入0.7亿美元/下载701万(休闲榜10Q)；上市公司→T1",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 72189797,
        "hypercasual7QUSD": 2399271
      },
      "sources": [
        "https://www.yalla.com.cn/yallagroup.html",
        "https://apps.apple.com/us/app/yalla-ludo-ludo-jackaroo/id1419536376"
      ]
    },
    "G016": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T2，主力产品为Idle Office Tycoon、Idle Fitness Gym Tycoon；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 17,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Idle Office Tycoon、Idle Fitness Gym Tycoon",
        "tierEvidence": "出海T2:收入0.1亿美元/下载1173万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 2,
        "h5Products": null,
        "overseas10QUSD": 9784048,
        "hypercasual7QUSD": 1578302
      },
      "sources": [
        "https://www.taptap.cn/app/802440"
      ]
    },
    "G017": {
      "key": "overseas",
      "method": "source-tier-comparison",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2、出海T1，参考两边分级及该行产品收入信号，归海外为主。两边分级的评价方法不同，不将等级差换算为收入比例。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 18,
        "sourceMarket": "海外出海",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "BlockPuz、Makeup Stylist、飞机模拟高手、闯关大聪明、营救小猫、疯狂的卡片、美食烧烤",
        "tierEvidence": "国内T2:在榜4款/登顶1个(有效0)/总天数56/单产品最长29天；出海T1:收入0.0亿美元/下载2215万(休闲榜10Q)",
        "domesticTier": 2,
        "overseasTier": 1,
        "h5Products": 4,
        "overseas10QUSD": 331684,
        "hypercasual7QUSD": 77542
      },
      "sources": [
        "https://www.wedobest.com.cn/about",
        "https://web.wedobest.com.cn/agreement",
        "https://www.taptap.cn/app/156276/all-info"
      ]
    },
    "G018": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为My Home My World、Top Tycoon: Coin Theme Empire、Rich Land；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 19,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "My Home My World、Top Tycoon: Coin Theme Empire、Rich Land",
        "tierEvidence": "出海T1:收入0.7亿美元/下载1707万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 68213173,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://appgrowing.net/blog/top_tycoon/",
        "https://www.yfchuhai.com/article/10226441.html",
        "https://www.baijing.cn/article/54178"
      ]
    },
    "G019": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为My Talking Tom系列、Talking Tom Gold Run；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 20,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "My Talking Tom系列、Talking Tom Gold Run",
        "tierEvidence": "出海T1:收入0.1亿美元/下载10121万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 6699756,
        "hypercasual7QUSD": 65442
      },
      "sources": [
        "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12264625",
        "https://outfit7.com/"
      ]
    },
    "G020": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为Ball Sort Puzzle、Find It Out、Crossmath、Differences - Find & Spot It；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 21,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Ball Sort Puzzle、Find It Out、Crossmath、Differences - Find & Spot It",
        "tierEvidence": "出海T1:收入0.1亿美元/下载6332万(休闲榜10Q+超休闲榜7Q折算)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 5604175,
        "hypercasual7QUSD": 8720488
      },
      "sources": [
        "https://apps.apple.com/us/app/id6504279468",
        "https://m.jiemian.com/article/14820817.html",
        "https://money.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=8347161&stockid=301171"
      ]
    },
    "G021": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T0，主力产品为Bingo Blitz、Solitaire Grand Harvest、WSOP、Redecor；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。 原表“国内市场/微信小游戏”与境外产品收入、出海分级不符；本次只修正研究方向，原字段完整保留。",
      "signals": {
        "sourceRow": 22,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "Bingo Blitz、Solitaire Grand Harvest、WSOP、Redecor",
        "tierEvidence": "消除类监控名单入选→T3；出海T0:收入9.4亿美元/下载3264万(休闲榜10Q)；境外对标主体封顶T1",
        "domesticTier": null,
        "overseasTier": 0,
        "h5Products": null,
        "overseas10QUSD": 935452608,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.sec.gov/Archives/edgar/data/1828016/000182801626000010/playtika-20251231.htm"
      ]
    },
    "G022": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T0，主力产品为8 Ball Pool、Subway Surfers、Football Strike；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。 原表“国内市场/微信小游戏”与境外产品收入、出海分级不符；本次只修正研究方向，原字段完整保留。",
      "signals": {
        "sourceRow": 23,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "8 Ball Pool、Subway Surfers、Football Strike",
        "tierEvidence": "消除类监控名单入选→T3；出海T0:收入1.6亿美元/下载20712万(休闲榜10Q)；境外对标主体封顶T1",
        "domesticTier": null,
        "overseasTier": 0,
        "h5Products": null,
        "overseas10QUSD": 158526403,
        "hypercasual7QUSD": 92836452
      },
      "sources": [
        "https://gamesbeat.com/chinas-tencent-invests-in-europes-mobile-and-online-game-publisher-miniclip-exclusive/",
        "https://www.pocketgamer.biz/tencent-majority-investment-miniclip/"
      ]
    },
    "G023": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为Sudoku.com、Nonogram.com、Pixel Art、Jigsaw Puzzles；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。 原表“国内市场/微信小游戏”与境外产品收入、出海分级不符；本次只修正研究方向，原字段完整保留。",
      "signals": {
        "sourceRow": 24,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "Sudoku.com、Nonogram.com、Pixel Art、Jigsaw Puzzles",
        "tierEvidence": "消除类监控名单入选→T3；出海T1:收入0.2亿美元/下载10546万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 20103584,
        "hypercasual7QUSD": 2309926
      },
      "sources": [
        "https://www.embracer.com/releases/closing-of-easybrain-divestment/"
      ]
    },
    "G024": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为Hay Day、Clash of Clans、Brawl Stars；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。 原表“国内市场/微信小游戏”与境外产品收入、出海分级不符；本次只修正研究方向，原字段完整保留。",
      "signals": {
        "sourceRow": 25,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "Hay Day、Clash of Clans、Brawl Stars",
        "tierEvidence": "消除类监控名单入选→T3；出海T1:收入2.8亿美元/下载2714万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 280943822,
        "hypercasual7QUSD": 483
      },
      "sources": [
        "https://group.softbank/en/news/press/20160621",
        "https://supercell.com/en/games/"
      ]
    },
    "G025": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为We Are Warriors!、Eatventure、Pocket Chess；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。 原表“国内市场/微信小游戏”与境外产品收入、出海分级不符；本次只修正研究方向，原字段完整保留。",
      "signals": {
        "sourceRow": 26,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "We Are Warriors!、Eatventure、Pocket Chess",
        "tierEvidence": "消除类监控名单入选→T3；出海T1:收入0.3亿美元/下载5723万(休闲榜10Q+超休闲榜7Q折算)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 11746068,
        "hypercasual7QUSD": 21925493
      },
      "sources": [
        "https://www.addleshawgoddard.com/en/news/2025/ag-advise-miniclip-games-acquisition-lessmore/"
      ]
    },
    "G026": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T2，主力产品为Head Ball 2、Online Head Ball；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。 原表“国内市场/微信小游戏”与境外产品收入、出海分级不符；本次只修正研究方向，原字段完整保留。",
      "signals": {
        "sourceRow": 27,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "Head Ball 2、Online Head Ball",
        "tierEvidence": "消除类监控名单入选→T3；出海T2:收入0.1亿美元/下载1521万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 2,
        "h5Products": null,
        "overseas10QUSD": 8531066,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.pocketgamer.biz/miniclip-acquires-head-ball-2-dev-masomo/",
        "https://webrazzi.com/2019/02/07/kafa-topunun-yapimcisi-masomo-miniclipe-satildi"
      ]
    },
    "G027": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以这关很烧脑、难不倒你吧、就我眼神好、全民闯关记、狂点就完事等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 28,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "这关很烧脑、难不倒你吧、就我眼神好、全民闯关记、狂点就完事",
        "tierEvidence": "国内T1(稳榜双门槛):在榜20款/登顶5个(有效1)/总天数429/单产品最长129天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 20,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/537682"
      ]
    },
    "G028": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以就你会消除等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 29,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "就你会消除",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数7/单产品最长7天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.microsoft.com/detail/xp9k0jnb95zxbg?gl=CN&hl=zh-CN"
      ]
    },
    "G029": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以快来消除星星、消方块2022、消除达人2022等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 30,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "快来消除星星、消方块2022、消除达人2022",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数38/单产品最长31天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.opp0o.com/api/games?q=%E4%B8%8A%E6%B5%B7%E5%A5%BD%E5%95%8A%E6%B8%B8&limit=20&offset=0",
        "https://www.opp0o.com/api/games?q=%E6%B6%88%E9%99%A4%E8%BE%BE%E4%BA%BA2022&limit=5&offset=0",
        "https://jits1.heytapdownload.com/rpk/202307/31/8a768042df7f0e5a467f762341896930.rpk?m=54cb55805613fd36a01b5f3d13faf409&hm=c5b5f90d031663a566f335aec79b299a"
      ]
    },
    "G030": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以闪亮大作战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 31,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "闪亮大作战",
        "tierEvidence": "国内T3:在榜1款/登顶1个(有效1)/总天数82/单产品最长82天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/719996/all-info"
      ]
    },
    "G031": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以消你们来了等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 32,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "消你们来了",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数20/单产品最长20天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "http://eqmobi.com/",
        "http://eqmobi.com/games/phone/2018-08-27/55.html"
      ]
    },
    "G032": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以益智通关我最行等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 33,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "益智通关我最行",
        "tierEvidence": "国内T2:在榜2款/登顶1个(有效0)/总天数92/单产品最长88天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.microsoft.com/detail/xpdcg5zkmp15vx?gl=CN&hl=zh-CN"
      ]
    },
    "G033": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以开个大脑门等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 34,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "开个大脑门",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数7/单产品最长7天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.ali213.net/qzry/"
      ]
    },
    "G034": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以密室消除 8、超级解压大王、消消大冲关、万关消到底、开个小卖部、供销社的一天、怀旧供销社等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 35,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "密室消除 8、超级解压大王、消消大冲关、万关消到底、开个小卖部、供销社的一天、怀旧供销社",
        "tierEvidence": "国内T2:在榜9款/登顶1个(有效1)/总天数462/单产品最长314天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 9,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/yxspjg/gcwlyxspxx/202608/t20260831_1005702.html"
      ]
    },
    "G035": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以密室消除7、消除天花板、脑袋秀出花、脑力天花板、脑力爆梗王、找茬状元、就我最聪明等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 36,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "密室消除7、消除天花板、脑袋秀出花、脑力天花板、脑力爆梗王、找茬状元、就我最聪明",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数12/单产品最长5天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.9game.cn/bxczxqc/"
      ]
    },
    "G036": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以守护花之窗等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 37,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "守护花之窗",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数12/单产品最长6天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://hooguns.com/",
        "https://www.gameggg.com/game/9308.html"
      ]
    },
    "G037": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以消消好哇塞等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 38,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "消消好哇塞",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数9/单产品最长7天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.microsoft.com/detail/xpdcc8pxnq52hw?gl=CN&hl=zh-CN"
      ]
    },
    "G038": {
      "key": "overseas",
      "method": "source-tier-comparison",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3、出海T1，参考两边分级及该行产品收入信号，归海外为主。两边分级的评价方法不同，不将等级差换算为收入比例。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。 本条海外产品与发行账号沿用用户源表映射，未独立确认其与上海法人完整归属；不与G363海南爱乐游混并。",
      "signals": {
        "sourceRow": 39,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "动物连连看、麻将挪对对、Water Sort、Puzzle Fuzzle、Sort Balls、Fit'em All、Word Crash、Merge Number 2048 等20款产品",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数44/单产品最长16天；出海T1:收入2.5亿美元/下载6654万(休闲榜10Q+超休闲榜7Q折算)",
        "domesticTier": 3,
        "overseasTier": 1,
        "h5Products": 4,
        "overseas10QUSD": 246185433,
        "hypercasual7QUSD": 3338297
      },
      "sources": [
        "https://www.taptap.cn/app/387150"
      ]
    },
    "G039": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以点点连连乐等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 40,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "点点连连乐",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数5/单产品最长5天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/760425/all-info"
      ]
    },
    "G040": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以货柜整理消除等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 41,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "货柜整理消除",
        "tierEvidence": "国内T2:在榜2款/登顶1个(有效0)/总天数56/单产品最长40天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62393916"
      ]
    },
    "G041": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以我的急速人生等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 42,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "我的急速人生",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数1/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/cxjg/202508/t20250825_927608.html"
      ]
    },
    "G042": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以一起泡泡龙、开心点点消、甜甜爱消除、胡同小店、锦绣合合、雾隐镇、江南小客栈、悠悠寻宝记、梦幻消不停等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 43,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "一起泡泡龙、开心点点消、甜甜爱消除、胡同小店、锦绣合合、雾隐镇、江南小客栈、悠悠寻宝记、梦幻消不停",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数56/单产品最长35天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/developer/%E4%B8%8A%E6%B5%B7%E8%B6%A3%E6%BB%8B%E6%BB%8B%E7%BD%91%E7%BB%9C%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/id1493488764?l=en-GB"
      ]
    },
    "G043": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以战风等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 44,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "战风",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数10/单产品最长10天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/741889/all-info"
      ]
    },
    "G044": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以快乐成语填词、考考成语闯关等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 45,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "快乐成语填词、考考成语闯关",
        "tierEvidence": "国内T2:在榜2款/登顶1个(有效0)/总天数9/单产品最长6天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/yxspjg/gcwlyxspxx/202511/t20251127_940634.html"
      ]
    },
    "G045": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以超能下蛋鸭等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 46,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "超能下蛋鸭",
        "tierEvidence": "国内T1(稳榜双门槛):在榜2款/登顶1个(有效1)/总天数482/单产品最长407天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/15846"
      ]
    },
    "G046": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以精灵萌宝贝等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 47,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "精灵萌宝贝",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数16/单产品最长16天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/gameVideo/62342607"
      ]
    },
    "G047": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以二到无穷大、连线消除2248等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 48,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "二到无穷大、连线消除2248",
        "tierEvidence": "国内T2:在榜2款/登顶2个(有效0)/总天数29/单产品最长15天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62321951",
        "https://app.mi.com/details?id=com.airmpoint.twozerofoureight.cn.mi"
      ]
    },
    "G048": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以泡泡龙经典闯关、双人游戏、二人五子棋、二人象棋等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 49,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "泡泡龙经典闯关、双人游戏、二人五子棋、二人象棋",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数15/单产品最长11天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://gamehot.makegame.store/minigames/douyin/ttce71b8cc516b354d02"
      ]
    },
    "G049": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以拼字我最强等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 50,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "拼字我最强",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数15/单产品最长15天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.crxsoso.com/store/detail/xp9kkchm5wvxbt",
        "https://apps.microsoft.com/detail/xp9kkchm5wvxbt?hl=zh-CN&gl=CN"
      ]
    },
    "G050": {
      "key": "domestic",
      "method": "product-review",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "本表收录开心消消乐、海滨消消乐，国内T1且单产品最长在榜623天，以源表休闲产品组合的国内收入重心分类。乐元素另有日本偶像梦幻祭业务，不把“国内为主”解释为没有海外收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 51,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "开心消消乐、海滨消消乐",
        "tierEvidence": "国内T1(稳榜双门槛):在榜2款/登顶0个(有效0)/总天数736/单产品最长623天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.leyuansu.com/",
        "https://www.taptap.cn/developer/17648",
        "https://www.taptap.cn/app/2321/all-info",
        "https://36kr.com/p/3568446146575233",
        "https://www.baijing.cn/article/id-51489"
      ]
    },
    "G051": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以当皇上金币版、好货有佣、玉润剧场、枫影剧场、泡泡心选、社畜三国等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 52,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "当皇上金币版、好货有佣、玉润剧场、枫影剧场、泡泡心选、社畜三国",
        "tierEvidence": "国内T2:在榜4款/登顶0个(有效0)/总天数715/单产品最长340天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.oceanengine.com/extra/legal",
        "https://www.oceanengine.com/links/brand"
      ]
    },
    "G052": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以翻大饼等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 53,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "翻大饼",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数27/单产品最长13天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.microsoft.com/detail/xpddr28j66kfx9?gl=CN&hl=zh-CN"
      ]
    },
    "G053": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T0，以梦幻旅行、浪漫餐厅等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 54,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "梦幻旅行、浪漫餐厅",
        "tierEvidence": "国内T0(稳榜双门槛+登顶质量):在榜2款/登顶1个(有效1)/总天数901/单产品最长855天",
        "domesticTier": 0,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/472491/all-info?platform=android",
        "https://apps.apple.com/cn/app/id6472696051"
      ]
    },
    "G054": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以美食大作战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 55,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "美食大作战",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数83/单产品最长83天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/app/%E5%8F%AB%E6%88%91%E7%9B%96%E9%A3%9E%E5%A4%A9/id1639054808"
      ]
    },
    "G055": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以羊羊三消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 56,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "羊羊三消",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数2/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62363059"
      ]
    },
    "G056": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以狼了个狼、连了又连等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 57,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "狼了个狼、连了又连",
        "tierEvidence": "国内T2:在榜2款/登顶1个(有效1)/总天数111/单产品最长108天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.youxiguancha.com/game/64113.html"
      ]
    },
    "G057": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以连了再连等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 58,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "连了再连",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数8/单产品最长8天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.zhipin.com/companys/5539a4ae5cfe4de31nV62NW4FVo~.html"
      ]
    },
    "G058": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以干了个饭等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 59,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "干了个饭",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数22/单产品最长11天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/272832"
      ]
    },
    "G059": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以开局托儿所、拔了个罐、羊了个羊、羊了个羊：星球、羊来等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 60,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "开局托儿所、拔了个罐、羊了个羊、羊了个羊：星球、羊来",
        "tierEvidence": "国内T1(稳榜双门槛):在榜2款/登顶1个(有效1)/总天数709/单产品最长661天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://sns.sseinfo.com/resources/images/upload/202210/202210100935020364962530.pdf",
        "https://apps.apple.com/cn/app/id1644374326"
      ]
    },
    "G060": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以大丰收、摘下满天果、水果对对消、卷个毛线、开车上环道、这关有水平、梦想出租屋、这关我能赢等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 61,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "大丰收、摘下满天果、水果对对消、卷个毛线、开车上环道、这关有水平、梦想出租屋、这关我能赢",
        "tierEvidence": "国内T2:在榜8款/登顶0个(有效0)/总天数43/单产品最长14天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/229058/all-info"
      ]
    },
    "G061": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以欢乐消消消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 62,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "欢乐消消消",
        "tierEvidence": "国内T2:在榜3款/登顶0个(有效0)/总天数399/单产品最长307天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/728900?os=ios"
      ]
    },
    "G062": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以肥鹅健身房、肥鹅美食街、仙山掌门录、疯狂骑士团之宝箱世界、涂鸦爬楼等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 63,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "肥鹅健身房、肥鹅美食街、仙山掌门录、疯狂骑士团之宝箱世界、涂鸦爬楼",
        "tierEvidence": "国内T2:在榜7款/登顶2个(有效2)/总天数730/单产品最长228天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/app/id1579028465",
        "https://www.yfchuhai.com/article/10227194.html"
      ]
    },
    "G063": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以成语小秀才等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 64,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "成语小秀才",
        "tierEvidence": "国内T1(稳榜双门槛):在榜4款/登顶1个(有效1)/总天数417/单产品最长405天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/167939"
      ]
    },
    "G064": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以麻将消除闯关、全民找找字、这关很难玩、闯关我拿手等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 65,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "麻将消除闯关、全民找找字、这关很难玩、闯关我拿手",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数13/单产品最长8天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62414303"
      ]
    },
    "G065": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以凑十消消、就我眼力好、玩球高高手、不一样挂机、亡命时速、挂机无限流、黑魂勇士等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 66,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "凑十消消、就我眼力好、玩球高高手、不一样挂机、亡命时速、挂机无限流、黑魂勇士",
        "tierEvidence": "国内T1(稳榜双门槛):在榜22款/登顶4个(有效1)/总天数406/单产品最长125天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 22,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/382885?os=ios"
      ]
    },
    "G066": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以吃碰消消大师、胡牌消消、开挂小队、边际破碎、万世仙途等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 67,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "吃碰消消大师、胡牌消消、开挂小队、边际破碎、万世仙途",
        "tierEvidence": "国内T2:在榜19款/登顶1个(有效0)/总天数167/单产品最长43天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 19,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.microsoft.com/detail/xp9b4c50cbk9gn?gl=CN&hl=zh-CN"
      ]
    },
    "G067": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以小鸡来了、方块世界、我的急速人生、是喵就下100层、慢半拍画廊等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 68,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "小鸡来了、方块世界、我的急速人生、是喵就下100层、慢半拍画廊",
        "tierEvidence": "国内T2:在榜7款/登顶0个(有效0)/总天数145/单产品最长85天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://a.4399.cn/mobile/230291.html"
      ]
    },
    "G068": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以全民拼成语、汉字大王等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 69,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "全民拼成语、汉字大王",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数17/单产品最长16天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/716697"
      ]
    },
    "G069": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以一起消消消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 70,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "一起消消消",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数7/单产品最长7天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.qztc.edu.cn/sjxy/2024/0320/c1945a272732/page.htm"
      ]
    },
    "G070": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以通关我最6、山林坦克、脑子要瓦特啦、我要变秃了等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 71,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "通关我最6、山林坦克、脑子要瓦特啦、我要变秃了",
        "tierEvidence": "国内T2:在榜11款/登顶0个(有效0)/总天数63/单产品最长16天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 11,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62359227"
      ]
    },
    "G071": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以分类来挑战、吃吃碰碰杠杠、吃碰消消消、掌上消方块、方块闯关王、最爱拧螺丝、消个成语、花儿消不停、极速奔跑者、休闲对对消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 72,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "分类来挑战、吃吃碰碰杠杠、吃碰消消消、掌上消方块、方块闯关王、最爱拧螺丝、消个成语、花儿消不停、极速奔跑者、休闲对对消",
        "tierEvidence": "国内T2:在榜8款/登顶0个(有效0)/总天数124/单产品最长51天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://shouyou.3dmgame.com/android/492271.html"
      ]
    },
    "G072": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以旺旺没想到、你敢闯几关、全民大挑战、天才挑战王、障碍征服者、小辫子女王等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 73,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "旺旺没想到、你敢闯几关、全民大挑战、天才挑战王、障碍征服者、小辫子女王",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数5/单产品最长2天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://shouyou.3dmgame.com/android/6956.html"
      ]
    },
    "G073": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以轻松拼成语、闯关争第一、开心合不停、闯关大冒险等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 74,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "轻松拼成语、闯关争第一、开心合不停、闯关大冒险",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数12/单产品最长7天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.microsoft.com/detail/xpdnxd6cqbv8gp?gl=CN&hl=zh-CN"
      ]
    },
    "G074": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以顶级消除秀、机甲恐龙变身、恐龙超能队、合成未来机甲、扭蛋恐龙机甲、原始荒野生存等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 75,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "顶级消除秀、机甲恐龙变身、恐龙超能队、合成未来机甲、扭蛋恐龙机甲、原始荒野生存",
        "tierEvidence": "国内T2:在榜4款/登顶2个(有效1)/总天数128/单产品最长95天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://zhifengnetwork.com/",
        "https://zhifengnetwork.com/privacy.html",
        "https://www.cr173.com/azyx/1531253.html"
      ]
    },
    "G075": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以俄罗斯方块 GO、解压消方块、超级特种兵等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 76,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "俄罗斯方块 GO、解压消方块、超级特种兵",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数15/单产品最长15天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.bamenshenqi.com/game/316742.html"
      ]
    },
    "G076": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以俄罗斯方块冒险、吃碰消不完、文字乐翻天、螺丝解解乐、喵吉的旅行等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 77,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "俄罗斯方块冒险、吃碰消不完、文字乐翻天、螺丝解解乐、喵吉的旅行",
        "tierEvidence": "国内T2:在榜8款/登顶0个(有效0)/总天数66/单产品最长19天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.1ting.com/youxi/522912.html"
      ]
    },
    "G077": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以俄罗斯方块王者等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 78,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "俄罗斯方块王者",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数203/单产品最长129天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.microsoft.com/detail/xp98jjn7p40rcr?gl=CN&hl=zh-CN"
      ]
    },
    "G078": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以天天消花朵等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 79,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "天天消花朵",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数1/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.microsoft.com/detail/xpdngzzm1w69l8?gl=CN&hl=zh-CN"
      ]
    },
    "G079": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以开心趣消消、指尖小方块、挑战消方块、汉字大挑战、经典挪对对、飞跃大冒险、毛线梦工厂、贪吃联盟、丛林冒险队等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 80,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "开心趣消消、指尖小方块、挑战消方块、汉字大挑战、经典挪对对、飞跃大冒险、毛线梦工厂、贪吃联盟、丛林冒险队",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数31/单产品最长10天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/105936"
      ]
    },
    "G080": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以闪亮消星星、图形等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 81,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "闪亮消星星、图形",
        "tierEvidence": "国内T2:在榜6款/登顶1个(有效0)/总天数77/单产品最长28天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.zhaopin.com/companydetail/CZ688089630.htm",
        "https://www.3839.com/a/140321.htm",
        "https://www.3839.com/cp/14738.html"
      ]
    },
    "G081": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以模拟农场等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 82,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "模拟农场",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数10/单产品最长10天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/23955",
        "https://www.taptap.cn/app/824125"
      ]
    },
    "G082": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以倒水瓶大挑战、电了个炮、末世冲突、躺平躲猫之黑猫警长、开船狼人杀等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 83,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "倒水瓶大挑战、电了个炮、末世冲突、躺平躲猫之黑猫警长、开船狼人杀",
        "tierEvidence": "国内T2:在榜4款/登顶1个(有效0)/总天数48/单产品最长39天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/77257"
      ]
    },
    "G083": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以帝国与魔法等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 84,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "帝国与魔法",
        "tierEvidence": "国内T1(稳榜双门槛):在榜7款/登顶2个(有效2)/总天数994/单产品最长417天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/719601/all-info?platform=android"
      ]
    },
    "G084": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以这关太强了等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 85,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "这关太强了",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数5/单产品最长2天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://static.cninfo.com.cn/finalpage/2026-04-25/1225188928.PDF"
      ]
    },
    "G085": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以密室出逃、密室出逃2025、英雄计划等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 86,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "密室出逃、密室出逃2025、英雄计划",
        "tierEvidence": "国内T2:在榜5款/登顶1个(有效1)/总天数194/单产品最长150天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://finance.sina.com.cn/jjxw/2025-09-22/doc-infrikpr4887725.shtml"
      ]
    },
    "G086": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以智力趣消除、趣味爱消消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 87,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "智力趣消除、趣味爱消消",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数3/单产品最长2天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G087": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以解压小串串、解压小火锅、文字守城计、文字英雄斗、理线大作战、堆叠数字砖、家族小世代等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 88,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "解压小串串、解压小火锅、文字守城计、文字英雄斗、理线大作战、堆叠数字砖、家族小世代",
        "tierEvidence": "国内T2:在榜13款/登顶0个(有效0)/总天数150/单产品最长64天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 13,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/102529"
      ]
    },
    "G088": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以玩鸡贼6、找不同王者、头脑城堡、眼神贼好使等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 89,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "玩鸡贼6、找不同王者、头脑城堡、眼神贼好使",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数26/单产品最长15天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://a.4399.cn/mobile/311961.html"
      ]
    },
    "G089": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以动物乐园大作战、抓个圈等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 90,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "动物乐园大作战、抓个圈",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数20/单产品最长19天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/846695"
      ]
    },
    "G090": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以一起来解压、老六大排档等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 91,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "一起来解压、老六大排档",
        "tierEvidence": "国内T2:在榜9款/登顶2个(有效0)/总天数112/单产品最长54天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 9,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/102469",
        "https://www.taptap.cn/app/237413"
      ]
    },
    "G091": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以文字大师、最牛挑战、高情商选择等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 92,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "文字大师、最牛挑战、高情商选择",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数198/单产品最长119天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/217499/all-info"
      ]
    },
    "G092": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以你敢消我么、我消除超牛、我就要消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 93,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "你敢消我么、我消除超牛、我就要消",
        "tierEvidence": "国内T2:在榜4款/登顶2个(有效0)/总天数39/单产品最长18天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.microsoft.com/detail/xp88vkbv9vx84b?gl=CN&hl=zh-CN"
      ]
    },
    "G093": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以串串消除王、找茬大迷宫、合个小神仙、逆风要翻盘、清理真解压、思路打开了等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 94,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "串串消除王、找茬大迷宫、合个小神仙、逆风要翻盘、清理真解压、思路打开了",
        "tierEvidence": "国内T1(稳榜双门槛):在榜18款/登顶2个(有效1)/总天数748/单产品最长297天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 18,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.zhipin.com/companys/7c622e5f33ce6e781HN_09W8FFY~.html",
        "https://pdf.dfcfw.com/pdf/H3_AP202604271821628560_1.pdf",
        "https://www.youxiguancha.com/game/67412.html"
      ]
    },
    "G094": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以一起来烤串、吃碰杠连连、烤串大消除、雀魂对对碰、大唐逆袭记等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 95,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "一起来烤串、吃碰杠连连、烤串大消除、雀魂对对碰、大唐逆袭记",
        "tierEvidence": "国内T2:在榜7款/登顶0个(有效0)/总天数126/单产品最长60天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/app/%E5%90%83%E7%A2%B0%E6%9D%A0%E8%BF%9E%E8%BF%9E/id6745691636"
      ]
    },
    "G095": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以梦幻消除战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 96,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "梦幻消除战",
        "tierEvidence": "国内T2:在榜1款/登顶0个(有效0)/总天数324/单产品最长324天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/169678/apps"
      ]
    },
    "G096": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以极品解压王等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 97,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "极品解压王",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数12/单产品最长7天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/ae/developer/%E5%B9%BF%E5%B7%9E%E5%A8%B1%E5%AD%90%E9%85%B1%E4%BF%A1%E6%81%AF%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/id1665516864"
      ]
    },
    "G097": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以智商乐消消、消个水果游戏、疯狂脑力王、拯救牛牛等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 98,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "智商乐消消、消个水果游戏、疯狂脑力王、拯救牛牛",
        "tierEvidence": "国内T2:在榜7款/登顶0个(有效0)/总天数90/单产品最长31天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.bamenshenqi.com/game/323717.html"
      ]
    },
    "G098": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以嘎嘎解压、疯狂麻将、老铁救救我吧、文字进化、农场狗狗、农场烧脑游戏等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 99,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "嘎嘎解压、疯狂麻将、老铁救救我吧、文字进化、农场狗狗、农场烧脑游戏",
        "tierEvidence": "国内T1(稳榜双门槛):在榜13款/登顶3个(有效2)/总天数758/单产品最长189天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 13,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62359993"
      ]
    },
    "G099": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以我原来这么强、我怎么这么强、我成语太强了等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 100,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "我原来这么强、我怎么这么强、我成语太强了",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数10/单产品最长5天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G100": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以解压王者、解压也疯狂、这关你行不行、消除专家等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 101,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "解压王者、解压也疯狂、这关你行不行、消除专家",
        "tierEvidence": "国内T2:在榜5款/登顶1个(有效0)/总天数23/单产品最长9天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.thnet.gov.cn/attachment/7/7778/7778362/10168565.pdf"
      ]
    },
    "G101": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以俄罗斯经典消方块、就我拿第一、排序高手、爆乐消方块、英雄冒险闯关、解压全明星、解压我很溜、解压趣消除、珍珠奶茶店、音乐大师、拔牙我最强等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 102,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "俄罗斯经典消方块、就我拿第一、排序高手、爆乐消方块、英雄冒险闯关、解压全明星、解压我很溜、解压趣消除、珍珠奶茶店、音乐大师、拔牙我最强",
        "tierEvidence": "国内T2:在榜16款/登顶1个(有效0)/总天数136/单产品最长40天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 16,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.yx007.com/azyx/73759.html"
      ]
    },
    "G102": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T0，以你是真厉害、全民爱消除、剥个玉米、成语趣消除、指上花朵消除、文字消除、方块解压王、无敌螺丝王、最强螺丝王、玩个倒水等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 103,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "你是真厉害、全民爱消除、剥个玉米、成语趣消除、指上花朵消除、文字消除、方块解压王、无敌螺丝王、最强螺丝王、玩个倒水",
        "tierEvidence": "国内T0(稳榜双门槛+登顶质量):在榜31款/登顶7个(有效3)/总天数722/单产品最长233天",
        "domesticTier": 0,
        "overseasTier": null,
        "h5Products": 31,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/166018"
      ]
    },
    "G103": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以大神消不停等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 104,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "大神消不停",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数1/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62392066"
      ]
    },
    "G104": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以我是大厨神等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 105,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "我是大厨神",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数4/单产品最长4天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.thnet.gov.cn/attachment/7/7950/7950171/10611237.pdf",
        "https://www.thnet.gov.cn/attachment/7/7778/7778362/10168565.pdf"
      ]
    },
    "G105": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T0，以指上爱消消、挪对对消消、消除对对碰、精明的开局、脑洞词语、花朵爱消消、解压乐园、超级消不停、套住那只羊、找不同8000关等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 106,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "指上爱消消、挪对对消消、消除对对碰、精明的开局、脑洞词语、花朵爱消消、解压乐园、超级消不停、套住那只羊、找不同8000关",
        "tierEvidence": "国内T0(稳榜双门槛+登顶质量):在榜36款/登顶7个(有效3)/总天数793/单产品最长144天",
        "domesticTier": 0,
        "overseasTier": null,
        "h5Products": 36,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.bamenshenqi.com/game/308476.html",
        "https://appid.gqmg.com/mp/t8q6C_gBCz_t"
      ]
    },
    "G106": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以解压闯一关等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 107,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "解压闯一关",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数3/单产品最长3天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G107": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以叠了又叠等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 108,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "叠了又叠",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数1/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G108": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以消除达人等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 109,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "消除达人",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数91/单产品最长76天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/app/%E6%B6%88%E9%99%A4%E8%BE%BE%E4%BA%BA-3d%E7%88%BD%E7%82%B8%E6%B6%88%E9%99%A4/id6451918369"
      ]
    },
    "G109": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以每天都着迷等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 110,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "每天都着迷",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数4/单产品最长4天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.zhipin.com/companys/b13137558244419a1HF63Nu_FlM~.html",
        "https://www.shuididp.cn/yp-7aa74126146b789509ba8690b7efb401.html"
      ]
    },
    "G110": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以疯狂来填词等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 111,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "疯狂来填词",
        "tierEvidence": "国内T3:在榜1款/登顶1个(有效0)/总天数12/单产品最长12天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G111": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以成语大老爷等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 112,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "成语大老爷",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数46/单产品最长20天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.zhipin.com/companys/0aff8e64d0d3e1ad1Xd62dW0GFA~.html",
        "https://www.yfchuhai.com/enterprise/19477.html"
      ]
    },
    "G112": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以乱斗派对、营救女孩、修理大师、王者狙击等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 113,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "乱斗派对、营救女孩、修理大师、王者狙击",
        "tierEvidence": "国内T2:在榜13款/登顶0个(有效0)/总天数172/单产品最长36天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 13,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://play.google.com/store/apps/details?id=com.line.master.gamegp"
      ]
    },
    "G113": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以星星喜消消、拳击小妖怪、节奏模拟等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 114,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "星星喜消消、拳击小妖怪、节奏模拟",
        "tierEvidence": "国内T2:在榜5款/登顶1个(有效0)/总天数10/单产品最长4天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.niaogebiji.com/article-698136-1.html"
      ]
    },
    "G114": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以高手玩一玩、贪吃蛇成长、指挥兵战、萌兵大作战、滑梯冲冲、黑洞吞掉城市等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 115,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "高手玩一玩、贪吃蛇成长、指挥兵战、萌兵大作战、滑梯冲冲、黑洞吞掉城市",
        "tierEvidence": "国内T1(稳榜双门槛):在榜22款/登顶2个(有效0)/总天数199/单产品最长43天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 22,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/221126"
      ]
    },
    "G115": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以彩环消消乐游戏软件、缤纷方块等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 116,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "彩环消消乐游戏软件、缤纷方块",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数14/单产品最长12天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://art.gcc.edu.cn/xyxw/3924e318c9e04a6fb0c7d5a75652f79d.htm"
      ]
    },
    "G116": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以成语脑洞王等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 117,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "成语脑洞王",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数2/单产品最长2天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.zhipin.com/zhaopin/0ff69f2f51b28d1b03J92ty5/",
        "https://apkpure.net/tw/qu-wei-kai-xin-xiao/com.lingdong.qwkxx",
        "https://apkpure.net/tw/xian-lai-xiao-yi-xiao/com.lingdong.xlxyx"
      ]
    },
    "G117": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以神奇的脑洞、战场刺激对决、像素无尽冒险、格斗巅峰之战、樱花暖暖冒险、重型机械模拟等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 118,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "神奇的脑洞、战场刺激对决、像素无尽冒险、格斗巅峰之战、樱花暖暖冒险、重型机械模拟",
        "tierEvidence": "国内T2:在榜9款/登顶0个(有效0)/总天数108/单产品最长46天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 9,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.opp0o.com/api/games?q=%E5%B9%BF%E5%B7%9E%E7%81%B5%E6%A2%A6&limit=5&offset=0"
      ]
    },
    "G118": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以消除连击等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 119,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "消除连击",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数23/单产品最长13天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/180367"
      ]
    },
    "G119": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以解压很有趣、轻松来解压、群攻火柴人、外星人猜猜猜、勇闯迷阵、神龙小鱼、黑洞我最强等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 120,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "解压很有趣、轻松来解压、群攻火柴人、外星人猜猜猜、勇闯迷阵、神龙小鱼、黑洞我最强",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数87/单产品最长59天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://gdstc.gd.gov.cn/attachment/0/542/542998/4362591.pdf"
      ]
    },
    "G120": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以趣味叠叠乐等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 121,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "趣味叠叠乐",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数8/单产品最长8天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G121": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以爱上叠叠叠等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 122,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "爱上叠叠叠",
        "tierEvidence": "国内T3:在榜1款/登顶1个(有效1)/总天数256/单产品最长256天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/361661"
      ]
    },
    "G122": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以冲关我最棒等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 123,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "冲关我最棒",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数10/单产品最长10天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/261548",
        "https://www.taptap.cn/app/208806"
      ]
    },
    "G123": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以俄罗斯方块全民拼图等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 124,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "俄罗斯方块全民拼图",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数18/单产品最长18天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.crxsoso.com/store/detail/xp9kts0gxfngqn"
      ]
    },
    "G124": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以今晚打螺丝、块乐动物园、我炮台贼猛、我麻了个将、挪挪冲冲冲、跳一跳姑娘等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 125,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "今晚打螺丝、块乐动物园、我炮台贼猛、我麻了个将、挪挪冲冲冲、跳一跳姑娘",
        "tierEvidence": "国内T2:在榜4款/登顶1个(有效1)/总天数243/单产品最长108天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G125": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以闯关老司机、闯关专家等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 126,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "闯关老司机、闯关专家",
        "tierEvidence": "国内T2:在榜12款/登顶1个(有效0)/总天数62/单产品最长18天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 12,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/748142/all-info"
      ]
    },
    "G126": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以带我上车、螺丝消不完等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 127,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "带我上车、螺丝消不完",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数6/单产品最长5天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/yxspjg/gcwlyxspxx/202510/t20251022_936311.html"
      ]
    },
    "G127": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以就这么简单等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 128,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "就这么简单",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数1/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G128": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以密室消除3等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 129,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "密室消除3",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数6/单产品最长5天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://play.google.com/store/apps/details?hl=en_IN&id=com.bulk.shjing"
      ]
    },
    "G129": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以硬币消消消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 130,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "硬币消消消",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数5/单产品最长4天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G130": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以魔心消消乐、徐姥姥等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 131,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "魔心消消乐、徐姥姥",
        "tierEvidence": "国内T2:在榜12款/登顶1个(有效0)/总天数194/单产品最长58天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 12,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.shanwan.com/game/183281.html"
      ]
    },
    "G131": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以火锅串串消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 132,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "火锅串串消",
        "tierEvidence": "国内T2:在榜7款/登顶2个(有效0)/总天数99/单产品最长44天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/cxjg/202601/t20260126_947813.html",
        "https://www.mmhygame.com/"
      ]
    },
    "G132": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以无敌汉字王等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 133,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "无敌汉字王",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数35/单产品最长16天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/21018"
      ]
    },
    "G133": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以水倒曲成等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 134,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "水倒曲成",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数5/单产品最长4天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G134": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以大鹅方块等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 135,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "大鹅方块",
        "tierEvidence": "国内T3:在榜1款/登顶1个(有效0)/总天数3/单产品最长3天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.kunpo.cc/",
        "https://apps.apple.com/cn/app/id6468249909"
      ]
    },
    "G135": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以消除逃脱、益智大师赛、脑汁不够用啦等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 136,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "消除逃脱、益智大师赛、脑汁不够用啦",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数101/单产品最长61天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://pdf.dfcfw.com/pdf/H2_AN202508261734907002_1.pdf",
        "https://basic.10jqka.com.cn/836014/company.html",
        "https://gamehot.makegame.store/minigames/douyin/tt1d096bb48203925907"
      ]
    },
    "G136": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以凑十、慢慢生活、方块拼消消、明月小镇、消了嘛、秃然不会了、美食手札、玩个锤子、无尽数织、英雄好难等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 137,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "凑十、慢慢生活、方块拼消消、明月小镇、消了嘛、秃然不会了、美食手札、玩个锤子、无尽数织、英雄好难",
        "tierEvidence": "国内T2:在榜12款/登顶0个(有效0)/总天数393/单产品最长142天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 12,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/79956",
        "https://www.taptap.cn/app/212793"
      ]
    },
    "G137": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以最难游戏、烧脑高高手、挪车冲冲冲等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 138,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "最难游戏、烧脑高高手、挪车冲冲冲",
        "tierEvidence": "国内T1(稳榜双门槛):在榜5款/登顶3个(有效2)/总天数457/单产品最长348天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/707676"
      ]
    },
    "G138": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以城堡逃生、小小卡皮巴拉、猫咪大作战、猪了个猪、消除星星高手、通关特简单等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 139,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "城堡逃生、小小卡皮巴拉、猫咪大作战、猪了个猪、消除星星高手、通关特简单",
        "tierEvidence": "国内T2:在榜8款/登顶2个(有效0)/总天数83/单产品最长29天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://appid.gqmg.com/mp/OITkOJDbqamC"
      ]
    },
    "G139": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以丸子餐厅、守护世界、萌宠解谜、纯真年代、栖云小筑等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 140,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "丸子餐厅、守护世界、萌宠解谜、纯真年代、栖云小筑",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数52/单产品最长24天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/235504"
      ]
    },
    "G140": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以这关超难的等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 141,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "这关超难的",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数3/单产品最长3天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/yxspjg/gcwlyxspxx/202608/t20260831_1005702.html",
        "https://appid.gqmg.com/mp/K1OpgvXXiROJ",
        "https://appid.gqmg.com/mp/jfl9cP8mgXdw"
      ]
    },
    "G141": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以就爱连连看等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 142,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "就爱连连看",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数7/单产品最长7天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://qgame.996joy.com/game/web/oppo/privacy.html",
        "https://shouyou.3dmgame.com/android/505309.html"
      ]
    },
    "G142": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以六星消除等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 143,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "六星消除",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数126/单产品最长110天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://sj.qq.com/appdetail/wxf22a49a3c80a2d5b",
        "https://www.bjgsl.org.cn/game/37907.html"
      ]
    },
    "G143": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以倒水挑战、快让我上车、猪了个猪啦、聪明开局、通关我拿手、聪明高高手、通关特简单、这关我拿手、杠上开花消一消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 144,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "倒水挑战、快让我上车、猪了个猪啦、聪明开局、通关我拿手、聪明高高手、通关特简单、这关我拿手、杠上开花消一消",
        "tierEvidence": "国内T2:在榜5款/登顶2个(有效1)/总天数248/单产品最长168天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://developer.open-douyin.com/forum/bulletin/post/6482943813c3285ed21351ea"
      ]
    },
    "G144": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以倒水杯、消个水果等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 145,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "倒水杯、消个水果",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数127/单产品最长78天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://sj.qq.com/appdetail/wx1c5b569836caeb11",
        "https://sj.qq.com/appdetail/wxf41b76649658b9e3",
        "https://apps.microsoft.com/detail/xpdls219m16l19?gl=CN&hl=zh-CN",
        "https://apps.microsoft.com/detail/xp9d54gm1p37rs?gl=CN&hl=zh-CN"
      ]
    },
    "G145": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以肥宅快乐岛等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 146,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "肥宅快乐岛",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数1/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/817750/all-info"
      ]
    },
    "G146": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以谜题大冒险等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 147,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "谜题大冒险",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数179/单产品最长128天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/863044/all-info"
      ]
    },
    "G147": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以奇妙卡牌世界、疯狂卡片消、我的耕耘人生、双人荒野逃生游戏、悟空的日记等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 148,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "奇妙卡牌世界、疯狂卡片消、我的耕耘人生、双人荒野逃生游戏、悟空的日记",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数25/单产品最长20天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/665563/all-info",
        "https://m.3839.com/a/157847.htm"
      ]
    },
    "G148": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以成语接龙等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 149,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "成语接龙",
        "tierEvidence": "国内T2:在榜4款/登顶1个(有效0)/总天数56/单产品最长29天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.wedobest.com.cn/about",
        "https://web.wedobest.com.cn/agreement",
        "https://www.taptap.cn/app/156276/all-info",
        "https://www.wedobest.com.cn/",
        "https://www.taptap.cn/app/176796"
      ]
    },
    "G149": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以成语小达人软件等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 150,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "成语小达人软件",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数28/单产品最长28天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.zhipin.com/companys/eec8d35aaaa01b3d03d_0tq5EVc~.html"
      ]
    },
    "G150": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以插花消消除、插花消除、烧烤梦工厂、缤纷糖葫芦、双人竞技场、豆豆全扫光、商店模拟器、农场对对消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 151,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "插花消消除、插花消除、烧烤梦工厂、缤纷糖葫芦、双人竞技场、豆豆全扫光、商店模拟器、农场对对消",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数62/单产品最长28天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/228860/all-info"
      ]
    },
    "G151": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以疯狂通关王、聪明来通关、纸片大混战、飞机模拟高手、弓箭手对决、农场主快开荒、狂暴机甲之王等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 152,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "疯狂通关王、聪明来通关、纸片大混战、飞机模拟高手、弓箭手对决、农场主快开荒、狂暴机甲之王",
        "tierEvidence": "国内T1(稳榜双门槛):在榜14款/登顶3个(有效1)/总天数479/单产品最长211天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 14,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/737957/all-info"
      ]
    },
    "G152": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以整理师的任务等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 153,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "整理师的任务",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数152/单产品最长151天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/app/%E7%96%AF%E7%8B%82%E6%8B%A7%E8%9E%BA%E4%B8%9D-%E6%89%93%E4%B8%AA%E8%9E%BA%E4%B8%9D%E6%B8%B8%E6%88%8F-%E6%8B%94%E9%92%89%E5%AD%90%E5%A4%A7%E5%B8%88/id6499131070"
      ]
    },
    "G153": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以碰碰发财等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 154,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "碰碰发财",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数17/单产品最长17天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/yxspjg/gcwlyxspxx/202608/t20260831_1005702.html",
        "https://www.9game.cn/xiazai/3137404/"
      ]
    },
    "G154": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以挪对对等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 155,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "挪对对",
        "tierEvidence": "国内T3:在榜1款/登顶1个(有效1)/总天数102/单产品最长102天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://patents.google.com/patent/CN119971508A/zh",
        "https://patentimages.storage.googleapis.com/c0/7a/17/27d46b400bf08d/CN119971508A.pdf"
      ]
    },
    "G155": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以脑洞大考验等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 156,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "脑洞大考验",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数5/单产品最长5天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G156": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以空格之境等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 157,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "空格之境",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数55/单产品最长55天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/app/%E5%AE%88%E6%8A%A4%E8%8A%B1%E4%B9%8B%E7%AA%97/id6756707491"
      ]
    },
    "G157": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以缤纷消除馆、烧脑大作战、闯关趣无穷、烧脑玩梗王、你真是老六、神奇小脑瓜等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 158,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "缤纷消除馆、烧脑大作战、闯关趣无穷、烧脑玩梗王、你真是老六、神奇小脑瓜",
        "tierEvidence": "国内T1(稳榜双门槛):在榜11款/登顶2个(有效1)/总天数292/单产品最长119天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 11,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.opp0o.com/",
        "https://www.opp0o.com/api/games?q=%E6%B5%B7%E5%8D%97%E4%B8%80%E8%B5%B7%E7%8E%A9&limit=5&offset=0"
      ]
    },
    "G158": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以史上最难挑战、神脑洞、我的狗头、全民猜歌达人、找就完事了、梦想创业记等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 159,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "史上最难挑战、神脑洞、我的狗头、全民猜歌达人、找就完事了、梦想创业记",
        "tierEvidence": "国内T2:在榜11款/登顶0个(有效0)/总天数135/单产品最长55天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 11,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.9game.cn/fkxb/"
      ]
    },
    "G159": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以填词我在行等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 160,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "填词我在行",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数1/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://sj.qq.com/appdetail/wxe838231015d7ea17"
      ]
    },
    "G160": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以换装大联萌等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 161,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "换装大联萌",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数17/单产品最长17天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://static.cninfo.com.cn/finalpage/2025-04-29/1223376513.PDF"
      ]
    },
    "G161": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以雀友对对碰等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 162,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "雀友对对碰",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数47/单产品最长25天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/471367"
      ]
    },
    "G162": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以挪对对对、挪车强者、挪车强者王、小小箭头等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 163,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "挪对对对、挪车强者、挪车强者王、小小箭头",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数30/单产品最长16天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://sj.qq.com/appdetail/wx74212fe7875a6963",
        "https://apps.microsoft.com/detail/xpfbjkdzbrzzfw?gl=CN&hl=zh-CN"
      ]
    },
    "G163": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以这关你来吧、一箭又一箭、毛线消除等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 164,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "这关你来吧、一箭又一箭、毛线消除",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数160/单产品最长131天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://sj.qq.com/appdetail/wx54fd13dd73181557",
        "https://www.7k7k.com/wxgame/13860.htm"
      ]
    },
    "G164": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以豌豆大作战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 165,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "豌豆大作战",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数119/单产品最长96天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12231354&stockid=002919",
        "https://disc.static.szse.cn/download/disc/disk03/finalpage/2026-04-28/2992020c-26e2-4df0-9f2f-a69a834b97a0.PDF"
      ]
    },
    "G165": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以加菲猫家族：萌宠集结等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 166,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "加菲猫家族：萌宠集结",
        "tierEvidence": "国内T2:在榜8款/登顶1个(有效0)/总天数451/单产品最长366天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/250672",
        "https://www.taptap.cn/app/384197"
      ]
    },
    "G166": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以玩个锤锤、能玩一整天、菜鸟消消、连不到我吧、阿毛冲冲冲、重生少年等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 167,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "玩个锤锤、能玩一整天、菜鸟消消、连不到我吧、阿毛冲冲冲、重生少年",
        "tierEvidence": "国内T2:在榜14款/登顶1个(有效0)/总天数132/单产品最长43天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 14,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.ali213.net/bgzsl/"
      ]
    },
    "G167": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以休闲解压所、倒水解压等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 168,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "休闲解压所、倒水解压",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数1/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.91xz.net/down/41128.html",
        "https://www.91xz.net/down/42349.html"
      ]
    },
    "G168": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以吃了个水果、这很难吗等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 169,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "吃了个水果、这很难吗",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数14/单产品最长5天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://a.4399.cn/game-id-306919.html"
      ]
    },
    "G169": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以根本难不倒我、消消水果等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 170,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "根本难不倒我、消消水果",
        "tierEvidence": "国内T2:在榜3款/登顶1个(有效1)/总天数135/单产品最长127天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://sj.qq.com/appdetail/wx607ba0429bb682f5",
        "https://www.zzc9.com/xyx/mmo/2026-07-14/691.html"
      ]
    },
    "G170": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以试你也过不了第二关等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 171,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "试你也过不了第二关",
        "tierEvidence": "国内T3:在榜1款/登顶1个(有效0)/总天数3/单产品最长3天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G171": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以挪车作战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 172,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "挪车作战",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数10/单产品最长5天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G172": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以数字连连等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 173,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "数字连连",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数2/单产品最长2天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G173": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以这关太疯狂、比比脑瓜子、玩不了一点啊、挑战最强智商等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 174,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "这关太疯狂、比比脑瓜子、玩不了一点啊、挑战最强智商",
        "tierEvidence": "国内T2:在榜8款/登顶0个(有效0)/总天数62/单产品最长30天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://sj.qq.com/appdetail/wxdda5318e594ac0c8",
        "https://apps.microsoft.com/detail/xp8lp91cnxt2wx?gl=CN&hl=zh-CN"
      ]
    },
    "G174": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以大家来闯关、清新果子消乐、胡牌大王、动脑过这关、气的想摔手机、快来消一消、不信你能过这关、脑力大闯关等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 175,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "大家来闯关、清新果子消乐、胡牌大王、动脑过这关、气的想摔手机、快来消一消、不信你能过这关、脑力大闯关",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数79/单产品最长56天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.zhipin.com/companys/b2d75a1953b9d7ca1HF42Nm1GVo~.html",
        "https://a.4399.cn/mobile/297307.html"
      ]
    },
    "G175": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以梦幻理想家、解压工坊、闪耀时光、甜梦小店等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 176,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "梦幻理想家、解压工坊、闪耀时光、甜梦小店",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数30/单产品最长13天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/27871",
        "https://quanmin-game.com/",
        "https://quanmin-game.com/src/data.js?v=20260717-home-about-copy-1",
        "https://quanmin-game.com/src/modules/products.js?v=20260722-scroll-performance-1"
      ]
    },
    "G176": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以哥就是无敌、密室消除、密室消除2、小球球冒险等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 177,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "哥就是无敌、密室消除、密室消除2、小球球冒险",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数78/单产品最长43天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/231656?os=android"
      ]
    },
    "G177": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以上车大作战、梦幻庭院等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 178,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "上车大作战、梦幻庭院",
        "tierEvidence": "国内T2:在榜2款/登顶1个(有效0)/总天数33/单产品最长27天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.forjoy.cn/company/about.html",
        "https://www.forjoy.cn/products/casual.html",
        "https://www.forjoy.cn/products/yyfc.html"
      ]
    },
    "G178": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以葫芦娃大作战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 179,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "葫芦娃大作战",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数97/单产品最长97天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/14632/apps",
        "https://www.taptap.cn/app/387758"
      ]
    },
    "G179": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以萌宠欢乐消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 180,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "萌宠欢乐消",
        "tierEvidence": "国内T2:在榜3款/登顶1个(有效0)/总天数23/单产品最长16天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://app-1645472423.appstor.io/"
      ]
    },
    "G180": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以俄罗斯方块全新版、五子棋全新版、解压游戏盒、破烂王发家记、成语八十一关等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 181,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "俄罗斯方块全新版、五子棋全新版、解压游戏盒、破烂王发家记、成语八十一关",
        "tierEvidence": "国内T2:在榜8款/登顶0个(有效0)/总天数227/单产品最长129天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62389068"
      ]
    },
    "G181": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以宠物消消派对、消消来解压等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 182,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "宠物消消派对、消消来解压",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数23/单产品最长16天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/205375/all-info"
      ]
    },
    "G182": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以搬个方块吧、暖暖庄园、记忆重现、开心消水果、消除大作战、合合旅程、遇见小岛等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 183,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "搬个方块吧、暖暖庄园、记忆重现、开心消水果、消除大作战、合合旅程、遇见小岛",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数61/单产品最长21天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/19807/apps",
        "https://www.taptap.cn/app/229805"
      ]
    },
    "G183": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以玩不过我呀等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 184,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "玩不过我呀",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数48/单产品最长24天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.cnverify.com/company/Shenzhen-Duole-Kingdom-Technology-Co-Ltd"
      ]
    },
    "G184": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以水果乐连消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 185,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "水果乐连消",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数6/单产品最长6天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62398598"
      ]
    },
    "G185": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以机智逃脱等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 186,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "机智逃脱",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数87/单产品最长87天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://sj.qq.com/appdetail/wxc9ca302d7fa972f2"
      ]
    },
    "G186": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以向往的生活、庄园合合等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 187,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "向往的生活、庄园合合",
        "tierEvidence": "国内T2:在榜2款/登顶0个(有效0)/总天数321/单产品最长303天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://jy.ncu.edu.cn/detail/job?id=2656991",
        "https://jyb.gzist.edu.cn/info/2022/4236.htm",
        "https://www.taptap.cn/app/778664"
      ]
    },
    "G187": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以彩色消除等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 188,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "彩色消除",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数95/单产品最长57天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/820659/all-info"
      ]
    },
    "G188": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以一起推方块、喵喵人生、逆袭一刻、筑梦之旅、最强继承人、重返巅峰等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 189,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "一起推方块、喵喵人生、逆袭一刻、筑梦之旅、最强继承人、重返巅峰",
        "tierEvidence": "国内T2:在榜9款/登顶0个(有效0)/总天数422/单产品最长208天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 9,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/7690",
        "https://www.taptap.cn/app/14350"
      ]
    },
    "G189": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以消消爱大战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 190,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "消消爱大战",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数12/单产品最长12天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62405420"
      ]
    },
    "G190": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以女孩与海等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 191,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "女孩与海",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数145/单产品最长140天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/developer/%E6%B7%B1%E5%9C%B3%E5%B8%82%E6%A2%A6%E4%BD%9C%E5%9D%8A%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/id1517797018",
        "https://apps.apple.com/cn/app/女孩与海/id1629426595"
      ]
    },
    "G191": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以怪物连连消、雷电突击队、花朵碰碰消、闯关超给力等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 192,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "怪物连连消、雷电突击队、花朵碰碰消、闯关超给力",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数21/单产品最长16天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/36563/apps",
        "https://www.taptap.cn/app/487728"
      ]
    },
    "G192": {
      "key": "domestic",
      "method": "product-review",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "该记录为深圳市腾讯计算机系统有限公司的国内游戏产品与运营主体，依据该行国内产品及梯队分类；不直接套用腾讯控股集团收入比例。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 193,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "冲呀！饼干人：王国、MapleCC、腾讯无极、位置服务商业授权、企业微信、腾讯新闻早晚报",
        "tierEvidence": "国内T0(稳榜双门槛+登顶质量):在榜26款/登顶9个(有效5)/总天数6151/单产品最长928天",
        "domesticTier": 0,
        "overseasTier": null,
        "h5Products": 26,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/313622"
      ]
    },
    "G193": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以水排序解谜等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 194,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "水排序解谜",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数2/单产品最长2天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G194": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以喵宝小镇等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 195,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "喵宝小镇",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数3/单产品最长3天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.tianfultd.com/policy.html",
        "https://apps.apple.com/cn/app/id6504329678"
      ]
    },
    "G195": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以水排序谜题等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 196,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "水排序谜题",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数3/单产品最长3天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/213151"
      ]
    },
    "G196": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以快点躲起来、改装大作战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 197,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "快点躲起来、改装大作战",
        "tierEvidence": "国内T2:在榜2款/登顶0个(有效0)/总天数321/单产品最长303天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://jy.ncu.edu.cn/detail/job?id=2656991",
        "https://jyb.gzist.edu.cn/info/2022/4236.htm",
        "https://www.scfai.edu.cn/xsc/info/1015/13562.htm",
        "https://www.taptap.cn/app/778664"
      ]
    },
    "G197": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以四季物语等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 198,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "四季物语",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数122/单产品最长122天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/602820"
      ]
    },
    "G198": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以解压切切乐、荒野英雄、颜色你别跑、开心消除屋、跃动传说、超脑挑战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 199,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "解压切切乐、荒野英雄、颜色你别跑、开心消除屋、跃动传说、超脑挑战",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数25/单产品最长10天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/795741/all-info"
      ]
    },
    "G199": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以我爱叠叠消、赛博未来佛、猛鬼敲门、校诡异闻、切水果达人、明日木舟等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 200,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "我爱叠叠消、赛博未来佛、猛鬼敲门、校诡异闻、切水果达人、明日木舟",
        "tierEvidence": "国内T2:在榜7款/登顶1个(有效0)/总天数112/单产品最长26天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/708257"
      ]
    },
    "G200": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以我有一座童话岛、落樱美食、元气蛋蛋王、爆梗最强王者等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 201,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "我有一座童话岛、落樱美食、元气蛋蛋王、爆梗最强王者",
        "tierEvidence": "国内T2:在榜7款/登顶0个(有效0)/总天数80/单产品最长34天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.9game.cn/xiazai/3124322/"
      ]
    },
    "G201": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以花田小院等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 202,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "花田小院",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数1/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/cxjg/202402/t20240227_834919.html"
      ]
    },
    "G202": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以俄罗斯方块666等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 203,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "俄罗斯方块666",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数22/单产品最长22天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/192692"
      ]
    },
    "G203": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以开心消水果、欢乐消除开心假日、消除大作战、宝贝捉迷藏、我的餐饮小馆等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 204,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "开心消水果、欢乐消除开心假日、消除大作战、宝贝捉迷藏、我的餐饮小馆",
        "tierEvidence": "国内T2:在榜8款/登顶0个(有效0)/总天数304/单产品最长159天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/app/id6443893143",
        "https://m.3839.com/a/144286.htm"
      ]
    },
    "G204": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以餐厅养成记等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 205,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "餐厅养成记",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数3/单产品最长3天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62374037",
        "https://apps.apple.com/cn/app/id6449422265"
      ]
    },
    "G205": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以俄罗斯方块拼图等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 206,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "俄罗斯方块拼图",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数145/单产品最长145天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://tm.aliyun.com/detail/b414_31935010_41"
      ]
    },
    "G206": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以进化塔防等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 207,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "进化塔防",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数19/单产品最长19天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://sj.qq.com/appdetail/wx9a1f6cb9b1bca86c"
      ]
    },
    "G207": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以消消闯天下等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 208,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "消消闯天下",
        "tierEvidence": "国内T3:在榜1款/登顶1个(有效0)/总天数22/单产品最长22天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://static.cninfo.com.cn/finalpage/2024-11-07/1221641952.PDF",
        "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?CompanyCode=80176445&gather=1&id=12286179"
      ]
    },
    "G208": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以沉浸式解压达人、挖洞大师傅、货柜整理达人、双人同桌大乱斗、被你找到了、这关谁会等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 209,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "沉浸式解压达人、挖洞大师傅、货柜整理达人、双人同桌大乱斗、被你找到了、这关谁会",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数10/单产品最长5天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62414301"
      ]
    },
    "G209": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以天天要消除、点点消消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 210,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "天天要消除、点点消消",
        "tierEvidence": "国内T2:在榜3款/登顶2个(有效0)/总天数22/单产品最长12天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://h.4399.com/zzy/233321.htm"
      ]
    },
    "G210": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以疯狂消灭水果等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 211,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "疯狂消灭水果",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数4/单产品最长3天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G211": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以祖玛大西瓜、伪人监控异常怪谈、双人建造村庄模拟、双人涂鸦躲猫猫等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 212,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "祖玛大西瓜、伪人监控异常怪谈、双人建造村庄模拟、双人涂鸦躲猫猫",
        "tierEvidence": "国内T1(稳榜双门槛):在榜21款/登顶2个(有效0)/总天数88/单产品最长15天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 21,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://h.4399.com/zzy/227173.htm",
        "https://www.opp0o.com/api/games?q=%E7%9F%B3%E5%AE%B6%E5%BA%84%E7%8E%A9%E5%91%97&limit=5&offset=0"
      ]
    },
    "G212": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以拯救小羊羊、大西瓜养成记、超级咕卡大师、眼神闯关超六、怎么开超市、变装魔法大师等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 213,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "拯救小羊羊、大西瓜养成记、超级咕卡大师、眼神闯关超六、怎么开超市、变装魔法大师",
        "tierEvidence": "国内T2:在榜18款/登顶1个(有效0)/总天数142/单产品最长19天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 18,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://shouyou.3dmgame.com/android/245555.html"
      ]
    },
    "G213": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以完美消消大师、指尖消消、消除方块大师、连线消消乐、划线火柴人、这个关卡不对劲等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 214,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "完美消消大师、指尖消消、消除方块大师、连线消消乐、划线火柴人、这个关卡不对劲",
        "tierEvidence": "国内T2:在榜7款/登顶0个(有效0)/总天数16/单产品最长8天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://h.4399.com/zzy/235935.htm"
      ]
    },
    "G214": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以匹配大师等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 215,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "匹配大师",
        "tierEvidence": "国内T2:在榜7款/登顶2个(有效0)/总天数77/单产品最长29天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://h.4399.com/zzy/254238.htm"
      ]
    },
    "G215": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以真的有点强、贪吃蛇吃不饱、二人对战比赛、机甲冲冲冲、马桶人败不起、方块人快跑、字母疯狂冲等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 216,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "真的有点强、贪吃蛇吃不饱、二人对战比赛、机甲冲冲冲、马桶人败不起、方块人快跑、字母疯狂冲",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数14/单产品最长5天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://kjt.fujian.gov.cn/xxgk/tzgg/202304/P020230414577037344876.pdf",
        "https://sj.qq.com/appdetail/wx2ef4ec5152df5731",
        "https://gamehot.makegame.store/minigames/wechat/wx2ef4ec5152df5731"
      ]
    },
    "G216": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以成语喵了个消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 217,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "成语喵了个消",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数2/单产品最长2天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G217": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以我坐哪里、砖了个砖等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 218,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "我坐哪里、砖了个砖",
        "tierEvidence": "国内T2:在榜4款/登顶1个(有效1)/总天数433/单产品最长359天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://static.cninfo.com.cn/finalpage/2022-04-30/1213262576.PDF"
      ]
    },
    "G218": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以我智商666、荒岛生存666、工地搬个砖、2048我真牛、2048我最溜、2048打败你等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 219,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "我智商666、荒岛生存666、工地搬个砖、2048我真牛、2048我最溜、2048打败你",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数29/单产品最长26天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.danji100.com/game/171320.html"
      ]
    },
    "G219": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以填字小状元、解压大作战、我要赚大钱、我选技闯关、百战机甲、充电我最牛、娃娃模拟器等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 220,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "填字小状元、解压大作战、我要赚大钱、我选技闯关、百战机甲、充电我最牛、娃娃模拟器",
        "tierEvidence": "国内T2:在榜3款/登顶1个(有效0)/总天数30/单产品最长27天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://a.4399.cn/mobile/181535.html"
      ]
    },
    "G220": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以解压快消除、货柜疯狂消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 221,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "解压快消除、货柜疯狂消",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数1/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://play.google.com/store/apps/details?hl=zh-CN&id=two.player.friends.multiplayer.together.player2"
      ]
    },
    "G221": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以时尚变变变等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 222,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "时尚变变变",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数7/单产品最长7天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G222": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以高手吃碰杠等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 223,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "高手吃碰杠",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数1/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.liulanqi.net/soft/107998.html"
      ]
    },
    "G223": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T0，以挑战我最强、消除百分百、解压泡泡塔、鼻涕虫历险记、蜘蛛快跑、招财镇长等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 224,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "挑战我最强、消除百分百、解压泡泡塔、鼻涕虫历险记、蜘蛛快跑、招财镇长",
        "tierEvidence": "国内T0(稳榜双门槛+登顶质量):在榜25款/登顶0个(有效0)/总天数1010/单产品最长594天",
        "domesticTier": 0,
        "overseasTier": null,
        "h5Products": 25,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://play.google.com/store/apps/details?hl=zh&id=com.skyisland.mergesoldier.td.backpack.rush"
      ]
    },
    "G224": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以闯关超好玩、阿姐鼓、点灯2叩门怨、阴阳锅2同心劫、阴阳锅4咒咒咒、港诡1996等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 225,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "闯关超好玩、阿姐鼓、点灯2叩门怨、阴阳锅2同心劫、阴阳锅4咒咒咒、港诡1996",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数4/单产品最长4天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.cs003.vip/Mobile/Index/beian/p/6390.html"
      ]
    },
    "G225": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以救救羊羊等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 226,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "救救羊羊",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数6/单产品最长2天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G226": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以打螺丝儿、三国大冒险、打螺丝3D、三国大作战、西游大冒险等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 227,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "打螺丝儿、三国大冒险、打螺丝3D、三国大作战、西游大冒险",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数51/单产品最长17天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.danji100.com/game/221544.html",
        "https://chot.cn/About/index.html",
        "https://jy.sicnu.edu.cn/home/electionJob?corpPartId=8002"
      ]
    },
    "G227": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以打螺丝3D、挖穿一切、躺平躲猫猫3D等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 228,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "打螺丝3D、挖穿一切、躺平躲猫猫3D",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数120/单产品最长53天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://scjgj.cq.gov.cn/zz/yzq/zfxxgkml/spypjglyjczwgkzl/xzsp/spxkxx/202112/t20211209_10124123.html",
        "https://www.niaogebiji.com/article-702077-1.html"
      ]
    },
    "G228": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以文字大玩家等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 229,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "文字大玩家",
        "tierEvidence": "国内T3:在榜1款/登顶1个(有效1)/总天数185/单产品最长185天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/developer/%E9%87%8D%E5%BA%86%E6%96%B0%E8%9C%9C%E8%9C%82%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/id1705837420",
        "https://apps.apple.com/cn/app/%E6%96%87%E5%AD%97%E5%A4%A7%E7%8E%A9%E5%AE%B6-%E7%8E%A9%E8%BD%AC%E6%96%87%E5%AD%97/id6670598000?uo=4"
      ]
    },
    "G229": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以方块消消消、欢乐消消消3D、孤岛求生、狂斗战魂、枪火对决等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 230,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "方块消消消、欢乐消消消3D、孤岛求生、狂斗战魂、枪火对决",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数33/单产品最长17天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://h.4399.com/zzy/241565.htm"
      ]
    },
    "G230": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以根本消不完、解压放松器、脑洞文字秀、逆袭之王、石油大作战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 231,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "根本消不完、解压放松器、脑洞文字秀、逆袭之王、石油大作战",
        "tierEvidence": "国内T1(稳榜双门槛):在榜8款/登顶3个(有效1)/总天数165/单产品最长68天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://finance.sina.com.cn/jjxw/2026-01-04/doc-inhfeeei2719577.shtml",
        "https://gamehot.makegame.store/minigames/wechat/wx43fce475fb7cae4b"
      ]
    },
    "G231": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以文字挑战、贱猫消消、我要养女儿、等你来消、突击小分队等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 232,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "文字挑战、贱猫消消、我要养女儿、等你来消、突击小分队",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数74/单产品最长49天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://play.google.com/store/apps/details?id=com.lkgame.goods"
      ]
    },
    "G232": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以奇思乐园、汉字进化、球球逃生记、堆叠世界等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 233,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "奇思乐园、汉字进化、球球逃生记、堆叠世界",
        "tierEvidence": "国内T2:在榜7款/登顶0个(有效0)/总天数77/单产品最长21天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://a.4399.cn/mobile/162049.html"
      ]
    },
    "G233": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以你敲个锤子、你有我快吗、做个拿手菜、卡皮巴拉连连消、幸福小摊贩、彩绳排序大师、智商好离谱、水滴排排序、疯狂烧鹅、聪明之王等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 234,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "你敲个锤子、你有我快吗、做个拿手菜、卡皮巴拉连连消、幸福小摊贩、彩绳排序大师、智商好离谱、水滴排排序、疯狂烧鹅、聪明之王",
        "tierEvidence": "国内T1(稳榜双门槛):在榜37款/登顶5个(有效1)/总天数529/单产品最长86天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 37,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/831827"
      ]
    },
    "G234": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以奇妙便利屋等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 235,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "奇妙便利屋",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数154/单产品最长107天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/232912?os=android"
      ]
    },
    "G235": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以我强到爆表、捞个菜、智趣消一消、脑洞文字秀、谁是消除王、超级解压师等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 236,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "我强到爆表、捞个菜、智趣消一消、脑洞文字秀、谁是消除王、超级解压师",
        "tierEvidence": "国内T2:在榜10款/登顶0个(有效0)/总天数153/单产品最长65天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 10,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://play.google.com/store/apps/details?hl=zh&id=com.yj.ndcard.gp"
      ]
    },
    "G236": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以沙画消消、消的有点菜等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 237,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "沙画消消、消的有点菜",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数74/单产品最长50天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/yxspjg/gcwlyxspxx/202603/t20260325_968903.html",
        "https://www.bamenshenqi.com/game/321173.html"
      ]
    },
    "G237": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T0，以挑战一亿关、最强进化、毛线拆个爽、水果大胃王2D、消消大师2、火锅消不停、看谁能通关、脑子转一转、脑汁怪好的、超级解压馆等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 238,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "挑战一亿关、最强进化、毛线拆个爽、水果大胃王2D、消消大师2、火锅消不停、看谁能通关、脑子转一转、脑汁怪好的、超级解压馆",
        "tierEvidence": "国内T0(稳榜双门槛+登顶质量):在榜23款/登顶5个(有效2)/总天数633/单产品最长158天",
        "domesticTier": 0,
        "overseasTier": null,
        "h5Products": 23,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://pdf.dfcfw.com/pdf/H3_AP202309181599033006_1.pdf",
        "https://www.17yoo.cn/detail/19725"
      ]
    },
    "G238": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以大脑会拐弯、轻松来烧脑、拼个词、粒子消消、毛线合合等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 239,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "大脑会拐弯、轻松来烧脑、拼个词、粒子消消、毛线合合",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数55/单产品最长29天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.crxsoso.com/store/detail/xpfcpf3xwl85rh"
      ]
    },
    "G239": {
      "key": "balanced",
      "method": "dual-market-review",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T0、出海T1，国内62款H5在榜产品，海外另有收入与下载规模证据，两边均有较强业务支撑，归国内海外并重。国内与出海梯队采用不同评价方法，不能由T0高于T1推定国内收入更多；未披露可比的完整收入拆分。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 240,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "你是不是菜、你聪明吗、你行你就玩、我智商爆表、拿下100关、文字挑战乐园、无尽消消消、果趣连连消、汉字对决、消了个消啊",
        "tierEvidence": "国内T0(稳榜双门槛+登顶质量):在榜62款/登顶7个(有效4)/总天数1254/单产品最长230天；出海T1:收入0.2亿美元/下载4488万(休闲榜10Q+超休闲榜7Q折算)",
        "domesticTier": 0,
        "overseasTier": 1,
        "h5Products": 62,
        "overseas10QUSD": 16954,
        "hypercasual7QUSD": 11350433
      },
      "sources": [
        "https://zs.xwum.com/",
        "https://www.xwum.com/xieyi.html",
        "https://www.youxituoluo.com/532445.html",
        "https://zs.xwum.com/game.html",
        "https://img1.icswb.com/site_23_2026/2026/01/23/newspaper_page/sub_278/277185/6972b259daab5.pdf",
        "https://hnxs.rednet.cn/m/content/2021/12/07/10503228.html",
        "https://m.shuidi.cn/company-2122a10c51dcc06a727bd6e611f77418.html"
      ]
    },
    "G240": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以手指不太灵、螺丝拧拧乐、一眼就通关、有点不会玩等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 241,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "手指不太灵、螺丝拧拧乐、一眼就通关、有点不会玩",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数69/单产品最长44天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.jobui.com/company/23604397/",
        "https://www.jobui.com/salary/changsha-youxizhuce/"
      ]
    },
    "G241": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以高手来闯关、叫我大财神等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 242,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "高手来闯关、叫我大财神",
        "tierEvidence": "国内T2:在榜9款/登顶1个(有效1)/总天数257/单产品最长174天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 9,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.hanyougame.cn/",
        "https://www.youxiguancha.com/game/60349.html"
      ]
    },
    "G242": {
      "key": "balanced",
      "method": "dual-market-review",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1、出海T1，国内24款H5在榜产品，海外有Cell Survivor及收入样本，两边均有较强业务支撑，归国内海外并重。保留各自统计期，未把10Q与7Q样本直接相加，也不推定收入各占50%。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 243,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "不服来通关、不服闯一关、挑战所有人、挑战高手、无人能过、玩的有点菜、看谁能打过、给你露俩手、这关你能行、Cell Survivor",
        "tierEvidence": "国内T1(稳榜双门槛):在榜24款/登顶1个(有效1)/总天数560/单产品最长243天；出海T1:收入0.4亿美元/下载2737万(休闲榜10Q+超休闲榜7Q折算)",
        "domesticTier": 1,
        "overseasTier": 1,
        "h5Products": 24,
        "overseas10QUSD": 57415,
        "hypercasual7QUSD": 27415446
      },
      "sources": [
        "https://finance.sina.com.cn/wm/2026-04-09/doc-inhtwxnx5882612.shtml",
        "https://apps.apple.com/us/app/id6746465127"
      ]
    },
    "G243": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以心动的生活、慢豚豚的生活、卡皮巴拉MALL、你好纯牛马、消个纯牛马等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 244,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "心动的生活、慢豚豚的生活、卡皮巴拉MALL、你好纯牛马、消个纯牛马",
        "tierEvidence": "国内T2:在榜7款/登顶1个(有效0)/总天数326/单产品最长232天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/710459"
      ]
    },
    "G244": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以爆走小猪、文字的世界、一字一句、图文世界等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 245,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "爆走小猪、文字的世界、一字一句、图文世界",
        "tierEvidence": "国内T2:在榜4款/登顶1个(有效0)/总天数106/单产品最长50天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.youxiguancha.com/game/57358.html",
        "https://m.youxiguancha.com/game/57469.html"
      ]
    },
    "G245": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以你消啥呢消、玩了就上头、聪明的开局、找茬英雄、诡异秘案、我来养女儿、梦幻小吃店等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 246,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "你消啥呢消、玩了就上头、聪明的开局、找茬英雄、诡异秘案、我来养女儿、梦幻小吃店",
        "tierEvidence": "国内T1(稳榜双门槛):在榜29款/登顶8个(有效1)/总天数767/单产品最长172天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 29,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.bengku.com/yxcp/2560.html",
        "https://m.youxiguancha.com/game/77174.html",
        "https://pdf.dfcfw.com/pdf/H3_AP202501101641879317_1.pdf"
      ]
    },
    "G246": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以水果消一消、重生少年、本宫重生了、玩的就是解压、益智闯关赛等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 247,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "水果消一消、重生少年、本宫重生了、玩的就是解压、益智闯关赛",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数40/单产品最长24天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/yxspjg/gcwlyxspxx/202608/t20260831_1005702.html"
      ]
    },
    "G247": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以光吃不长肉等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 248,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "光吃不长肉",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数4/单产品最长4天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/626496/all-info"
      ]
    },
    "G248": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以拆个汉字等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 249,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "拆个汉字",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数4/单产品最长3天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.microsoft.com/detail/xp8jmv1b9pdmt4?hl=zh-CN&gl=CN",
        "https://www.17yoo.cn/detail/30007"
      ]
    },
    "G249": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以贱猫可可、哥俩冲冲冲、长发公主换装、奇幻历险记等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 250,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "贱猫可可、哥俩冲冲冲、长发公主换装、奇幻历险记",
        "tierEvidence": "国内T1(稳榜双门槛):在榜15款/登顶5个(有效0)/总天数232/单产品最长29天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 15,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.qiyeku.cn/tag/company8d2a33-1.html"
      ]
    },
    "G250": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以玩转文字、算术趣玩等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 251,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "玩转文字、算术趣玩",
        "tierEvidence": "国内T2:在榜9款/登顶1个(有效0)/总天数175/单产品最长59天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 9,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.youxiguancha.com/game/61472.html",
        "https://www.youxiguancha.com/game/64094.html"
      ]
    },
    "G251": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以挪对消不停等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 252,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "挪对消不停",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数13/单产品最长12天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/78124"
      ]
    },
    "G252": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以创意美食屋等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 253,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "创意美食屋",
        "tierEvidence": "国内T2:在榜3款/登顶2个(有效0)/总天数46/单产品最长30天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G253": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以方块你太差、方块来一下等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 254,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "方块你太差、方块来一下",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数6/单产品最长4天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://gld.gledos.science/游戏审批结果/国产网络游戏审批信息/2017-10~2017-12.html"
      ]
    },
    "G254": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T0，以四季合合、抓大鹅、鱼吃鱼、大鹅碰碰词、合合电商等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 255,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "四季合合、抓大鹅、鱼吃鱼、大鹅碰碰词、合合电商",
        "tierEvidence": "国内T0(稳榜双门槛+登顶质量):在榜4款/登顶2个(有效2)/总天数1713/单产品最长859天",
        "domesticTier": 0,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://qccdata.qichacha.com/ReportData/PDF/6ecd04966c24813ed19ad66c41951dfd.pdf",
        "https://pitchhub.36kr.com/project/2074467531505928",
        "https://www.taptap.cn/app/155139",
        "https://www.taptap.cn/app/155139/all-info"
      ]
    },
    "G255": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以整理你最牛、花园叠叠消等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 256,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "整理你最牛、花园叠叠消",
        "tierEvidence": "国内T2:在榜2款/登顶1个(有效0)/总天数23/单产品最长20天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/237604"
      ]
    },
    "G256": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以拼图大合辑、迷宫逃脱记、文字脑洞大师、超会整活、昆虫吞噬大战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 257,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "拼图大合辑、迷宫逃脱记、文字脑洞大师、超会整活、昆虫吞噬大战",
        "tierEvidence": "国内T1(稳榜双门槛):在榜38款/登顶2个(有效0)/总天数626/单产品最长137天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 38,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.cr173.com/azyx/1613502.html",
        "https://www.itmop.com/downinfo/648929.html"
      ]
    },
    "G257": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以连线超简单、超级剧情编辑室、水管解谜等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 258,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "连线超简单、超级剧情编辑室、水管解谜",
        "tierEvidence": "国内T2:在榜17款/登顶1个(有效0)/总天数89/单产品最长18天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 17,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.qieyou.com/game/2223",
        "https://m.youxiguancha.com/game/65529.html"
      ]
    },
    "G258": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以浇灭王者峡谷、酒桶狂欢、商道老板、救救铁憨憨畅玩版、火柴人梦幻跑酷等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 259,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "浇灭王者峡谷、酒桶狂欢、商道老板、救救铁憨憨畅玩版、火柴人梦幻跑酷",
        "tierEvidence": "国内T2:在榜15款/登顶1个(有效0)/总天数380/单产品最长179天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 15,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/27608"
      ]
    },
    "G259": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以拼车英雄、开宝箱有神器等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 260,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "拼车英雄、开宝箱有神器",
        "tierEvidence": "国内T1(稳榜双门槛):在榜15款/登顶5个(有效1)/总天数151/单产品最长72天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 15,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://play.google.com/store/apps/details?id=com.actiongame.gooseeages"
      ]
    },
    "G260": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以火柴人超级闯关、欢乐麻将连一连、货柜无尽消、开超市、快把车挪走等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 261,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "火柴人超级闯关、欢乐麻将连一连、货柜无尽消、开超市、快把车挪走",
        "tierEvidence": "国内T2:上榜12款",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.ali213.net/article/365923/",
        "https://www.shidz.gov.cn/columns/93455327-0773-4582-88cb-ba3a8400c33b/202607/03/7d3fe20e-1ae6-446f-a26c-8332ec736b82.html"
      ]
    },
    "G261": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以姐姐说你行、就问还有谁、你在玩毛线、这波我能行等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 262,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "姐姐说你行、就问还有谁、你在玩毛线、这波我能行",
        "tierEvidence": "国内T2:在榜11款/登顶1个(有效0)/总天数396/单产品最长188天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 11,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.bamenshenqi.com/game/308683.html",
        "https://m.zhipin.com/companys/a8b95cba553c4a361HJ-0t-1F1E~.html"
      ]
    },
    "G262": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以造娃我贼强、我做雪糕贼6、鸟枪变大炮、一起来放炮、撸串我最强等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 263,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "造娃我贼强、我做雪糕贼6、鸟枪变大炮、一起来放炮、撸串我最强",
        "tierEvidence": "国内T2:上榜10款",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.youxiguancha.com/game/55630.html"
      ]
    },
    "G263": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以你行你来、小老弟太难了、我称量贼准、这关超费脑、小动物太难了等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 264,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "你行你来、小老弟太难了、我称量贼准、这关超费脑、小动物太难了",
        "tierEvidence": "国内T2:在榜11款/登顶0个(有效0)/总天数28/单产品最长9天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 11,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/582595/all-info"
      ]
    },
    "G264": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以跨时空找茬、烧脑反转屋、闯关大联盟、字谜套娃、我理科无敌等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 265,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "跨时空找茬、烧脑反转屋、闯关大联盟、字谜套娃、我理科无敌",
        "tierEvidence": "国内T2:在榜9款/登顶1个(有效0)/总天数34/单产品最长24天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 9,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://a.4399.cn/mobile/273511.html"
      ]
    },
    "G265": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以消消实验室、解谜剧场、欢乐找找派对、文学诗行间、划线大乱斗等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 266,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "消消实验室、解谜剧场、欢乐找找派对、文学诗行间、划线大乱斗",
        "tierEvidence": "国内T2:在榜10款/登顶0个(有效0)/总天数19/单产品最长5天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 10,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.youxiguancha.com/game/66596.html",
        "https://m.youxiguancha.com/game/72962.html"
      ]
    },
    "G266": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以压力释放神器、超解压高手、农场打工能手等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 267,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "压力释放神器、超解压高手、农场打工能手",
        "tierEvidence": "国内T2:在榜11款/登顶1个(有效0)/总天数59/单产品最长22天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 11,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.danji100.com/game/284046.html",
        "https://www.shidz.gov.cn/columns/93455327-0773-4582-88cb-ba3a8400c33b/202607/03/7d3fe20e-1ae6-446f-a26c-8332ec736b82.html"
      ]
    },
    "G267": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以神脑壳、我眼神爆表、重回巅峰、鲨了个鱼、五好小年轻等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 268,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "神脑壳、我眼神爆表、重回巅峰、鲨了个鱼、五好小年轻",
        "tierEvidence": "国内T2:上榜10款",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://a.4399.cn/mobile/221853.html"
      ]
    },
    "G268": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以守护之地、雀之舞、Siya-chat等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 269,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "守护之地、雀之舞、Siya-chat",
        "tierEvidence": "国内T1(稳榜双门槛):在榜10款/登顶2个(有效2)/总天数1106/单产品最长319天；上市公司→T1",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 10,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://ir.jiaxianghudong.com/",
        "https://apps.apple.com/cn/app/id1467718253"
      ]
    },
    "G269": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以东方玄幻模拟器、躺平小能手、浇灌达人、救救我家猫等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 270,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "东方玄幻模拟器、躺平小能手、浇灌达人、救救我家猫",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数4/单产品最长2天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/234334/all-info"
      ]
    },
    "G270": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以国民斗地主、抓金猪游戏、好彩斗地主等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 271,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "国民斗地主、抓金猪游戏、好彩斗地主",
        "tierEvidence": "国内T2:在榜9款/登顶0个(有效0)/总天数238/单产品最长86天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 9,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://play.google.com/store/apps/details?id=com.feather.joyelledrama"
      ]
    },
    "G271": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以异形生物作战、惊恐躲藏、有个阿飘、烧脑玩梗、消除大乱战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 272,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "异形生物作战、惊恐躲藏、有个阿飘、烧脑玩梗、消除大乱战",
        "tierEvidence": "国内T2:在榜11款/登顶0个(有效0)/总天数74/单产品最长26天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 11,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.opp0o.com/",
        "https://www.opp0o.com/api/games?q=%E7%9F%B3%E5%AE%B6%E5%BA%84%E6%8C%87%E5%B0%96%E4%BA%92%E5%8A%A8&limit=5&offset=0"
      ]
    },
    "G272": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以脑洞有点溜、脑洞大烩、千万别失误、放眼找找找、随机跳跃等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 273,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "脑洞有点溜、脑洞大烩、千万别失误、放眼找找找、随机跳跃",
        "tierEvidence": "国内T1(稳榜双门槛):在榜12款/登顶3个(有效0)/总天数175/单产品最长38天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 12,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://shouyou.3dmgame.com/android/498083.html",
        "https://shouyou.3dmgame.com/android/445263.html"
      ]
    },
    "G273": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以爆笑侦探社、梗王侦探社、烧脑找茬王、玩梗泰酷辣、菜就多玩等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 274,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "爆笑侦探社、梗王侦探社、烧脑找茬王、玩梗泰酷辣、菜就多玩",
        "tierEvidence": "国内T2:在榜7款/登顶2个(有效1)/总天数415/单产品最长184天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/378814"
      ]
    },
    "G274": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以收纳宝盒、本宫来收纳、打工日记、练出马甲线、猎梦捕杀者等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 275,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "收纳宝盒、本宫来收纳、打工日记、练出马甲线、猎梦捕杀者",
        "tierEvidence": "国内T2:在榜8款/登顶1个(有效1)/总天数160/单产品最长133天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.shanwan.com/game/150698.html"
      ]
    },
    "G275": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以难度飙升等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 276,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "难度飙升",
        "tierEvidence": "国内T2:在榜8款/登顶0个(有效0)/总天数147/单产品最长127天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/212653/all-info"
      ]
    },
    "G276": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以我要开民宿、图形、点龙远航等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 277,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "我要开民宿、图形、点龙远航",
        "tierEvidence": "国内T2:在榜7款/登顶0个(有效0)/总天数177/单产品最长103天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/yxspjg/gcwlyxspxx/201802/t20180202_4878.html",
        "https://a.4399.cn/game-id-192891.html"
      ]
    },
    "G277": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以图形、舌尖菜谱、快点好游、好游派对等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 278,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "图形、舌尖菜谱、快点好游、好游派对",
        "tierEvidence": "国内T2:在榜7款/登顶0个(有效0)/总天数23/单产品最长11天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://play.google.com/store/apps/details?hl=zh&id=com.ew.mahjongcrush"
      ]
    },
    "G278": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以滚球向前冲等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 279,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "滚球向前冲",
        "tierEvidence": "国内T2:在榜8款/登顶0个(有效0)/总天数80/单产品最长41天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/746031/all-info"
      ]
    },
    "G279": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以救救牛牛、趣味解压小挑战、超级解压狂等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 280,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "救救牛牛、趣味解压小挑战、超级解压狂",
        "tierEvidence": "国内T2:在榜6款/登顶1个(有效0)/总天数10/单产品最长3天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.bamenshenqi.com/game/296790.html"
      ]
    },
    "G280": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以修勾逃生巨人危机等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 281,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "修勾逃生巨人危机",
        "tierEvidence": "国内T2:在榜12款/登顶0个(有效0)/总天数235/单产品最长173天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 12,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.szkuaileyou.com/",
        "https://a.4399.cn/mobile/283300.html",
        "https://a.4399.cn/mobile/cp/15414.html"
      ]
    },
    "G281": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以节拍达人等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 282,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "节拍达人",
        "tierEvidence": "国内T1(稳榜双门槛):在榜12款/登顶3个(有效0)/总天数532/单产品最长207天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 12,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/71042/apps?page=2",
        "https://www.taptap.cn/developer/71042/apps",
        "https://www.taptap.cn/app/806481"
      ]
    },
    "G282": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以疯狂最强脑洞等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 283,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "疯狂最强脑洞",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数53/单产品最长39天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/219305"
      ]
    },
    "G283": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以填色高手、天才贴一贴、解压倍儿爽等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 284,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "填色高手、天才贴一贴、解压倍儿爽",
        "tierEvidence": "国内T2:在榜7款/登顶1个(有效0)/总天数22/单产品最长13天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.zhaopin.com/companydetail/9144FNHSIG401PZ4T.htm",
        "https://m.youxiguancha.com/game/58508.html"
      ]
    },
    "G284": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以废墟幸存者、诡异迷城等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 285,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "废墟幸存者、诡异迷城",
        "tierEvidence": "国内T1(稳榜双门槛):在榜24款/登顶3个(有效0)/总天数157/单产品最长21天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 24,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/830807/all-info"
      ]
    },
    "G285": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以收纳小公主、开心迷你球、收纳梦幻岛等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 286,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "收纳小公主、开心迷你球、收纳梦幻岛",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数9/单产品最长4天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.ali213.net/snxgz/"
      ]
    },
    "G286": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以地球毁灭模拟器、小偷模拟器、野人模拟器等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 287,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "地球毁灭模拟器、小偷模拟器、野人模拟器",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数61/单产品最长30天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G287": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以绑个大西瓜、画线梗大师、西瓜大大大等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 288,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "绑个大西瓜、画线梗大师、西瓜大大大",
        "tierEvidence": "国内T2:上榜6款",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://h.4399.com/zzy/230056.htm"
      ]
    },
    "G288": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以图形、穗一盯等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 289,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "图形、穗一盯",
        "tierEvidence": "国内T2:在榜10款/登顶0个(有效0)/总天数113/单产品最长44天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 10,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://apps.apple.com/cn/developer/%E5%B9%BF%E5%B7%9E%E5%B8%82%E4%B8%80%E7%9B%AF%E7%A7%91%E6%8A%80%E6%9C%89%E9%99%90%E5%85%AC%E5%8F%B8/id1528473223",
        "https://apps.apple.com/cn/developer/id1528473223",
        "https://apps.apple.com/cn/app/id1555042559",
        "https://itunes.apple.com/lookup?id=1555042559&country=cn"
      ]
    },
    "G289": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以没事找找茬、素人变形记、老六来跑酷等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 290,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "没事找找茬、素人变形记、老六来跑酷",
        "tierEvidence": "国内T2:在榜7款/登顶1个(有效0)/总天数36/单产品最长13天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.youxiguancha.com/game/89582.html",
        "https://m.ali213.net/aznew/653225.html"
      ]
    },
    "G290": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以全力拼呀拼、我技巧爆棚、画一笔大比赛等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 291,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "全力拼呀拼、我技巧爆棚、画一笔大比赛",
        "tierEvidence": "国内T1(稳榜双门槛):在榜5款/登顶4个(有效0)/总天数10/单产品最长4天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.j9p.com/game/665059.html",
        "https://www.jobui.com/salary/hangzhou-cocosyouxikaifa/"
      ]
    },
    "G291": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以脑洞全能王、我的大脑瓜、脑子真好呀等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 292,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "脑洞全能王、我的大脑瓜、脑子真好呀",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数52/单产品最长29天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.bamenshenqi.com/game/303446.html"
      ]
    },
    "G292": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以沙雕日记、隐秘的原罪9、盘串我最牛等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 293,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "沙雕日记、隐秘的原罪9、盘串我最牛",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数190/单产品最长140天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/89546",
        "https://www.taptap.cn/app/201898"
      ]
    },
    "G293": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以老奶冬日生存、一站式解压、螺丝流水线、拼图大赛我最六、6翻了脑洞等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 294,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "老奶冬日生存、一站式解压、螺丝流水线、拼图大赛我最六、6翻了脑洞",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数24/单产品最长7天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.danji100.com/game/265352.html",
        "https://www.shidz.gov.cn/columns/93455327-0773-4582-88cb-ba3a8400c33b/202607/03/7d3fe20e-1ae6-446f-a26c-8332ec736b82.html"
      ]
    },
    "G294": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以倾聊吧、地球创世神、手机电量管家、格斗英雄使命、城市大战模拟器等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 295,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "倾聊吧、地球创世神、手机电量管家、格斗英雄使命、城市大战模拟器",
        "tierEvidence": "国内T2:在榜5款/登顶1个(有效1)/总天数191/单产品最长94天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://newmontgame.com/",
        "https://m.zhipin.com/companys/3700bcb99b191bcb03x_2tS-GVs~.html",
        "https://newmontgame.com/js/app.163bab6a.js",
        "https://newmontgame.com/js/563.1deafa37.js",
        "https://newmontgame.com/#/product"
      ]
    },
    "G295": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以拼豆乐园、智力奇旅、思维挑战营、萌星冒险、粉碎大饼等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 296,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "拼豆乐园、智力奇旅、思维挑战营、萌星冒险、粉碎大饼",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数42/单产品最长31天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/yxspjg/gcwlyxspxx/202508/t20250825_927704.html"
      ]
    },
    "G296": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以浪漫合合、大家来拼豆、王者也很忙、无限觉醒、大佬别翻车等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 297,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "浪漫合合、大家来拼豆、王者也很忙、无限觉醒、大佬别翻车",
        "tierEvidence": "国内T2:在榜8款/登顶0个(有效0)/总天数71/单产品最长44天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 8,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/935022"
      ]
    },
    "G297": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以我的模拟家园、樱花校园捉猫猫、规则禁忌等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 298,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "我的模拟家园、樱花校园捉猫猫、规则禁忌",
        "tierEvidence": "国内T2:上榜5款",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62424754",
        "https://game.xiaomi.com/gameVideo/62424747",
        "https://www.danji100.com/game/195021.html"
      ]
    },
    "G298": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以鸭鸭收纳大师、沙雕小羊哥、绝地吃鸡等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 299,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "鸭鸭收纳大师、沙雕小羊哥、绝地吃鸡",
        "tierEvidence": "国内T2:在榜5款/登顶2个(有效0)/总天数91/单产品最长30天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/102471",
        "https://www.taptap.cn/app/236558"
      ]
    },
    "G299": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以花朵爱消消、甜心宝贝换换装、秘密花园叠叠乐等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 300,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "花朵爱消消、甜心宝贝换换装、秘密花园叠叠乐",
        "tierEvidence": "国内T2:在榜7款/登顶0个(有效0)/总天数73/单产品最长34天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 7,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.233leyuan.com/g/11111404397",
        "https://www.shidz.gov.cn/columns/93455327-0773-4582-88cb-ba3a8400c33b/202607/03/7d3fe20e-1ae6-446f-a26c-8332ec736b82.html"
      ]
    },
    "G300": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以看看谁最强、最强冲关王、消了个消哇等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 301,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "看看谁最强、最强冲关王、消了个消哇",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数12/单产品最长7天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.thnet.gov.cn/attachment/7/7950/7950171/10611237.pdf"
      ]
    },
    "G301": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以疯狂买买买、美食大冒险包强之旅、美食大冒险美食旅途等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 302,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "疯狂买买买、美食大冒险包强之旅、美食大冒险美食旅途",
        "tierEvidence": "国内T2:在榜5款/登顶2个(有效2)/总天数382/单产品最长150天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/cxjg/202402/t20240227_834907.html"
      ]
    },
    "G302": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以全民羽毛球、钓鱼大神等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 303,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "全民羽毛球、钓鱼大神",
        "tierEvidence": "国内T2:在榜9款/登顶1个(有效0)/总天数153/单产品最长70天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 9,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.youxiguancha.com/game/63941.html",
        "https://pdf.dfcfw.com/pdf/H3_AP202604271821628560_1.pdf?1777319407000.pdf="
      ]
    },
    "G303": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以势必夺塔、史蒂姆之战、消除烦恼、微微恐找茬、黑夜降临等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 304,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "势必夺塔、史蒂姆之战、消除烦恼、微微恐找茬、黑夜降临",
        "tierEvidence": "国内T1(稳榜双门槛):在榜10款/登顶2个(有效0)/总天数47/单产品最长19天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 10,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.qieyou.com/game/3375"
      ]
    },
    "G304": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以音乐节奏球、钢琴三重奏、象棋2、剪纸解谜大冒险、成语小状元等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 305,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "音乐节奏球、钢琴三重奏、象棋2、剪纸解谜大冒险、成语小状元",
        "tierEvidence": "国内T3:在榜1款/登顶0个(有效0)/总天数87/单产品最长87天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 1,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/142092/all-info"
      ]
    },
    "G305": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以动脑欢乐连线、花掉一百亿、沉浸式解压治愈等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 306,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "动脑欢乐连线、花掉一百亿、沉浸式解压治愈",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数44/单产品最长37天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://h.4399.com/zzy/259087.htm"
      ]
    },
    "G306": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以萝莉危机、神龙无限进化、烧脑文字大作战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 307,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "萝莉危机、神龙无限进化、烧脑文字大作战",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数5/单产品最长2天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/503515/all-info"
      ]
    },
    "G307": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以奇兔PC刷机、线刷大师、玩梗接龙、我的妈系女友、怪谈启示录等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 308,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "奇兔PC刷机、线刷大师、玩梗接龙、我的妈系女友、怪谈启示录",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数21/单产品最长15天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/100389"
      ]
    },
    "G308": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以沙雕出击等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 309,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "沙雕出击",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数62/单产品最长26天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.zhaopin.com/companydetail/CZL1497728780.htm",
        "https://www.zhaopin.com/jobdetail/CCL1497728780J40728693016.htm"
      ]
    },
    "G309": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以蛇蛇进化竞赛、烦恼退退退、道路千万条等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 310,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "蛇蛇进化竞赛、烦恼退退退、道路千万条",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数23/单产品最长10天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62412565"
      ]
    },
    "G310": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以今日天气、洋葱新闻等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 311,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "今日天气、洋葱新闻",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数97/单产品最长92天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.weite.com/all/4799152.html"
      ]
    },
    "G311": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以火柴绳索英雄、公路赛车手、亡命越野等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 312,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "火柴绳索英雄、公路赛车手、亡命越野",
        "tierEvidence": "国内T2:在榜16款/登顶0个(有效0)/总天数79/单产品最长17天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 16,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.jb51.net/game/918213.html",
        "https://tm.aliyun.com/detail/1b4c_91783916_41"
      ]
    },
    "G312": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以刺激挑战、准心射手、征战能手等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 313,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "刺激挑战、准心射手、征战能手",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数19/单产品最长8天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.opp0o.com/",
        "https://www.opp0o.com/api/games?q=%E6%81%92%E8%89%AF&limit=5&offset=0"
      ]
    },
    "G313": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以烧脑装瓶子、一天一拼图、休闲解压小屋等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 314,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "烧脑装瓶子、一天一拼图、休闲解压小屋",
        "tierEvidence": "国内T2:在榜5款/登顶1个(有效0)/总天数54/单产品最长24天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62400397"
      ]
    },
    "G314": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以数独脑力赛等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 315,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "数独脑力赛",
        "tierEvidence": "国内T3:在榜2款/登顶0个(有效0)/总天数22/单产品最长19天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 2,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62416666"
      ]
    },
    "G315": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以太空飞行王、星际飞行队、轻松合成、强迫症收纳、便利店打工高手等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 316,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "太空飞行王、星际飞行队、轻松合成、强迫症收纳、便利店打工高手",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数55/单产品最长38天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://forum.cocos.org/t/topic/175458"
      ]
    },
    "G316": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以西游梗传、玩梗脑洞王、无尽魔兽传说、魔兽战争、修真模拟器等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 317,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "西游梗传、玩梗脑洞王、无尽魔兽传说、魔兽战争、修真模拟器",
        "tierEvidence": "国内T2:在榜5款/登顶2个(有效0)/总天数95/单产品最长40天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://h.4399.com/zzy/226730.htm"
      ]
    },
    "G317": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以火柴人闯关营救、脑洞通感、生活小确幸、狙击杀手47、童话物语等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 318,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "火柴人闯关营救、脑洞通感、生活小确幸、狙击杀手47、童话物语",
        "tierEvidence": "国内T3:上榜4款",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.j9p.com/game/579960.html",
        "https://www.j9p.com/game/579961.html"
      ]
    },
    "G318": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以守了个桥、拯救大师傅、噩梦齿轮、马上来一局等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 319,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "守了个桥、拯救大师傅、噩梦齿轮、马上来一局",
        "tierEvidence": "国内T2:在榜3款/登顶1个(有效0)/总天数91/单产品最长53天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://pdf.dfcfw.com/pdf/H3_AP202604271821628560_1.pdf?1777319407000.pdf="
      ]
    },
    "G319": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以救救我鸭、这关不简单、挖穿地球计划等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 320,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "救救我鸭、这关不简单、挖穿地球计划",
        "tierEvidence": "国内T2:在榜6款/登顶1个(有效1)/总天数134/单产品最长105天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://xin.52pk.com/game/216679.html"
      ]
    },
    "G320": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以经营汉堡店、寒冬拯救小美、公主换装达人等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 321,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "经营汉堡店、寒冬拯救小美、公主换装达人",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数16/单产品最长9天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.itmop.com/downinfo/653819.html",
        "https://m.liulanqi.net/danji/401840.html"
      ]
    },
    "G321": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以王者五比五、一玩就爆炸、勇者的本营、一天天吃鸡、一起找茬等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 322,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "王者五比五、一玩就爆炸、勇者的本营、一天天吃鸡、一起找茬",
        "tierEvidence": "国内T1(稳榜双门槛):在榜9款/登顶4个(有效0)/总天数88/单产品最长22天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 9,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://shouyou.3dmgame.com/android/445743.html",
        "https://m.ali213.net/aznew/648323.html"
      ]
    },
    "G322": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以像素欢乐吃鸡、猿猴融合计划、开局打个枪、猿神超进化、我是枪战高手等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 323,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "像素欢乐吃鸡、猿猴融合计划、开局打个枪、猿神超进化、我是枪战高手",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数13/单产品最长6天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.sme-gov.cn/ruanzhu/4067565.html"
      ]
    },
    "G323": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以别惹农夫、苟皇逆袭记、住四合院有多好等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 324,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "别惹农夫、苟皇逆袭记、住四合院有多好",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数128/单产品最长96天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://m.sme-gov.cn/sichuan/news/173121.html"
      ]
    },
    "G324": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以水上乐园乐翻天、动物温泉馆、开店超轻松、通关算我输、舌尖小馆等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 325,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "水上乐园乐翻天、动物温泉馆、开店超轻松、通关算我输、舌尖小馆",
        "tierEvidence": "国内T2:在榜6款/登顶1个(有效0)/总天数182/单产品最长162天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/306211"
      ]
    },
    "G325": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以烧脑杂货铺、拼图我在行、拼图大玩家等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 326,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "烧脑杂货铺、拼图我在行、拼图大玩家",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数14/单产品最长12天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://appid.gqmg.com/mp/d_07-hV6uIY7"
      ]
    },
    "G326": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以聪明的开局、汉字找找茬、脑洞茬里王、你挖啥呢你、解压玩具店等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 327,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "聪明的开局、汉字找找茬、脑洞茬里王、你挖啥呢你、解压玩具店",
        "tierEvidence": "国内T2:在榜3款/登顶2个(有效0)/总天数100/单产品最长37天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://pitchhub.36kr.com/project/2144898660123908",
        "https://www.qt6.com/company/10073.html",
        "https://www.qt6.com/apk/170989.html"
      ]
    },
    "G327": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以梦幻消除战、解压超治愈、治愈之旅等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 328,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "梦幻消除战、解压超治愈、治愈之旅",
        "tierEvidence": "国内T2:在榜5款/登顶0个(有效0)/总天数21/单产品最长13天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://a.4399.cn/mobile/365194.html"
      ]
    },
    "G328": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以地城小英雄、黑洞进化模拟、画线脑洞王等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 329,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "地城小英雄、黑洞进化模拟、画线脑洞王",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数34/单产品最长20天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62400458"
      ]
    },
    "G329": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以专业收纳员、双人竞技对战、双人PK大战等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 330,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "专业收纳员、双人竞技对战、双人PK大战",
        "tierEvidence": "国内T2:在榜4款/登顶1个(有效0)/总天数14/单产品最长9天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62399665"
      ]
    },
    "G330": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以魔力女孩、九霄云外传、一剑破苍穹等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 331,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "魔力女孩、九霄云外传、一剑破苍穹",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数3/单产品最长1天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.iwison.com/newsinfo/8716396.html",
        "https://www.jswx.gov.cn/csj/zj/202509/t20250901_111969.shtml",
        "https://www.iszj.org.cn/news-detail-607102.html"
      ]
    },
    "G331": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以栀奺等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 332,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "栀奺",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数13/单产品最长9天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62386898"
      ]
    },
    "G332": {
      "key": "domestic",
      "method": "product-review",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3、出海T3同级；海外10Q仅114美元收入信号，国内有3款H5在榜产品且主要渠道为微信小游戏/H5，因此归国内为主。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 333,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "糖果切切切、Cat Train Tycoon、小火车大作战",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数19/单产品最长12天；出海T3:收入0.0亿美元/下载1万(休闲榜10Q)",
        "domesticTier": 3,
        "overseasTier": 3,
        "h5Products": 3,
        "overseas10QUSD": 114,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://gamehot.makegame.store/minigames/douyin/ttf4e482596bec7c8702"
      ]
    },
    "G333": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以生存者堡垒、脑洞非常大、你猜我是谁、羊羊大闯关、变形冲冲冲等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 334,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "生存者堡垒、脑洞非常大、你猜我是谁、羊羊大闯关、变形冲冲冲",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数14/单产品最长7天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62387970"
      ]
    },
    "G334": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以玩出花样、智慧破局、脑力大冒险、爆笑闯关王、这局超好玩等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 335,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "玩出花样、智慧破局、脑力大冒险、爆笑闯关王、这局超好玩",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数38/单产品最长33天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.3839.com/a/180900.htm"
      ]
    },
    "G335": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以赛博城市、未上锁的房间3、迷宫、幻象空间、开摩托等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 336,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "赛博城市、未上锁的房间3、迷宫、幻象空间、开摩托",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数13/单产品最长7天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.downxia.com/downinfo/519225.html",
        "https://www.fireproofgames.com/2015/11/the-room-three-released-on-ios",
        "https://www.fireproofgames.com/games/the-room-three-2"
      ]
    },
    "G336": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以滚吧小球球、切切小能手、塔楼争霸战、随手切一切、球球滚世界等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 337,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "滚吧小球球、切切小能手、塔楼争霸战、随手切一切、球球滚世界",
        "tierEvidence": "国内T2:在榜6款/登顶0个(有效0)/总天数41/单产品最长19天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 6,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62417085"
      ]
    },
    "G337": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以烧脑数独闯关、全民脑洞找茬大师、诡奇找茬等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 338,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "烧脑数独闯关、全民脑洞找茬大师、诡奇找茬",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数11/单产品最长6天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://game.xiaomi.com/game/62428226"
      ]
    },
    "G338": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以消除天花板、每日消除、开个百货铺等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 339,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "消除天花板、每日消除、开个百货铺",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数10/单产品最长7天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/developer/26058",
        "https://www.taptap.cn/app/222432"
      ]
    },
    "G339": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以真人天天斗地主等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 340,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "真人天天斗地主",
        "tierEvidence": "国内T1(稳榜双门槛):在榜3款/登顶0个(有效0)/总天数757/单产品最长753天；上市公司→T1",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://ww.zen-game.com/upload/file/202107/2020AnnualReport.pdf",
        "https://apps.apple.com/cn/app/id891616303"
      ]
    },
    "G340": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T1，以1v2博弈等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 341,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "1v2博弈",
        "tierEvidence": "国内T1(稳榜双门槛):在榜3款/登顶2个(有效2)/总天数678/单产品最长574天",
        "domesticTier": 1,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.jj.cn/",
        "https://apps.apple.com/cn/app/id472885640"
      ]
    },
    "G341": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以解压清洁模拟、星星喜消消、终极末日战争、末日钓鱼王等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 342,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "解压清洁模拟、星星喜消消、终极末日战争、末日钓鱼王",
        "tierEvidence": "国内T2:在榜5款/登顶2个(有效1)/总天数246/单产品最长210天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 5,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://uniteman.cn/",
        "https://gamehot.makegame.store/minigames/douyin/tt362e4093a927e93a02"
      ]
    },
    "G342": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以拼个图、这关我过了、老铁别吹牛、没有那么难、搞笑安静书等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 343,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "拼个图、这关我过了、老铁别吹牛、没有那么难、搞笑安静书",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数29/单产品最长14天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.yupao.com/zhaogong/336033565.html"
      ]
    },
    "G343": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以多乐升级、多乐够级、脑王驾到、七星高照等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 344,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "多乐升级、多乐够级、脑王驾到、七星高照",
        "tierEvidence": "国内T2:在榜3款/登顶1个(有效1)/总天数188/单产品最长178天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.duole.com/"
      ]
    },
    "G344": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以纸牌塔、球球收收收、接瓶水吧等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 345,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "纸牌塔、球球收收收、接瓶水吧",
        "tierEvidence": "国内T3:在榜3款/登顶0个(有效0)/总天数219/单产品最长131天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 3,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/238166"
      ]
    },
    "G345": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以谁来帮一把、鲨雕的游戏、谁来搭把手、这车有点飘、谁能过一关等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 346,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "谁来帮一把、鲨雕的游戏、谁来搭把手、这车有点飘、谁能过一关",
        "tierEvidence": "国内T2:在榜4款/登顶1个(有效1)/总天数185/单产品最长139天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/196861"
      ]
    },
    "G346": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T3，以我是大梗王、找人高手、小心躲藏、夜市摆摊、赛车对决等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 347,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "我是大梗王、找人高手、小心躲藏、夜市摆摊、赛车对决",
        "tierEvidence": "国内T3:在榜4款/登顶0个(有效0)/总天数127/单产品最长102天",
        "domesticTier": 3,
        "overseasTier": null,
        "h5Products": 4,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.opp0o.com/",
        "https://www.opp0o.com/api/games?q=%E9%87%8F%E5%A4%9A%E5%A4%9A&limit=5&offset=0"
      ]
    },
    "G347": {
      "key": "domestic",
      "method": "source-domestic",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表国内T2，以不能这么玩、友尽也要玩、完美强迫症、兄弟别嚣张等国内产品及微信小游戏/H5为业务依据。源表缺少国内收入金额，H5在榜数量和天数仅作业务重心辅助证据。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 348,
        "sourceMarket": "国内市场",
        "sourceChannel": "微信小游戏/H5",
        "sourceProducts": "不能这么玩、友尽也要玩、完美强迫症、兄弟别嚣张",
        "tierEvidence": "国内T2:在榜9款/登顶1个(有效0)/总天数70/单产品最长19天",
        "domesticTier": 2,
        "overseasTier": null,
        "h5Products": 9,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G348": {
      "key": "overseas",
      "method": "product-review",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T0，主力产品Block Blast!。以该产品的海外广告变现业务和源表出海分级为依据；榜单内购金额未覆盖IAA，不将其当作公司全部收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 349,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Block Blast!",
        "tierEvidence": "消除类监控名单入选→T3；出海T0:收入0.0亿美元/下载27032万(超休闲榜7Q折算)",
        "domesticTier": null,
        "overseasTier": 0,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": 274781
      },
      "sources": [
        "https://www.baijing.cn/article/55047",
        "https://www.taptap.cn/moment/777092006903023713",
        "https://www.hungrystudio.com/privacyus-support.html",
        "https://www.hungrystudio.com/",
        "https://www.blockblast.com/news/9"
      ]
    },
    "G349": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为Brain Puzzle 系列；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 350,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Brain Puzzle 系列",
        "tierEvidence": "消除类监控名单入选→T3；出海T1:收入0.0亿美元/下载5360万(休闲榜10Q+超休闲榜7Q折算)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 4925785,
        "hypercasual7QUSD": 73208
      },
      "sources": [
        "https://apps.apple.com/us/app/brain-puzzle-tricky-quest/id6670789598",
        "https://apps.apple.com/us/app/brain-puzzle-2-logic-twist/id6747063674",
        "https://www.smallstepinfo.com/",
        "https://itunes.apple.com/lookup?id=6670789598&country=us"
      ]
    },
    "G350": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为Soccer Super Star；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 351,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Soccer Super Star",
        "tierEvidence": "消除类监控名单入选→T3；出海T1:收入0.0亿美元/下载2397万(超休闲榜7Q折算)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": 896865
      },
      "sources": [
        "https://www.baijing.cn/article/38821",
        "https://www.yfchuhai.com/article/9873.html",
        "https://www.taptap.cn/app/55979/all-info"
      ]
    },
    "G351": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为水排序等休闲解谜系列；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 352,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "水排序等休闲解谜系列",
        "tierEvidence": "消除类监控名单入选→T3；出海T1:收入0.0亿美元/下载2188万(超休闲榜7Q折算)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": 1672408
      },
      "sources": [
        "https://www.nppa.gov.cn/bsfw/jggs/yxspjg/gcwlyxspxx/202211/t20221123_636664.html"
      ]
    },
    "G352": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T2，主力产品为Happy Screw Trip 3D；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 353,
        "sourceMarket": "海外出海",
        "sourceChannel": "海外App Store/Google Play",
        "sourceProducts": "Happy Screw Trip 3D",
        "tierEvidence": "消除类监控名单入选→T3；出海T2:收入0.3亿美元/下载1365万(休闲榜10Q+超休闲榜7Q折算)",
        "domesticTier": null,
        "overseasTier": 2,
        "h5Products": null,
        "overseas10QUSD": 20,
        "hypercasual7QUSD": 18653370
      },
      "sources": [
        "https://www.yfchuhai.com/enterprise/13665.html",
        "https://apps.apple.com/us/app/happy-merge-seaside/id1630721979?uo=4"
      ]
    },
    "G353": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为My Talking Tom；Talking Tom Gold Run；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。 原表“国内市场/微信小游戏”与境外产品收入、出海分级不符；本次只修正研究方向，原字段完整保留。",
      "signals": {
        "sourceRow": 354,
        "sourceMarket": "国内市场",
        "sourceChannel": null,
        "sourceProducts": "My Talking Tom；Talking Tom Gold Run",
        "tierEvidence": "出海T1:收入0.1亿美元/下载10121万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 6699756,
        "hypercasual7QUSD": 65442
      },
      "sources": [
        "https://vip.stock.finance.sina.com.cn/corp/view/vCB_AllBulletinDetail.php?id=12264625",
        "https://outfit7.com/"
      ]
    },
    "G354": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T0，主力产品为Dice Dreams；Domino Dreams；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 355,
        "sourceMarket": "海外出海",
        "sourceChannel": null,
        "sourceProducts": "Dice Dreams；Domino Dreams",
        "tierEvidence": "出海T0:收入4.2亿美元/下载4445万(休闲榜10Q)；境外对标主体封顶T1",
        "domesticTier": null,
        "overseasTier": 0,
        "h5Products": null,
        "overseas10QUSD": 418346125,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://investors.playtika.com/news-releases/news-release-details/playtika-holding-corp-completes-strategic-acquisition-superplay/"
      ]
    },
    "G355": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T2，主力产品为Animals & Coins；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 356,
        "sourceMarket": "海外出海",
        "sourceChannel": null,
        "sourceProducts": "Animals & Coins",
        "tierEvidence": "出海T2:收入0.5亿美元/下载1387万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 2,
        "h5Products": null,
        "overseas10QUSD": 49350136,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://investors.playtika.com/news-releases/news-release-details/playtika-holding-corp-completes-strategic-acquisition-innplay-0/"
      ]
    },
    "G356": {
      "key": "domestic",
      "method": "product-review",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "此节点代表网易集团历史投资方，国内主力游戏构成收入基础；上市公司T1仅是综合评级，不作为国内外比较。结合梦幻西游等国内长线产品作方向分类，海外产品和历史投资收入不等于国内单一法人收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 357,
        "sourceMarket": "国内外双线",
        "sourceChannel": null,
        "sourceProducts": "历史合资投资：Mattel163",
        "tierEvidence": "上市公司→T1",
        "domesticTier": null,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.sec.gov/Archives/edgar/data/63276/000162828026054347/mat-20260630.htm",
        "https://www.36kr.com/p/3679018796773255"
      ]
    },
    "G357": {
      "key": "overseas",
      "method": "source-overseas",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原表出海T1，主力产品为UNO!；采用该行出海收入与分级证据确定研究方向，不套用母公司或投资方收入。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 358,
        "sourceMarket": "国内外双线",
        "sourceChannel": null,
        "sourceProducts": "UNO!",
        "tierEvidence": "出海T1:收入1.3亿美元/下载5076万(休闲榜10Q)",
        "domesticTier": null,
        "overseasTier": 1,
        "h5Products": null,
        "overseas10QUSD": 132055789,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.sec.gov/Archives/edgar/data/63276/000162828026054347/mat-20260630.htm",
        "https://corporate.mattel.com/news/mattel-game-studios-forms-to-accelerate-digital-games-for-hot-wheel-uno-and-more"
      ]
    },
    "G358": {
      "key": "unscoped",
      "method": "relationship-only",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原关系表端点补录，没有可对应的产品收入、国内外分级或经营产品组合。仅保留关系主体身份，不据注册地或相邻公司的业务判定收入方向。",
      "limitations": "不纳入经营公司收入方向统计。",
      "signals": {
        "sourceRow": 359,
        "sourceMarket": "国内市场",
        "sourceChannel": null,
        "sourceProducts": "",
        "tierEvidence": "无榜单/收入信号",
        "domesticTier": null,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G359": {
      "key": "unscoped",
      "method": "relationship-only",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原关系表端点补录，没有可对应的产品收入、国内外分级或经营产品组合。仅保留关系主体身份，不据注册地或相邻公司的业务判定收入方向。",
      "limitations": "不纳入经营公司收入方向统计。",
      "signals": {
        "sourceRow": 360,
        "sourceMarket": "国内市场",
        "sourceChannel": null,
        "sourceProducts": "",
        "tierEvidence": "无榜单/收入信号",
        "domesticTier": null,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.thnet.gov.cn/attachment/7/7950/7950171/10611237.pdf"
      ]
    },
    "G360": {
      "key": "domestic",
      "method": "same-entity-product",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "与G173（海南麦豆信息科技有限公司）为已归一的同一法人，按这关太疯狂、比比脑瓜子、玩不了一点啊、挑战最强智商等国内产品判断；这是同一法人重复记录，不是把关联公司收入传递过来。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 361,
        "sourceMarket": "国内市场",
        "sourceChannel": null,
        "sourceProducts": "挑战最强智商（wxdda5318e594ac0c8）",
        "tierEvidence": "无榜单/收入信号",
        "domesticTier": null,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://sj.qq.com/appdetail/wxdda5318e594ac0c8",
        "https://apps.microsoft.com/detail/xp8lp91cnxt2wx?gl=CN&hl=zh-CN"
      ]
    },
    "G361": {
      "key": "domestic",
      "method": "same-entity-product",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "与G158（海南乐果互娱科技有限公司）为已归一的同一法人，按史上最难挑战、神脑洞、我的狗头、全民猜歌达人、找就完事了、梦想创业记等国内产品判断；这是同一法人重复记录，不是把关联公司收入传递过来。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 362,
        "sourceMarket": "国内市场",
        "sourceChannel": null,
        "sourceProducts": "全民猜歌达人（海南乐果对应）",
        "tierEvidence": "无榜单/收入信号",
        "domesticTier": null,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://pdf.dfcfw.com/pdf/H3_AP202604271821628560_1.pdf?1777319407000.pdf=",
        "https://www.9game.cn/fkxb/"
      ]
    },
    "G362": {
      "key": "unscoped",
      "method": "relationship-only",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "原关系表端点补录，没有可对应的产品收入、国内外分级或经营产品组合。仅保留关系主体身份，不据注册地或相邻公司的业务判定收入方向。",
      "limitations": "不纳入经营公司收入方向统计。",
      "signals": {
        "sourceRow": 363,
        "sourceMarket": "国内市场",
        "sourceChannel": null,
        "sourceProducts": "",
        "tierEvidence": "无榜单/收入信号",
        "domesticTier": null,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": []
    },
    "G363": {
      "key": "domestic",
      "method": "product-review",
      "scope": "源表所列主体／品牌及产品组合",
      "basis": "此记录为海南爱乐游文化发展有限公司，公开对应雷霆战机：集结、压扁火柴人等国内产品；独立判断，不套用G038上海同名公司的海外样本。",
      "limitations": "方向为源表产品组合和市场资料的研究判断，未披露完整境内外占比；空白收入不等于零，10Q与7Q样本不直接相加，未覆盖的广告及渠道收入不视为不存在。",
      "signals": {
        "sourceRow": 364,
        "sourceMarket": "国内市场",
        "sourceChannel": null,
        "sourceProducts": "雷霆战机：集结；压扁火柴人",
        "tierEvidence": "无榜单/收入信号",
        "domesticTier": null,
        "overseasTier": null,
        "h5Products": null,
        "overseas10QUSD": null,
        "hypercasual7QUSD": null
      },
      "sources": [
        "https://www.taptap.cn/app/6987/all-info?platform=android",
        "https://ltzj.hn5agame.com/",
        "https://static.cninfo.com.cn/finalpage/2021-04-27/1209815252.PDF",
        "https://www.taptap.cn/app/223398/all-info"
      ]
    }
  }
};
