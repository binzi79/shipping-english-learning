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
  }
];
