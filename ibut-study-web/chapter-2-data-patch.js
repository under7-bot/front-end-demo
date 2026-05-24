// 第2章「インターネットでの被害」数据补丁文件。
// 本文件只用于人工检查，确认后再合并到 content-data.js。

const chapter2StudySections = [
  {
    id: "sec-2-1",
    chapter: "第2章 インターネットでの被害",
    title: "インターネットは、具体的にどんな被害をもたらすのか",
    category: "被害",
    goal: "理解互联网可能带来的金钱、信息、名誉和健康方面的被害。",
    jpKeywords: ["被害", "金銭的被害", "個人情報", "なりすまし", "誹謗中傷"],
    explanation: "互联网被害包括被骗钱、个人信息泄露、被冒充、被恶意攻击等。",
    scenario: "账号被盗后，他人用自己的名字发布不当内容。",
    examHints: ["お金をだまし取られる", "ID・パスワードが盗まれる", "SNSで悪口を書かれる"],
    confusion: "金銭的被害是钱的损失，情報流出是信息泄露。",
    summary: "お金・情報・名誉・健康に注意"
  },
  {
    id: "sec-2-2",
    chapter: "第2章 インターネットでの被害",
    title: "フィッシング詐欺",
    category: "被害",
    goal: "理解フィッシング詐欺的典型场景、考试题眼和防范方法。",
    jpKeywords: ["フィッシング詐欺", "偽サイト", "ID", "パスワード"],
    explanation: "假装成银行、购物网站或信用卡公司，引导用户进入假网站并输入账号密码。",
    scenario: "「本人確認が必要です」「至急ログインしてください」というメールが届く。",
    examHints: ["偽サイト", "ID・パスワード", "銀行を装う"],
    confusion: "フィッシング是偷信息，ワンクリック詐欺是点击后要求付款。",
    summary: "偽サイトで盗む → フィッシング"
  },
  {
    id: "sec-2-3",
    chapter: "第2章 インターネットでの被害",
    title: "ワンクリック詐欺",
    category: "被害",
    goal: "理解点击后显示注册完成和料金請求的诈骗方式。",
    jpKeywords: ["ワンクリック詐欺", "登録完了", "料金請求", "架空請求"],
    explanation: "点击链接后突然显示已经注册，并要求支付不存在的费用。",
    scenario: "页面显示「登録が完了しました。料金を支払ってください」。",
    examHints: ["クリック", "登録完了", "料金請求"],
    confusion: "架空請求是不该付的虚假账单，ワンクリック詐欺常以点击为入口。",
    summary: "クリック後に請求 → ワンクリック"
  },
  {
    id: "sec-2-4",
    chapter: "第2章 インターネットでの被害",
    title: "詐欺、犯罪に巻き込まれないために",
    category: "被害",
    goal: "掌握遇到可疑请求时的正确处理方式。",
    jpKeywords: ["相談する", "支払わない", "連絡しない", "削除する"],
    explanation: "遇到可疑收费、中奖、账号确认等信息时，不付款、不联系、不输入个人信息，并向可信的人或机构咨询。",
    scenario: "收到陌生收费短信时，先截图保存并咨询家人、老师或官方窗口。",
    examHints: ["支払わない", "連絡しない", "相談する"],
    confusion: "不要按对方给出的联系方式确认，应使用官方渠道确认。",
    summary: "払わない・連絡しない・相談する"
  },
  {
    id: "sec-2-5",
    chapter: "第2章 インターネットでの被害",
    title: "インターネットに関連した新たな詐欺の被害例",
    category: "被害",
    goal: "理解サポート詐欺、偽通販サイト、投資詐欺、ロマンス詐欺等新型诈骗。",
    jpKeywords: ["サポート詐欺", "偽通販サイト", "投資詐欺", "ロマンス詐欺", "QRコード詐欺"],
    explanation: "新型诈骗常利用假警告、超低价商品、必赚投资、恋爱感情或二维码诱导用户付款或输入信息。",
    scenario: "电脑画面出现「ウイルス感染」と假警告，并要求打电话。",
    examHints: ["偽警告", "遠隔操作ソフト", "必ず儲かる", "恋愛感情"],
    confusion: "サポート詐欺是假客服，偽通販サイト是假购物网站。",
    summary: "うますぎる話と偽警告に注意"
  },
  {
    id: "sec-2-6",
    chapter: "第2章 インターネットでの被害",
    title: "迷惑メール、チェーンメール",
    category: "被害",
    goal: "区分迷惑メール和チェーンメール，并理解正确处理方式。",
    jpKeywords: ["迷惑メール", "チェーンメール", "転送する", "削除する"],
    explanation: "迷惑メール是不需要的广告、诈骗或带病毒邮件。チェーンメール要求继续转发，容易造成混乱。",
    scenario: "邮件写着「このメールを10人に送ってください」。",
    examHints: ["広告・詐欺・ウイルス付きメール", "このメールを○人に送って"],
    confusion: "迷惑メール重点是不需要和危险，チェーンメール重点是要求转发。",
    summary: "怪しいメールは開かない・転送しない"
  },
  {
    id: "sec-2-7",
    chapter: "第2章 インターネットでの被害",
    title: "健康面への影響",
    category: "被害",
    goal: "理解过度使用互联网对睡眠、眼睛、身体和心理的影响。",
    jpKeywords: ["ネット依存", "睡眠不足", "目の疲れ", "肩こり", "ストレス"],
    explanation: "长时间使用网络可能导致睡眠不足、眼疲劳、肩颈酸痛、压力和网络依赖。",
    scenario: "夜遅くまでスマホを使い、次の日に眠くなる。",
    examHints: ["夜遅くまでスマホ", "やめたいのにやめられない", "SNSで比較して不安"],
    confusion: "健康面への影響不仅是身体问题，也包括心理压力和依赖。",
    summary: "使いすぎは体と心に影響"
  }
];

