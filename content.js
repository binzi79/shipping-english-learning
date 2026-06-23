// ===================================================
//  航运英语长句学习 · 内容数据
//  每个 unit 包含：sentence / learn / review / test / vocabulary
//  扩展知识 (extend) 由 DeepSeek API 实时生成
// ===================================================

const UNITS = [
  // ─────────────────────────────────────────────
  //  Unit 1 · 提单条款 · 承运人免责
  // ─────────────────────────────────────────────
  {
    id: 1,
    category: "提单条款",
    categoryColor: "#1e40af",
    sentence: "The Carrier shall not be liable for loss or damage to the goods arising from any cause whatsoever, unless such loss or damage has been caused by the personal act or omission of the Carrier committed with intent to cause such loss or damage, or recklessly and with knowledge that such loss or damage would probably result.",

    learn: {
      steps: [
        {
          type: "intro",
          text: "这句话很长，先别慌。我们先找「这句话到底在说谁、在说什么」，找到之后，其他的都是补充说明。"
        },
        {
          type: "highlight",
          quote: "The Carrier shall not be liable for loss or damage to the goods",
          comment: "主角是承运人（Carrier），说的是「不承担货物灭失或损坏的责任」。这是整句话的核心——承运人在甩锅。"
        },
        {
          type: "normal",
          text: "然后是 arising from any cause whatsoever，意思是「不管什么原因造成的」，进一步强调承运人什么情况都不管。"
        },
        {
          type: "signal",
          word: "unless",
          text: "接着出现 unless，注意，这是个转折信号，意思是「除非……」，前面说的免责到这里要打折扣了。"
        },
        {
          type: "normal",
          text: "unless 后面说的是：这个损失是承运人本人的行为或「不作为」造成的，而且是故意为之，或者明知后果还鲁莽行事。"
        },
        {
          type: "conclusion",
          text: "也就是说，只有在「故意」或「明知故犯」的情况下，承运人才需要担责。其他所有原因，他都不管。"
        }
      ]
    },

    review: {
      summary: "承运人对货物的任何灭失或损坏不承担责任——除非该损失是承运人本人故意造成的，或者是明知可能出事还鲁莽行事导致的。",
      signalWords: [
        { word: "unless", role: "转折信号", meaning: "除非……，引出例外情况，让前面的免责打折扣" }
      ],
      pattern: "X shall not be liable for [后果]… unless such [后果] has been caused by [主体] with intent / recklessly and with knowledge.",
      patternNote: "免责条款的标准句型，提单、租约里到处是这个结构，背下来能读懂一大类条款。"
    },

    test: [
      {
        question: "这句话的核心主干是什么？",
        options: [
          "The Carrier shall not be liable for loss or damage",
          "loss or damage arising from any cause whatsoever",
          "unless such loss or damage has been caused"
        ],
        answer: 0,
        explanation: "主语是 The Carrier，谓语是 shall not be liable，后面都是在说「什么情况下免责/什么情况下不免责」。找主干要先找「谁」+「做什么」。"
      },
      {
        question: "unless 在这句话里的作用是？",
        options: [
          "转折，前面的免责在这里打折扣",
          "补充说明承运人的责任范围",
          "解释货物损坏的具体原因"
        ],
        answer: 0,
        explanation: "unless = 除非。见到它就要知道前面的结论要出现例外了。这句话里：「不承责」是结论，unless 后面是「但这些情况除外」。"
      },
      {
        question: "omission 在合同语境中是什么意思？",
        options: [
          "遗漏的单据",
          "不作为，该做没做",
          "违规操作行为"
        ],
        answer: 1,
        explanation: "合同里 act or omission 是固定搭配：act = 主动做了某事，omission = 该做没做。两种都可能导致法律责任。"
      }
    ],

    vocabulary: [
      { word: "liable", looksLike: "不常见词", meaning: "承担法律责任", usage: "be liable for = 对……负责", note: "常见于合同免责条款，be liable for damages = 对损失承责" },
      { word: "omission", looksLike: "不常见词", meaning: "不作为、疏于做某事", usage: "act or omission（固定搭配）", note: "和 act 并列：一个是「做了坏事」，一个是「该做没做」" },
      { word: "whatsoever", looksLike: "whatever 的加强版", meaning: "任何……都（强调语气）", usage: "any cause whatsoever", note: "比 whatever 更绝对，常见于合同强调语气，相当于「不管什么」" },
      { word: "recklessly", looksLike: "不常见词", meaning: "鲁莽地，不计后果地", usage: "acted recklessly", note: "法律里比「疏忽」negligently 程度更重，暗含「明知危险还去做」" },
      { word: "with knowledge that", looksLike: "看着简单", meaning: "明知……（法律含义）", usage: "with knowledge that damage would probably result", note: "这是法律语言里的「主观明知」，比普通的 know 更正式，法律效力更强" }
    ]
  },

  // ─────────────────────────────────────────────
  //  Unit 2 · 服务合同 · 不可抗力与最低舱量
  // ─────────────────────────────────────────────
  {
    id: 2,
    category: "服务合同",
    categoryColor: "#065f46",
    sentence: "The Merchant's obligation to tender the Minimum Quantity Commitment shall be suspended to the extent that performance is prevented by circumstances beyond the Merchant's reasonable control, provided that the Merchant gives prompt written notice to the Carrier of any such circumstances and uses its best efforts to overcome them.",

    learn: {
      steps: [
        {
          type: "intro",
          text: "主角是 The Merchant（货主）。先看他有个「义务」，再看这个义务在什么情况下可以「暂停」。"
        },
        {
          type: "highlight",
          quote: "obligation to tender the Minimum Quantity Commitment",
          comment: "先跳过这串专业词，后面词汇表会解释。暂时理解为「货主每年必须给承运人一定货量的义务」。"
        },
        {
          type: "highlight",
          quote: "shall be suspended",
          comment: "这个义务会被「暂停」。什么情况下暂停？继续往后读。"
        },
        {
          type: "signal",
          word: "to the extent that",
          text: "to the extent that performance is prevented by circumstances beyond the Merchant's reasonable control——这是「不可抗力」的书面说法。意思是「在货主无法控制的情况发生时，相应地暂停」。注意不是全部暂停，是「影响了多少就暂停多少」。"
        },
        {
          type: "signal",
          word: "provided that",
          text: "provided that 是条件信号，比 if 更正式，意思是「前提是……」。条件是：货主要及时书面通知承运人，并且尽力克服困难。"
        },
        {
          type: "conclusion",
          text: "重点：不满足 provided that 后面的条件，前面「暂停义务」的权利就失效了。也就是说，遇到不可抗力，货主不能直接不给货——还要通知、还要努力解决。"
        }
      ]
    },

    review: {
      summary: "如果发生货主无法控制的情况（不可抗力），货主完成最低订舱量的义务可以相应暂停——但前提是货主必须及时书面通知承运人，并尽力解决问题。",
      signalWords: [
        { word: "to the extent that", role: "限定范围", meaning: "在……的程度内（不是全部，是「影响多少暂停多少」）" },
        { word: "provided that", role: "附加条件", meaning: "前提是……，不满足则前面的权利失效" }
      ],
      pattern: "[义务] shall be suspended to the extent that [障碍], provided that [补救条件].",
      patternNote: "不可抗力条款的标准结构。见到 provided that 就要注意，后面跟的是附加条件，这个条件是享有前面权利的前提。"
    },

    test: [
      {
        question: "provided that 在合同里的意思是？",
        options: [
          "背景说明，解释当时的情况",
          "附加条件，不满足则前面权利失效",
          "时间顺序，表示之后发生的事"
        ],
        answer: 1,
        explanation: "provided that 是正式合同里的条件从句，比 if 约束性更强。见到它就要留意：后面跟的是「享有前面权利必须满足的条件」，条件不满足，前面的权利就没了。"
      },
      {
        question: "tender 在这句话里是什么意思？",
        options: [
          "温柔的，温和的（形容词）",
          "投标，招标",
          "提交、交付（货物/履行义务）"
        ],
        answer: 2,
        explanation: "tender 在航运/合同语境里是「提交、交货」的意思。tender cargo = 交货订舱。这是典型的熟词僻义陷阱，看着认识，意思完全不同。"
      },
      {
        question: "to the extent that 限定的是什么？",
        options: [
          "货主的整个义务全部暂停",
          "义务暂停的范围与不可抗力影响的程度相对应",
          "承运人收到通知后的处理义务"
        ],
        answer: 1,
        explanation: "to the extent that 是「在……程度内」，说明不是全部暂停，而是「影响了多少就暂停多少」。比如红海危机影响了亚欧线，但太平洋线没受影响，那太平洋线的舱量义务就不能暂停。"
      }
    ],

    vocabulary: [
      { word: "tender", looksLike: "温柔的？招标？", meaning: "提交、交付（动词）", usage: "tender the cargo / tender a commitment", note: "航运合同里 tender = 履行交货动作，和日常意思完全不同，是熟词僻义" },
      { word: "Minimum Quantity Commitment", looksLike: "字面能猜", meaning: "最低舱量承诺（MQC）", usage: "tender the MQC", note: "服务合同核心条款，货主承诺每年给承运人多少货量，完不成按空舱费率赔付" },
      { word: "to the extent that", looksLike: "看着复杂", meaning: "在……的程度/范围内", usage: "suspended to the extent that performance is prevented", note: "限定语，说明不是全部，是「程度对应地」发生" },
      { word: "provided that", looksLike: "像普通的 if", meaning: "前提是/条件是", usage: "provided that the Merchant gives notice", note: "正式合同里比 if 约束性更强的条件，不满足则前面权利作废" },
      { word: "prompt", looksLike: "提示？命令行提示符？", meaning: "及时的、迅速的（形容词）", usage: "prompt written notice", note: "在这里是形容词，不是动词「提示」。prompt notice = 及时通知" },
      { word: "best efforts", looksLike: "字面直译", meaning: "尽最大努力（法律术语）", usage: "uses its best efforts to overcome", note: "法律语境里 best efforts 比 reasonable efforts 要求更高，是最高级别的努力义务" }
    ]
  },

  // ─────────────────────────────────────────────
  //  Unit 3 · 行业资讯 · 联盟集中度与监管
  // ─────────────────────────────────────────────
  {
    id: 3,
    category: "行业资讯",
    categoryColor: "#7c3aed",
    sentence: "The top 10 carriers now control over 85% of global container shipping capacity, a concentration that has prompted regulators in both the United States and the European Union to scrutinize alliance agreements with increasing vigilance, even as carriers argue that cooperation is essential to maintaining service reliability on major trade lanes.",

    learn: {
      steps: [
        {
          type: "intro",
          text: "开头很直白，先找主干，读懂核心事实，然后再看后面的两大块补充。"
        },
        {
          type: "highlight",
          quote: "The top 10 carriers now control over 85% of global container shipping capacity",
          comment: "主干很清楚：前十大承运人控制了全球超85%的集装箱运力。这是核心事实，读懂了。"
        },
        {
          type: "normal",
          text: "逗号后面出现 a concentration that……这里 a concentration 是对前面85%的「总结词」——意思是「这种高度集中的格局」。然后 that 引出这个格局带来了什么影响。"
        },
        {
          type: "highlight",
          quote: "prompted regulators… to scrutinize alliance agreements with increasing vigilance",
          comment: "prompted... to 是「促使……做某事」的结构。这种集中格局，促使美欧监管机构越来越警惕地审查联盟协议。"
        },
        {
          type: "signal",
          word: "even as",
          text: "even as 是对比信号——不是「即使」，是「就在此时，与此同时」，引出承运人的相反立场。"
        },
        {
          type: "conclusion",
          text: "carriers argue that cooperation is essential to maintaining service reliability——承运人反驳说：联盟合作是保障航线服务稳定的必要手段。整句话是「监管方担忧」VS「行业方反驳」的对立结构。"
        }
      ]
    },

    review: {
      summary: "前十大承运人已掌控全球超85%的集装箱运力，这种高度集中的格局促使美欧监管机构对联盟协议展开越来越严格的审查——尽管承运人坚持认为，联盟合作对于保障主要航线的服务稳定性至关重要。",
      signalWords: [
        { word: "a [名词] that", role: "总结+展开", meaning: "总结前面的内容，再接着说它带来了什么影响" },
        { word: "even as", role: "对比信号", meaning: "就在此时，与此同时（引出对立情况，不是「即使」）" }
      ],
      pattern: "[现象], a [总结词] that has prompted [对象] to [反应], even as [另一方的立场].",
      patternNote: "行业分析文章里常见的「现象 → 监管反应 → 业界反驳」三段式，FT、经济学人、Alphaliner 航运报道大量使用。"
    },

    test: [
      {
        question: "even as 在这句话里是什么意思？",
        options: [
          "即使，尽管（让步，相当于 although）",
          "就在此时，与此同时（引出对立的同时情况）",
          "因为，由于（表原因）"
        ],
        answer: 1,
        explanation: "even as 不是 even if。它引出的是「同时存在的相反情况」，这里是监管机构的担忧和承运人的反驳同时并存。这是行业分析文章里非常常见的对比句型。"
      },
      {
        question: "concentration 在这段行业文章里指什么？",
        options: [
          "专注度，注意力集中",
          "市场集中度（少数企业控制大份额）",
          "溶液的物质浓度"
        ],
        answer: 1,
        explanation: "经济/行业分析语境里，concentration 指「市场集中度」，是个高频词。这是典型的熟词僻义——字面看到「集中」，但专业语境里是「市场被少数巨头垄断的程度」。"
      },
      {
        question: "a concentration that has prompted regulators to scrutinize，这个结构的作用是？",
        options: [
          "解释运力为什么这么集中",
          "总结前面的数据，然后说这个局面带来了什么影响",
          "描述监管机构的组织架构"
        ],
        answer: 1,
        explanation: "a + 名词 + that 是「总结+展开」结构：先用一个名词总结前面说的（a concentration = 那种集中局面），再用 that 引出它带来的影响。这是英文分析写作里的高频句型。"
      }
    ],

    vocabulary: [
      { word: "concentration", looksLike: "集中注意力？", meaning: "市场集中度", usage: "market concentration / a high level of concentration", note: "经济/行业分析高频词，指少数企业控制大部分市场份额的程度" },
      { word: "prompted… to", looksLike: "prompt = 提示/命令行", meaning: "促使……做某事", usage: "prompted regulators to scrutinize", note: "prompt 作动词时是「促使」，是推动某人采取行动的意思，和「提示」不同" },
      { word: "scrutinize", looksLike: "不常见词", meaning: "仔细审查、严格审视", usage: "scrutinize alliance agreements", note: "比 examine 语气更重，有压力感，常用于监管、法律场景" },
      { word: "vigilance", looksLike: "不常见词", meaning: "警惕性", usage: "with increasing vigilance = 越来越警惕地", note: "vigilant（形容词）= 警惕的；vigilance（名词）= 警惕性" },
      { word: "even as", looksLike: "even if？", meaning: "就在此时，与此同时（引出对立）", usage: "even as carriers argue…", note: "不是「即使」！引出同时存在的相反情况，是对比信号，见到它就知道后面有个「另一方面」" },
      { word: "essential to", looksLike: "常见词", meaning: "对……不可或缺", usage: "essential to maintaining reliability", note: "后面接名词或动名词（to + doing），essential to do 是错的" },
      { word: "trade lanes", looksLike: "字面能猜", meaning: "航线（贸易通道）", usage: "major trade lanes", note: "比 routes 更专业，强调固定班期的贸易通道，如亚欧线（Asia-Europe）、跨太平洋线（Transpacific）" }
    ]
  },

  // ─────────────────────────────────────────────
  //  Unit 4 · 贸易术语 · Incoterms 2020 · CIF
  // ─────────────────────────────────────────────
  {
    id: 4,
    category: "贸易术语",
    categoryColor: "#0369a1",
    sentence: "Under CIF (Cost, Insurance and Freight), the seller delivers the goods on board the vessel at the named port of shipment, or procures the goods already so delivered, and risk of loss of or damage to the goods passes to the buyer at that moment, even though the seller must also contract for and pay the cost of carriage and insurance necessary to bring the goods to the named port of destination.",

    learn: {
      steps: [
        {
          type: "intro",
          text: "这是货代每天都要处理的——Incoterms 贸易术语。CIF 是国际贸易里最常见的价格条件之一，但很多人对它有个根本性的误解。这句话就是为了澄清这个误解的。"
        },
        {
          type: "highlight",
          quote: "the seller delivers the goods on board the vessel at the named port of shipment",
          comment: "卖方在装运港将货物交至船上——这是交货点。注意：是「装运港」，不是目的港。货代要清楚：交货动作在装货港完成，不是目的港。"
        },
        {
          type: "highlight",
          quote: "risk of loss of or damage to the goods passes to the buyer at that moment",
          comment: "风险在装运港货物上船那一刻就转移给买方了。记住这个时间点：不是货到目的港，不是买方拿到货——而是装运港上船那刻。"
        },
        {
          type: "signal",
          word: "even though",
          text: "even though 是关键的让步信号，点出了 CIF 最容易误解的地方：尽管风险已经转移给买方，卖方还是要花钱安排运输和保险把货送到目的港。"
        },
        {
          type: "highlight",
          quote: "the seller must also contract for and pay the cost of carriage and insurance necessary to bring the goods to the named port of destination",
          comment: "卖方要负责订舱（carriage）和投保（insurance），费用由卖方出——但这是为买方利益做的，因为风险已是买方的了。"
        },
        {
          type: "conclusion",
          text: "CIF 的核心：卖方付运费和保险费，但风险早在装运港就给了买方。货到目的港如果有损坏，买方要自己用卖方提供的保险单向保险公司索赔，不能找卖方。这是货代必须向客户解释清楚的关键点。"
        }
      ]
    },

    review: {
      summary: "CIF 下卖方在装运港完成交货、承担运费与保险费，但风险在货物装船时即转移至买方——卖方续运和投保仅为买方利益，货损索赔要找保险公司。",
      signalWords: [
        { word: "even though", role: "让步信号", meaning: "尽管如此（指出看似矛盾但同时成立的情况）" },
        { word: "passes to", role: "转移动作", meaning: "（风险）转移至……" },
        { word: "at that moment", role: "时间定语", meaning: "在那一刻（锁定风险转移的精确时间点）" }
      ],
      pattern: "Risk passes to [买方] at [时间点], even though [卖方仍须履行的义务].",
      patternNote: "Incoterms 条款的标准结构：先说风险转移时间，再用 even though 点出「卖方还要做但已不是为自己做」的部分。区分「谁的风险」和「谁付钱」是读懂贸易术语的关键。"
    },

    test: [
      {
        question: "CIF 条件下，风险从何时转移给买方？",
        options: [
          "货物到达目的港时",
          "货物在装运港装上船时",
          "买方收到提单时"
        ],
        answer: 1,
        explanation: "CIF 的风险转移点是装运港货物装上船（on board the vessel at the port of shipment）。这是 CIF 最常被误解的地方——很多买家以为「卖方包运费保险」就等于「到目的港之前都是卖方的风险」，其实不然。"
      },
      {
        question: "even though 在这句话里的作用是？",
        options: [
          "引出补充条件，说明卖方可以选择不做的事",
          "引出让步，指出卖方仍须履行但「不为自己」的义务",
          "引出例外，说明某些情况下规则不同"
        ],
        answer: 1,
        explanation: "even though 引出让步：「尽管风险已经是买方的了，卖方还是要订舱并投保」。这两件事同时成立——卖方出钱，但受益人实际上是买方（因为风险已转移）。"
      },
      {
        question: "CIF 下货物在海上受损，买方应该怎么办？",
        options: [
          "要求卖方赔偿，因为是卖方投的保险",
          "用卖方提供的保险单向保险公司直接索赔",
          "向承运人提出货损索赔，与保险无关"
        ],
        answer: 1,
        explanation: "CIF 下卖方投保是为买方利益（for the buyer's benefit）。货损时风险已是买方的，买方要用卖方提供的保险单（insurance certificate）向保险公司索赔，不能找卖方。这是货代必须向客户解释清楚的关键点。"
      }
    ],

    vocabulary: [
      { word: "CIF", looksLike: "缩写", meaning: "成本+保险费+运费（Cost, Insurance and Freight）", usage: "sold on CIF terms / quoted CIF Shanghai", note: "仅适用于海运和内河运输。与 CIP（适用于多式联运）不同。CIF 下保险最低险别为 ICC(C)，买家常要求升至 ICC(A)" },
      { word: "procures", looksLike: "不常见词", meaning: "设法取得、安排获得", usage: "procures the goods already so delivered", note: "合同语言里 procure = 安排/确保某事发生。这里指卖方可直接购入已装船货物（而不自己去送上船），两种方式都可满足交货义务" },
      { word: "risk passes to", looksLike: "字面能猜", meaning: "风险转移给……", usage: "risk passes to the buyer at that moment", note: "贸易术语里最核心的概念。pass = 转移，不是「经过」。风险转移时间点决定了货损由谁负责" },
      { word: "carriage", looksLike: "交通工具？", meaning: "运输、承运（合同/正式语）", usage: "cost of carriage / contract of carriage", note: "正式/合同语言里的「运输」，比 transportation 更常见于提单和 Incoterms。contract of carriage = 运输合同（即提单）" },
      { word: "named port", looksLike: "字面能猜", meaning: "指定港口", usage: "named port of shipment / named port of destination", note: "Incoterms 里每个术语后面都要跟「指定地点」，如 CIF Shanghai 里 Shanghai 就是 named port of destination" },
      { word: "even though", looksLike: "even if？", meaning: "尽管（让步，两件事同时成立）", usage: "even though the seller pays for insurance", note: "区别于 even if（假设）：even though 说的是事实同时成立的两件事，even if 是假设条件" }
    ]
  },

  // ─────────────────────────────────────────────
  //  Unit 5 · 行业资讯 · 红海危机与运力收紧
  // ─────────────────────────────────────────────
  {
    id: 5,
    category: "行业资讯",
    categoryColor: "#7c3aed",
    sentence: "The rerouting of container vessels via the Cape of Good Hope following the escalation of attacks on merchant shipping in the Red Sea has effectively removed an estimated 15 to 20 percent of effective capacity from the Asia-Europe trade, driving spot freight rates to levels not seen since the height of the pandemic-era supply chain disruptions.",

    learn: {
      steps: [
        {
          type: "intro",
          text: "这是一句典型的行业新闻长句，主语很长，核心动作在中间某处。读长句第一步：找主语，找谓语，其他的都是补充。"
        },
        {
          type: "highlight",
          quote: "The rerouting of container vessels via the Cape of Good Hope",
          comment: "这是主语，但主语本身很长。核心词是 rerouting（改道），整个主语意思是：「集装箱船绕道好望角这件事」。注意：主语是「这件事」，不是「船」。"
        },
        {
          type: "normal",
          text: "following the escalation of attacks on merchant shipping in the Red Sea——时间背景：红海商船袭击事件升级之后。following = 在……之后，这里交代了绕道的原因。"
        },
        {
          type: "highlight",
          quote: "has effectively removed an estimated 15 to 20 percent of effective capacity from the Asia-Europe trade",
          comment: "谓语：实际上抽走了亚欧航线大约 15-20% 的有效运力。注意 effectively 在这里不是「有效率地」，而是「实际上、从效果来看」——是常见的熟词偏义。"
        },
        {
          type: "signal",
          word: "driving",
          text: "driving 是现在分词，接在主句之后表示「进一步的结果」，相当于 and this drove...。这种「动词-ing」接结果的写法在行业报道里极其常见：driving rates higher / pushing costs up / sending volumes down。"
        },
        {
          type: "conclusion",
          text: "整句逻辑链：红海袭击升级 → 船舶绕道好望角 → 亚欧有效运力减少15-20% → 即期运费飙升至疫情高峰以来最高水平。一句话讲清了红海危机对市场的完整传导路径。"
        }
      ]
    },

    review: {
      summary: "红海商船袭击升级后，集装箱船被迫绕道好望角，实际上从亚欧航线抽走了约15-20%的有效运力，将即期运费推至疫情高峰以来的最高水平。",
      signalWords: [
        { word: "following", role: "时间/因果背景", meaning: "在……之后（暗含因果）" },
        { word: "effectively", role: "语气副词", meaning: "实际上、从效果来看（≠ 有效率地）" },
        { word: "driving (分词)", role: "结果衔接", meaning: "从而推动/导致，接连锁结果" }
      ],
      pattern: "The [行为] following [背景] has effectively [影响], driving [进一步结果] to levels not seen since [历史参照].",
      patternNote: "行业新闻「事件→影响→连锁反应」的标准句型。分词 driving/pushing/sending 是最常见的结果衔接词，not seen since 是「创历史新高/新低」的标准表达。"
    },

    test: [
      {
        question: "这句话的主语是什么？",
        options: [
          "container vessels（集装箱船）",
          "The rerouting of container vessels（集装箱船绕道这件事）",
          "attacks on merchant shipping（商船袭击事件）"
        ],
        answer: 1,
        explanation: "主语是 The rerouting（改道这件事），不是 vessels（船）本身。The + 动名词 做主语是英文长句的高频结构，找主语时要找到最外层的名词词组，不要被里面的 of / from 带跑。"
      },
      {
        question: "effectively 在 has effectively removed 里是什么意思？",
        options: [
          "有效率地（方法很好）",
          "实际上、从效果来看",
          "完全地、彻底地"
        ],
        answer: 1,
        explanation: "effectively 在行业分析文章里常作 in effect / in practice 用，表示「从实际效果来看」，不是在夸方法好。例：The ban effectively ended all imports.（禁令实际上终止了所有进口。）这是高频熟词偏义。"
      },
      {
        question: "driving spot freight rates to levels not seen since... 里，driving 的语法作用是？",
        options: [
          "主句的谓语动词，表示「驾驶/推动」",
          "现在分词，衔接主句之后的连锁结果",
          "过去分词，表示被动"
        ],
        answer: 1,
        explanation: "driving 是现在分词短语，接在主句之后说明「进一步产生的结果」，相当于 and this drove spot freight rates...。行业报道大量使用这个结构，其他例子：sending shares lower / pushing costs up / creating bottlenecks。"
      }
    ],

    vocabulary: [
      { word: "rerouting", looksLike: "字面能猜", meaning: "改道、更改航线", usage: "rerouting via the Cape of Good Hope", note: "红海危机的核心词。reroute = 动词，rerouting = 名词/动名词。反义动作是 resume normal routing（恢复正常航线）" },
      { word: "Cape of Good Hope", looksLike: "地理名词", meaning: "好望角（南非南端）", usage: "sail via the Cape of Good Hope", note: "绕道好望角比走苏伊士运河多 10-14 天航行时间，是红海危机期间承运人的替代方案" },
      { word: "escalation", looksLike: "字面能猜", meaning: "升级、加剧", usage: "escalation of attacks", note: "escalate（动词）= 升级、加剧；escalation（名词）。反义是 de-escalation（降级、缓和）" },
      { word: "effectively (副词)", looksLike: "「有效地」", meaning: "实际上、从效果来看（≠ 有效率地）", usage: "effectively removed capacity", note: "高频熟词偏义。in effect / in practice 都可替换此用法" },
      { word: "effective capacity", looksLike: "有效运力？", meaning: "有效运力（实际可供使用的运力）", usage: "effective capacity on the Asia-Europe trade", note: "区别于 nominal capacity（名义运力）。绕道使同样数量的船运力等效减少，所以说 effective capacity 下降" },
      { word: "spot freight rates", looksLike: "字面能猜", meaning: "即期运费（当期市场价格）", usage: "spot freight rates surged", note: "区别于 contract rates（合同运费）。即期运费随供需实时波动，是市场行情的晴雨表" }
    ]
  },

  // ─────────────────────────────────────────────
  //  Unit 6 · 提单条款 · 最高条款（Paramount Clause）
  // ─────────────────────────────────────────────
  {
    id: 6,
    category: "提单条款",
    categoryColor: "#1e40af",
    sentence: "This Bill of Lading shall have effect subject to the provisions of the Hague-Visby Rules as enacted in the country of shipment, and nothing contained in this Bill of Lading shall be deemed a surrender by the Carrier of any of its rights or immunities or an increase of any of its responsibilities or liabilities thereunder.",

    learn: {
      steps: [
        {
          type: "intro",
          text: "这是提单里的 Paramount Clause（最高条款），告诉你这张提单要遵守哪个法律框架。整句分两部分：第一部分说「依据什么法律」，第二部分说「提单本身的表述不能削弱承运人法定权利」。"
        },
        {
          type: "highlight",
          quote: "This Bill of Lading shall have effect subject to the provisions of the Hague-Visby Rules",
          comment: "提单的效力以海牙-维斯比规则为准。subject to = 以……为前提/受……约束。这是整张提单法律基础的声明，告诉货主：你的权益受哪个国际公约保护。"
        },
        {
          type: "normal",
          text: "as enacted in the country of shipment——as enacted = 按照当地已颁布的版本。海牙规则和海牙-维斯比规则在各国的立法版本略有差异，加这一句是为了锁定适用的具体法律版本。"
        },
        {
          type: "signal",
          word: "nothing contained in... shall be deemed",
          text: "nothing...shall be deemed 是否定加强句型，意思是「本文件中的任何内容都不应被视为」。这是合同里的防御性写法，用来堵住可能对承运人不利的解释漏洞。"
        },
        {
          type: "highlight",
          quote: "a surrender by the Carrier of any of its rights or immunities or an increase of any of its responsibilities or liabilities",
          comment: "被 deemed 的内容：「承运人放弃任何权利或豁免，或增加任何责任」。也就是说，提单里的任何条款都不能被解读为承运人在法律之外额外承担了更多责任，或放弃了法律赋予的保护。"
        },
        {
          type: "conclusion",
          text: "thereunder = under those Rules（在前述规则框架下）。整句意思：提单依据海牙-维斯比规则生效，且提单本身的任何措辞都不构成承运人对法定权利的放弃。这是承运人保护自己的「兜底条款」。"
        }
      ]
    },

    review: {
      summary: "提单依据装货国颁布的海牙-维斯比规则生效；提单中的任何内容均不应被视为承运人放弃其法定权利、豁免，或承担额外责任。",
      signalWords: [
        { word: "subject to", role: "依据/约束", meaning: "以……为前提，受……约束" },
        { word: "nothing...shall be deemed", role: "否定加强", meaning: "任何内容都不应被视为（封堵不利解释）" },
        { word: "thereunder", role: "法律指代词", meaning: "在前述规则/法律框架下" }
      ],
      pattern: "[文件] shall have effect subject to [法律], and nothing in [文件] shall be deemed [对权利方不利的解释].",
      patternNote: "提单最高条款的标准结构，绝大多数班轮承运人提单照搬此写法。subject to + 法律名称 是识别「法律依据」的关键信号；thereunder / thereof / therein 是法律文件里的高频指代词。"
    },

    test: [
      {
        question: "subject to the provisions of the Hague-Visby Rules 是什么意思？",
        options: [
          "尽管有海牙-维斯比规则，提单另行规定",
          "以海牙-维斯比规则为准，受其约束",
          "与海牙-维斯比规则具有同等法律效力"
        ],
        answer: 1,
        explanation: "subject to = under the constraint of / in accordance with。见到 subject to + 法律/条款，就知道这里在说「依据/受约束于」某个上位规定。这是提单和合同里最常见的法律依据声明方式。"
      },
      {
        question: "nothing contained in this Bill of Lading shall be deemed 的语气是？",
        options: [
          "建议性语气，建议不要这样理解",
          "强制否定，明确禁止作某种解释",
          "不确定，需视具体情况判断"
        ],
        answer: 1,
        explanation: "shall be deemed 是强制性规定，nothing...shall = 任何……都不得。这是合同防御性写法，用于封堵可能对承运人不利的解释空间，具有法律约束力。"
      },
      {
        question: "thereunder 在这句话里指的是什么？",
        options: [
          "在本提单规定之下",
          "在前面提到的海牙-维斯比规则框架之下",
          "在法院判决之下"
        ],
        answer: 1,
        explanation: "thereunder 是法律文件里的指代词，there = the rules just mentioned，under = under those rules。类似结构还有 thereof（其中）、therein（在其中）、thereto（为此），都是「在前述……之中/之下」，是法律英语的特有表达。"
      }
    ],

    vocabulary: [
      { word: "Paramount Clause", looksLike: "专有名词", meaning: "最高条款（提单）", usage: "Paramount Clause incorporating Hague-Visby Rules", note: "提单的核心条款之一，确立整张提单的法律基础，绝大多数班轮提单必备" },
      { word: "subject to", looksLike: "常见搭配", meaning: "以……为前提，受……约束", usage: "subject to the Rules / subject to approval", note: "高频法律词组，见到就知道「前面的权利/效力受后面约束」" },
      { word: "Hague-Visby Rules", looksLike: "专有名词", meaning: "海牙-维斯比规则", usage: "as enacted in the country of shipment", note: "1968年《海牙规则》的修订版，是目前国际航运最广泛适用的货物运输公约，规定了承运人的责任限制" },
      { word: "deemed", looksLike: "常见词", meaning: "视为、认定为（法律效力）", usage: "shall be deemed a surrender", note: "shall be deemed = 在法律上视为。比 considered 更正式，具有法律约束力" },
      { word: "surrender", looksLike: "投降？交出？", meaning: "放弃（权利）", usage: "surrender of rights / immunity", note: "法律语境里 surrender = 主动放弃某项法定权利，比 waive 更常用于 B/L 条款" },
      { word: "immunity", looksLike: "免疫力？", meaning: "豁免权（法律保护）", usage: "rights or immunities", note: "法律里 immunity = 受法律保护而免于某种责任，如承运人在海牙规则下的责任限额保护" },
      { word: "thereunder", looksLike: "合成词", meaning: "在前述规定/法律框架之下", usage: "liabilities thereunder", note: "法律英语专用指代词，there = 前面提到的规则，under = 在……框架下。类似：thereof/therein/thereto" }
    ]
  },

  // ─────────────────────────────────────────────
  //  Unit 7 · 跟单信用证 · UCP 600 单据审核
  // ─────────────────────────────────────────────
  {
    id: 7,
    category: "跟单信用证",
    categoryColor: "#7e22ce",
    sentence: "A nominated bank acting on its nomination, a confirming bank, if any, and the issuing bank must examine a presentation to determine, on the basis of the documents alone, whether or not the documents appear on their face to constitute a complying presentation, and shall each have a maximum of five banking days following the day of presentation to determine if a presentation is complying.",

    learn: {
      steps: [
        {
          type: "intro",
          text: "这是 UCP 600（跟单信用证统一惯例）第14条的核心，规定银行审单的方式和时限。信用证是国际贸易里的常见付款方式，货代需要帮客户准备单据，这句话说的是「银行怎么审你的单据」。"
        },
        {
          type: "highlight",
          quote: "A nominated bank acting on its nomination, a confirming bank, if any, and the issuing bank",
          comment: "三类银行：①被指定银行（nominated bank，如议付行）；②保兑行（confirming bank，如有）；③开证行（issuing bank）。这三家都要履行同样的审单义务。"
        },
        {
          type: "highlight",
          quote: "must examine a presentation to determine, on the basis of the documents alone",
          comment: "审单的核心原则：on the basis of the documents alone = 仅凭单据本身来判断。银行不管货物实际状况，不管合同条款——只看单据。这就是信用证「独立性原则」的体现。"
        },
        {
          type: "signal",
          word: "whether or not",
          text: "whether or not 引出审单的核心问题：单据在表面上看是否构成「相符交单」（complying presentation）。whether or not 在这里不是「是否」的疑问，而是「无论如何都要判断」的意思——银行必须给出结论。"
        },
        {
          type: "highlight",
          quote: "appear on their face to constitute a complying presentation",
          comment: "on their face = 从表面上看、就单据本身而言。constitute a complying presentation = 构成相符交单。「相符」是信用证付款的前提——单据必须和信用证条款完全一致，差一个字可能就拒付。"
        },
        {
          type: "signal",
          word: "a maximum of five banking days",
          text: "a maximum of five banking days = 最多5个银行工作日。这是审单时限，从收到单据当天的次日开始算。超过5天不给结论，开证行就失去了拒付的权利。"
        },
        {
          type: "conclusion",
          text: "整句的两个关键点：①审单原则——仅凭单据表面，不管实货；②审单时限——最多5个银行工作日。货代帮客户制单时，每一个细节都必须和信用证要求完全一致，否则银行有权在5天内拒付。"
        }
      ]
    },

    review: {
      summary: "被指定银行、保兑行（如有）及开证行须仅凭单据表面审查是否构成相符交单，且必须在收单后最多5个银行工作日内作出判断。",
      signalWords: [
        { word: "on the basis of the documents alone", role: "核心原则", meaning: "仅凭单据本身（独立于货物和合同）" },
        { word: "whether or not", role: "判断义务", meaning: "无论如何都必须判断……（不是疑问，是义务）" },
        { word: "on their face", role: "审核标准", meaning: "从单据表面看（不深入调查背后事实）" },
        { word: "a maximum of five banking days", role: "时限规定", meaning: "最多5个银行工作日（审单的强制时限）" }
      ],
      pattern: "[银行] must examine [单据] on the basis of the documents alone [to determine whether] [单据是否相符], and shall have a maximum of [时限] to determine.",
      patternNote: "UCP 600 审单条款的核心结构。on the basis of...alone 是「仅凭……」的标准表达；on their face 是「从表面看」；a maximum of 是「最多」（上限），不是「至少」。"
    },

    test: [
      {
        question: "on the basis of the documents alone 说明银行审单时：",
        options: [
          "需要核实货物是否真实装船",
          "仅看单据表面，不管实货和销售合同",
          "需要参考买卖双方的贸易往来记录"
        ],
        answer: 1,
        explanation: "这是信用证的「独立性原则」（principle of autonomy）。银行只看单据，不管货物实际状况、质量或买卖合同内容。所以货代制单时必须严格按信用证条款填写，否则即便货物完好，银行也可以凭单据不符而拒付。"
      },
      {
        question: "a complying presentation 是什么？",
        options: [
          "一份完整的单据套（所有单据都已提交）",
          "与信用证条款和 UCP 600 要求完全相符的交单",
          "经买方确认满意的单据"
        ],
        answer: 1,
        explanation: "complying presentation = 相符交单，指提交的所有单据在表面上符合信用证条款、UCP 600 规定及国际银行实务标准（ISBP）。只有相符交单，银行才有义务付款；任何不符点（discrepancy）都可能导致拒付。"
      },
      {
        question: "银行有最多5个银行工作日审单，如果超时不给结论会怎样？",
        options: [
          "可以延长审单期，但需通知申请人",
          "视为接受单据，失去拒付权利",
          "自动拒付并退回单据"
        ],
        answer: 1,
        explanation: "根据 UCP 600 第16条，银行若在5个银行工作日内未发出拒付通知，就无权再以单据不符为由拒付。这个时限是对受益人（出口商）的保护，防止银行无限期拖延审单。"
      }
    ],

    vocabulary: [
      { word: "UCP 600", looksLike: "专有名词", meaning: "跟单信用证统一惯例（第600号）", usage: "subject to UCP 600 / UCP 600 Article 14", note: "国际商会（ICC）制定的信用证国际惯例，全球绝大多数信用证都注明适用 UCP 600，是处理信用证业务的基础规则" },
      { word: "nominated bank", looksLike: "字面能猜", meaning: "被指定银行（信用证上指定的可接受单据的银行）", usage: "acting on its nomination", note: "开证行在信用证上指定的议付行或承兑行。nominated bank acting on its nomination = 按授权行事的被指定银行" },
      { word: "issuing bank", looksLike: "字面能猜", meaning: "开证行（开立信用证的银行）", usage: "the issuing bank must examine", note: "买方（进口商）的银行，负责开立信用证并最终承担付款责任" },
      { word: "on the basis of...alone", looksLike: "组合短语", meaning: "仅凭……（排除其他因素）", usage: "on the basis of the documents alone", note: "信用证独立性原则的文字表达。alone 是重点——强调「只」看单据，不看货物、不看合同" },
      { word: "on their face", looksLike: "字面奇怪", meaning: "从表面上看，就单据本身而言", usage: "appear on their face to constitute", note: "法律/金融文件里的常见表达。on the face of the document = 从单据表面看，不深入调查背后事实" },
      { word: "complying presentation", looksLike: "两词组合", meaning: "相符交单（单据与信用证条款完全一致）", usage: "constitute a complying presentation", note: "信用证核心概念。任何与信用证要求不符的地方（discrepancy = 不符点）都可能导致拒付。制单时一字不差是基本要求" },
      { word: "banking days", looksLike: "字面能猜", meaning: "银行工作日", usage: "five banking days", note: "不同于 calendar days（自然日）或 working days（工作日）。银行工作日 = 银行实际营业的天数，节假日不算" }
    ]
  },

  // ─────────────────────────────────────────────
  //  Unit 8 · 货物保险 · 仓到仓条款
  // ─────────────────────────────────────────────
  {
    id: 8,
    category: "货物保险",
    categoryColor: "#dc2626",
    sentence: "This insurance attaches from the time the goods leave the warehouse or place of storage at the place named in the contract for the commencement of transit and terminates on delivery to the Consignees' or other final warehouse or place of storage at the destination named, or on the expiry of 60 days after completion of discharge of the goods from the oversea vessel at the final port of discharge, whichever shall first occur.",

    learn: {
      steps: [
        {
          type: "intro",
          text: "这是货物保险 ICC（一切险，Institute Cargo Clauses A）里的「仓到仓」条款，规定保险的起止时间。整句核心结构：保险什么时候开始（attaches），什么时候结束（terminates）。"
        },
        {
          type: "highlight",
          quote: "This insurance attaches from the time the goods leave the warehouse",
          comment: "attaches = 保险开始生效，这是保险专用词。保险从货物离开发货仓库的那一刻起生效。不是签合同时生效，而是货物实际移动时生效。"
        },
        {
          type: "normal",
          text: "at the place named in the contract for the commencement of transit——在合同指定的起运地点。commencement of transit = 运输开始，这是法律语言里「出发」的正式说法。"
        },
        {
          type: "highlight",
          quote: "terminates on delivery to the Consignees' or other final warehouse or place of storage at the destination named",
          comment: "保险在货物交付到收货人最终仓库时终止（terminates）。注意：是交付到仓库，不是货物到达港口。"
        },
        {
          type: "normal",
          text: "or on the expiry of 60 days after completion of discharge of the goods from the oversea vessel——或者，在货物从远洋船上卸完后第60天到期。这是第二个终止条件，给了货主60天的缓冲期。"
        },
        {
          type: "signal",
          word: "whichever shall first occur",
          text: "whichever shall first occur = 以先发生者为准。两个终止条件（交付到仓库 OR 卸货后60天），哪个先触发就哪个算。这是保险、合同里处理多个可能触发点的经典写法。"
        },
        {
          type: "conclusion",
          text: "60天缓冲的意义：货物卸船后可能存放在港口或海关仓，不一定立刻进入收货人仓库。这60天确保「过渡期」内货物依然有保险覆盖，是对货主的保护。"
        }
      ]
    },

    review: {
      summary: "货物保险从货物离开起运仓库时生效，在交付目的地仓库或卸货完成后60天（以先发生者为准）时终止。",
      signalWords: [
        { word: "attaches", role: "保险专用词", meaning: "保险开始生效（区别于 commences）" },
        { word: "terminates", role: "终止信号", meaning: "保险终止、到期失效" },
        { word: "whichever shall first occur", role: "择一条件", meaning: "以先发生者为准（多个触发点取最先触发的）" }
      ],
      pattern: "Insurance attaches from [起点] and terminates on [条件A] or [条件B], whichever shall first occur.",
      patternNote: "ICC 仓到仓条款的标准结构，广泛应用于货物保险实务。whichever shall first occur 是保险和合同里处理多个可能终止点的标准写法。"
    },

    test: [
      {
        question: "attaches 在保险语境里是什么意思？",
        options: [
          "附加险种（扩展保险范围）",
          "保险开始生效",
          "附上单据（insurance certificate）"
        ],
        answer: 1,
        explanation: "insurance attaches = 保险生效，这是保险行业的专业用词，不能用普通的 starts 或 begins 替换。反义词是 terminates（终止）或 ceases（停止）。见到 attaches 就要想到「保险在这一时刻开始保障」。"
      },
      {
        question: "whichever shall first occur 的含义是？",
        options: [
          "不管哪个条件发生，两个都适用",
          "两个条件中，哪个先触发就按哪个算",
          "只有两个条件同时发生才终止保险"
        ],
        answer: 1,
        explanation: "whichever = 无论哪一个。shall first occur 说明取「先发生的那个」。这个结构常见于保险、租约、合同，用于处理多个可能触发点时取最先发生者。"
      },
      {
        question: "为什么要有「卸货后60天」这个终止条件？",
        options: [
          "限制保险公司的理赔期，避免无限期责任",
          "保护货主：货物卸船后入库前若有损失，保险依然覆盖",
          "给承运人留出处理货损索赔的时间"
        ],
        answer: 1,
        explanation: "货物卸船后可能在港口、海关仓滞留，无法立即入库。如果保险在卸船后立刻终止，这段「过渡期」内的损失就没有保险保障。60天缓冲期确保货主利益，是仓到仓条款的人性化设计。"
      }
    ],

    vocabulary: [
      { word: "attaches (保险)", looksLike: "附上？贴上？", meaning: "（保险）开始生效", usage: "insurance attaches from the time…", note: "保险专用词，不可用 starts 替代。反义：terminates（终止）" },
      { word: "commencement of transit", looksLike: "字面能猜", meaning: "运输开始（正式用语）", usage: "at the place named for the commencement of transit", note: "commencement = 开始（正式/法律用语），比 start/beginning 更正式" },
      { word: "Consignee", looksLike: "专有名词", meaning: "收货人（提单上指定的最终收货方）", usage: "delivery to the Consignees' warehouse", note: "区别于 Shipper（托运人/发货人）。Consignee 是提单上收货方，有时与 Notify Party（通知方）不同" },
      { word: "expiry", looksLike: "字面能猜", meaning: "到期、期满", usage: "on the expiry of 60 days", note: "expiry = 到期（名词），expire = 到期（动词）。常见于保险、合同有效期表述" },
      { word: "discharge (货物)", looksLike: "排放？解除？", meaning: "卸货（将货物从船上卸下）", usage: "completion of discharge from the oversea vessel", note: "注意区分：discharge cargo = 卸货；discharge污水 = 排放；discharge from contract = 解除合同义务" },
      { word: "whichever shall first occur", looksLike: "组合短语", meaning: "以先发生者为准", usage: "on [A] or [B], whichever shall first occur", note: "保险/合同高频结构，处理多个可能触发点时取最早发生者。也可见 whichever is the earlier/later" }
    ]
  },

  // ─────────────────────────────────────────────
  //  Unit 9 · 行业资讯 · 空班与港口拥堵的悖论
  // ─────────────────────────────────────────────
  {
    id: 9,
    category: "行业资讯",
    categoryColor: "#7c3aed",
    sentence: "Blank sailings deployed by the major alliances in response to weakening spot demand have paradoxically contributed to port congestion at key transhipment hubs, as vessels operating on reduced schedules arrive with consistently higher load factors, creating terminal handling bottlenecks that can take weeks to clear even as overall trade volumes remain subdued.",

    learn: {
      steps: [
        {
          type: "intro",
          text: "这句话揭示了一个反直觉的现象：减少班次（空班）本是为了应对需求下滑，结果反而造成了港口拥堵。先找主干，再理解这个「悖论」是怎么形成的。"
        },
        {
          type: "highlight",
          quote: "Blank sailings deployed by the major alliances in response to weakening spot demand",
          comment: "主语：大型联盟针对即期需求下滑而部署的空班。核心词是 blank sailings（空班，即取消某班期的航次）。主语很长，别被里面的词绊住。"
        },
        {
          type: "highlight",
          quote: "have paradoxically contributed to port congestion at key transhipment hubs",
          comment: "谓语：「出人意料地」造成了枢纽港拥堵。paradoxically = 反常地、矛盾地，直接点出这个结论和直觉相反——这就是这句话最值得关注的地方。"
        },
        {
          type: "signal",
          word: "as",
          text: "as 在这里引出原因：as vessels operating on reduced schedules arrive with consistently higher load factors——因为班次减少了，还在运营的船平均装载率更高（货量集中到更少的船上），每艘船到港处理的货量变大了。"
        },
        {
          type: "normal",
          text: "creating terminal handling bottlenecks——现在分词 creating 接着说进一步结果：造成了码头操作瓶颈。这种「主句, 分词+结果」的写法在行业报道里极其常见。"
        },
        {
          type: "signal",
          word: "even as",
          text: "even as overall trade volumes remain subdued——even as 是对比信号：即使整体贸易量依然低迷，港口还是堵了。「货少了，港口反而堵了」——这就是悖论所在，even as 把这个矛盾点出来了。"
        },
        {
          type: "conclusion",
          text: "完整逻辑链：空班（减少班次）→ 在运营的船装载率更高 → 每次到港需处理货量更大 → 港口出现操作瓶颈（despite 整体货量低迷）。这是供应链里「结构性拥堵」的典型成因。"
        }
      ]
    },

    review: {
      summary: "大联盟削减班次（空班）反而导致了枢纽港拥堵，因为在运营的船装载率更高，每次到港形成码头瓶颈——即使整体贸易量依然低迷，这一矛盾现象依然存在。",
      signalWords: [
        { word: "paradoxically", role: "反直觉标志", meaning: "反常地/矛盾地（结论与直觉相反）" },
        { word: "as", role: "原因从句", meaning: "因为/由于（解释机制）" },
        { word: "creating (分词)", role: "结果衔接", meaning: "从而造成（接连锁结果）" },
        { word: "even as", role: "对比信号", meaning: "即使/就在此时（点出矛盾对比）" }
      ],
      pattern: "[行动] have paradoxically [反效果], as [原因机制], creating [连锁结果] even as [对比情况].",
      patternNote: "揭示「反直觉」结论的行业分析句型。见到 paradoxically 就准备接受一个颠覆预期的结论；as 解释为什么会这样；even as 加强矛盾感。"
    },

    test: [
      {
        question: "paradoxically 说明了什么？",
        options: [
          "这是一个复杂的、多因素的问题",
          "结论与直觉或常理预期相反",
          "这是一个有争议的、尚无定论的说法"
        ],
        answer: 1,
        explanation: "paradoxically = in a seemingly contradictory way（以矛盾的方式）。见到它就知道作者要说的结论和「常识」相反。这句话里常识预期是「减少班次应该缓解拥堵」，但结论是「反而加剧了拥堵」——这是 paradox（悖论）。"
      },
      {
        question: "as vessels...arrive with consistently higher load factors 里，as 的作用是？",
        options: [
          "时间从句（当……时候）",
          "原因从句（因为/由于）",
          "比较（就像……一样）"
        ],
        answer: 1,
        explanation: "as 在这里引出原因。判断 as 是「时间」还是「原因」：看前后的逻辑关系——空班导致拥堵，解释是（as）在运营的船装载率高。这是 as 表原因的典型用法，相当于 because / since。"
      },
      {
        question: "subdued 在 trade volumes remain subdued 里是什么意思？",
        options: [
          "安静的、被压制的（情绪/声音）",
          "低迷的、疲软的（经济/市场状态）",
          "被控制的、受约束的"
        ],
        answer: 1,
        explanation: "subdued 在经济/行业语境里指「低迷、不活跃」，如 subdued demand = 需求疲软，subdued market = 市场低迷。这是典型的熟词偏义——日常英语里形容情绪/声音，行业报道里形容市场状态。"
      }
    ],

    vocabulary: [
      { word: "blank sailing", looksLike: "空白的航行？", meaning: "空班（取消某班期的航次）", usage: "deploy blank sailings / blank sailing announced", note: "承运人削减运力供给的主要手段，通常在市场需求下滑时宣布。一次空班相当于取消一个固定班期的航次" },
      { word: "paradoxically", looksLike: "不常见词", meaning: "反常地、矛盾地", usage: "paradoxically contributed to congestion", note: "副词，来自 paradox（悖论）。见到它就准备接受一个反直觉的结论，是行业分析文章的高频词" },
      { word: "transhipment hub", looksLike: "字面能猜", meaning: "转运枢纽港", usage: "key transhipment hubs in Asia", note: "如新加坡、科伦坡、丹吉尔，货物在此中转换船继续运往最终目的地" },
      { word: "load factor", looksLike: "字面能猜", meaning: "装载率（实际载货量/舱位容量）", usage: "higher load factors / utilization rate", note: "班次减少但货量总体不变，导致每艘船的 load factor 上升。类似航空业的座位利用率" },
      { word: "bottleneck", looksLike: "瓶颈（字面就是）", meaning: "瓶颈、制约点", usage: "terminal handling bottlenecks", note: "供应链和运营管理里最常用的词之一，指整个系统中速度最慢、制约整体效率的环节" },
      { word: "subdued", looksLike: "被压制？", meaning: "低迷的、疲软的（经济/市场）", usage: "subdued demand / subdued volumes", note: "行业报道高频词，形容市场低迷状态。常见搭配：subdued demand、subdued growth、subdued sentiment" },
      { word: "even as", looksLike: "even if？", meaning: "即使/就在此时（引出对比）", usage: "even as volumes remain low", note: "不是「即使」（even if）！引出「与此同时存在的相反情况」，强化矛盾感。行业分析文章常用结构" }
    ]
  },

  // ─────────────────────────────────────────────
  //  Unit 10 · 国际公约 · MARPOL 排污禁止条款
  // ─────────────────────────────────────────────
  {
    id: 10,
    category: "国际公约",
    categoryColor: "#0f766e",
    sentence: "The discharge into the sea of oil or oily mixtures from ships to which this Annex applies shall be prohibited, irrespective of the ship's position or the nature of the cargo carried, unless the discharge is made in compliance with the conditions prescribed in Regulation 15 and the ship is proceeding en route at a speed of not less than seven knots.",

    learn: {
      steps: [
        {
          type: "intro",
          text: "这是 MARPOL（国际防止船舶造成污染公约）附件一的核心条款，规定向海洋排放油类的禁止原则和例外条件。结构和Unit 1很像：「禁止」+ unless 引出「例外条件」。"
        },
        {
          type: "highlight",
          quote: "The discharge into the sea of oil or oily mixtures from ships... shall be prohibited",
          comment: "这是主干：向海洋排放油或含油混合物，禁止。shall be prohibited = 强制性禁止，不是建议。这是整个防污染法规的基础原则。"
        },
        {
          type: "normal",
          text: "to which this Annex applies——限定语：适用本附件的船舶。这是法规里常见的「适用范围」界定，先说清楚这条约束谁。"
        },
        {
          type: "signal",
          word: "irrespective of",
          text: "irrespective of = 不管/无论。这里说：不管船在哪里（位置），不管船上载的是什么货，禁止就是禁止。irrespective of 比 regardless of 更正式，常见于法规和国际公约，强调「某因素的存在完全不影响这个规定」。"
        },
        {
          type: "signal",
          word: "unless",
          text: "unless 出现——例外来了。什么情况下排放被允许？需要同时满足两个条件：①符合第15条规定的技术条件；②船舶正在航行途中（en route），速度不低于7节。"
        },
        {
          type: "highlight",
          quote: "the ship is proceeding en route at a speed of not less than seven knots",
          comment: "en route 是法语来源，航运里常用，意思是「在航行途中」（区别于停泊/锚泊状态）。7节的速度要求是为了让排放物能被充分稀释和扩散，减少对局部海域的污染。"
        },
        {
          type: "conclusion",
          text: "整体结构：全面禁止（irrespective of 强调无例外）→ unless 给出唯一的合规排放出口（技术达标 + 在航行中 + 速度≥7节）。三个条件缺一不可，这是 MARPOL 附件一的核心合规要求。"
        }
      ]
    },

    review: {
      summary: "不论船舶位置或所载货物种类，向海洋排放油类或含油混合物均被禁止——除非排放符合第15条规定的技术条件，且船舶正以不低于7节的速度在途航行。",
      signalWords: [
        { word: "irrespective of", role: "全面排除", meaning: "不管/无论（某因素），强调无例外" },
        { word: "unless", role: "例外信号", meaning: "除非（引出唯一合规出口）" },
        { word: "in compliance with", role: "合规表达", meaning: "符合/遵照（某规定/条款）" }
      ],
      pattern: "[行为] shall be prohibited, irrespective of [因素], unless [条件A] and [条件B].",
      patternNote: "MARPOL、SOLAS 等国际公约常见的「全面禁止 + 例外」结构。irrespective of 强调绝对禁止；unless 给出合规排放的条件出口；in compliance with 是合规语境的标准表达。"
    },

    test: [
      {
        question: "irrespective of 在这句话里是什么意思？",
        options: [
          "关于……方面",
          "不管……如何，无论如何（某因素不影响禁止令）",
          "尽管……（让步，类似 although）"
        ],
        answer: 1,
        explanation: "irrespective of = regardless of，表示「不论某因素是否存在/是什么情况」。合同和法规里比 regardless of 更常用，强调「这个因素的存在完全不影响禁止令」。这句话里：不管船在哪、载什么货，禁止就是禁止。"
      },
      {
        question: "in compliance with the conditions prescribed in Regulation 15 是什么意思？",
        options: [
          "按照第15条规定的条件（合规排放）",
          "在第15条允许的海域范围内",
          "经过第15条规定的机构审批后"
        ],
        answer: 0,
        explanation: "in compliance with = in accordance with = 遵照/符合。compliance（合规）是航运和法律语境最高频词之一。prescribed = 规定的（法规用词，比 stipulated / stated 更正式）。"
      },
      {
        question: "en route 在这句话里是什么意思？",
        options: [
          "在港内靠泊状态",
          "在航行途中（区别于停泊/锚泊状态）",
          "在专属经济区内"
        ],
        answer: 1,
        explanation: "en route（源自法语）= 在途/在航行中，指船舶正在行驶（非锚泊、靠泊状态）。MARPOL 要求排放时船舶必须 en route 且速度≥7节，是为了确保排放物被充分稀释扩散，避免对局部海域造成集中污染。"
      }
    ],

    vocabulary: [
      { word: "MARPOL", looksLike: "缩写", meaning: "国际防止船舶造成污染公约", usage: "MARPOL Annex I / MARPOL compliance", note: "MARine POLlution，1973年通过、1978年修订。附件I管油污，附件VI管大气污染（包括硫排放限制）" },
      { word: "discharge (污染)", looksLike: "卸货？排放？", meaning: "排放（污水/废气等）", usage: "discharge into the sea / discharge of oil", note: "注意区分：discharge cargo = 卸货；discharge oily water = 排放含油污水。同词不同义，看语境" },
      { word: "irrespective of", looksLike: "看着复杂", meaning: "不管/无论（某因素），法规高频词", usage: "irrespective of position or cargo", note: "比 regardless of 更正式，常见于国际公约和法规，强调「任何情况下」均适用" },
      { word: "in compliance with", looksLike: "组合短语", meaning: "符合/遵照（规定/条款）", usage: "in compliance with Regulation 15", note: "合规的标准表达。compliance（名词）是航运、金融、法律行业最高频的词之一。反义：non-compliance（不合规）" },
      { word: "prescribed", looksLike: "开处方？", meaning: "（法规/合同）规定的", usage: "conditions prescribed in Regulation 15", note: "法规用词，比 stated/stipulated 更正式。prescribed by law = 法律规定的" },
      { word: "en route", looksLike: "法语？", meaning: "在航行途中（非停泊状态）", usage: "proceeding en route at 7 knots", note: "法语来源，已成航运英语标准词汇。区分：at anchor（锚泊）、alongside（靠泊）、en route（在途航行）" },
      { word: "not less than", looksLike: "字面能懂", meaning: "不低于（≥）", usage: "not less than seven knots", note: "法规里比 at least 更常用，逻辑更严密。not less than 7 = ≥7，不能是6.9" }
    ]
  }
];
