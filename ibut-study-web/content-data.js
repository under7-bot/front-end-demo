// iBut??????????????
// ?????????????????????

// ?????????????????????????????
const studySections = [
  {
    "id": "sec-1-1",
    "chapter": "第1章 インターネットの基礎",
    "title": "インターネットの基本",
    "category": "基礎",
    "goal": "理解インターネット、サーバ、クライアント、プロバイダ的基本关系。",
    "jpKeywords": [
      "インターネット",
      "サーバ",
      "クライアント",
      "プロバイダ"
    ],
    "explanation": "互联网把很多计算机连接起来，服务器提供信息，客户端请求信息，プロバイダ提供接入服务。",
    "scenario": "浏览网页时，自己的电脑或手机是クライアント，网站所在机器是サーバ。",
    "examHints": [
      "接続サービス業者",
      "利用者側の端末",
      "情報を提供する側"
    ],
    "confusion": "サーバ是提供服务的一方，クライアント是使用服务的一方。",
    "summary": "使う側がクライアント、提供する側がサーバ"
  },
  {
    "id": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "title": "インターネットは、具体的にどんな被害をもたらすのか",
    "category": "被害",
    "goal": "理解互联网可能带来的金钱、信息、名誉和健康方面的被害。",
    "jpKeywords": [
      "被害",
      "金銭的被害",
      "個人情報",
      "なりすまし",
      "誹謗中傷"
    ],
    "explanation": "互联网被害包括被骗钱、个人信息泄露、被冒充、被恶意攻击等。",
    "scenario": "账号被盗后，他人用自己的名字发布不当内容。",
    "examHints": [
      "お金をだまし取られる",
      "ID・パスワードが盗まれる",
      "SNSで悪口を書かれる"
    ],
    "confusion": "金銭的被害是钱的损失，情報流出是信息泄露。",
    "summary": "お金・情報・名誉・健康に注意"
  },
  {
    "id": "sec-2-2",
    "chapter": "第2章 インターネットでの被害",
    "title": "フィッシング詐欺",
    "category": "被害",
    "goal": "理解フィッシング詐欺的典型场景、考试题眼和防范方法。",
    "jpKeywords": [
      "フィッシング詐欺",
      "偽サイト",
      "ID",
      "パスワード"
    ],
    "explanation": "假装成银行、购物网站或信用卡公司，引导用户进入假网站并输入账号密码。",
    "scenario": "「本人確認が必要です」「至急ログインしてください」というメールが届く。",
    "examHints": [
      "偽サイト",
      "ID・パスワード",
      "銀行を装う"
    ],
    "confusion": "フィッシング是偷信息，ワンクリック詐欺是点击后要求付款。",
    "summary": "偽サイトで盗む → フィッシング"
  },
  {
    "id": "sec-2-3",
    "chapter": "第2章 インターネットでの被害",
    "title": "ワンクリック詐欺",
    "category": "被害",
    "goal": "理解点击后显示注册完成和料金請求的诈骗方式。",
    "jpKeywords": [
      "ワンクリック詐欺",
      "登録完了",
      "料金請求",
      "架空請求"
    ],
    "explanation": "点击链接后突然显示已经注册，并要求支付不存在的费用。",
    "scenario": "页面显示「登録が完了しました。料金を支払ってください」。",
    "examHints": [
      "クリック",
      "登録完了",
      "料金請求"
    ],
    "confusion": "架空請求是不该付的虚假账单，ワンクリック詐欺常以点击为入口。",
    "summary": "クリック後に請求 → ワンクリック"
  },
  {
    "id": "sec-2-4",
    "chapter": "第2章 インターネットでの被害",
    "title": "詐欺、犯罪に巻き込まれないために",
    "category": "被害",
    "goal": "掌握遇到可疑请求时的正确处理方式。",
    "jpKeywords": [
      "相談する",
      "支払わない",
      "連絡しない",
      "削除する"
    ],
    "explanation": "遇到可疑收费、中奖、账号确认等信息时，不付款、不联系、不输入个人信息，并向可信的人或机构咨询。",
    "scenario": "收到陌生收费短信时，先截图保存并咨询家人、老师或官方窗口。",
    "examHints": [
      "支払わない",
      "連絡しない",
      "相談する"
    ],
    "confusion": "不要按对方给出的联系方式确认，应使用官方渠道确认。",
    "summary": "払わない・連絡しない・相談する"
  },
  {
    "id": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "title": "インターネットに関連した新たな詐欺の被害例",
    "category": "被害",
    "goal": "理解サポート詐欺、偽通販サイト、投資詐欺、ロマンス詐欺等新型诈骗。",
    "jpKeywords": [
      "サポート詐欺",
      "偽通販サイト",
      "投資詐欺",
      "ロマンス詐欺",
      "QRコード詐欺"
    ],
    "explanation": "新型诈骗常利用假警告、超低价商品、必赚投资、恋爱感情或二维码诱导用户付款或输入信息。",
    "scenario": "电脑画面出现「ウイルス感染」と假警告，并要求打电话。",
    "examHints": [
      "偽警告",
      "遠隔操作ソフト",
      "必ず儲かる",
      "恋愛感情"
    ],
    "confusion": "サポート詐欺是假客服，偽通販サイト是假购物网站。",
    "summary": "うますぎる話と偽警告に注意"
  },
  {
    "id": "sec-2-6",
    "chapter": "第2章 インターネットでの被害",
    "title": "迷惑メール、チェーンメール",
    "category": "被害",
    "goal": "区分迷惑メール和チェーンメール，并理解正确处理方式。",
    "jpKeywords": [
      "迷惑メール",
      "チェーンメール",
      "転送する",
      "削除する"
    ],
    "explanation": "迷惑メール是不需要的广告、诈骗或带病毒邮件。チェーンメール要求继续转发，容易造成混乱。",
    "scenario": "邮件写着「このメールを10人に送ってください」。",
    "examHints": [
      "広告・詐欺・ウイルス付きメール",
      "このメールを○人に送って"
    ],
    "confusion": "迷惑メール重点是不需要和危险，チェーンメール重点是要求转发。",
    "summary": "怪しいメールは開かない・転送しない"
  },
  {
    "id": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "title": "健康面への影響",
    "category": "被害",
    "goal": "理解过度使用互联网对睡眠、眼睛、身体和心理的影响。",
    "jpKeywords": [
      "ネット依存",
      "睡眠不足",
      "目の疲れ",
      "肩こり",
      "ストレス"
    ],
    "explanation": "长时间使用网络可能导致睡眠不足、眼疲劳、肩颈酸痛、压力和网络依赖。",
    "scenario": "夜遅くまでスマホを使い、次の日に眠くなる。",
    "examHints": [
      "夜遅くまでスマホ",
      "やめたいのにやめられない",
      "SNSで比較して不安"
    ],
    "confusion": "健康面への影響不仅是身体问题，也包括心理压力和依赖。",
    "summary": "使いすぎは体と心に影響"
  },
  {
    "id": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "title": "著作権・肖像権・パブリシティ権",
    "category": "法律",
    "goal": "区分作品、人物照片和名人商业价值对应的权利。",
    "jpKeywords": [
      "著作権",
      "肖像権",
      "パブリシティ権"
    ],
    "explanation": "作品受著作权保护，脸和照片涉及肖像权，名人商业利用涉及公开权。",
    "scenario": "他人的插画、照片或名人形象被无许可使用。",
    "examHints": [
      "作品",
      "顔写真",
      "有名人"
    ],
    "confusion": "作品看著作権，脸看肖像権，名人广告看パブリシティ権。",
    "summary": "作品・顔・有名人を分ける"
  },
  {
    "id": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "インターネット利用者のモラル",
    "category": "モラル",
    "goal": "理解网上发言、个人信息和邮件礼仪的基本注意点。",
    "jpKeywords": [
      "個人情報",
      "誹謗中傷",
      "匿名性",
      "BCC"
    ],
    "explanation": "网络使用者要避免泄露个人信息、攻击他人或误用邮件发送方式。",
    "scenario": "SNS投稿、群发邮件、匿名留言都需要注意责任和影响。",
    "examHints": [
      "個人情報",
      "悪口",
      "BCC",
      "匿名性"
    ],
    "confusion": "匿名并不代表可以随意攻击别人。",
    "summary": "ネットでも責任がある"
  },
  {
    "id": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "title": "DNS・HTTP・HTTPS",
    "category": "しくみ",
    "goal": "理解域名解析、Web通信和加密Web通信的区别。",
    "jpKeywords": [
      "DNS",
      "HTTP",
      "HTTPS"
    ],
    "explanation": "DNS把域名对应到IP地址，HTTP用于Web通信，HTTPS在HTTP上加入加密。",
    "scenario": "浏览器打开网站时，会用到域名解析和Web通信协议。",
    "examHints": [
      "ドメイン名",
      "IPアドレス",
      "暗号化通信"
    ],
    "confusion": "DNS负责找地址，HTTPS负责安全通信。",
    "summary": "DNSで探す、HTTPSで守る"
  },
  {
    "id": "sec-6-1",
    "chapter": "第6章 コンピュータウイルス",
    "title": "マルウェアと感染防止",
    "category": "セキュリティ",
    "goal": "理解マルウェア的种类和基本感染防止方法。",
    "jpKeywords": [
      "マルウェア",
      "ウイルス",
      "ワーム",
      "ランサムウェア"
    ],
    "explanation": "マルウェア是恶意软件总称，包括病毒、蠕虫、木马和勒索软件等。",
    "scenario": "打开可疑附件、安装不明软件或访问危险网站后，电脑可能感染恶意软件。",
    "examHints": [
      "悪意あるソフト",
      "自己増殖",
      "身代金"
    ],
    "confusion": "マルウェア是总称，ウイルス和ワーム是其中的具体类型。",
    "summary": "悪意あるソフト総称 → マルウェア"
  },
  {
    "id": "sec-7-11",
    "chapter": "第7章 インターネットセキュリティ",
    "title": "多要素認証",
    "category": "セキュリティ",
    "goal": "理解知识、所持、生体中两种以上组合的认证方式。",
    "jpKeywords": [
      "知識情報",
      "所持情報",
      "生体情報",
      "ワンタイムパスワード"
    ],
    "explanation": "多要素认证把密码、手机、指纹等不同种类的认证组合起来。",
    "scenario": "登录时输入密码后，还需要手机验证码或指纹确认。",
    "examHints": [
      "知識",
      "所持",
      "生体",
      "2種類以上"
    ],
    "confusion": "两个密码仍是同一种知识信息，不一定是多要素。",
    "summary": "2種類以上の認証 → 多要素認証"
  }
];