const chapter2Terms = [
  {
    id: "term-2-damage",
    sectionId: "sec-2-1",
    chapter: "第2章 インターネットでの被害",
    jp: "被害",
    reading: "ひがい",
    zh: "受害、损害",
    en: "damage or harm",
    hint: "ネットで受ける損害"
  },
  {
    id: "term-2-financial-damage",
    sectionId: "sec-2-1",
    chapter: "第2章 インターネットでの被害",
    jp: "金銭的被害",
    reading: "きんせんてきひがい",
    zh: "金钱损失",
    en: "financial damage",
    hint: "お金をだまし取られる"
  },
  {
    id: "term-2-personal-information",
    sectionId: "sec-2-1",
    chapter: "第2章 インターネットでの被害",
    jp: "個人情報",
    reading: "こじんじょうほう",
    zh: "个人信息",
    en: "personal information",
    hint: "氏名、住所、IDなど"
  },
  {
    id: "term-2-information-leakage",
    sectionId: "sec-2-1",
    chapter: "第2章 インターネットでの被害",
    jp: "情報流出",
    reading: "じょうほうりゅうしゅつ",
    zh: "信息泄露",
    en: "information leakage",
    hint: "情報が外に出る"
  },
  {
    id: "term-2-impersonation",
    sectionId: "sec-2-1",
    chapter: "第2章 インターネットでの被害",
    jp: "なりすまし",
    reading: "なりすまし",
    zh: "冒充",
    en: "impersonation",
    hint: "他人の名前で行動"
  },
  {
    id: "term-2-defamation",
    sectionId: "sec-2-1",
    chapter: "第2章 インターネットでの被害",
    jp: "誹謗中傷",
    reading: "ひぼうちゅうしょう",
    zh: "诽谤中伤",
    en: "defamation or abuse",
    hint: "SNSで悪口を書く"
  },
  {
    id: "term-2-phishing",
    sectionId: "sec-2-2",
    chapter: "第2章 インターネットでの被害",
    jp: "フィッシング詐欺",
    reading: "フィッシングさぎ",
    zh: "钓鱼诈骗",
    en: "phishing",
    hint: "偽サイト、ID、パスワード"
  },
  {
    id: "term-2-fake-website",
    sectionId: "sec-2-2",
    chapter: "第2章 インターネットでの被害",
    jp: "偽サイト",
    reading: "にせサイト",
    zh: "假网站",
    en: "fake website",
    hint: "本物に似せたサイト"
  },
  {
    id: "term-2-one-click-fraud",
    sectionId: "sec-2-3",
    chapter: "第2章 インターネットでの被害",
    jp: "ワンクリック詐欺",
    reading: "ワンクリックさぎ",
    zh: "一键点击诈骗",
    en: "one-click fraud",
    hint: "クリック、登録完了、料金請求"
  },
  {
    id: "term-2-fictitious-billing",
    sectionId: "sec-2-3",
    chapter: "第2章 インターネットでの被害",
    jp: "架空請求",
    reading: "かくうせいきゅう",
    zh: "虚假账单",
    en: "fictitious billing",
    hint: "使っていないのに請求"
  },
  {
    id: "term-2-support-scam",
    sectionId: "sec-2-5",
    chapter: "第2章 インターネットでの被害",
    jp: "サポート詐欺",
    reading: "サポートさぎ",
    zh: "假客服诈骗",
    en: "tech support scam",
    hint: "ウイルス感染、電話してください"
  },
  {
    id: "term-2-fake-warning",
    sectionId: "sec-2-5",
    chapter: "第2章 インターネットでの被害",
    jp: "偽警告",
    reading: "にせけいこく",
    zh: "假警告",
    en: "fake warning",
    hint: "画面に出る偽の警告"
  },
  {
    id: "term-2-remote-access-software",
    sectionId: "sec-2-5",
    chapter: "第2章 インターネットでの被害",
    jp: "遠隔操作ソフト",
    reading: "えんかくそうさソフト",
    zh: "远程控制软件",
    en: "remote access software",
    hint: "他人が端末を操作する"
  },
  {
    id: "term-2-fake-shopping-site",
    sectionId: "sec-2-5",
    chapter: "第2章 インターネットでの被害",
    jp: "偽通販サイト",
    reading: "にせつうはんサイト",
    zh: "假网购网站",
    en: "fake shopping site",
    hint: "商品が届かない"
  },
  {
    id: "term-2-investment-scam",
    sectionId: "sec-2-5",
    chapter: "第2章 インターネットでの被害",
    jp: "投資詐欺",
    reading: "とうしさぎ",
    zh: "投资诈骗",
    en: "investment scam",
    hint: "必ず儲かる"
  },
  {
    id: "term-2-romance-scam",
    sectionId: "sec-2-5",
    chapter: "第2章 インターネットでの被害",
    jp: "ロマンス詐欺",
    reading: "ロマンスさぎ",
    zh: "情感诈骗",
    en: "romance scam",
    hint: "恋愛感情、送金"
  },
  {
    id: "term-2-qr-code-scam",
    sectionId: "sec-2-5",
    chapter: "第2章 インターネットでの被害",
    jp: "QRコード詐欺",
    reading: "キューアールコードさぎ",
    zh: "二维码诈骗",
    en: "QR code scam",
    hint: "QRコード、偽サイト"
  },
  {
    id: "term-2-spam-mail",
    sectionId: "sec-2-6",
    chapter: "第2章 インターネットでの被害",
    jp: "迷惑メール",
    reading: "めいわくメール",
    zh: "垃圾邮件",
    en: "spam mail",
    hint: "広告、詐欺、ウイルス付き"
  },
  {
    id: "term-2-chain-mail",
    sectionId: "sec-2-6",
    chapter: "第2章 インターネットでの被害",
    jp: "チェーンメール",
    reading: "チェーンメール",
    zh: "连锁转发邮件",
    en: "chain mail",
    hint: "このメールを○人に送って"
  },
  {
    id: "term-2-forward",
    sectionId: "sec-2-6",
    chapter: "第2章 インターネットでの被害",
    jp: "転送する",
    reading: "てんそうする",
    zh: "转发",
    en: "forward",
    hint: "メールを他人に送る"
  },
  {
    id: "term-2-delete",
    sectionId: "sec-2-6",
    chapter: "第2章 インターネットでの被害",
    jp: "削除する",
    reading: "さくじょする",
    zh: "删除",
    en: "delete",
    hint: "怪しいメールを消す"
  },
  {
    id: "term-2-internet-addiction",
    sectionId: "sec-2-7",
    chapter: "第2章 インターネットでの被害",
    jp: "ネット依存",
    reading: "ネットいぞん",
    zh: "网络依赖",
    en: "internet addiction",
    hint: "やめたいのにやめられない"
  },
  {
    id: "term-2-lack-of-sleep",
    sectionId: "sec-2-7",
    chapter: "第2章 インターネットでの被害",
    jp: "睡眠不足",
    reading: "すいみんぶそく",
    zh: "睡眠不足",
    en: "lack of sleep",
    hint: "夜遅くまでスマホ"
  },
  {
    id: "term-2-eye-strain",
    sectionId: "sec-2-7",
    chapter: "第2章 インターネットでの被害",
    jp: "目の疲れ",
    reading: "めのつかれ",
    zh: "眼疲劳",
    en: "eye strain",
    hint: "長時間画面を見る"
  },
  {
    id: "term-2-stiff-shoulders",
    sectionId: "sec-2-7",
    chapter: "第2章 インターネットでの被害",
    jp: "肩こり",
    reading: "かたこり",
    zh: "肩颈酸痛",
    en: "stiff shoulders",
    hint: "同じ姿勢が続く"
  },
  {
    id: "term-2-stress",
    sectionId: "sec-2-7",
    chapter: "第2章 インターネットでの被害",
    jp: "ストレス",
    reading: "ストレス",
    zh: "压力",
    en: "stress",
    hint: "SNSで比較して不安"
  },
  {
    id: "term-2-consult",
    sectionId: "sec-2-4",
    chapter: "第2章 インターネットでの被害",
    jp: "相談する",
    reading: "そうだんする",
    zh: "咨询",
    en: "consult",
    hint: "一人で判断しない"
  },
  {
    id: "term-2-do-not-pay",
    sectionId: "sec-2-4",
    chapter: "第2章 インターネットでの被害",
    jp: "支払わない",
    reading: "しはらわない",
    zh: "不付款",
    en: "do not pay",
    hint: "怪しい請求に払わない"
  },
  {
    id: "term-2-do-not-contact",
    sectionId: "sec-2-4",
    chapter: "第2章 インターネットでの被害",
    jp: "連絡しない",
    reading: "れんらくしない",
    zh: "不联系",
    en: "do not contact",
    hint: "相手に電話しない"
  }
];

