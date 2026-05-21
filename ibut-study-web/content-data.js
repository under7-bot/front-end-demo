// iBut考试对策学习网页的数据文件。
// 本文件只保存学习资料数据，不写页面逻辑。

// 章节学习内容数据：用于保存每个学习小节的说明、题眼和总结。
const studySections = [
  {
    id: "sec-1-1",
    chapter: "第1章 インターネットの基礎",
    title: "インターネットの基本",
    category: "基礎",
    goal: "理解インターネット、サーバ、クライアント、プロバイダ的基本关系。",
    jpKeywords: ["インターネット", "サーバ", "クライアント", "プロバイダ"],
    explanation: "互联网把很多计算机连接起来，服务器提供信息，客户端请求信息，プロバイダ提供接入服务。",
    scenario: "浏览网页时，自己的电脑或手机是クライアント，网站所在机器是サーバ。",
    examHints: ["接続サービス業者", "利用者側の端末", "情報を提供する側"],
    confusion: "サーバ是提供服务的一方，クライアント是使用服务的一方。",
    summary: "使う側がクライアント、提供する側がサーバ"
  },
  {
    id: "sec-2-2",
    chapter: "第2章 インターネットでの被害",
    title: "フィッシング詐欺",
    category: "被害",
    goal: "理解フィッシング詐欺的典型场景、考试题眼和防范方法。",
    jpKeywords: ["偽サイト", "ID", "パスワード", "クレジットカード番号"],
    explanation: "假装成银行、购物网站或信用卡公司，引导用户进入假网站并输入账号密码。",
    scenario: "「本人確認が必要です」「至急ログインしてください」などのメール。",
    examHints: ["偽サイト", "ID・パスワード", "銀行を装う"],
    confusion: "フィッシング是偷信息，ワンクリック詐欺是点击后要求付款。",
    summary: "偽サイトで盗む → フィッシング"
  },
  {
    id: "sec-2-3",
    chapter: "第2章 インターネットでの被害",
    title: "ワンクリック詐欺",
    category: "被害",
    goal: "理解点击后突然显示注册完成和费用请求的诈骗。",
    jpKeywords: ["クリック", "登録完了", "料金請求", "退会"],
    explanation: "用户点击链接后，页面突然显示已经注册，并要求支付费用。",
    scenario: "「登録が完了しました」「料金を支払ってください」と表示される。",
    examHints: ["クリック", "登録完了", "料金請求"],
    confusion: "ワンクリック詐欺重点是要求付款，不是偷密码。",
    summary: "クリック後に請求 → ワンクリック詐欺"
  },
  {
    id: "sec-2-5",
    chapter: "第2章 インターネットでの被害",
    title: "サポート詐欺",
    category: "被害",
    goal: "理解假警告画面和假客服电话诱导的诈骗。",
    jpKeywords: ["ウイルス感染", "警告画面", "電話", "遠隔操作"],
    explanation: "假装电脑感染病毒，让用户打电话或安装远程操作软件。",
    scenario: "「ウイルスに感染しました。今すぐ電話してください」と表示される。",
    examHints: ["ウイルス感染", "電話してください", "サポート"],
    confusion: "真正的安全软件不会要求你立刻给陌生电话付款。",
    summary: "偽警告と電話 → サポート詐欺"
  },
  {
    id: "sec-3-1",
    chapter: "第3章 インターネット関連の法規",
    title: "著作権・肖像権・パブリシティ権",
    category: "法律",
    goal: "区分作品、人物照片和名人商业价值对应的权利。",
    jpKeywords: ["著作権", "肖像権", "パブリシティ権"],
    explanation: "作品受著作权保护，脸和照片涉及肖像权，名人商业利用涉及公开权。",
    scenario: "他人的插画、照片或名人形象被无许可使用。",
    examHints: ["作品", "顔写真", "有名人"],
    confusion: "作品看著作権，脸看肖像権，名人广告看パブリシティ権。",
    summary: "作品・顔・有名人を分ける"
  },
  {
    id: "sec-4-1",
    chapter: "第4章 インターネット利用者のモラル",
    title: "インターネット利用者のモラル",
    category: "モラル",
    goal: "理解网上发言、个人信息和邮件礼仪的基本注意点。",
    jpKeywords: ["個人情報", "誹謗中傷", "匿名性", "BCC"],
    explanation: "网络使用者要避免泄露个人信息、攻击他人或误用邮件发送方式。",
    scenario: "SNS投稿、群发邮件、匿名留言都需要注意责任和影响。",
    examHints: ["個人情報", "悪口", "BCC", "匿名性"],
    confusion: "匿名并不代表可以随意攻击别人。",
    summary: "ネットでも責任がある"
  },
  {
    id: "sec-5-1",
    chapter: "第5章 インターネットのしくみ",
    title: "DNS・HTTP・HTTPS",
    category: "しくみ",
    goal: "理解域名解析、Web通信和加密Web通信的区别。",
    jpKeywords: ["DNS", "HTTP", "HTTPS"],
    explanation: "DNS把域名对应到IP地址，HTTP用于Web通信，HTTPS在HTTP上加入加密。",
    scenario: "浏览器打开网站时，会用到域名解析和Web通信协议。",
    examHints: ["ドメイン名", "IPアドレス", "暗号化通信"],
    confusion: "DNS负责找地址，HTTPS负责安全通信。",
    summary: "DNSで探す、HTTPSで守る"
  },
  {
    id: "sec-6-1",
    chapter: "第6章 コンピュータウイルス",
    title: "マルウェアと感染防止",
    category: "セキュリティ",
    goal: "理解マルウェア的种类和基本感染防止方法。",
    jpKeywords: ["マルウェア", "ウイルス", "ワーム", "ランサムウェア"],
    explanation: "マルウェア是恶意软件总称，包括病毒、蠕虫、木马和勒索软件等。",
    scenario: "打开可疑附件、安装不明软件或访问危险网站后，电脑可能感染恶意软件。",
    examHints: ["悪意あるソフト", "自己増殖", "身代金"],
    confusion: "マルウェア是总称，ウイルス和ワーム是其中的具体类型。",
    summary: "悪意あるソフト総称 → マルウェア"
  },
  {
    id: "sec-7-11",
    chapter: "第7章 インターネットセキュリティ",
    title: "多要素認証",
    category: "セキュリティ",
    goal: "理解知识、所持、生体中两种以上组合的认证方式。",
    jpKeywords: ["知識情報", "所持情報", "生体情報", "ワンタイムパスワード"],
    explanation: "多要素认证把密码、手机、指纹等不同种类的认证组合起来。",
    scenario: "登录时输入密码后，还需要手机验证码或指纹确认。",
    examHints: ["知識", "所持", "生体", "2種類以上"],
    confusion: "两个密码仍是同一种知识信息，不一定是多要素。",
    summary: "2種類以上の認証 → 多要素認証"
  }
];