// ????????????????????????
const terms = [
  {
    "id": "term-internet",
    "sectionId": "sec-1-1",
    "chapter": "第1章 インターネットの基礎",
    "jp": "インターネット",
    "reading": "インターネット",
    "zh": "互联网",
    "en": "internet",
    "hint": "世界中のネットワーク"
  },
  {
    "id": "term-server",
    "sectionId": "sec-1-1",
    "chapter": "第1章 インターネットの基礎",
    "jp": "サーバ",
    "reading": "サーバ",
    "zh": "服务器",
    "en": "server",
    "hint": "情報やサービスを提供"
  },
  {
    "id": "term-client",
    "sectionId": "sec-1-1",
    "chapter": "第1章 インターネットの基礎",
    "jp": "クライアント",
    "reading": "クライアント",
    "zh": "客户端",
    "en": "client",
    "hint": "利用者側の端末"
  },
  {
    "id": "term-provider",
    "sectionId": "sec-1-1",
    "chapter": "第1章 インターネットの基礎",
    "jp": "プロバイダ",
    "reading": "プロバイダ",
    "zh": "网络接入服务商",
    "en": "internet service provider",
    "hint": "接続サービス業者"
  },
  {
    "id": "term-2-damage",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "被害",
    "reading": "ひがい",
    "zh": "受害、损害",
    "en": "damage or harm",
    "hint": "ネットで受ける損害"
  },
  {
    "id": "term-2-financial-damage",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "金銭的被害",
    "reading": "きんせんてきひがい",
    "zh": "金钱损失",
    "en": "financial damage",
    "hint": "お金をだまし取られる"
  },
  {
    "id": "term-2-personal-information",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "個人情報",
    "reading": "こじんじょうほう",
    "zh": "个人信息",
    "en": "personal information",
    "hint": "氏名、住所、IDなど"
  },
  {
    "id": "term-2-information-leakage",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "情報流出",
    "reading": "じょうほうりゅうしゅつ",
    "zh": "信息泄露",
    "en": "information leakage",
    "hint": "情報が外に出る"
  },
  {
    "id": "term-2-impersonation",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "なりすまし",
    "reading": "なりすまし",
    "zh": "冒充",
    "en": "impersonation",
    "hint": "他人の名前で行動"
  },
  {
    "id": "term-2-defamation",
    "sectionId": "sec-2-1",
    "chapter": "第2章 インターネットでの被害",
    "jp": "誹謗中傷",
    "reading": "ひぼうちゅうしょう",
    "zh": "诽谤中伤",
    "en": "defamation or abuse",
    "hint": "SNSで悪口を書く"
  },
  {
    "id": "term-2-phishing",
    "sectionId": "sec-2-2",
    "chapter": "第2章 インターネットでの被害",
    "jp": "フィッシング詐欺",
    "reading": "フィッシングさぎ",
    "zh": "钓鱼诈骗",
    "en": "phishing",
    "hint": "偽サイト、ID、パスワード"
  },
  {
    "id": "term-2-fake-website",
    "sectionId": "sec-2-2",
    "chapter": "第2章 インターネットでの被害",
    "jp": "偽サイト",
    "reading": "にせサイト",
    "zh": "假网站",
    "en": "fake website",
    "hint": "本物に似せたサイト"
  },
  {
    "id": "term-2-one-click-fraud",
    "sectionId": "sec-2-3",
    "chapter": "第2章 インターネットでの被害",
    "jp": "ワンクリック詐欺",
    "reading": "ワンクリックさぎ",
    "zh": "一键点击诈骗",
    "en": "one-click fraud",
    "hint": "クリック、登録完了、料金請求"
  },
  {
    "id": "term-2-fictitious-billing",
    "sectionId": "sec-2-3",
    "chapter": "第2章 インターネットでの被害",
    "jp": "架空請求",
    "reading": "かくうせいきゅう",
    "zh": "虚假账单",
    "en": "fictitious billing",
    "hint": "使っていないのに請求"
  },
  {
    "id": "term-2-support-scam",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "サポート詐欺",
    "reading": "サポートさぎ",
    "zh": "假客服诈骗",
    "en": "tech support scam",
    "hint": "ウイルス感染、電話してください"
  },
  {
    "id": "term-2-fake-warning",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "偽警告",
    "reading": "にせけいこく",
    "zh": "假警告",
    "en": "fake warning",
    "hint": "画面に出る偽の警告"
  },
  {
    "id": "term-2-remote-access-software",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "遠隔操作ソフト",
    "reading": "えんかくそうさソフト",
    "zh": "远程控制软件",
    "en": "remote access software",
    "hint": "他人が端末を操作する"
  },
  {
    "id": "term-2-fake-shopping-site",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "偽通販サイト",
    "reading": "にせつうはんサイト",
    "zh": "假网购网站",
    "en": "fake shopping site",
    "hint": "商品が届かない"
  },
  {
    "id": "term-2-investment-scam",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "投資詐欺",
    "reading": "とうしさぎ",
    "zh": "投资诈骗",
    "en": "investment scam",
    "hint": "必ず儲かる"
  },
  {
    "id": "term-2-romance-scam",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "ロマンス詐欺",
    "reading": "ロマンスさぎ",
    "zh": "情感诈骗",
    "en": "romance scam",
    "hint": "恋愛感情、送金"
  },
  {
    "id": "term-2-qr-code-scam",
    "sectionId": "sec-2-5",
    "chapter": "第2章 インターネットでの被害",
    "jp": "QRコード詐欺",
    "reading": "キューアールコードさぎ",
    "zh": "二维码诈骗",
    "en": "QR code scam",
    "hint": "QRコード、偽サイト"
  },
  {
    "id": "term-2-spam-mail",
    "sectionId": "sec-2-6",
    "chapter": "第2章 インターネットでの被害",
    "jp": "迷惑メール",
    "reading": "めいわくメール",
    "zh": "垃圾邮件",
    "en": "spam mail",
    "hint": "広告、詐欺、ウイルス付き"
  },
  {
    "id": "term-2-chain-mail",
    "sectionId": "sec-2-6",
    "chapter": "第2章 インターネットでの被害",
    "jp": "チェーンメール",
    "reading": "チェーンメール",
    "zh": "连锁转发邮件",
    "en": "chain mail",
    "hint": "このメールを○人に送って"
  },
  {
    "id": "term-2-forward",
    "sectionId": "sec-2-6",
    "chapter": "第2章 インターネットでの被害",
    "jp": "転送する",
    "reading": "てんそうする",
    "zh": "转发",
    "en": "forward",
    "hint": "メールを他人に送る"
  },
  {
    "id": "term-2-delete",
    "sectionId": "sec-2-6",
    "chapter": "第2章 インターネットでの被害",
    "jp": "削除する",
    "reading": "さくじょする",
    "zh": "删除",
    "en": "delete",
    "hint": "怪しいメールを消す"
  },
  {
    "id": "term-2-internet-addiction",
    "sectionId": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "jp": "ネット依存",
    "reading": "ネットいぞん",
    "zh": "网络依赖",
    "en": "internet addiction",
    "hint": "やめたいのにやめられない"
  },
  {
    "id": "term-2-lack-of-sleep",
    "sectionId": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "jp": "睡眠不足",
    "reading": "すいみんぶそく",
    "zh": "睡眠不足",
    "en": "lack of sleep",
    "hint": "夜遅くまでスマホ"
  },
  {
    "id": "term-2-eye-strain",
    "sectionId": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "jp": "目の疲れ",
    "reading": "めのつかれ",
    "zh": "眼疲劳",
    "en": "eye strain",
    "hint": "長時間画面を見る"
  },
  {
    "id": "term-2-stiff-shoulders",
    "sectionId": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "jp": "肩こり",
    "reading": "かたこり",
    "zh": "肩颈酸痛",
    "en": "stiff shoulders",
    "hint": "同じ姿勢が続く"
  },
  {
    "id": "term-2-stress",
    "sectionId": "sec-2-7",
    "chapter": "第2章 インターネットでの被害",
    "jp": "ストレス",
    "reading": "ストレス",
    "zh": "压力",
    "en": "stress",
    "hint": "SNSで比較して不安"
  },
  {
    "id": "term-2-consult",
    "sectionId": "sec-2-4",
    "chapter": "第2章 インターネットでの被害",
    "jp": "相談する",
    "reading": "そうだんする",
    "zh": "咨询",
    "en": "consult",
    "hint": "一人で判断しない"
  },
  {
    "id": "term-2-do-not-pay",
    "sectionId": "sec-2-4",
    "chapter": "第2章 インターネットでの被害",
    "jp": "支払わない",
    "reading": "しはらわない",
    "zh": "不付款",
    "en": "do not pay",
    "hint": "怪しい請求に払わない"
  },
  {
    "id": "term-2-do-not-contact",
    "sectionId": "sec-2-4",
    "chapter": "第2章 インターネットでの被害",
    "jp": "連絡しない",
    "reading": "れんらくしない",
    "zh": "不联系",
    "en": "do not contact",
    "hint": "相手に電話しない"
  },
  {
    "id": "term-copyright",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "著作権",
    "reading": "ちょさくけん",
    "zh": "著作权",
    "en": "copyright",
    "hint": "作品を守る権利"
  },
  {
    "id": "term-portrait-rights",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "肖像権",
    "reading": "しょうぞうけん",
    "zh": "肖像权",
    "en": "portrait rights",
    "hint": "顔写真を守る権利"
  },
  {
    "id": "term-publicity-rights",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "パブリシティ権",
    "reading": "パブリシティけん",
    "zh": "公开权、名人商业价值权",
    "en": "publicity rights",
    "hint": "有名人の商業価値"
  },
  {
    "id": "term-defamation",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "名誉毀損",
    "reading": "めいよきそん",
    "zh": "名誉毁损",
    "en": "defamation",
    "hint": "社会的評価を下げる"
  },
  {
    "id": "term-unauthorized-access-law",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "不正アクセス禁止法",
    "reading": "ふせいアクセスきんしほう",
    "zh": "禁止非法访问法",
    "en": "Unauthorized Computer Access Law",
    "hint": "無断ログインを禁止"
  },
  {
    "id": "term-personal-information",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "個人情報",
    "reading": "こじんじょうほう",
    "zh": "个人信息",
    "en": "personal information",
    "hint": "個人を識別できる情報"
  },
  {
    "id": "term-online-abuse",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "誹謗中傷",
    "reading": "ひぼうちゅうしょう",
    "zh": "诽谤中伤",
    "en": "online abuse",
    "hint": "悪口や攻撃的な投稿"
  },
  {
    "id": "term-anonymity",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "匿名性",
    "reading": "とくめいせい",
    "zh": "匿名性",
    "en": "anonymity",
    "hint": "名前を出さない性質"
  },
  {
    "id": "term-bcc",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "BCC",
    "reading": "ビーシーシー",
    "zh": "密件抄送",
    "en": "blind carbon copy",
    "hint": "メールアドレスを隠す"
  },
  {
    "id": "term-information-bias",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "情報の偏り",
    "reading": "じょうほうのかたより",
    "zh": "信息偏向",
    "en": "information bias",
    "hint": "複数情報源で確認"
  },
  {
    "id": "term-dns",
    "sectionId": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "DNS",
    "reading": "ディーエヌエス",
    "zh": "域名解析系统",
    "en": "Domain Name System",
    "hint": "ドメイン名とIPアドレス"
  },
  {
    "id": "term-http",
    "sectionId": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "HTTP",
    "reading": "エイチティーティーピー",
    "zh": "Web通信协议",
    "en": "Hypertext Transfer Protocol",
    "hint": "Web通信"
  },
  {
    "id": "term-https",
    "sectionId": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "HTTPS",
    "reading": "エイチティーティーピーエス",
    "zh": "加密Web通信",
    "en": "Hypertext Transfer Protocol Secure",
    "hint": "暗号化されたWeb通信"
  },
  {
    "id": "term-smtp",
    "sectionId": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "SMTP",
    "reading": "エスエムティーピー",
    "zh": "邮件发送协议",
    "en": "Simple Mail Transfer Protocol",
    "hint": "メール送信"
  },
  {
    "id": "term-imap",
    "sectionId": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "jp": "IMAP",
    "reading": "アイマップ",
    "zh": "邮件同步协议",
    "en": "Internet Message Access Protocol",
    "hint": "サーバ上でメール管理"
  },
  {
    "id": "term-malware",
    "sectionId": "sec-6-1",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "マルウェア",
    "reading": "マルウェア",
    "zh": "恶意软件",
    "en": "malware",
    "hint": "悪意あるソフト総称"
  },
  {
    "id": "term-virus",
    "sectionId": "sec-6-1",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "ウイルス",
    "reading": "ウイルス",
    "zh": "病毒",
    "en": "computer virus",
    "hint": "感染して動作する"
  },
  {
    "id": "term-worm",
    "sectionId": "sec-6-1",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "ワーム",
    "reading": "ワーム",
    "zh": "蠕虫",
    "en": "worm",
    "hint": "自己増殖"
  },
  {
    "id": "term-trojan",
    "sectionId": "sec-6-1",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "トロイの木馬",
    "reading": "トロイのもくば",
    "zh": "木马",
    "en": "Trojan horse",
    "hint": "正常ソフトに偽装"
  },
  {
    "id": "term-ransomware",
    "sectionId": "sec-6-1",
    "chapter": "第6章 コンピュータウイルス",
    "jp": "ランサムウェア",
    "reading": "ランサムウェア",
    "zh": "勒索软件",
    "en": "ransomware",
    "hint": "暗号化して身代金"
  },
  {
    "id": "term-user-authentication",
    "sectionId": "sec-7-11",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "ユーザー認証",
    "reading": "ユーザーにんしょう",
    "zh": "用户认证",
    "en": "user authentication",
    "hint": "本人確認"
  },
  {
    "id": "term-biometric-authentication",
    "sectionId": "sec-7-11",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "生体認証",
    "reading": "せいたいにんしょう",
    "zh": "生物认证",
    "en": "biometric authentication",
    "hint": "指紋、顔、虹彩"
  },
  {
    "id": "term-encryption",
    "sectionId": "sec-7-11",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "暗号化",
    "reading": "あんごうか",
    "zh": "加密",
    "en": "encryption",
    "hint": "読めない形にする"
  },
  {
    "id": "term-digital-certificate",
    "sectionId": "sec-7-11",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "電子証明書",
    "reading": "でんししょうめいしょ",
    "zh": "电子证书",
    "en": "digital certificate",
    "hint": "本物のサイトを証明"
  },
  {
    "id": "term-mfa",
    "sectionId": "sec-7-11",
    "chapter": "第7章 インターネットセキュリティ",
    "jp": "多要素認証",
    "reading": "たようそにんしょう",
    "zh": "多因素认证",
    "en": "multi-factor authentication",
    "hint": "知識、所持、生体"
  }
];