const chapter2ExamHints = [
  {
    id: "hint-2-01",
    chapter: "第2章 インターネットでの被害",
    keyword: "お金をだまし取られる",
    answer: "金銭的被害",
    note: "网络诈骗可能直接造成钱财损失。"
  },
  {
    id: "hint-2-02",
    chapter: "第2章 インターネットでの被害",
    keyword: "ID・パスワードが盗まれる",
    answer: "個人情報流出 / フィッシング",
    note: "账号密码被盗通常和个人信息泄露、钓鱼诈骗有关。"
  },
  {
    id: "hint-2-03",
    chapter: "第2章 インターネットでの被害",
    keyword: "他人の名前で投稿される",
    answer: "なりすまし",
    note: "冒充他人身份发布信息。"
  },
  {
    id: "hint-2-04",
    chapter: "第2章 インターネットでの被害",
    keyword: "SNSで悪口を書かれる",
    answer: "誹謗中傷",
    note: "在网上写恶意攻击内容会损害他人名誉。"
  },
  {
    id: "hint-2-05",
    chapter: "第2章 インターネットでの被害",
    keyword: "添付ファイルを開いて感染",
    answer: "ウイルス感染",
    note: "打开可疑附件可能导致电脑感染恶意软件。"
  },
  {
    id: "hint-2-06",
    chapter: "第2章 インターネットでの被害",
    keyword: "偽サイト、ID、パスワード",
    answer: "フィッシング詐欺",
    note: "假网站诱导输入账号和密码。"
  },
  {
    id: "hint-2-07",
    chapter: "第2章 インターネットでの被害",
    keyword: "クリック、登録完了、料金請求",
    answer: "ワンクリック詐欺",
    note: "点击后突然要求付款。"
  },
  {
    id: "hint-2-08",
    chapter: "第2章 インターネットでの被害",
    keyword: "使用していないのに請求",
    answer: "架空請求詐欺",
    note: "没有使用服务却被要求付费。"
  },
  {
    id: "hint-2-09",
    chapter: "第2章 インターネットでの被害",
    keyword: "ウイルス感染、電話してください",
    answer: "サポート詐欺",
    note: "假警告诱导用户联系假客服。"
  },
  {
    id: "hint-2-10",
    chapter: "第2章 インターネットでの被害",
    keyword: "遠隔操作ソフトを入れさせる",
    answer: "サポート詐欺",
    note: "让用户安装远程控制软件是常见手法。"
  },
  {
    id: "hint-2-11",
    chapter: "第2章 インターネットでの被害",
    keyword: "商品が届かない、極端に安い",
    answer: "偽通販サイト",
    note: "假网购网站常用超低价吸引付款。"
  },
  {
    id: "hint-2-12",
    chapter: "第2章 インターネットでの被害",
    keyword: "必ず儲かる、暗号資産、投資",
    answer: "投資詐欺",
    note: "承诺稳赚的投资信息要警惕。"
  },
  {
    id: "hint-2-13",
    chapter: "第2章 インターネットでの被害",
    keyword: "恋愛感情、送金",
    answer: "ロマンス詐欺",
    note: "利用恋爱感情骗取金钱。"
  },
  {
    id: "hint-2-14",
    chapter: "第2章 インターネットでの被害",
    keyword: "QRコード、偽サイト",
    answer: "QRコード詐欺",
    note: "二维码可能把用户带到假网站。"
  },
  {
    id: "hint-2-15",
    chapter: "第2章 インターネットでの被害",
    keyword: "家族・友人・官公庁を装う",
    answer: "なりすまし詐欺",
    note: "假装成可信身份诱导转账或输入信息。"
  },
  {
    id: "hint-2-16",
    chapter: "第2章 インターネットでの被害",
    keyword: "このメールを○人に送って",
    answer: "チェーンメール",
    note: "要求继续转发的邮件。"
  },
  {
    id: "hint-2-17",
    chapter: "第2章 インターネットでの被害",
    keyword: "広告・詐欺・ウイルス付きメール",
    answer: "迷惑メール",
    note: "不需要且可能危险的邮件。"
  },
  {
    id: "hint-2-18",
    chapter: "第2章 インターネットでの被害",
    keyword: "夜遅くまでスマホを使い睡眠不足",
    answer: "健康面への影響",
    note: "过度使用手机会影响睡眠。"
  },
  {
    id: "hint-2-19",
    chapter: "第2章 インターネットでの被害",
    keyword: "やめたいのにやめられない",
    answer: "ネット依存",
    note: "想停止却停不下来是依赖的题眼。"
  },
  {
    id: "hint-2-20",
    chapter: "第2章 インターネットでの被害",
    keyword: "SNSで比較して不安になる",
    answer: "精神的ストレス",
    note: "网络使用也可能造成心理压力。"
  }
];