// 关键词数据：用于保存每个小节的中文、日本語、English 对照。
const terms = [
  {
    id: "term-internet",
    sectionId: "sec-1-1",
    chapter: "第1章 インターネットの基礎",
    jp: "インターネット",
    reading: "インターネット",
    zh: "互联网",
    en: "internet",
    hint: "世界中のネットワーク"
  },
  {
    id: "term-server",
    sectionId: "sec-1-1",
    chapter: "第1章 インターネットの基礎",
    jp: "サーバ",
    reading: "サーバ",
    zh: "服务器",
    en: "server",
    hint: "情報やサービスを提供"
  },
  {
    id: "term-client",
    sectionId: "sec-1-1",
    chapter: "第1章 インターネットの基礎",
    jp: "クライアント",
    reading: "クライアント",
    zh: "客户端",
    en: "client",
    hint: "利用者側の端末"
  },
  {
    id: "term-provider",
    sectionId: "sec-1-1",
    chapter: "第1章 インターネットの基礎",
    jp: "プロバイダ",
    reading: "プロバイダ",
    zh: "网络接入服务商",
    en: "internet service provider",
    hint: "接続サービス業者"
  },
  {
    id: "term-phishing",
    sectionId: "sec-2-2",
    chapter: "第2章 インターネットでの被害",
    jp: "フィッシング詐欺",
    reading: "フィッシングさぎ",
    zh: "钓鱼诈骗",
    en: "phishing",
    hint: "偽サイト、ID、パスワード"
  },
  {
    id: "term-one-click",
    sectionId: "sec-2-3",
    chapter: "第2章 インターネットでの被害",
    jp: "ワンクリック詐欺",
    reading: "ワンクリックさぎ",
    zh: "一键点击诈骗",
    en: "one-click fraud",
    hint: "クリック後に料金請求"
  },
  {
    id: "term-support-scam",
    sectionId: "sec-2-5",
    chapter: "第2章 インターネットでの被害",
    jp: "サポート詐欺",
    reading: "サポートさぎ",
    zh: "假客服诈骗",
    en: "tech support scam",
    hint: "偽警告と電話"
  },
  {
    id: "term-fictitious-billing",
    sectionId: "sec-2-3",
    chapter: "第2章 インターネットでの被害",
    jp: "架空請求",
    reading: "かくうせいきゅう",
    zh: "虚假账单",
    en: "fictitious billing",
    hint: "使っていないのに請求"
  },
  {
    id: "term-copyright",
    sectionId: "sec-3-1",
    chapter: "第3章 インターネット関連の法規",
    jp: "著作権",
    reading: "ちょさくけん",
    zh: "著作权",
    en: "copyright",
    hint: "作品を守る権利"
  },
  {
    id: "term-portrait-rights",
    sectionId: "sec-3-1",
    chapter: "第3章 インターネット関連の法規",
    jp: "肖像権",
    reading: "しょうぞうけん",
    zh: "肖像权",
    en: "portrait rights",
    hint: "顔写真を守る権利"
  },
  {
    id: "term-publicity-rights",
    sectionId: "sec-3-1",
    chapter: "第3章 インターネット関連の法規",
    jp: "パブリシティ権",
    reading: "パブリシティけん",
    zh: "公开权、名人商业价值权",
    en: "publicity rights",
    hint: "有名人の商業価値"
  },
  {
    id: "term-defamation",
    sectionId: "sec-3-1",
    chapter: "第3章 インターネット関連の法規",
    jp: "名誉毀損",
    reading: "めいよきそん",
    zh: "名誉毁损",
    en: "defamation",
    hint: "社会的評価を下げる"
  },
  {
    id: "term-unauthorized-access-law",
    sectionId: "sec-3-1",
    chapter: "第3章 インターネット関連の法規",
    jp: "不正アクセス禁止法",
    reading: "ふせいアクセスきんしほう",
    zh: "禁止非法访问法",
    en: "Unauthorized Computer Access Law",
    hint: "無断ログインを禁止"
  },
  {
    id: "term-personal-information",
    sectionId: "sec-4-1",
    chapter: "第4章 インターネット利用者のモラル",
    jp: "個人情報",
    reading: "こじんじょうほう",
    zh: "个人信息",
    en: "personal information",
    hint: "個人を識別できる情報"
  },
  {
    id: "term-online-abuse",
    sectionId: "sec-4-1",
    chapter: "第4章 インターネット利用者のモラル",
    jp: "誹謗中傷",
    reading: "ひぼうちゅうしょう",
    zh: "诽谤中伤",
    en: "online abuse",
    hint: "悪口や攻撃的な投稿"
  },
  {
    id: "term-anonymity",
    sectionId: "sec-4-1",
    chapter: "第4章 インターネット利用者のモラル",
    jp: "匿名性",
    reading: "とくめいせい",
    zh: "匿名性",
    en: "anonymity",
    hint: "名前を出さない性質"
  },
  {
    id: "term-bcc",
    sectionId: "sec-4-1",
    chapter: "第4章 インターネット利用者のモラル",
    jp: "BCC",
    reading: "ビーシーシー",
    zh: "密件抄送",
    en: "blind carbon copy",
    hint: "メールアドレスを隠す"
  },
  {
    id: "term-information-bias",
    sectionId: "sec-4-1",
    chapter: "第4章 インターネット利用者のモラル",
    jp: "情報の偏り",
    reading: "じょうほうのかたより",
    zh: "信息偏向",
    en: "information bias",
    hint: "複数情報源で確認"
  },
  {
    id: "term-dns",
    sectionId: "sec-5-1",
    chapter: "第5章 インターネットのしくみ",
    jp: "DNS",
    reading: "ディーエヌエス",
    zh: "域名解析系统",
    en: "Domain Name System",
    hint: "ドメイン名とIPアドレス"
  },
  {
    id: "term-http",
    sectionId: "sec-5-1",
    chapter: "第5章 インターネットのしくみ",
    jp: "HTTP",
    reading: "エイチティーティーピー",
    zh: "Web通信协议",
    en: "Hypertext Transfer Protocol",
    hint: "Web通信"
  },
  {
    id: "term-https",
    sectionId: "sec-5-1",
    chapter: "第5章 インターネットのしくみ",
    jp: "HTTPS",
    reading: "エイチティーティーピーエス",
    zh: "加密Web通信",
    en: "Hypertext Transfer Protocol Secure",
    hint: "暗号化されたWeb通信"
  },
  {
    id: "term-smtp",
    sectionId: "sec-5-1",
    chapter: "第5章 インターネットのしくみ",
    jp: "SMTP",
    reading: "エスエムティーピー",
    zh: "邮件发送协议",
    en: "Simple Mail Transfer Protocol",
    hint: "メール送信"
  },
  {
    id: "term-imap",
    sectionId: "sec-5-1",
    chapter: "第5章 インターネットのしくみ",
    jp: "IMAP",
    reading: "アイマップ",
    zh: "邮件同步协议",
    en: "Internet Message Access Protocol",
    hint: "サーバ上でメール管理"
  },
  {
    id: "term-malware",
    sectionId: "sec-6-1",
    chapter: "第6章 コンピュータウイルス",
    jp: "マルウェア",
    reading: "マルウェア",
    zh: "恶意软件",
    en: "malware",
    hint: "悪意あるソフト総称"
  },
  {
    id: "term-virus",
    sectionId: "sec-6-1",
    chapter: "第6章 コンピュータウイルス",
    jp: "ウイルス",
    reading: "ウイルス",
    zh: "病毒",
    en: "computer virus",
    hint: "感染して動作する"
  },
  {
    id: "term-worm",
    sectionId: "sec-6-1",
    chapter: "第6章 コンピュータウイルス",
    jp: "ワーム",
    reading: "ワーム",
    zh: "蠕虫",
    en: "worm",
    hint: "自己増殖"
  },
  {
    id: "term-trojan",
    sectionId: "sec-6-1",
    chapter: "第6章 コンピュータウイルス",
    jp: "トロイの木馬",
    reading: "トロイのもくば",
    zh: "木马",
    en: "Trojan horse",
    hint: "正常ソフトに偽装"
  },
  {
    id: "term-ransomware",
    sectionId: "sec-6-1",
    chapter: "第6章 コンピュータウイルス",
    jp: "ランサムウェア",
    reading: "ランサムウェア",
    zh: "勒索软件",
    en: "ransomware",
    hint: "暗号化して身代金"
  },
  {
    id: "term-user-authentication",
    sectionId: "sec-7-11",
    chapter: "第7章 インターネットセキュリティ",
    jp: "ユーザー認証",
    reading: "ユーザーにんしょう",
    zh: "用户认证",
    en: "user authentication",
    hint: "本人確認"
  },
  {
    id: "term-biometric-authentication",
    sectionId: "sec-7-11",
    chapter: "第7章 インターネットセキュリティ",
    jp: "生体認証",
    reading: "せいたいにんしょう",
    zh: "生物认证",
    en: "biometric authentication",
    hint: "指紋、顔、虹彩"
  },
  {
    id: "term-encryption",
    sectionId: "sec-7-11",
    chapter: "第7章 インターネットセキュリティ",
    jp: "暗号化",
    reading: "あんごうか",
    zh: "加密",
    en: "encryption",
    hint: "読めない形にする"
  },
  {
    id: "term-digital-certificate",
    sectionId: "sec-7-11",
    chapter: "第7章 インターネットセキュリティ",
    jp: "電子証明書",
    reading: "でんししょうめいしょ",
    zh: "电子证书",
    en: "digital certificate",
    hint: "本物のサイトを証明"
  },
  {
    id: "term-mfa",
    sectionId: "sec-7-11",
    chapter: "第7章 インターネットセキュリティ",
    jp: "多要素認証",
    reading: "たようそにんしょう",
    zh: "多因素认证",
    en: "multi-factor authentication",
    hint: "知識、所持、生体"
  }
];