// ???????????????????????????
const examHints = [
  {
    "id": "hint-001",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "インターネット接続サービス業者",
    "answer": "プロバイダ",
    "note": "网络接入服务商帮助用户连接互联网。"
  },
  {
    "id": "hint-002",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "利用者側の端末",
    "answer": "クライアント",
    "note": "用户使用服务的一方是客户端。"
  },
  {
    "id": "hint-003",
    "chapter": "第1章 インターネットの基礎",
    "keyword": "情報やサービスを提供する側",
    "answer": "サーバ",
    "note": "提供信息或服务的一方是服务器。"
  },
  {
    "id": "hint-2-01",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "お金をだまし取られる",
    "answer": "金銭的被害",
    "note": "网络诈骗可能直接造成钱财损失。"
  },
  {
    "id": "hint-2-02",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "ID・パスワードが盗まれる",
    "answer": "個人情報流出 / フィッシング",
    "note": "账号密码被盗通常和个人信息泄露、钓鱼诈骗有关。"
  },
  {
    "id": "hint-2-03",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "他人の名前で投稿される",
    "answer": "なりすまし",
    "note": "冒充他人身份发布信息。"
  },
  {
    "id": "hint-2-04",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "SNSで悪口を書かれる",
    "answer": "誹謗中傷",
    "note": "在网上写恶意攻击内容会损害他人名誉。"
  },
  {
    "id": "hint-2-05",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "添付ファイルを開いて感染",
    "answer": "ウイルス感染",
    "note": "打开可疑附件可能导致电脑感染恶意软件。"
  },
  {
    "id": "hint-2-06",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "偽サイト、ID、パスワード",
    "answer": "フィッシング詐欺",
    "note": "假网站诱导输入账号和密码。"
  },
  {
    "id": "hint-2-07",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "クリック、登録完了、料金請求",
    "answer": "ワンクリック詐欺",
    "note": "点击后突然要求付款。"
  },
  {
    "id": "hint-2-08",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "使用していないのに請求",
    "answer": "架空請求詐欺",
    "note": "没有使用服务却被要求付费。"
  },
  {
    "id": "hint-2-09",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "ウイルス感染、電話してください",
    "answer": "サポート詐欺",
    "note": "假警告诱导用户联系假客服。"
  },
  {
    "id": "hint-2-10",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "遠隔操作ソフトを入れさせる",
    "answer": "サポート詐欺",
    "note": "让用户安装远程控制软件是常见手法。"
  },
  {
    "id": "hint-2-11",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "商品が届かない、極端に安い",
    "answer": "偽通販サイト",
    "note": "假网购网站常用超低价吸引付款。"
  },
  {
    "id": "hint-2-12",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "必ず儲かる、暗号資産、投資",
    "answer": "投資詐欺",
    "note": "承诺稳赚的投资信息要警惕。"
  },
  {
    "id": "hint-2-13",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "恋愛感情、送金",
    "answer": "ロマンス詐欺",
    "note": "利用恋爱感情骗取金钱。"
  },
  {
    "id": "hint-2-14",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "QRコード、偽サイト",
    "answer": "QRコード詐欺",
    "note": "二维码可能把用户带到假网站。"
  },
  {
    "id": "hint-2-15",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "家族・友人・官公庁を装う",
    "answer": "なりすまし詐欺",
    "note": "假装成可信身份诱导转账或输入信息。"
  },
  {
    "id": "hint-2-16",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "このメールを○人に送って",
    "answer": "チェーンメール",
    "note": "要求继续转发的邮件。"
  },
  {
    "id": "hint-2-17",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "広告・詐欺・ウイルス付きメール",
    "answer": "迷惑メール",
    "note": "不需要且可能危险的邮件。"
  },
  {
    "id": "hint-2-18",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "夜遅くまでスマホを使い睡眠不足",
    "answer": "健康面への影響",
    "note": "过度使用手机会影响睡眠。"
  },
  {
    "id": "hint-2-19",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "やめたいのにやめられない",
    "answer": "ネット依存",
    "note": "想停止却停不下来是依赖的题眼。"
  },
  {
    "id": "hint-2-20",
    "chapter": "第2章 インターネットでの被害",
    "keyword": "SNSで比較して不安になる",
    "answer": "精神的ストレス",
    "note": "网络使用也可能造成心理压力。"
  },
  {
    "id": "hint-007",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "作品、無断コピー",
    "answer": "著作権",
    "note": "文章、图片、音乐等作品受到保护。"
  },
  {
    "id": "hint-008",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "顔写真、無断投稿",
    "answer": "肖像権",
    "note": "未经本人同意使用照片可能侵害肖像权。"
  },
  {
    "id": "hint-009",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "有名人、広告利用",
    "answer": "パブリシティ権",
    "note": "名人形象有商业价值。"
  },
  {
    "id": "hint-010",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "他人のID、無断ログイン",
    "answer": "不正アクセス禁止法",
    "note": "禁止未经许可登录他人账号。"
  },
  {
    "id": "hint-011",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "一斉送信、メールアドレスを隠す",
    "answer": "BCC",
    "note": "群发邮件时可隐藏收件人地址。"
  },
  {
    "id": "hint-012",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "悪口、デマ、社会的評価低下",
    "answer": "名誉毀損",
    "note": "损害他人社会评价可能构成名誉毁损。"
  },
  {
    "id": "hint-013",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "複数情報源で確認",
    "answer": "情報の偏り対策",
    "note": "不要只相信单一来源。"
  },
  {
    "id": "hint-014",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "ドメイン名、IPアドレス",
    "answer": "DNS",
    "note": "把域名和IP地址对应起来。"
  },
  {
    "id": "hint-015",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "暗号化されたWeb通信",
    "answer": "HTTPS",
    "note": "HTTPS是在HTTP上加入加密。"
  },
  {
    "id": "hint-016",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "メール送信",
    "answer": "SMTP",
    "note": "负责发送邮件。"
  },
  {
    "id": "hint-017",
    "chapter": "第5章 インターネットのしくみ",
    "keyword": "サーバ上でメール管理",
    "answer": "IMAP",
    "note": "邮件保存在服务器上并同步。"
  },
  {
    "id": "hint-018",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "悪意あるソフト総称",
    "answer": "マルウェア",
    "note": "恶意软件的总称。"
  },
  {
    "id": "hint-019",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "自己増殖",
    "answer": "ワーム",
    "note": "蠕虫能自我复制扩散。"
  },
  {
    "id": "hint-020",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "正常ソフトに偽装",
    "answer": "トロイの木馬",
    "note": "伪装成正常软件。"
  },
  {
    "id": "hint-021",
    "chapter": "第6章 コンピュータウイルス",
    "keyword": "暗号化して身代金",
    "answer": "ランサムウェア",
    "note": "加密文件并要求赎金。"
  },
  {
    "id": "hint-022",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "本人確認",
    "answer": "ユーザー認証",
    "note": "确认正在使用的人是不是本人。"
  },
  {
    "id": "hint-023",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "本物のサイト、CA、HTTPS",
    "answer": "電子証明書",
    "note": "证明网站和通信对象的正当性。"
  },
  {
    "id": "hint-024",
    "chapter": "第7章 インターネットセキュリティ",
    "keyword": "知識・所持・生体",
    "answer": "多要素認証",
    "note": "两种以上不同认证要素组合。"
  }
];

