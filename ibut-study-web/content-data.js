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
    "title": "著作権と違法アップロード・ダウンロード",
    "category": "法規",
    "goal": "理解作品受著作権保护，以及违法上传、下载的典型题眼。",
    "jpKeywords": [
      "著作権",
      "無断コピー",
      "違法アップロード",
      "違法ダウンロード"
    ],
    "explanation": "文章、音乐、图片、视频等作品未经许可不能随意复制、上传或下载。",
    "scenario": "网上找到电影文件后，未经许可上传到共享网站。",
    "examHints": [
      "作品",
      "無断コピー",
      "違法アップロード",
      "違法ダウンロード"
    ],
    "confusion": "引用需要符合条件，不能把整篇作品直接复制当成自己的内容。",
    "summary": "作品を勝手に使わない"
  },
  {
    "id": "sec-3-2",
    "chapter": "第3章 インターネット関連の法規",
    "title": "肖像権・パブリシティ権・プライバシーの権利",
    "category": "法規",
    "goal": "区分脸部照片、名人商业价值和私人生活信息的权利。",
    "jpKeywords": [
      "肖像権",
      "パブリシティ権",
      "プライバシーの権利"
    ],
    "explanation": "未经本人同意发布照片可能侵犯肖像権，利用名人形象做广告可能侵犯パブリシティ権。",
    "scenario": "把朋友的脸部照片上传到 SNS，或把有名人的照片放进商品广告。",
    "examHints": [
      "顔写真",
      "有名人",
      "広告利用",
      "私生活"
    ],
    "confusion": "肖像権看脸和照片，パブリシティ権看名人的商业价值。",
    "summary": "顔・有名人・私生活を守る"
  },
  {
    "id": "sec-3-3",
    "chapter": "第3章 インターネット関連の法規",
    "title": "名誉毀損とネット上の発信責任",
    "category": "法規",
    "goal": "理解网络发言可能降低他人社会评价，并承担法律责任。",
    "jpKeywords": [
      "名誉毀損",
      "社会的評価",
      "誹謗中傷",
      "投稿"
    ],
    "explanation": "在网上发布损害他人名誉的内容，即使匿名也可能构成名誉毀損。",
    "scenario": "在论坛写某人偷东西，导致对方社会评价下降。",
    "examHints": [
      "悪口",
      "デマ",
      "社会的評価低下"
    ],
    "confusion": "单纯不满和违法发言不同，关键看是否损害他人社会评价。",
    "summary": "匿名でも発言には責任"
  },
  {
    "id": "sec-3-4",
    "chapter": "第3章 インターネット関連の法規",
    "title": "ネット取引に関する法律",
    "category": "法規",
    "goal": "理解特定商取引法和電子契約法在网络交易中的作用。",
    "jpKeywords": [
      "特定商取引法",
      "電子契約法",
      "通信販売",
      "契約"
    ],
    "explanation": "网络购物需要显示卖家信息和交易条件，电子合同也要保护消费者不被误操作困扰。",
    "scenario": "网店页面没有卖家地址、返品条件和价格说明。",
    "examHints": [
      "通信販売",
      "事業者情報",
      "確認画面",
      "操作ミス"
    ],
    "confusion": "特定商取引法关注销售表示，電子契約法关注电子合同和误操作。",
    "summary": "表示と確認で消費者を守る"
  },
  {
    "id": "sec-3-5",
    "chapter": "第3章 インターネット関連の法規",
    "title": "不正アクセス禁止法と個人情報保護法",
    "category": "法規",
    "goal": "理解非法登录和个人信息处理的基本规则。",
    "jpKeywords": [
      "不正アクセス禁止法",
      "個人情報保護法",
      "他人のID",
      "無断ログイン"
    ],
    "explanation": "未经许可使用他人 ID 登录是违法行为，收集和使用个人信息也必须妥善管理。",
    "scenario": "猜到同学密码后登录其账号，或随意公开顾客名单。",
    "examHints": [
      "他人のID",
      "無断ログイン",
      "個人情報",
      "利用目的"
    ],
    "confusion": "知道密码不代表可以登录，他人账号必须得到许可。",
    "summary": "IDと個人情報を勝手に使わない"
  },
  {
    "id": "sec-3-6",
    "chapter": "第3章 インターネット関連の法規",
    "title": "特定電子メール法とステマ規制",
    "category": "法規",
    "goal": "理解广告邮件和隐藏广告的法律题眼。",
    "jpKeywords": [
      "特定電子メール法",
      "迷惑メール",
      "ステマ規制",
      "広告表示"
    ],
    "explanation": "广告邮件需要遵守发送规则，广告内容也不能伪装成普通评价。",
    "scenario": "企业让网红推荐商品，却不标明这是广告。",
    "examHints": [
      "広告メール",
      "同意",
      "配信停止",
      "広告と隠す"
    ],
    "confusion": "ステマ是隐藏广告身份，普通感想不一定是ステマ。",
    "summary": "広告は広告と分かるように"
  },
  {
    "id": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "個人情報とプライバシーを守る",
    "category": "モラル",
    "goal": "理解网上发布信息时要保护自己和他人的个人信息、隐私。",
    "jpKeywords": [
      "個人情報",
      "プライバシー",
      "公開範囲",
      "位置情報"
    ],
    "explanation": "姓名、地址、照片、位置等信息可能识别个人，发布前要确认公开范围。",
    "scenario": "上传照片时，背景里出现学校名和住址线索。",
    "examHints": [
      "住所",
      "電話番号",
      "位置情報",
      "公開範囲"
    ],
    "confusion": "个人信息是能识别个人的信息，隐私更重视私人生活不被公开。",
    "summary": "出す前に個人情報を確認"
  },
  {
    "id": "sec-4-2",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "誹謗中傷と匿名性",
    "category": "モラル",
    "goal": "理解匿名并不代表可以随意攻击他人。",
    "jpKeywords": [
      "誹謗中傷",
      "匿名性",
      "発信責任",
      "名誉毀損"
    ],
    "explanation": "网络上的恶意攻击会伤害他人，即使匿名也可能被追究责任。",
    "scenario": "用匿名账号在 SNS 上持续写同学坏话。",
    "examHints": [
      "悪口",
      "匿名",
      "社会的評価低下",
      "責任"
    ],
    "confusion": "匿名性可以保护隐私，但不能作为攻击他人的理由。",
    "summary": "匿名でも責任は残る"
  },
  {
    "id": "sec-4-3",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "メールマナーと BCC",
    "category": "モラル",
    "goal": "掌握电子邮件的基本礼仪和 BCC 的使用场景。",
    "jpKeywords": [
      "メールマナー",
      "件名",
      "宛先",
      "CC",
      "BCC"
    ],
    "explanation": "邮件应写清楚主题、对象和正文。多人发送时，保护地址可使用 BCC。",
    "scenario": "给很多人发送通知时，把所有邮箱都放在 To 中导致地址泄露。",
    "examHints": [
      "一斉送信",
      "メールアドレスを隠す",
      "BCC"
    ],
    "confusion": "CC 是让他人可见的抄送，BCC 是隐藏收件人的密件抄送。",
    "summary": "一斉送信は BCC を確認"
  },
  {
    "id": "sec-4-4",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "チャットマナーと炎上",
    "category": "モラル",
    "goal": "理解聊天时的表达礼仪，以及炎上如何发生。",
    "jpKeywords": [
      "チャットマナー",
      "炎上",
      "投稿",
      "感情的表現"
    ],
    "explanation": "短消息容易被误解，冲动发言、攻击性表达和不当投稿可能引发炎上。",
    "scenario": "没有确认事实就发出刺激性评论，被大量批评和扩散。",
    "examHints": [
      "短文",
      "誤解",
      "感情的",
      "炎上"
    ],
    "confusion": "批评可以有根据地表达，攻击和煽动容易造成问题。",
    "summary": "送る前に一呼吸"
  },
  {
    "id": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "デマと情報の偏り",
    "category": "モラル",
    "goal": "理解网络信息可能不准确或偏向，需要多来源确认。",
    "jpKeywords": [
      "デマ",
      "情報の偏り",
      "複数情報源",
      "確認"
    ],
    "explanation": "网络信息不一定正确，可能是谣言、误传或只呈现一方观点。",
    "scenario": "看到刺激性消息后没有查证就转发给朋友。",
    "examHints": [
      "デマ",
      "複数情報源",
      "公式情報",
      "偏り"
    ],
    "confusion": "热门信息不一定正确，转发前要查证。",
    "summary": "信じる前に確認"
  },
  {
    "id": "sec-4-6",
    "chapter": "第4章 インターネット利用者のモラル",
    "title": "生成AI内容确认",
    "category": "モラル",
    "goal": "理解生成 AI 输出需要人工确认，不能直接当作事实。",
    "jpKeywords": [
      "生成AI",
      "内容确认",
      "誤情報",
      "出典確認"
    ],
    "explanation": "生成 AI 可能输出错误、过时或偏向的信息，使用前要确认来源和事实。",
    "scenario": "把 AI 生成的说明直接提交，里面含有不存在的法律名称。",
    "examHints": [
      "AI",
      "誤情報",
      "出典",
      "人が確認"
    ],
    "confusion": "AI 能辅助整理，但最终确认责任在人。",
    "summary": "AIの答えも確認する"
  },
  {
    "id": "sec-5-1",
    "chapter": "第5章 インターネットのしくみ",
    "title": "Web・URL・ブラウザ",
    "category": "しくみ",
    "goal": "理解 Web、URL、浏览器的概念和基本工作原理。",
    "jpKeywords": ["Web", "WWW", "ブラウザ", "URL", "プロトコル"],
    "explanation": "Web 是互联网上发布和浏览信息的系统。URL 是资源的地址，浏览器是访问 Web 的工具。",
    "scenario": "在浏览器地址栏输入 URL 访问网站。",
    "examHints": ["ブラウザ", "URL", "Webページ"],
    "confusion": "Web 和 HTTP 不同，Web 是浏览系统，HTTP 是传输协议。",
    "summary": "URLでブラウザがページを取得"
  },
  {
    "id": "sec-5-2",
    "chapter": "第5章 インターネットのしくみ",
    "title": "DNS・IPアドレス",
    "category": "しくみ",
    "goal": "理解 DNS 域名系统和 IP 地址的作用。",
    "jpKeywords": ["DNS", "IPアドレス", "ドメイン名", "名前解決", "サーバ"],
    "explanation": "DNS 将域名转换为 IP 地址，方便用户访问网站而不需要记忆数字。",
    "scenario": "输入 www.example.com 访问网站，实际访问的是 IP 地址。",
    "examHints": ["ドメイン", "名前解決", "DNSサーバ"],
    "confusion": "DNS 不是存储网站的地方，而是翻译域名的地方。",
    "summary": "ドメインをIP地址に変換"
  },
  {
    "id": "sec-5-3",
    "chapter": "第5章 インターネットのしくみ",
    "title": "HTTP・HTTPS",
    "category": "しくみ",
    "goal": "理解 HTTP 和 HTTPS 的区别，以及加密通信的重要性。",
    "jpKeywords": ["HTTP", "HTTPS", "暗号化", "SSL", "TLS", "通信暗号化"],
    "explanation": "HTTP 是明文传输协议，HTTPS 在 HTTP 基础上加入 SSL/TLS 加密，保护隐私和通信安全。",
    "scenario": "输入密码登录时，看到锁图标表示 HTTPS 加密。",
    "examHints": ["鍵アイコン", "暗号化", "SSL", "プライバシー保護"],
    "confusion": "HTTPS 不是绝对安全，但比 HTTP 安全得多。",
    "summary": "重要な通信はHTTPSで確認"
  },
  {
    "id": "sec-5-4",
    "chapter": "第5章 インターネットのしくみ",
    "title": "電子メールのしくみ",
    "category": "しくみ",
    "goal": "理解邮件发送协议（SMTP）和接收协议（POP3/IMAP）的区别。",
    "jpKeywords": ["SMTP", "POP3", "IMAP", "メールクライアント", "メールサーバ"],
    "explanation": "SMTP 用于发送邮件，POP3 用于下载邮件到本地，IMAP 用于在服务器上管理邮件。",
    "scenario": "手机和电脑同时查邮件，用 IMAP 保持同步。",
    "examHints": ["送信", "受信", "同期", "POP3", "IMAP"],
    "confusion": "POP3 下载后服务器可能删除邮件，IMAP 则在服务器保留。",
    "summary": "送信用SMTP、受信用POP3かIMAP"
  },
  {
    "id": "sec-5-5",
    "chapter": "第5章 インターネットのしくみ",
    "title": "SNS・CGM",
    "category": "しくみ",
    "goal": "理解 SNS 和 CGM 的特征，以及网络上的信息发布责任。",
    "jpKeywords": ["SNS", "CGM", "ソーシャルメディア", "投稿", "炎上"],
    "explanation": "SNS 是社交网络服务，CGM 是用户生成内容的媒体。任何人都可以发布信息，需要注意礼仪和责任。",
    "scenario": "在 SNS 上发帖，可能被大量转发或引发炎上。",
    "examHints": ["ソーシャルメディア", "投稿", "広がり", "炎上"],
    "confusion": "SNS 是平台，CGM 是内容的性质，两者不同但常一起讨论。",
    "summary": "SNSでの投稿は自己責任"
  },
  {
    "id": "sec-5-6",
    "chapter": "第5章 インターネットのしくみ",
    "title": "Wi-Fi・クラウドサービス",
    "category": "しくみ",
    "goal": "理解 Wi-Fi 的安全设置和云服务的使用注意事项。",
    "jpKeywords": ["Wi-Fi", "SSID", "WPA2", "WPA3", "クラウドサービス", "データ保存"],
    "explanation": "Wi-Fi 使用 SSID 识别网络，WPA2/WPA3 是加密标准。公共 Wi-Fi 需要谨慎使用。云服务将数据保存在网络服务器上。",
    "scenario": "在咖啡店使用公共 Wi-Fi 访问网银账号。",
    "examHints": ["公共Wi-Fi", "暗号化なし", "SSID", "WPA", "クラウド的风险"],
    "confusion": "WPA3 比 WPA2 更安全，但都需要设置强密码。",
    "summary": "公共Wi-Fi利用は暗号化確認"
  },
  {
    "id": "sec-5-7",
    "chapter": "第5章 インターネットのしくみ",
    "title": "生成AIとプロンプト",
    "category": "しくみ",
    "goal": "理解生成 AI 的输入（プロンプト）和输出的关系，以及需要注意的事项。",
    "jpKeywords": ["生成AI", "プロンプト", "ChatGPT", "画像生成", "文章生成"],
    "explanation": "生成 AI 根据输入的プロンプト生成文本或图像。输入越具体，输出越符合需求。输出需要人工确认，不能直接当作事实。",
    "scenario": "输入「帮我写一封邮件」，AI 生成后需要检查内容是否合适。",
    "examHints": ["プロンプト", "具体性", "確認が必要", "AIの限界"],
    "confusion": "生成 AI 不理解真实世界，只是根据训练数据生成看似合理的内容。",
    "summary": "AIの答えは人が確認"
  },
  {
    "id": "sec-6-1",
    "chapter": "第6章 コンピュータウイルス",
    "title": "マルウェアとは",
    "category": "ウイルス",
    "goal": "理解マルウェア的定义和常见类型。",
    "jpKeywords": ["マルウェア", "ウイルス", "ワーム", "トロイの木馬", "スパイウェア", "ランサムウェア"],
    "explanation": "マルウェア 是恶意软件的统称，包括病毒、蠕虫、木马、间谍软件、勒索软件等。",
    "scenario": "电脑运行变慢，弹出广告，可能是マルウェア 感染。",
    "examHints": ["マルウェア", "悪意あるソフト", "種類"],
    "confusion": "マルウェア 是总称，各种具体类型有不同特征。",
    "summary": "マルウェアは悪意あるソフトの総称"
  },
  {
    "id": "sec-6-2",
    "chapter": "第6章 コンピュータウイルス",
    "title": "ウイルス・ワーム・トロイの木馬",
    "category": "ウイルス",
    "goal": "理解病毒、蠕虫和木马的区别。",
    "jpKeywords": ["ウイルス", "ワーム", "トロイの木馬", "自己複製", "潜伏"],
    "explanation": "病毒需要附在宿主程序上，蠕虫可以自我复制传播，木马伪装成有用程序暗中运行。",
    "scenario": "打开邮件附件后，电脑开始自动向联系人发送文件。",
    "examHints": ["宿主が必要", "自己複製", "偽装"],
    "confusion": "病毒需要宿主，蠕虫不需要；木马不是病毒但同样危险。",
    "summary": "ウイルスは宿主、蠕虫は自己複製、木马は偽装"
  },
  {
    "id": "sec-6-3",
    "chapter": "第6章 コンピュータウイルス",
    "title": "スパイウェア・ランサムウェア",
    "category": "ウイルス",
    "goal": "理解间谍软件和勒索软件的特点和危害。",
    "jpKeywords": ["スパイウェア", "ランサムウェア", "身代金", "暗号化", "情報窃取"],
    "explanation": "间谍软件窃取个人信息，勒索软件加密文件并索要赎金。",
    "scenario": "文件被加密无法打开，屏幕上显示「支付赎金恢复文件」。",
    "examHints": ["ファイル暗号化", "身代金", "情報流出"],
    "confusion": "间谍软件不锁文件，只偷信息；勒索软件会锁文件。",
    "summary": "スパイは偷情報、勒索は锁文件"
  },
  {
    "id": "sec-6-4",
    "chapter": "第6章 コンピュータウイルス",
    "title": "感染経路",
    "category": "ウイルス",
    "goal": "了解恶意软件的常见感染途径。",
    "jpKeywords": ["感染経路", "メール添付", "不正サイト", "USB", "脆弱性"],
    "explanation": "感染途径包括：邮件附件、不良网站、可移动媒体、系统漏洞等。",
    "scenario": "插入他人给的 U 盘后电脑出现异常。",
    "examHints": ["添付ファイル", "不信な网站", "USB", "OS更新"],
    "confusion": "不只是网站，邮件、U 盘、假冒软件都可能感染。",
    "summary": "多种経路で感染する"
  },
  {
    "id": "sec-6-5",
    "chapter": "第6章 コンピュータウイルス",
    "title": "感染防止",
    "category": "ウイルス",
    "goal": "掌握预防病毒感染的基本措施。",
    "jpKeywords": ["感染防止", "OS更新", "アンチウイルス", "パスワード管理", "バックアップ", "注意喚起"],
    "explanation": "防止感染的方法包括：保持系统和软件更新、使用杀毒软件、不打开可疑附件、不安装未知软件、使用强密码、定期备份。",
    "scenario": "收到「您的电脑已感染，点击这里修复」的弹窗，点击后反而感染了。",
    "examHints": ["OS更新", "怪しい添付を開かない", "バックアップ", "パスワードの使い回し防止"],
    "confusion": "防病毒软件不能 100% 防护，综合措施更重要。",
    "summary": "更新・バックアップ・確認の三点"
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
    "id": "term-3-copyright",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "著作権",
    "reading": "ちょさくけん",
    "zh": "著作权",
    "en": "copyright",
    "hint": "作品、無断コピー"
  },
  {
    "id": "term-3-work",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "著作物",
    "reading": "ちょさくぶつ",
    "zh": "作品",
    "en": "creative work",
    "hint": "文章、音楽、画像、動画"
  },
  {
    "id": "term-3-quote",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "引用",
    "reading": "いんよう",
    "zh": "引用",
    "en": "quotation",
    "hint": "出典、必要な範囲"
  },
  {
    "id": "term-3-illegal-download",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "違法ダウンロード",
    "reading": "いほうダウンロード",
    "zh": "违法下载",
    "en": "illegal download",
    "hint": "違法配信と知って保存"
  },
  {
    "id": "term-3-illegal-upload",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "違法アップロード",
    "reading": "いほうアップロード",
    "zh": "违法上传",
    "en": "illegal upload",
    "hint": "無断で公開"
  },
  {
    "id": "term-3-pirated-copy",
    "sectionId": "sec-3-1",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "海賊版",
    "reading": "かいぞくばん",
    "zh": "盗版",
    "en": "pirated copy",
    "hint": "無断複製されたもの"
  },
  {
    "id": "term-3-portrait-rights",
    "sectionId": "sec-3-2",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "肖像権",
    "reading": "しょうぞうけん",
    "zh": "肖像权",
    "en": "portrait rights",
    "hint": "顔写真、無断投稿"
  },
  {
    "id": "term-3-publicity-rights",
    "sectionId": "sec-3-2",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "パブリシティ権",
    "reading": "パブリシティけん",
    "zh": "公开权、名人商业价值权",
    "en": "publicity rights",
    "hint": "有名人、広告利用"
  },
  {
    "id": "term-3-privacy-rights",
    "sectionId": "sec-3-2",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "プライバシーの権利",
    "reading": "プライバシーのけんり",
    "zh": "隐私权",
    "en": "right to privacy",
    "hint": "私生活、無断公開"
  },
  {
    "id": "term-3-consent",
    "sectionId": "sec-3-2",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "同意",
    "reading": "どうい",
    "zh": "同意",
    "en": "consent",
    "hint": "本人の許可"
  },
  {
    "id": "term-3-defamation",
    "sectionId": "sec-3-3",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "名誉毀損",
    "reading": "めいよきそん",
    "zh": "名誉毁损",
    "en": "defamation",
    "hint": "社会的評価低下"
  },
  {
    "id": "term-3-social-reputation",
    "sectionId": "sec-3-3",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "社会的評価",
    "reading": "しゃかいてきひょうか",
    "zh": "社会评价",
    "en": "social reputation",
    "hint": "他人からの評価"
  },
  {
    "id": "term-3-abuse",
    "sectionId": "sec-3-3",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "誹謗中傷",
    "reading": "ひぼうちゅうしょう",
    "zh": "诽谤中伤",
    "en": "online abuse",
    "hint": "悪口、攻撃的投稿"
  },
  {
    "id": "term-3-specific-commercial-transaction-law",
    "sectionId": "sec-3-4",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "特定商取引法",
    "reading": "とくていしょうとりひきほう",
    "zh": "特定商业交易法",
    "en": "Specified Commercial Transactions Act",
    "hint": "通信販売、事業者表示"
  },
  {
    "id": "term-3-electronic-contract-law",
    "sectionId": "sec-3-4",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "電子契約法",
    "reading": "でんしけいやくほう",
    "zh": "电子合同法",
    "en": "Electronic Contract Act",
    "hint": "確認画面、操作ミス"
  },
  {
    "id": "term-3-online-shopping",
    "sectionId": "sec-3-4",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "通信販売",
    "reading": "つうしんはんばい",
    "zh": "通信销售、网购",
    "en": "mail order sales",
    "hint": "ネット販売"
  },
  {
    "id": "term-3-cooling-off",
    "sectionId": "sec-3-4",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "返品条件",
    "reading": "へんぴんじょうけん",
    "zh": "退货条件",
    "en": "return policy",
    "hint": "返品できる条件"
  },
  {
    "id": "term-3-unauthorized-access-law",
    "sectionId": "sec-3-5",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "不正アクセス禁止法",
    "reading": "ふせいアクセスきんしほう",
    "zh": "禁止非法访问法",
    "en": "Unauthorized Computer Access Law",
    "hint": "他人のID、無断ログイン"
  },
  {
    "id": "term-3-unauthorized-login",
    "sectionId": "sec-3-5",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "無断ログイン",
    "reading": "むだんログイン",
    "zh": "未经许可登录",
    "en": "unauthorized login",
    "hint": "許可なくログイン"
  },
  {
    "id": "term-3-personal-information-protection-law",
    "sectionId": "sec-3-5",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "個人情報保護法",
    "reading": "こじんじょうほうほごほう",
    "zh": "个人信息保护法",
    "en": "Personal Information Protection Act",
    "hint": "個人情報、利用目的"
  },
  {
    "id": "term-3-purpose-of-use",
    "sectionId": "sec-3-5",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "利用目的",
    "reading": "りようもくてき",
    "zh": "使用目的",
    "en": "purpose of use",
    "hint": "何のために使うか"
  },
  {
    "id": "term-3-specified-email-law",
    "sectionId": "sec-3-6",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "特定電子メール法",
    "reading": "とくていでんしメールほう",
    "zh": "特定电子邮件法",
    "en": "Specified Electronic Mail Act",
    "hint": "広告メール、配信停止"
  },
  {
    "id": "term-3-advertising-email",
    "sectionId": "sec-3-6",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "広告メール",
    "reading": "こうこくメール",
    "zh": "广告邮件",
    "en": "advertising email",
    "hint": "宣伝目的のメール"
  },
  {
    "id": "term-3-opt-out",
    "sectionId": "sec-3-6",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "配信停止",
    "reading": "はいしんていし",
    "zh": "停止发送",
    "en": "unsubscribe",
    "hint": "メールを止める"
  },
  {
    "id": "term-3-stealth-marketing",
    "sectionId": "sec-3-6",
    "chapter": "第3章 インターネット関連の法規",
    "jp": "ステマ規制",
    "reading": "ステマきせい",
    "zh": "隐形广告规制",
    "en": "stealth marketing regulation",
    "hint": "広告と隠す"
  },
  {
    "id": "term-4-personal-information",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "個人情報",
    "reading": "こじんじょうほう",
    "zh": "个人信息",
    "en": "personal information",
    "hint": "氏名、住所、電話番号"
  },
  {
    "id": "term-4-privacy",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "プライバシー",
    "reading": "プライバシー",
    "zh": "隐私",
    "en": "privacy",
    "hint": "私生活、知られたくない情報"
  },
  {
    "id": "term-4-public-range",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "公開範囲",
    "reading": "こうかいはんい",
    "zh": "公开范围",
    "en": "visibility range",
    "hint": "誰に見えるか"
  },
  {
    "id": "term-4-location-information",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "位置情報",
    "reading": "いちじょうほう",
    "zh": "位置信息",
    "en": "location information",
    "hint": "写真や投稿の場所"
  },
  {
    "id": "term-4-account",
    "sectionId": "sec-4-1",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "アカウント",
    "reading": "アカウント",
    "zh": "账号",
    "en": "account",
    "hint": "利用者を識別する"
  },
  {
    "id": "term-4-online-abuse",
    "sectionId": "sec-4-2",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "誹謗中傷",
    "reading": "ひぼうちゅうしょう",
    "zh": "诽谤中伤",
    "en": "online abuse",
    "hint": "悪口、攻撃的投稿"
  },
  {
    "id": "term-4-anonymity",
    "sectionId": "sec-4-2",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "匿名性",
    "reading": "とくめいせい",
    "zh": "匿名性",
    "en": "anonymity",
    "hint": "名前を出さない性質"
  },
  {
    "id": "term-4-posting-responsibility",
    "sectionId": "sec-4-2",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "発信責任",
    "reading": "はっしんせきにん",
    "zh": "发布责任",
    "en": "responsibility for posting",
    "hint": "投稿した人の責任"
  },
  {
    "id": "term-4-defamation",
    "sectionId": "sec-4-2",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "名誉毀損",
    "reading": "めいよきそん",
    "zh": "名誉毁损",
    "en": "defamation",
    "hint": "社会的評価低下"
  },
  {
    "id": "term-4-block",
    "sectionId": "sec-4-2",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "ブロック",
    "reading": "ブロック",
    "zh": "屏蔽",
    "en": "block",
    "hint": "相手との接触を止める"
  },
  {
    "id": "term-4-email-manners",
    "sectionId": "sec-4-3",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "メールマナー",
    "reading": "メールマナー",
    "zh": "邮件礼仪",
    "en": "email etiquette",
    "hint": "件名、本文、宛先"
  },
  {
    "id": "term-4-subject",
    "sectionId": "sec-4-3",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "件名",
    "reading": "けんめい",
    "zh": "邮件主题",
    "en": "subject",
    "hint": "メールの題名"
  },
  {
    "id": "term-4-to",
    "sectionId": "sec-4-3",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "宛先",
    "reading": "あてさき",
    "zh": "收件人",
    "en": "recipient",
    "hint": "送る相手"
  },
  {
    "id": "term-4-cc",
    "sectionId": "sec-4-3",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "CC",
    "reading": "シーシー",
    "zh": "抄送",
    "en": "carbon copy",
    "hint": "見える控え送信"
  },
  {
    "id": "term-4-bcc",
    "sectionId": "sec-4-3",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "BCC",
    "reading": "ビーシーシー",
    "zh": "密件抄送",
    "en": "blind carbon copy",
    "hint": "メールアドレスを隠す"
  },
  {
    "id": "term-4-chat-manners",
    "sectionId": "sec-4-4",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "チャットマナー",
    "reading": "チャットマナー",
    "zh": "聊天礼仪",
    "en": "chat etiquette",
    "hint": "短文、誤解に注意"
  },
  {
    "id": "term-4-flaming",
    "sectionId": "sec-4-4",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "炎上",
    "reading": "えんじょう",
    "zh": "网络炎上、舆论爆发",
    "en": "online backlash",
    "hint": "批判が集中して広がる"
  },
  {
    "id": "term-4-post",
    "sectionId": "sec-4-4",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "投稿",
    "reading": "とうこう",
    "zh": "发帖、投稿",
    "en": "post",
    "hint": "SNSに書き込む"
  },
  {
    "id": "term-4-emotional-expression",
    "sectionId": "sec-4-4",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "感情的表現",
    "reading": "かんじょうてきひょうげん",
    "zh": "情绪化表达",
    "en": "emotional expression",
    "hint": "強い言葉、怒り"
  },
  {
    "id": "term-4-rumor",
    "sectionId": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "デマ",
    "reading": "デマ",
    "zh": "谣言",
    "en": "false rumor",
    "hint": "根拠がない情報"
  },
  {
    "id": "term-4-information-bias",
    "sectionId": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "情報の偏り",
    "reading": "じょうほうのかたより",
    "zh": "信息偏向",
    "en": "information bias",
    "hint": "一方だけの情報"
  },
  {
    "id": "term-4-multiple-sources",
    "sectionId": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "複数情報源",
    "reading": "ふくすうじょうほうげん",
    "zh": "多个信息来源",
    "en": "multiple sources",
    "hint": "別の情報でも確認"
  },
  {
    "id": "term-4-official-information",
    "sectionId": "sec-4-5",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "公式情報",
    "reading": "こうしきじょうほう",
    "zh": "官方信息",
    "en": "official information",
    "hint": "官公庁、公式サイト"
  },
  {
    "id": "term-4-generative-ai",
    "sectionId": "sec-4-6",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "生成AI",
    "reading": "せいせいエーアイ",
    "zh": "生成式 AI",
    "en": "generative AI",
    "hint": "文章や画像を生成"
  },
  {
    "id": "term-4-ai-content-check",
    "sectionId": "sec-4-6",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "内容确认",
    "reading": "ないようかくにん",
    "zh": "内容确认",
    "en": "content verification",
    "hint": "人が確認する"
  },
  {
    "id": "term-4-misinformation",
    "sectionId": "sec-4-6",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "誤情報",
    "reading": "ごじょうほう",
    "zh": "错误信息",
    "en": "misinformation",
    "hint": "正しくない情報"
  },
  {
    "id": "term-4-source-check",
    "sectionId": "sec-4-6",
    "chapter": "第4章 インターネット利用者のモラル",
    "jp": "出典確認",
    "reading": "しゅってんかくにん",
    "zh": "出处确认",
    "en": "source checking",
    "hint": "根拠を確認"
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
  { "id": "term-5-web", "sectionId": "sec-5-1", "chapter": "第5章 インターネットのしくみ", "jp": "Web", "reading": "ウェブ", "zh": "万维网", "en": "World Wide Web", "hint": "インターネット上の情報閲覧システム" },
  { "id": "term-5-www", "sectionId": "sec-5-1", "chapter": "第5章 インターネットのしくみ", "jp": "WWW", "reading": "ダブリューダブリューダブリュー", "zh": "万维网", "en": "World Wide Web", "hint": "Webの正式名称" },
  { "id": "term-5-browser", "sectionId": "sec-5-1", "chapter": "第5章 インターネットのしくみ", "jp": "ブラウザ", "reading": "ブラウザ", "zh": "浏览器", "en": "browser", "hint": "Webページを閲覧するソフト" },
  { "id": "term-5-url", "sectionId": "sec-5-1", "chapter": "第5章 インターネットのしくみ", "jp": "URL", "reading": "ユーアーエル", "zh": "统一资源定位符", "en": "Uniform Resource Locator", "hint": "Web資源の住所" },
  { "id": "term-5-protocol", "sectionId": "sec-5-1", "chapter": "第5章 インターネットのしくみ", "jp": "プロトコル", "reading": "プロトコル", "zh": "协议", "en": "protocol", "hint": "通信の約束事" },
  { "id": "term-5-dns", "sectionId": "sec-5-2", "chapter": "第5章 インターネットのしくみ", "jp": "DNS", "reading": "ディーエヌエス", "zh": "域名系统", "en": "Domain Name System", "hint": "ドメインをIPに変換" },
  { "id": "term-5-ip-address", "sectionId": "sec-5-2", "chapter": "第5章 インターネットのしくみ", "jp": "IPアドレス", "reading": "アイピーアドレス", "zh": "IP 地址", "en": "IP address", "hint": "计算机の住所" },
  { "id": "term-5-domain", "sectionId": "sec-5-2", "chapter": "第5章 インターネットのしくみ", "jp": "ドメイン名", "reading": "ドメインめい", "zh": "域名", "en": "domain name", "hint": "例：example.com" },
  { "id": "term-5-name-resolution", "sectionId": "sec-5-2", "chapter": "第5章 インターネットのしくみ", "jp": "名前解決", "reading": "なまえかいけつ", "zh": "名称解析", "en": "name resolution", "hint": "ドメインをIPに変換" },
  { "id": "term-5-ssl", "sectionId": "sec-5-3", "chapter": "第5章 インターネットのしくみ", "jp": "SSL", "reading": "エスエルエル", "zh": "安全套接层", "en": "Secure Sockets Layer", "hint": "通信暗号化技術" },
  { "id": "term-5-tls", "sectionId": "sec-5-3", "chapter": "第5章 インターネットのしくみ", "jp": "TLS", "reading": "ティーエルエス", "zh": "传输层安全", "en": "Transport Layer Security", "hint": "SSLの後継暗号化プロトコル" },
  { "id": "term-5-pop3", "sectionId": "sec-5-4", "chapter": "第5章 インターネットのしくみ", "jp": "POP3", "reading": "ポップスリー", "zh": "邮局协议第三版", "en": "Post Office Protocol 3", "hint": "メール受信、ダウンロード" },
  { "id": "term-5-mail-client", "sectionId": "sec-5-4", "chapter": "第5章 インターネットのしくみ", "jp": "メールクライアント", "reading": "メールクライアント", "zh": "邮件客户端", "en": "mail client", "hint": "メールを送るソフト" },
  { "id": "term-5-sns", "sectionId": "sec-5-5", "chapter": "第5章 インターネットのしくみ", "jp": "SNS", "reading": "エスエヌエス", "zh": "社交网络服务", "en": "Social Networking Service", "hint": "交流・共有のプラットフォーム" },
  { "id": "term-5-cgm", "sectionId": "sec-5-5", "chapter": "第5章 インターネットのしくみ", "jp": "CGM", "reading": "シージーエム", "zh": "消费者生成媒体", "en": "Consumer Generated Media", "hint": "利用者が内容を生成" },
  { "id": "term-5-social-media", "sectionId": "sec-5-5", "chapter": "第5章 インターネットのしくみ", "jp": "ソーシャルメディア", "reading": "ソーシャルメディア", "zh": "社交媒体", "en": "social media", "hint": "SNS的总称" },
  { "id": "term-5-wifi", "sectionId": "sec-5-6", "chapter": "第5章 インターネットのしくみ", "jp": "Wi-Fi", "reading": "ワイファイ", "zh": "无线网络", "en": "Wi-Fi", "hint": "无线LAN" },
  { "id": "term-5-ssid", "sectionId": "sec-5-6", "chapter": "第5章 インターネットのしくみ", "jp": "SSID", "reading": "エスエスアイディー", "zh": "服务集标识符", "en": "Service Set Identifier", "hint": "Wi-Fi网络的名称" },
  { "id": "term-5-wpa2", "sectionId": "sec-5-6", "chapter": "第5章 インターネットのしくみ", "jp": "WPA2", "reading": "ダブリューーピー・エー・ツー", "zh": "Wi-Fi 保护访问 2", "en": "Wi-Fi Protected Access 2", "hint": "Wi-Fi暗号化方式" },
  { "id": "term-5-wpa3", "sectionId": "sec-5-6", "chapter": "第5章 インターネットのしくみ", "jp": "WPA3", "reading": "ダブリューーピー・エー・スリー", "zh": "Wi-Fi 保护访问 3", "en": "Wi-Fi Protected Access 3", "hint": "WPA2の改良版、より安全" },
  { "id": "term-5-cloud", "sectionId": "sec-5-6", "chapter": "第5章 インターネットのしくみ", "jp": "クラウドサービス", "reading": "クラウドサービス", "zh": "云服务", "en": "cloud service", "hint": "网络上のデータ保存" },
  { "id": "term-5-generative-ai", "sectionId": "sec-5-7", "chapter": "第5章 インターネットのしくみ", "jp": "生成AI", "reading": "せいせいエーアイ", "zh": "生成式 AI", "en": "generative AI", "hint": "文章や画像を生成" },
  { "id": "term-5-prompt", "sectionId": "sec-5-7", "chapter": "第5章 インターネットのしくみ", "jp": "プロンプト", "reading": "プロンプト", "zh": "提示词、输入指令", "en": "prompt", "hint": "AIへの入力指示" },
  { "id": "term-5-chatgpt", "sectionId": "sec-5-7", "chapter": "第5章 インターネットのしくみ", "jp": "ChatGPT", "reading": "チャットジーティーピー", "zh": "ChatGPT", "en": "ChatGPT", "hint": "OpenAIの生成AIサービス" },
  { "id": "term-6-self-replication", "sectionId": "sec-6-2", "chapter": "第6章 コンピュータウイルス", "jp": "自己複製", "reading": "じこふくせい", "zh": "自我复制", "en": "self-replication", "hint": "自身をコピーして広がる" },
  { "id": "term-6-host", "sectionId": "sec-6-2", "chapter": "第6章 コンピュータウイルス", "jp": "宿主", "reading": "しゅくしゅく", "zh": "宿主", "en": "host", "hint": "ウイルスが寄生するファイル" },
  { "id": "term-6-disguise", "sectionId": "sec-6-2", "chapter": "第6章 コンピュータウイルス", "jp": "偽装", "reading": "ぎそう", "zh": "伪装", "en": "disguise", "hint": "无害なソフトに成り済ます" },
  { "id": "term-6-backdoor", "sectionId": "sec-6-2", "chapter": "第6章 コンピュータウイルス", "jp": "バックドア", "reading": "バックドア", "zh": "后门", "en": "backdoor", "hint": "不正アクセス用の裏口" },
  { "id": "term-6-ransom", "sectionId": "sec-6-3", "chapter": "第6章 コンピュータウイルス", "jp": "身代金", "reading": "みのしろきん", "zh": "赎金", "en": "ransom", "hint": "ファイルを恢复するための支払い" },
  { "id": "term-6-file-encryption", "sectionId": "sec-6-3", "chapter": "第6章 コンピュータウイルス", "jp": "ファイル暗号化", "reading": "ファイルあんごうか", "zh": "文件加密", "en": "file encryption", "hint": "ファイルを読み取り不能にする" },
  { "id": "term-6-infection-route", "sectionId": "sec-6-4", "chapter": "第6章 コンピュータウイルス", "jp": "感染経路", "reading": "かんせんけいろ", "zh": "感染途径", "en": "infection route", "hint": "ウイルスが侵入する道筋" },
  { "id": "term-6-email-attachment", "sectionId": "sec-6-4", "chapter": "第6章 コンピュータウイルス", "jp": "メール添付", "reading": "メールてんぷ", "zh": "邮件附件", "en": "email attachment", "hint": "メールに付けたファイル" },
  { "id": "term-6-usb", "sectionId": "sec-6-4", "chapter": "第6章 コンピュータウイルス", "jp": "USB", "reading": "ユーアンドイーピー", "zh": "USB", "en": "USB", "hint": "USBメモリなどの外部記憶装置" },
  { "id": "term-6-vulnerability", "sectionId": "sec-6-4", "chapter": "第6章 コンピュータウイルス", "jp": "脆弱性", "reading": "ぜじゃくせい", "zh": "漏洞", "en": "vulnerability", "hint": "ソフトウェアのセキュリティ欠陥" },
  { "id": "term-6-antivirus", "sectionId": "sec-6-5", "chapter": "第6章 コンピュータウイルス", "jp": "アンチウイルスソフト", "reading": "アンチウイルスソフト", "zh": "杀毒软件", "en": "antivirus software", "hint": "病毒を检测・除去するソフト" },
  { "id": "term-6-backup", "sectionId": "sec-6-5", "chapter": "第6章 コンピュータウイルス", "jp": "バックアップ", "reading": "バックアップ", "zh": "备份", "en": "backup", "hint": "データのコピー保存" },
  { "id": "term-6-password-reuse", "sectionId": "sec-6-5", "chapter": "第6章 コンピュータウイルス", "jp": "パスワード使い回し", "reading": "パスワードつかいまわし", "zh": "密码重复使用", "en": "password reuse", "hint": "同じ密码用于多个账号" },
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
  },
  {
    "id": "hint-3-001",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "作品、無断コピー",
    "answer": "著作権",
    "note": "作品を許可なくコピーすると問題になる。"
  },
  {
    "id": "hint-3-002",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "文章、音楽、画像、動画",
    "answer": "著作物",
    "note": "創作された作品を指す。"
  },
  {
    "id": "hint-3-003",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "出典、必要な範囲",
    "answer": "引用",
    "note": "出典を示し、必要な範囲で使う。"
  },
  {
    "id": "hint-3-004",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "無断で公開、アップロード",
    "answer": "違法アップロード",
    "note": "他人の作品を勝手に公開しない。"
  },
  {
    "id": "hint-3-005",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "違法配信と知って保存",
    "answer": "違法ダウンロード",
    "note": "違法な配信と知って保存する点が题眼。"
  },
  {
    "id": "hint-3-006",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "顔写真、無断投稿",
    "answer": "肖像権",
    "note": "顔写真を勝手に公開しない。"
  },
  {
    "id": "hint-3-007",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "有名人、広告利用",
    "answer": "パブリシティ権",
    "note": "有名人の商业价值を守る権利。"
  },
  {
    "id": "hint-3-008",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "私生活、住所、病歴、無断公開",
    "answer": "プライバシーの権利",
    "note": "私人生活信息不能随意公开。"
  },
  {
    "id": "hint-3-009",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "本人の許可",
    "answer": "同意",
    "note": "照片和个人信息常需要本人同意。"
  },
  {
    "id": "hint-3-010",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "悪口、デマ、社会的評価低下",
    "answer": "名誉毀損",
    "note": "降低他人社会评价可能构成名誉毁损。"
  },
  {
    "id": "hint-3-011",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "匿名でも投稿責任",
    "answer": "ネット上の発信責任",
    "note": "匿名并不等于没有责任。"
  },
  {
    "id": "hint-3-012",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "通信販売、事業者情報",
    "answer": "特定商取引法",
    "note": "网店要清楚显示交易条件和卖家信息。"
  },
  {
    "id": "hint-3-013",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "確認画面、操作ミス",
    "answer": "電子契約法",
    "note": "电子合同中保护消费者误操作。"
  },
  {
    "id": "hint-3-014",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "ネット販売、返品条件",
    "answer": "通信販売",
    "note": "网络销售要确认价格、返品条件等。"
  },
  {
    "id": "hint-3-015",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "他人のID、無断ログイン",
    "answer": "不正アクセス禁止法",
    "note": "未经许可登录他人账号是违法。"
  },
  {
    "id": "hint-3-016",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "パスワードを教える、不正利用",
    "answer": "不正アクセスにつながる行為",
    "note": "帮助他人非法登录也有风险。"
  },
  {
    "id": "hint-3-017",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "個人情報、利用目的",
    "answer": "個人情報保護法",
    "note": "个人信息要按目的妥善处理。"
  },
  {
    "id": "hint-3-018",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "氏名、住所、電話番号",
    "answer": "個人情報",
    "note": "能识别个人的信息。"
  },
  {
    "id": "hint-3-019",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "広告メール、同意、配信停止",
    "answer": "特定電子メール法",
    "note": "广告邮件要遵守发送和停止规则。"
  },
  {
    "id": "hint-3-020",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "広告なのに広告と隠す",
    "answer": "ステマ規制",
    "note": "隐藏广告身份会误导消费者。"
  },
  {
    "id": "hint-3-021",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "口コミ、実は広告",
    "answer": "ステルスマーケティング",
    "note": "看似评价，实际是广告。"
  },
  {
    "id": "hint-3-022",
    "chapter": "第3章 インターネット関連の法規",
    "keyword": "盗版、海賊版",
    "answer": "著作権侵害",
    "note": "盗版内容通常和著作权侵害相关。"
  },
  {
    "id": "hint-4-001",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "氏名、住所、電話番号",
    "answer": "個人情報",
    "note": "能识别个人的信息。"
  },
  {
    "id": "hint-4-002",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "私生活、知られたくない情報",
    "answer": "プライバシー",
    "note": "私人生活相关信息要谨慎。"
  },
  {
    "id": "hint-4-003",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "写真、背景、学校名",
    "answer": "個人情報漏れに注意",
    "note": "照片背景也可能泄露信息。"
  },
  {
    "id": "hint-4-004",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "誰に見えるか",
    "answer": "公開範囲",
    "note": "发布前确认可见对象。"
  },
  {
    "id": "hint-4-005",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "位置、GPS、写真",
    "answer": "位置情報",
    "note": "位置信息可能暴露住址和行动。"
  },
  {
    "id": "hint-4-006",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "悪口、攻撃的投稿",
    "answer": "誹謗中傷",
    "note": "网上恶意攻击会伤害他人。"
  },
  {
    "id": "hint-4-007",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "名前を出さない",
    "answer": "匿名性",
    "note": "匿名也要承担发言责任。"
  },
  {
    "id": "hint-4-008",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "匿名でも責任",
    "answer": "発信責任",
    "note": "发布者要对内容负责。"
  },
  {
    "id": "hint-4-009",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "社会的評価低下",
    "answer": "名誉毀損",
    "note": "损害他人社会评价可能违法。"
  },
  {
    "id": "hint-4-010",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "件名、本文、宛先",
    "answer": "メールマナー",
    "note": "邮件要清楚、礼貌、对象正确。"
  },
  {
    "id": "hint-4-011",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "一斉送信、メールアドレスを隠す",
    "answer": "BCC",
    "note": "多人发送时可用 BCC 保护地址。"
  },
  {
    "id": "hint-4-012",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "見える控え送信",
    "answer": "CC",
    "note": "CC 收件人彼此可见。"
  },
  {
    "id": "hint-4-013",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "短文、誤解、強い言葉",
    "answer": "チャットマナー",
    "note": "聊天短文容易被误解。"
  },
  {
    "id": "hint-4-014",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "批判が集中して広がる",
    "answer": "炎上",
    "note": "不当发言被大量扩散批评。"
  },
  {
    "id": "hint-4-015",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "根拠がない情報",
    "answer": "デマ",
    "note": "没有根据的信息不要转发。"
  },
  {
    "id": "hint-4-016",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "一方だけの情報",
    "answer": "情報の偏り",
    "note": "只看单一来源容易偏向。"
  },
  {
    "id": "hint-4-017",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "複数情報源で確認",
    "answer": "情報の偏り対策",
    "note": "用多个来源确认。"
  },
  {
    "id": "hint-4-018",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "官公庁、公式サイト",
    "answer": "公式情報",
    "note": "重要信息优先看官方来源。"
  },
  {
    "id": "hint-4-019",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "AI、文章や画像を生成",
    "answer": "生成AI",
    "note": "生成 AI 可辅助生成内容。"
  },
  {
    "id": "hint-4-020",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "AIの答え、人が確認",
    "answer": "生成AI内容确认",
    "note": "AI 输出需要人工确认。"
  },
  {
    "id": "hint-4-021",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "正しくない情報、AI",
    "answer": "誤情報",
    "note": "AI 可能输出错误内容。"
  },
  {
    "id": "hint-4-022",
    "chapter": "第4章 インターネット利用者のモラル",
    "keyword": "根拠、出典",
    "answer": "出典確認",
    "note": "确认信息来源和依据。"
  },
  { "id": "hint-5-001", "chapter": "第5章 インターネットのしくみ", "keyword": "Webページを表示するソフト", "answer": "ブラウザ", "note": "浏览器用于显示网页内容。" },
  { "id": "hint-5-002", "chapter": "第5章 インターネットのしくみ", "keyword": "Web資源の住所", "answer": "URL", "note": "URL 是资源的网络地址。" },
  { "id": "hint-5-003", "chapter": "第5章 インターネットのしくみ", "keyword": "通信の約束事", "answer": "プロトコル", "note": "协议是通信的规则。" },
  { "id": "hint-5-004", "chapter": "第5章 インターネットのしくみ", "keyword": "ドメインをIPに変換", "answer": "DNS", "note": "DNS 将域名解析为 IP 地址。" },
  { "id": "hint-5-005", "chapter": "第5章 インターネットのしくみ", "keyword": "计算机の住所", "answer": "IPアドレス", "note": "IP 地址是计算机在网络上的标识。" },
  { "id": "hint-5-006", "chapter": "第5章 インターネットのしくみ", "keyword": "example.com", "answer": "ドメイン名", "note": "域名是网站的名称标识。" },
  { "id": "hint-5-007", "chapter": "第5章 インターネットのしくみ", "keyword": "鍵アイコン、暗号化", "answer": "HTTPS", "note": "HTTPS 使用加密保护通信。" },
  { "id": "hint-5-008", "chapter": "第5章 インターネットのしくみ", "keyword": "通信暗号化技術", "answer": "SSL / TLS", "note": "SSL/TLS 用于加密网络通信。" },
  { "id": "hint-5-009", "chapter": "第5章 インターネットのしくみ", "keyword": "メール送信", "answer": "SMTP", "note": "SMTP 是邮件发送协议。" },
  { "id": "hint-5-010", "chapter": "第5章 インターネットのしくみ", "keyword": "メールダウンロード", "answer": "POP3", "note": "POP3 用于下载邮件到本地。" },
  { "id": "hint-5-011", "chapter": "第5章 インターネットのしくみ", "keyword": "メール同期", "answer": "IMAP", "note": "IMAP 用于在多个设备同步邮件。" },
  { "id": "hint-5-012", "chapter": "第5章 インターネットのしくみ", "keyword": "交流・共有のプラットフォーム", "answer": "SNS", "note": "SNS 是社交网络服务。" },
  { "id": "hint-5-013", "chapter": "第5章 インターネットのしくみ", "keyword": "利用者が内容を生成", "answer": "CGM", "note": "CGM 是用户生成的内容媒体。" },
  { "id": "hint-5-014", "chapter": "第5章 インターネットのしくみ", "keyword": "无线LAN", "answer": "Wi-Fi", "note": "Wi-Fi 是无线网络技术。" },
  { "id": "hint-5-015", "chapter": "第5章 インターネットのしくみ", "keyword": "Wi-Fi网络的名称", "answer": "SSID", "note": "SSID 用于识别无线网络。" },
  { "id": "hint-5-016", "chapter": "第5章 インターネットのしくみ", "keyword": "Wi-Fi暗号化方式", "answer": "WPA2 / WPA3", "note": "WPA2/WPA3 是 Wi-Fi 安全协议。" },
  { "id": "hint-5-017", "chapter": "第5章 インターネットのしくみ", "keyword": "网络上のデータ保存", "answer": "クラウドサービス", "note": "云服务将数据存储在网络上。" },
  { "id": "hint-5-018", "chapter": "第5章 インターネットのしくみ", "keyword": "文章や画像を生成", "answer": "生成AI", "note": "生成 AI 可以创建文本和图像。" },
  { "id": "hint-5-019", "chapter": "第5章 インターネットのしくみ", "keyword": "AIへの入力指示", "answer": "プロンプト", "note": "プロンプト 是给 AI 的输入指令。" },
  { "id": "hint-5-020", "chapter": "第5章 インターネットのしくみ", "keyword": "公共Wi-Fi、暗号化なし", "answer": "Wi-Fi利用の注意", "note": "公共 Wi-Fi 需要注意加密和 VPN。" },
  { "id": "hint-6-001", "chapter": "第6章 コンピュータウイルス", "keyword": "悪意あるソフトの総称", "answer": "マルウェア", "note": "マルウェア 包括各种恶意软件。" },
  { "id": "hint-6-002", "chapter": "第6章 コンピュータウイルス", "keyword": "宿主ファイルに寄生", "answer": "ウイルス", "note": "病毒需要附在宿主文件上才能运行。" },
  { "id": "hint-6-003", "chapter": "第6章 コンピュータウイルス", "keyword": "自己複製でネットワーク感染", "answer": "ワーム", "note": "蠕虫可以自我复制并通过网络传播。" },
  { "id": "hint-6-004", "chapter": "第6章 コンピュータウイルス", "keyword": "有用なソフトに偽装", "answer": "トロイの木馬", "note": "木马伪装成有用软件暗中运行。" },
  { "id": "hint-6-005", "chapter": "第6章 コンピュータウイルス", "keyword": "情報を窃取", "answer": "スパイウェア", "note": "间谍软件窃取用户信息。" },
  { "id": "hint-6-006", "chapter": "第6章 コンピュータウイルス", "keyword": "ファイルを暗号化、身代金要求", "answer": "ランサムウェア", "note": "勒索软件锁文件并索要赎金。" },
  { "id": "hint-6-007", "chapter": "第6章 コンピュータウイルス", "keyword": "自身をコピーして広がる", "answer": "自己複製", "note": "自我复制是蠕虫的特征。" },
  { "id": "hint-6-008", "chapter": "第6章 コンピュータウイルス", "keyword": "病毒が寄生するファイル", "answer": "宿主", "note": "病毒需要宿主文件来传播。" },
  { "id": "hint-6-009", "chapter": "第6章 コンピュータウイルス", "keyword": "无害なソフトに成り済ます", "answer": "偽装", "note": "伪装是木马的主要特征。" },
  { "id": "hint-6-010", "chapter": "第6章 コンピュータウイルス", "keyword": "ファイルを恢复するための支払い", "answer": "身代金", "note": "赎金是勒索软件的要求。" },
  { "id": "hint-6-011", "chapter": "第6章 コンピュータウイルス", "keyword": "メールに付けたファイル", "answer": "メール添付", "note": "邮件附件是常见感染途径。" },
  { "id": "hint-6-012", "chapter": "第6章 コンピュータウイルス", "keyword": "USBメモリなど", "answer": "USB", "note": "USB 设备可能携带恶意软件。" },
  { "id": "hint-6-013", "chapter": "第6章 コンピュータウイルス", "keyword": "ソフトウェアのセキュリティ欠陥", "answer": "脆弱性", "note": "漏洞是攻击者入侵的入口。" },
  { "id": "hint-6-014", "chapter": "第6章 コンピュータウイルス", "keyword": "OSやアプリを最新に更新", "answer": "OS更新", "note": "更新可以修补已知漏洞。" },
  { "id": "hint-6-015", "chapter": "第6章 コンピュータウイルス", "keyword": "病毒を检测・除去する", "answer": "アンチウイルスソフト", "note": "杀毒软件用于检测和清除病毒。" },
  { "id": "hint-6-016", "chapter": "第6章 コンピュータウイルス", "keyword": "データのコピー保存", "answer": "バックアップ", "note": "备份可以恢复被加密的文件。" },
  { "id": "hint-6-017", "chapter": "第6章 コンピュータウイルス", "keyword": "同じ密码用于多个账号", "answer": "パスワード使い回し防止", "note": "密码重复使用会增加风险。" }
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
  },
  {
    "id": "quiz-3-001",
    "chapter": "第3章 インターネット関連の法規",
    "question": "他人の文章や画像を許可なくコピーして自分のサイトに載せると、何の権利を侵害するか。",
    "answer": "著作権",
    "explanation": "题眼是作品、無断コピー。",
    "hint": "作品、無断コピー"
  },
  {
    "id": "quiz-3-002",
    "chapter": "第3章 インターネット関連の法規",
    "question": "映画を違法に公開しているサイトだと知りながら保存する行為は何か。",
    "answer": "違法ダウンロード",
    "explanation": "違法配信と知って保存する点が关键。",
    "hint": "違法配信、保存"
  },
  {
    "id": "quiz-3-003",
    "chapter": "第3章 インターネット関連の法規",
    "question": "友人の顔写真を本人に無断で SNS に投稿すると、何の権利が問題になるか。",
    "answer": "肖像権",
    "explanation": "顔写真、無断投稿が题眼。",
    "hint": "顔写真、無断投稿"
  },
  {
    "id": "quiz-3-004",
    "chapter": "第3章 インターネット関連の法規",
    "question": "有名人の写真を無断で商品の広告に使うと、何の権利が問題になるか。",
    "answer": "パブリシティ権",
    "explanation": "有名人の商业价值を广告に使う点が题眼。",
    "hint": "有名人、広告利用"
  },
  {
    "id": "quiz-3-005",
    "chapter": "第3章 インターネット関連の法規",
    "question": "住所や病歴など私生活に関する情報を無断で公開すると、何の権利が問題になるか。",
    "answer": "プライバシーの権利",
    "explanation": "私生活の情報を守る権利。",
    "hint": "私生活、無断公開"
  },
  {
    "id": "quiz-3-006",
    "chapter": "第3章 インターネット関連の法規",
    "question": "ネット上でデマを書き、他人の社会的評価を下げる行為は何か。",
    "answer": "名誉毀損",
    "explanation": "社会的評価低下が题眼。",
    "hint": "デマ、社会的評価低下"
  },
  {
    "id": "quiz-3-007",
    "chapter": "第3章 インターネット関連の法規",
    "question": "ネット通販で事業者情報や返品条件の表示を求める法律は何か。",
    "answer": "特定商取引法",
    "explanation": "通信販売、事業者情報が题眼。",
    "hint": "通信販売、事業者情報"
  },
  {
    "id": "quiz-3-008",
    "chapter": "第3章 インターネット関連の法規",
    "question": "電子契約で操作ミスを防ぐため確認画面が重要になる法律は何か。",
    "answer": "電子契約法",
    "explanation": "確認画面、操作ミスが题眼。",
    "hint": "確認画面、操作ミス"
  },
  {
    "id": "quiz-3-009",
    "chapter": "第3章 インターネット関連の法規",
    "question": "他人の ID とパスワードで無断ログインする行為を禁止する法律は何か。",
    "answer": "不正アクセス禁止法",
    "explanation": "他人のID、無断ログインが题眼。",
    "hint": "他人のID、無断ログイン"
  },
  {
    "id": "quiz-3-010",
    "chapter": "第3章 インターネット関連の法規",
    "question": "氏名や住所などの個人情報を利用目的に従って扱うことを求める法律は何か。",
    "answer": "個人情報保護法",
    "explanation": "個人情報、利用目的が题眼。",
    "hint": "個人情報、利用目的"
  },
  {
    "id": "quiz-3-011",
    "chapter": "第3章 インターネット関連の法規",
    "question": "広告メールの送信や配信停止に関するルールを定める法律は何か。",
    "answer": "特定電子メール法",
    "explanation": "広告メール、配信停止が题眼。",
    "hint": "広告メール、配信停止"
  },
  {
    "id": "quiz-3-012",
    "chapter": "第3章 インターネット関連の法規",
    "question": "広告であることを隠して口コミのように商品を紹介する行為は何の規制対象か。",
    "answer": "ステマ規制",
    "explanation": "広告を広告と分からないようにする点が题眼。",
    "hint": "広告と隠す、口コミ"
  },
  {
    "id": "quiz-4-001",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "氏名、住所、電話番号など、個人を識別できる情報を何というか。",
    "answer": "個人情報",
    "explanation": "个人信息是能识别个人的信息。",
    "hint": "氏名、住所、電話番号"
  },
  {
    "id": "quiz-4-002",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "私生活や知られたくない情報を勝手に公開しない考え方は何に関係するか。",
    "answer": "プライバシー",
    "explanation": "私人生活信息属于隐私。",
    "hint": "私生活、知られたくない情報"
  },
  {
    "id": "quiz-4-003",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "ネット上で他人の悪口を攻撃的に書き込む行為は何か。",
    "answer": "誹謗中傷",
    "explanation": "恶意攻击他人的发言是誹謗中傷。",
    "hint": "悪口、攻撃的投稿"
  },
  {
    "id": "quiz-4-004",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "名前を出さずに投稿できる性質を何というか。",
    "answer": "匿名性",
    "explanation": "匿名性は名前を出さない性質。",
    "hint": "名前を出さない"
  },
  {
    "id": "quiz-4-005",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "複数人にメールを送り、互いのメールアドレスを隠したいとき使う欄は何か。",
    "answer": "BCC",
    "explanation": "BCC は受信者同士にアドレスを見せない。",
    "hint": "一斉送信、メールアドレスを隠す"
  },
  {
    "id": "quiz-4-006",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "メールで内容が分かる題名を書くことは、何のマナーにあたるか。",
    "answer": "メールマナー",
    "explanation": "件名、宛先、本文を分かりやすくする。",
    "hint": "件名、本文、宛先"
  },
  {
    "id": "quiz-4-007",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "短い文章で誤解を生まないように、言葉遣いに注意することは何のマナーか。",
    "answer": "チャットマナー",
    "explanation": "チャットは短文なので誤解されやすい。",
    "hint": "短文、誤解"
  },
  {
    "id": "quiz-4-008",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "不適切な投稿に批判が集中して広がることを何というか。",
    "answer": "炎上",
    "explanation": "批判が集中して拡散する状態。",
    "hint": "批判が集中して広がる"
  },
  {
    "id": "quiz-4-009",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "根拠のない情報を確認せずに転送することは、何を広める危険があるか。",
    "answer": "デマ",
    "explanation": "没有根据的信息可能是谣言。",
    "hint": "根拠がない情報"
  },
  {
    "id": "quiz-4-010",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "一方の意見だけを見て判断すると、何に注意が必要か。",
    "answer": "情報の偏り",
    "explanation": "只看单一来源容易偏向。",
    "hint": "一方だけの情報"
  },
  {
    "id": "quiz-4-011",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "情報が正しいか確認するため、複数の情報源を見ることは何の対策か。",
    "answer": "情報の偏り対策",
    "explanation": "多个来源可以降低偏见和误信。",
    "hint": "複数情報源で確認"
  },
  {
    "id": "quiz-4-012",
    "chapter": "第4章 インターネット利用者のモラル",
    "question": "生成AIが出した内容をそのまま信じず、人が根拠を確認することを何というか。",
    "answer": "生成AI内容确认",
    "explanation": "AI 输出可能有误，需要人工确认。",
    "hint": "AIの答え、人が確認"
  },
  { "id": "quiz-5-001", "chapter": "第5章 インターネットのしくみ", "question": "Webページを閲覧するために使用するソフトは何か。", "answer": "ブラウザ", "explanation": "浏览器是用于显示网页内容的软件。", "hint": "Webページを表示するソフト" },
  { "id": "quiz-5-002", "chapter": "第5章 インターネットのしくみ", "question": "ドメイン名をIPアドレスに変換するシステムは何か。", "answer": "DNS", "explanation": "DNS 将易记的域名转换为数字的 IP 地址。", "hint": "ドメインをIPに変換" },
  { "id": "quiz-5-003", "chapter": "第5章 インターネットのしくみ", "question": "HTTPに暗号化機能を追加したプロトコルは何か。", "answer": "HTTPS", "explanation": "HTTPS 在 HTTP 基础上添加了 SSL/TLS 加密。", "hint": "鍵アイコン、暗号化" },
  { "id": "quiz-5-004", "chapter": "第5章 インターネットのしくみ", "question": "メールを送信する際に使用されるプロトコルは何か。", "answer": "SMTP", "explanation": "SMTP 是用于发送邮件的协议。", "hint": "メール送信" },
  { "id": "quiz-5-005", "chapter": "第5章 インターネットのしくみ", "question": "メールをサーバからダウンロードし、複数の端末で同期したい場合に適切なプロトコルは何か。", "answer": "IMAP", "explanation": "IMAP 可以在多个设备同步管理邮件。", "hint": "メール同期" },
  { "id": "quiz-5-006", "chapter": "第5章 インターネットのしくみ", "question": "利用者が自らの手でコンテンツを作成し、SNSなどで共有するメディア形態を何というか。", "answer": "CGM", "explanation": "CGM 是由消费者（用户）生成内容的媒体。", "hint": "利用者が内容を生成" },
  { "id": "quiz-5-007", "chapter": "第5章 インターネットのしくみ", "question": "公衆Wi-Fi接続時にデータを暗号化して通信するために 사용할 수 있는 방법은何か。", "answer": "VPN", "explanation": "公共 Wi-Fi 使用 VPN 可以加密通信内容。", "hint": "公共Wi-Fi、暗号化" },
  { "id": "quiz-5-008", "chapter": "第5章 インターネットのしくみ", "question": "Wi-Fiネットワークのセキュリティ方式で、WPA2より新しいものは何か。", "answer": "WPA3", "explanation": "WPA3 是 WPA2 的升级版，提供更强的安全性。", "hint": "WPA2より新しい暗号化" },
  { "id": "quiz-5-009", "chapter": "第5章 インターネットのしくみ", "question": "生成AIに対して具体的な指示や情報を与えることを何と呼ぶか。", "answer": "プロンプト", "explanation": "プロンプト 是用户给 AI 的输入指令，决定输出内容。", "hint": "AIへの入力指示" },
  { "id": "quiz-5-010", "chapter": "第5章 インターネットのしくみ", "question": "クラウドサービスの利用目的として、家庭のコンピュータに保存せず通过网络でデータを保存・アクセスすることは何か。", "answer": "クラウドサービス", "explanation": "云服务通过网络提供数据存储和访问。", "hint": "网络上のデータ保存" },
  { "id": "quiz-5-011", "chapter": "第5章 インターネットのしくみ", "question": "URLの中で、WebブラウザとWebサーバ間の通信プロトコルを指定する部分はどこか。", "answer": "プロトコル部分（http://またはhttps://）", "explanation": "URL 开头的 http:// 或 https:// 表示通信协议。", "hint": "プロトコル部分" },
  { "id": "quiz-5-012", "chapter": "第5章 インターネットのしくみ", "question": "生成AIの出力結果をそのまま事実として使用する前に、何を行う必要があるか。", "answer": "内容確認（事実確認）", "explanation": "AI 输出可能包含错误，需要人工确认。", "hint": "確認が必要" },
  { "id": "quiz-6-001", "chapter": "第6章 コンピュータウイルス", "question": "恶意软件的総称は何か。", "answer": "マルウェア", "explanation": "マルウェア 是恶意软件的统称，包括病毒、蠕虫、木马等。", "hint": "悪意あるソフトの総称" },
  { "id": "quiz-6-002", "chapter": "第6章 コンピュータウイルス", "question": "他のファイルに寄生しないと動作できないマルウェアは何か。", "answer": "ウイルス", "explanation": "病毒需要附在宿主文件上才能执行。", "hint": "宿主ファイルに寄生" },
  { "id": "quiz-6-003", "chapter": "第6章 コンピュータウイルス", "question": "ネットワークを通じて自分を複製し、自動的に広がるマルウェアは何か。", "answer": "ワーム", "explanation": "蠕虫可以自我复制并通过网络自动传播。", "hint": "自己複製でネットワーク感染" },
  { "id": "quiz-6-004", "chapter": "第6章 コンピュータウイルス", "question": "有用な免费ソフトに見せかけて、电脑に侵入し、不正行為を行うマルウェアは何か。", "answer": "トロイの木馬", "explanation": "木马伪装成有用软件，实际上执行恶意行为。", "hint": "有用なソフトに偽装" },
  { "id": "quiz-6-005", "chapter": "第6章 コンピュータウイルス", "question": "电脑内のファイルを暗号化し、元に戻す代わりに身代金を要求するマルウェアは何か。", "answer": "ランサムウェア", "explanation": "勒索软件加密文件并索要赎金。", "hint": "ファイルを暗号化、身代金要求" },
  { "id": "quiz-6-006", "chapter": "第6章 コンピュータウイルス", "question": "メールに添付されたファイルを開いた後、电脑が動き始めた場合、最も考えられる感染経路は何か。", "answer": "メール添付", "explanation": "邮件附件是病毒传播的常见途径。", "hint": "メールに付けたファイル" },
  { "id": "quiz-6-007", "chapter": "第6章 コンピュータウイルス", "question": "OSや及应用软件のセキュリティ欠陥を突いて侵入する行為を何と呼ぶか。", "answer": "脆弱性を突く攻撃", "explanation": "利用漏洞是攻击者入侵的常用方法。", "hint": "ソフトウェアのセキュリティ欠陥" },
  { "id": "quiz-6-008", "chapter": "第6章 コンピュータウイルス", "question": "ランサムウェア被害で暗号化されたファイルを復元する最も確実な方法は何か。", "answer": "バックアップからの復元", "explanation": "定期备份是应对勒索软件的最有效方法。", "hint": "データのコピー保存" },
  { "id": "quiz-6-009", "chapter": "第6章 コンピュータウイルス", "question": "病毒的感染経路として、不正网站上访问>Requiredファイルダウンロードと同じくらい重要な防范は何か。", "answer": "OSや应用软件的更新", "explanation": "保持系统和软件更新可以修补漏洞，防止感染。", "hint": "OSやアプリを最新に更新" },
  { "id": "quiz-6-010", "chapter": "第6章 コンピュータウイルス", "question": "複数のウェブサイトで同じ账号、パスワードを使い回すことのリスクは何か。", "answer": "パスワードリスト攻撃", "explanation": "一个网站泄露后，攻击者用相同密码尝试其他网站。", "hint": "同じ密码用于多个账号" }
];