// 题眼速查数据：用于把题目关键词快速对应到答案。
const examHints = [
  {
    id: "hint-001",
    chapter: "第1章 インターネットの基礎",
    keyword: "インターネット接続サービス業者",
    answer: "プロバイダ",
    note: "网络接入服务商帮助用户连接互联网。"
  },
  {
    id: "hint-002",
    chapter: "第1章 インターネットの基礎",
    keyword: "利用者側の端末",
    answer: "クライアント",
    note: "用户使用服务的一方是客户端。"
  },
  {
    id: "hint-003",
    chapter: "第1章 インターネットの基礎",
    keyword: "情報やサービスを提供する側",
    answer: "サーバ",
    note: "提供信息或服务的一方是服务器。"
  },
  {
    id: "hint-004",
    chapter: "第2章 インターネットでの被害",
    keyword: "偽サイト、ID、パスワード",
    answer: "フィッシング詐欺",
    note: "假网站诱导输入账号、密码、信用卡信息。"
  },
  {
    id: "hint-005",
    chapter: "第2章 インターネットでの被害",
    keyword: "クリック、登録完了、料金請求",
    answer: "ワンクリック詐欺",
    note: "点击后突然要求付款。"
  },
  {
    id: "hint-006",
    chapter: "第2章 インターネットでの被害",
    keyword: "ウイルス感染、電話してください",
    answer: "サポート詐欺",
    note: "假警告让用户联系假客服。"
  },
  {
    id: "hint-007",
    chapter: "第3章 インターネット関連の法規",
    keyword: "作品、無断コピー",
    answer: "著作権",
    note: "文章、图片、音乐等作品受到保护。"
  },
  {
    id: "hint-008",
    chapter: "第3章 インターネット関連の法規",
    keyword: "顔写真、無断投稿",
    answer: "肖像権",
    note: "未经本人同意使用照片可能侵害肖像权。"
  },
  {
    id: "hint-009",
    chapter: "第3章 インターネット関連の法規",
    keyword: "有名人、広告利用",
    answer: "パブリシティ権",
    note: "名人形象有商业价值。"
  },
  {
    id: "hint-010",
    chapter: "第3章 インターネット関連の法規",
    keyword: "他人のID、無断ログイン",
    answer: "不正アクセス禁止法",
    note: "禁止未经许可登录他人账号。"
  },
  {
    id: "hint-011",
    chapter: "第4章 インターネット利用者のモラル",
    keyword: "一斉送信、メールアドレスを隠す",
    answer: "BCC",
    note: "群发邮件时可隐藏收件人地址。"
  },
  {
    id: "hint-012",
    chapter: "第4章 インターネット利用者のモラル",
    keyword: "悪口、デマ、社会的評価低下",
    answer: "名誉毀損",
    note: "损害他人社会评价可能构成名誉毁损。"
  },
  {
    id: "hint-013",
    chapter: "第4章 インターネット利用者のモラル",
    keyword: "複数情報源で確認",
    answer: "情報の偏り対策",
    note: "不要只相信单一来源。"
  },
  {
    id: "hint-014",
    chapter: "第5章 インターネットのしくみ",
    keyword: "ドメイン名、IPアドレス",
    answer: "DNS",
    note: "把域名和IP地址对应起来。"
  },
  {
    id: "hint-015",
    chapter: "第5章 インターネットのしくみ",
    keyword: "暗号化されたWeb通信",
    answer: "HTTPS",
    note: "HTTPS是在HTTP上加入加密。"
  },
  {
    id: "hint-016",
    chapter: "第5章 インターネットのしくみ",
    keyword: "メール送信",
    answer: "SMTP",
    note: "负责发送邮件。"
  },
  {
    id: "hint-017",
    chapter: "第5章 インターネットのしくみ",
    keyword: "サーバ上でメール管理",
    answer: "IMAP",
    note: "邮件保存在服务器上并同步。"
  },
  {
    id: "hint-018",
    chapter: "第6章 コンピュータウイルス",
    keyword: "悪意あるソフト総称",
    answer: "マルウェア",
    note: "恶意软件的总称。"
  },
  {
    id: "hint-019",
    chapter: "第6章 コンピュータウイルス",
    keyword: "自己増殖",
    answer: "ワーム",
    note: "蠕虫能自我复制扩散。"
  },
  {
    id: "hint-020",
    chapter: "第6章 コンピュータウイルス",
    keyword: "正常ソフトに偽装",
    answer: "トロイの木馬",
    note: "伪装成正常软件。"
  },
  {
    id: "hint-021",
    chapter: "第6章 コンピュータウイルス",
    keyword: "暗号化して身代金",
    answer: "ランサムウェア",
    note: "加密文件并要求赎金。"
  },
  {
    id: "hint-022",
    chapter: "第7章 インターネットセキュリティ",
    keyword: "本人確認",
    answer: "ユーザー認証",
    note: "确认正在使用的人是不是本人。"
  },
  {
    id: "hint-023",
    chapter: "第7章 インターネットセキュリティ",
    keyword: "本物のサイト、CA、HTTPS",
    answer: "電子証明書",
    note: "证明网站和通信对象的正当性。"
  },
  {
    id: "hint-024",
    chapter: "第7章 インターネットセキュリティ",
    keyword: "知識・所持・生体",
    answer: "多要素認証",
    note: "两种以上不同认证要素组合。"
  }
];