// ???????????????????????
const quizzes = [
  {
    "id": "quiz-001",
    "chapter": "第1章 インターネットの基礎",
    "question": "情報やサービスを提供する側のコンピュータを何というか。",
    "answer": "サーバ",
    "explanation": "提供信息或服务的一方是サーバ。",
    "hint": "情報やサービスを提供"
  },
  {
    "id": "quiz-2-01",
    "chapter": "第2章 インターネットでの被害",
    "question": "銀行を装ったメールから偽サイトへ誘導し、IDとパスワードを入力させる詐欺は何か。",
    "answer": "フィッシング詐欺",
    "explanation": "题眼是 偽サイト、ID、パスワード。",
    "hint": "偽サイト、ID、パスワード"
  },
  {
    "id": "quiz-2-02",
    "chapter": "第2章 インターネットでの被害",
    "question": "リンクをクリックしただけで登録完了と料金請求が表示された。これは何か。",
    "answer": "ワンクリック詐欺",
    "explanation": "题眼是 クリック、登録完了、料金請求。",
    "hint": "クリック、登録完了、料金請求"
  },
  {
    "id": "quiz-2-03",
    "chapter": "第2章 インターネットでの被害",
    "question": "使用していないサービスの料金を請求された。これは何か。",
    "answer": "架空請求詐欺",
    "explanation": "使用していないのに請求される点が题眼。",
    "hint": "使用していないのに請求"
  },
  {
    "id": "quiz-2-04",
    "chapter": "第2章 インターネットでの被害",
    "question": "画面にウイルス感染と表示され、電話するよう求められた。これは何か。",
    "answer": "サポート詐欺",
    "explanation": "假警告和电话要求是サポート詐欺的典型题眼。",
    "hint": "ウイルス感染、電話してください"
  },
  {
    "id": "quiz-2-05",
    "chapter": "第2章 インターネットでの被害",
    "question": "必ず儲かると言われ、暗号資産への投資を勧められた。これは何か。",
    "answer": "投資詐欺",
    "explanation": "必ず儲かる、暗号資産、投資が题眼。",
    "hint": "必ず儲かる、投資"
  },
  {
    "id": "quiz-2-06",
    "chapter": "第2章 インターネットでの被害",
    "question": "恋愛感情を利用され、送金を求められた。これは何か。",
    "answer": "ロマンス詐欺",
    "explanation": "恋愛感情と送金が出たらロマンス詐欺。",
    "hint": "恋愛感情、送金"
  },
  {
    "id": "quiz-2-07",
    "chapter": "第2章 インターネットでの被害",
    "question": "広告、詐欺、ウイルス付きの可能性がある不要なメールを何というか。",
    "answer": "迷惑メール",
    "explanation": "不要で危険なメールは迷惑メール。",
    "hint": "広告・詐欺・ウイルス付きメール"
  },
  {
    "id": "quiz-2-08",
    "chapter": "第2章 インターネットでの被害",
    "question": "このメールを10人に送ってくださいと書かれたメールは何か。",
    "answer": "チェーンメール",
    "explanation": "転送を求めるメールはチェーンメール。",
    "hint": "このメールを○人に送って"
  },
  {
    "id": "quiz-2-09",
    "chapter": "第2章 インターネットでの被害",
    "question": "IDやパスワードが外部に漏れる被害を何というか。",
    "answer": "個人情報流出",
    "explanation": "IDやパスワードは個人情報に関係する。",
    "hint": "ID・パスワードが盗まれる"
  },
  {
    "id": "quiz-2-10",
    "chapter": "第2章 インターネットでの被害",
    "question": "やめたいのにネット利用をやめられない状態を何というか。",
    "answer": "ネット依存",
    "explanation": "やめたいのにやめられない点が题眼。",
    "hint": "やめたいのにやめられない"
  },
  {
    "id": "quiz-2-11",
    "chapter": "第2章 インターネットでの被害",
    "question": "夜遅くまでスマホを使い、睡眠不足や目の疲れが出ることは何にあたるか。",
    "answer": "健康面への影響",
    "explanation": "睡眠不足、目の疲れ、肩こりは健康面への影響。",
    "hint": "睡眠不足、目の疲れ"
  },
  {
    "id": "quiz-2-12",
    "chapter": "第2章 インターネットでの被害",
    "question": "怪しい料金請求を受けたときの正しい対応は何か。",
    "answer": "支払わない、連絡しない、相談する",
    "explanation": "一人で判断せず、支払わず、相手に連絡せず、信頼できる人に相談する。",
    "hint": "支払わない、連絡しない、相談する"
  },
  {
    "id": "quiz-005",
    "chapter": "第3章 インターネット関連の法規",
    "question": "他人のイラストを許可なくコピーして自分のサイトに載せた。何の問題か。",
    "answer": "著作権",
    "explanation": "作品の無断コピーなので著作権が問題になる。",
    "hint": "作品、無断コピー"
  },
  {
    "id": "quiz-006",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "複数人にメールを送るとき、互いのメールアドレスを隠したい。使う欄は何か。",
    "answer": "BCC",
    "explanation": "BCCは受信者同士にメールアドレスを見せない送信方法。",
    "hint": "一斉送信、メールアドレスを隠す"
  },
  {
    "id": "quiz-007",
    "chapter": "第5章 インターネットのしくみ",
    "question": "ドメイン名とIPアドレスを対応させる仕組みは何か。",
    "answer": "DNS",
    "explanation": "DNSはドメイン名をIPアドレスに対応させる。",
    "hint": "ドメイン名、IPアドレス"
  },
  {
    "id": "quiz-008",
    "chapter": "第6章 コンピュータウイルス",
    "question": "ファイルを暗号化し、復旧のために金銭を要求するマルウェアは何か。",
    "answer": "ランサムウェア",
    "explanation": "暗号化して身代金を要求する点が题眼。",
    "hint": "暗号化して身代金"
  },
  {
    "id": "quiz-009",
    "chapter": "第7章 インターネットセキュリティ",
    "question": "パスワードとスマホ確認など、異なる種類の認証を組み合わせる方式は何か。",
    "answer": "多要素認証",
    "explanation": "知識、所持、生体のうち2種類以上を組み合わせる。",
    "hint": "知識・所持・生体"
  }
];