const chapter2Quizzes = [
  {
    id: "quiz-2-01",
    chapter: "第2章 インターネットでの被害",
    question: "銀行を装ったメールから偽サイトへ誘導し、IDとパスワードを入力させる詐欺は何か。",
    answer: "フィッシング詐欺",
    explanation: "题眼是 偽サイト、ID、パスワード。",
    hint: "偽サイト、ID、パスワード"
  },
  {
    id: "quiz-2-02",
    chapter: "第2章 インターネットでの被害",
    question: "リンクをクリックしただけで登録完了と料金請求が表示された。これは何か。",
    answer: "ワンクリック詐欺",
    explanation: "题眼是 クリック、登録完了、料金請求。",
    hint: "クリック、登録完了、料金請求"
  },
  {
    id: "quiz-2-03",
    chapter: "第2章 インターネットでの被害",
    question: "使用していないサービスの料金を請求された。これは何か。",
    answer: "架空請求詐欺",
    explanation: "使用していないのに請求される点が题眼。",
    hint: "使用していないのに請求"
  },
  {
    id: "quiz-2-04",
    chapter: "第2章 インターネットでの被害",
    question: "画面にウイルス感染と表示され、電話するよう求められた。これは何か。",
    answer: "サポート詐欺",
    explanation: "假警告和电话要求是サポート詐欺的典型题眼。",
    hint: "ウイルス感染、電話してください"
  },
  {
    id: "quiz-2-05",
    chapter: "第2章 インターネットでの被害",
    question: "必ず儲かると言われ、暗号資産への投資を勧められた。これは何か。",
    answer: "投資詐欺",
    explanation: "必ず儲かる、暗号資産、投資が题眼。",
    hint: "必ず儲かる、投資"
  },
  {
    id: "quiz-2-06",
    chapter: "第2章 インターネットでの被害",
    question: "恋愛感情を利用され、送金を求められた。これは何か。",
    answer: "ロマンス詐欺",
    explanation: "恋愛感情と送金が出たらロマンス詐欺。",
    hint: "恋愛感情、送金"
  },
  {
    id: "quiz-2-07",
    chapter: "第2章 インターネットでの被害",
    question: "広告、詐欺、ウイルス付きの可能性がある不要なメールを何というか。",
    answer: "迷惑メール",
    explanation: "不要で危険なメールは迷惑メール。",
    hint: "広告・詐欺・ウイルス付きメール"
  },
  {
    id: "quiz-2-08",
    chapter: "第2章 インターネットでの被害",
    question: "このメールを10人に送ってくださいと書かれたメールは何か。",
    answer: "チェーンメール",
    explanation: "転送を求めるメールはチェーンメール。",
    hint: "このメールを○人に送って"
  },
  {
    id: "quiz-2-09",
    chapter: "第2章 インターネットでの被害",
    question: "IDやパスワードが外部に漏れる被害を何というか。",
    answer: "個人情報流出",
    explanation: "IDやパスワードは個人情報に関係する。",
    hint: "ID・パスワードが盗まれる"
  },
  {
    id: "quiz-2-10",
    chapter: "第2章 インターネットでの被害",
    question: "やめたいのにネット利用をやめられない状態を何というか。",
    answer: "ネット依存",
    explanation: "やめたいのにやめられない点が题眼。",
    hint: "やめたいのにやめられない"
  },
  {
    id: "quiz-2-11",
    chapter: "第2章 インターネットでの被害",
    question: "夜遅くまでスマホを使い、睡眠不足や目の疲れが出ることは何にあたるか。",
    answer: "健康面への影響",
    explanation: "睡眠不足、目の疲れ、肩こりは健康面への影響。",
    hint: "睡眠不足、目の疲れ"
  },
  {
    id: "quiz-2-12",
    chapter: "第2章 インターネットでの被害",
    question: "怪しい料金請求を受けたときの正しい対応は何か。",
    answer: "支払わない、連絡しない、相談する",
    explanation: "一人で判断せず、支払わず、相手に連絡せず、信頼できる人に相談する。",
    hint: "支払わない、連絡しない、相談する"
  }
];