// 模拟题数据：用于保存练习题、答案、解释和提示。
const quizzes = [
  {
    id: "quiz-001",
    chapter: "第1章 インターネットの基礎",
    question: "情報やサービスを提供する側のコンピュータを何というか。",
    answer: "サーバ",
    explanation: "提供信息或服务的一方是サーバ。",
    hint: "情報やサービスを提供"
  },
  {
    id: "quiz-002",
    chapter: "第2章 インターネットでの被害",
    question: "銀行を装ったメールから偽サイトへ誘導し、IDとパスワードを入力させる手口は何か。",
    answer: "フィッシング詐欺",
    explanation: "题眼是偽サイト、ID、パスワード。",
    hint: "偽サイト、ID、パスワード"
  },
  {
    id: "quiz-003",
    chapter: "第2章 インターネットでの被害",
    question: "リンクをクリックしただけで登録完了と料金請求が表示された。これは何か。",
    answer: "ワンクリック詐欺",
    explanation: "题眼是クリック、登録完了、料金請求。",
    hint: "クリック、登録完了、料金請求"
  },
  {
    id: "quiz-004",
    chapter: "第2章 インターネットでの被害",
    question: "画面にウイルス感染と表示され、電話を求められた。これは何か。",
    answer: "サポート詐欺",
    explanation: "题眼是ウイルス感染、電話してください。",
    hint: "ウイルス感染、電話"
  },
  {
    id: "quiz-005",
    chapter: "第3章 インターネット関連の法規",
    question: "他人のイラストを許可なくコピーして自分のサイトに載せた。何の問題か。",
    answer: "著作権",
    explanation: "作品の無断コピーなので著作権が問題になる。",
    hint: "作品、無断コピー"
  },
  {
    id: "quiz-006",
    chapter: "第4章 インターネット利用者のモラル",
    question: "複数人にメールを送るとき、互いのメールアドレスを隠したい。使う欄は何か。",
    answer: "BCC",
    explanation: "BCCは受信者同士にメールアドレスを見せない送信方法。",
    hint: "一斉送信、メールアドレスを隠す"
  },
  {
    id: "quiz-007",
    chapter: "第5章 インターネットのしくみ",
    question: "ドメイン名とIPアドレスを対応させる仕組みは何か。",
    answer: "DNS",
    explanation: "DNSはドメイン名をIPアドレスに対応させる。",
    hint: "ドメイン名、IPアドレス"
  },
  {
    id: "quiz-008",
    chapter: "第6章 コンピュータウイルス",
    question: "ファイルを暗号化し、復旧のために金銭を要求するマルウェアは何か。",
    answer: "ランサムウェア",
    explanation: "暗号化して身代金を要求する点が题眼。",
    hint: "暗号化して身代金"
  },
  {
    id: "quiz-009",
    chapter: "第7章 インターネットセキュリティ",
    question: "パスワードとスマホ確認など、異なる種類の認証を組み合わせる方式は何か。",
    answer: "多要素認証",
    explanation: "知識、所持、生体のうち2種類以上を組み合わせる。",
    hint: "知識・所持・生体"
  }
];
