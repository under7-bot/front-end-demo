// 第3章「インターネット関連の法規」数据补丁文件。
// 本文件只用于人工检查，确认后再合并到 content-data.js。

const chapter3StudySections = [
  {
    id: "sec-3-1",
    chapter: "第3章 インターネット関連の法規",
    title: "著作権と違法アップロード・ダウンロード",
    category: "法規",
    goal: "理解作品受著作権保护，以及违法上传、下载的典型题眼。",
    jpKeywords: ["著作権", "無断コピー", "違法アップロード", "違法ダウンロード"],
    explanation: "文章、音乐、图片、视频等作品未经许可不能随意复制、上传或下载。",
    scenario: "网上找到电影文件后，未经许可上传到共享网站。",
    examHints: ["作品", "無断コピー", "違法アップロード", "違法ダウンロード"],
    confusion: "引用需要符合条件，不能把整篇作品直接复制当成自己的内容。",
    summary: "作品を勝手に使わない"
  },
  {
    id: "sec-3-2",
    chapter: "第3章 インターネット関連の法規",
    title: "肖像権・パブリシティ権・プライバシーの権利",
    category: "法規",
    goal: "区分脸部照片、名人商业价值和私人生活信息的权利。",
    jpKeywords: ["肖像権", "パブリシティ権", "プライバシーの権利"],
    explanation: "未经本人同意发布照片可能侵犯肖像権，利用名人形象做广告可能侵犯パブリシティ権。",
    scenario: "把朋友的脸部照片上传到 SNS，或把有名人的照片放进商品广告。",
    examHints: ["顔写真", "有名人", "広告利用", "私生活"],
    confusion: "肖像権看脸和照片，パブリシティ権看名人的商业价值。",
    summary: "顔・有名人・私生活を守る"
  },
  {
    id: "sec-3-3",
    chapter: "第3章 インターネット関連の法規",
    title: "名誉毀損とネット上の発信責任",
    category: "法規",
    goal: "理解网络发言可能降低他人社会评价，并承担法律责任。",
    jpKeywords: ["名誉毀損", "社会的評価", "誹謗中傷", "投稿"],
    explanation: "在网上发布损害他人名誉的内容，即使匿名也可能构成名誉毀損。",
    scenario: "在论坛写某人偷东西，导致对方社会评价下降。",
    examHints: ["悪口", "デマ", "社会的評価低下"],
    confusion: "单纯不满和违法发言不同，关键看是否损害他人社会评价。",
    summary: "匿名でも発言には責任"
  },
  {
    id: "sec-3-4",
    chapter: "第3章 インターネット関連の法規",
    title: "ネット取引に関する法律",
    category: "法規",
    goal: "理解特定商取引法和電子契約法在网络交易中的作用。",
    jpKeywords: ["特定商取引法", "電子契約法", "通信販売", "契約"],
    explanation: "网络购物需要显示卖家信息和交易条件，电子合同也要保护消费者不被误操作困扰。",
    scenario: "网店页面没有卖家地址、返品条件和价格说明。",
    examHints: ["通信販売", "事業者情報", "確認画面", "操作ミス"],
    confusion: "特定商取引法关注销售表示，電子契約法关注电子合同和误操作。",
    summary: "表示と確認で消費者を守る"
  },
  {
    id: "sec-3-5",
    chapter: "第3章 インターネット関連の法規",
    title: "不正アクセス禁止法と個人情報保護法",
    category: "法規",
    goal: "理解非法登录和个人信息处理的基本规则。",
    jpKeywords: ["不正アクセス禁止法", "個人情報保護法", "他人のID", "無断ログイン"],
    explanation: "未经许可使用他人 ID 登录是违法行为，收集和使用个人信息也必须妥善管理。",
    scenario: "猜到同学密码后登录其账号，或随意公开顾客名单。",
    examHints: ["他人のID", "無断ログイン", "個人情報", "利用目的"],
    confusion: "知道密码不代表可以登录，他人账号必须得到许可。",
    summary: "IDと個人情報を勝手に使わない"
  },
  {
    id: "sec-3-6",
    chapter: "第3章 インターネット関連の法規",
    title: "特定電子メール法とステマ規制",
    category: "法規",
    goal: "理解广告邮件和隐藏广告的法律题眼。",
    jpKeywords: ["特定電子メール法", "迷惑メール", "ステマ規制", "広告表示"],
    explanation: "广告邮件需要遵守发送规则，广告内容也不能伪装成普通评价。",
    scenario: "企业让网红推荐商品，却不标明这是广告。",
    examHints: ["広告メール", "同意", "配信停止", "広告と隠す"],
    confusion: "ステマ是隐藏广告身份，普通感想不一定是ステマ。",
    summary: "広告は広告と分かるように"
  }
];

const chapter3Terms = [
  { id: "term-3-copyright", sectionId: "sec-3-1", chapter: "第3章 インターネット関連の法規", jp: "著作権", reading: "ちょさくけん", zh: "著作权", en: "copyright", hint: "作品、無断コピー" },
  { id: "term-3-work", sectionId: "sec-3-1", chapter: "第3章 インターネット関連の法規", jp: "著作物", reading: "ちょさくぶつ", zh: "作品", en: "creative work", hint: "文章、音楽、画像、動画" },
  { id: "term-3-quote", sectionId: "sec-3-1", chapter: "第3章 インターネット関連の法規", jp: "引用", reading: "いんよう", zh: "引用", en: "quotation", hint: "出典、必要な範囲" },
  { id: "term-3-illegal-download", sectionId: "sec-3-1", chapter: "第3章 インターネット関連の法規", jp: "違法ダウンロード", reading: "いほうダウンロード", zh: "违法下载", en: "illegal download", hint: "違法配信と知って保存" },
  { id: "term-3-illegal-upload", sectionId: "sec-3-1", chapter: "第3章 インターネット関連の法規", jp: "違法アップロード", reading: "いほうアップロード", zh: "违法上传", en: "illegal upload", hint: "無断で公開" },
  { id: "term-3-pirated-copy", sectionId: "sec-3-1", chapter: "第3章 インターネット関連の法規", jp: "海賊版", reading: "かいぞくばん", zh: "盗版", en: "pirated copy", hint: "無断複製されたもの" },
  { id: "term-3-portrait-rights", sectionId: "sec-3-2", chapter: "第3章 インターネット関連の法規", jp: "肖像権", reading: "しょうぞうけん", zh: "肖像权", en: "portrait rights", hint: "顔写真、無断投稿" },
  { id: "term-3-publicity-rights", sectionId: "sec-3-2", chapter: "第3章 インターネット関連の法規", jp: "パブリシティ権", reading: "パブリシティけん", zh: "公开权、名人商业价值权", en: "publicity rights", hint: "有名人、広告利用" },
  { id: "term-3-privacy-rights", sectionId: "sec-3-2", chapter: "第3章 インターネット関連の法規", jp: "プライバシーの権利", reading: "プライバシーのけんり", zh: "隐私权", en: "right to privacy", hint: "私生活、無断公開" },
  { id: "term-3-consent", sectionId: "sec-3-2", chapter: "第3章 インターネット関連の法規", jp: "同意", reading: "どうい", zh: "同意", en: "consent", hint: "本人の許可" },
  { id: "term-3-defamation", sectionId: "sec-3-3", chapter: "第3章 インターネット関連の法規", jp: "名誉毀損", reading: "めいよきそん", zh: "名誉毁损", en: "defamation", hint: "社会的評価低下" },
  { id: "term-3-social-reputation", sectionId: "sec-3-3", chapter: "第3章 インターネット関連の法規", jp: "社会的評価", reading: "しゃかいてきひょうか", zh: "社会评价", en: "social reputation", hint: "他人からの評価" },
  { id: "term-3-abuse", sectionId: "sec-3-3", chapter: "第3章 インターネット関連の法規", jp: "誹謗中傷", reading: "ひぼうちゅうしょう", zh: "诽谤中伤", en: "online abuse", hint: "悪口、攻撃的投稿" },
  { id: "term-3-specific-commercial-transaction-law", sectionId: "sec-3-4", chapter: "第3章 インターネット関連の法規", jp: "特定商取引法", reading: "とくていしょうとりひきほう", zh: "特定商业交易法", en: "Specified Commercial Transactions Act", hint: "通信販売、事業者表示" },
  { id: "term-3-electronic-contract-law", sectionId: "sec-3-4", chapter: "第3章 インターネット関連の法規", jp: "電子契約法", reading: "でんしけいやくほう", zh: "电子合同法", en: "Electronic Contract Act", hint: "確認画面、操作ミス" },
  { id: "term-3-online-shopping", sectionId: "sec-3-4", chapter: "第3章 インターネット関連の法規", jp: "通信販売", reading: "つうしんはんばい", zh: "通信销售、网购", en: "mail order sales", hint: "ネット販売" },
  { id: "term-3-cooling-off", sectionId: "sec-3-4", chapter: "第3章 インターネット関連の法規", jp: "返品条件", reading: "へんぴんじょうけん", zh: "退货条件", en: "return policy", hint: "返品できる条件" },
  { id: "term-3-unauthorized-access-law", sectionId: "sec-3-5", chapter: "第3章 インターネット関連の法規", jp: "不正アクセス禁止法", reading: "ふせいアクセスきんしほう", zh: "禁止非法访问法", en: "Unauthorized Computer Access Law", hint: "他人のID、無断ログイン" },
  { id: "term-3-unauthorized-login", sectionId: "sec-3-5", chapter: "第3章 インターネット関連の法規", jp: "無断ログイン", reading: "むだんログイン", zh: "未经许可登录", en: "unauthorized login", hint: "許可なくログイン" },
  { id: "term-3-personal-information-protection-law", sectionId: "sec-3-5", chapter: "第3章 インターネット関連の法規", jp: "個人情報保護法", reading: "こじんじょうほうほごほう", zh: "个人信息保护法", en: "Personal Information Protection Act", hint: "個人情報、利用目的" },
  { id: "term-3-purpose-of-use", sectionId: "sec-3-5", chapter: "第3章 インターネット関連の法規", jp: "利用目的", reading: "りようもくてき", zh: "使用目的", en: "purpose of use", hint: "何のために使うか" },
  { id: "term-3-specified-email-law", sectionId: "sec-3-6", chapter: "第3章 インターネット関連の法規", jp: "特定電子メール法", reading: "とくていでんしメールほう", zh: "特定电子邮件法", en: "Specified Electronic Mail Act", hint: "広告メール、配信停止" },
  { id: "term-3-advertising-email", sectionId: "sec-3-6", chapter: "第3章 インターネット関連の法規", jp: "広告メール", reading: "こうこくメール", zh: "广告邮件", en: "advertising email", hint: "宣伝目的のメール" },
  { id: "term-3-opt-out", sectionId: "sec-3-6", chapter: "第3章 インターネット関連の法規", jp: "配信停止", reading: "はいしんていし", zh: "停止发送", en: "unsubscribe", hint: "メールを止める" },
  { id: "term-3-stealth-marketing", sectionId: "sec-3-6", chapter: "第3章 インターネット関連の法規", jp: "ステマ規制", reading: "ステマきせい", zh: "隐形广告规制", en: "stealth marketing regulation", hint: "広告と隠す" }
];

const chapter3ExamHints = [
  { id: "hint-3-001", chapter: "第3章 インターネット関連の法規", keyword: "作品、無断コピー", answer: "著作権", note: "作品を許可なくコピーすると問題になる。" },
  { id: "hint-3-002", chapter: "第3章 インターネット関連の法規", keyword: "文章、音楽、画像、動画", answer: "著作物", note: "創作された作品を指す。" },
  { id: "hint-3-003", chapter: "第3章 インターネット関連の法規", keyword: "出典、必要な範囲", answer: "引用", note: "出典を示し、必要な範囲で使う。" },
  { id: "hint-3-004", chapter: "第3章 インターネット関連の法規", keyword: "無断で公開、アップロード", answer: "違法アップロード", note: "他人の作品を勝手に公開しない。" },
  { id: "hint-3-005", chapter: "第3章 インターネット関連の法規", keyword: "違法配信と知って保存", answer: "違法ダウンロード", note: "違法な配信と知って保存する点が题眼。" },
  { id: "hint-3-006", chapter: "第3章 インターネット関連の法規", keyword: "顔写真、無断投稿", answer: "肖像権", note: "顔写真を勝手に公開しない。" },
  { id: "hint-3-007", chapter: "第3章 インターネット関連の法規", keyword: "有名人、広告利用", answer: "パブリシティ権", note: "有名人の商业价值を守る権利。" },
  { id: "hint-3-008", chapter: "第3章 インターネット関連の法規", keyword: "私生活、住所、病歴、無断公開", answer: "プライバシーの権利", note: "私人生活信息不能随意公开。" },
  { id: "hint-3-009", chapter: "第3章 インターネット関連の法規", keyword: "本人の許可", answer: "同意", note: "照片和个人信息常需要本人同意。" },
  { id: "hint-3-010", chapter: "第3章 インターネット関連の法規", keyword: "悪口、デマ、社会的評価低下", answer: "名誉毀損", note: "降低他人社会评价可能构成名誉毁损。" },
  { id: "hint-3-011", chapter: "第3章 インターネット関連の法規", keyword: "匿名でも投稿責任", answer: "ネット上の発信責任", note: "匿名并不等于没有责任。" },
  { id: "hint-3-012", chapter: "第3章 インターネット関連の法規", keyword: "通信販売、事業者情報", answer: "特定商取引法", note: "网店要清楚显示交易条件和卖家信息。" },
  { id: "hint-3-013", chapter: "第3章 インターネット関連の法規", keyword: "確認画面、操作ミス", answer: "電子契約法", note: "电子合同中保护消费者误操作。" },
  { id: "hint-3-014", chapter: "第3章 インターネット関連の法規", keyword: "ネット販売、返品条件", answer: "通信販売", note: "网络销售要确认价格、返品条件等。" },
  { id: "hint-3-015", chapter: "第3章 インターネット関連の法規", keyword: "他人のID、無断ログイン", answer: "不正アクセス禁止法", note: "未经许可登录他人账号是违法。" },
  { id: "hint-3-016", chapter: "第3章 インターネット関連の法規", keyword: "パスワードを教える、不正利用", answer: "不正アクセスにつながる行為", note: "帮助他人非法登录也有风险。" },
  { id: "hint-3-017", chapter: "第3章 インターネット関連の法規", keyword: "個人情報、利用目的", answer: "個人情報保護法", note: "个人信息要按目的妥善处理。" },
  { id: "hint-3-018", chapter: "第3章 インターネット関連の法規", keyword: "氏名、住所、電話番号", answer: "個人情報", note: "能识别个人的信息。" },
  { id: "hint-3-019", chapter: "第3章 インターネット関連の法規", keyword: "広告メール、同意、配信停止", answer: "特定電子メール法", note: "广告邮件要遵守发送和停止规则。" },
  { id: "hint-3-020", chapter: "第3章 インターネット関連の法規", keyword: "広告なのに広告と隠す", answer: "ステマ規制", note: "隐藏广告身份会误导消费者。" },
  { id: "hint-3-021", chapter: "第3章 インターネット関連の法規", keyword: "口コミ、実は広告", answer: "ステルスマーケティング", note: "看似评价，实际是广告。" },
  { id: "hint-3-022", chapter: "第3章 インターネット関連の法規", keyword: "盗版、海賊版", answer: "著作権侵害", note: "盗版内容通常和著作权侵害相关。" }
];

const chapter3Quizzes = [
  { id: "quiz-3-001", chapter: "第3章 インターネット関連の法規", question: "他人の文章や画像を許可なくコピーして自分のサイトに載せると、何の権利を侵害するか。", answer: "著作権", explanation: "题眼是作品、無断コピー。", hint: "作品、無断コピー" },
  { id: "quiz-3-002", chapter: "第3章 インターネット関連の法規", question: "映画を違法に公開しているサイトだと知りながら保存する行為は何か。", answer: "違法ダウンロード", explanation: "違法配信と知って保存する点が关键。", hint: "違法配信、保存" },
  { id: "quiz-3-003", chapter: "第3章 インターネット関連の法規", question: "友人の顔写真を本人に無断で SNS に投稿すると、何の権利が問題になるか。", answer: "肖像権", explanation: "顔写真、無断投稿が题眼。", hint: "顔写真、無断投稿" },
  { id: "quiz-3-004", chapter: "第3章 インターネット関連の法規", question: "有名人の写真を無断で商品の広告に使うと、何の権利が問題になるか。", answer: "パブリシティ権", explanation: "有名人の商业价值を广告に使う点が题眼。", hint: "有名人、広告利用" },
  { id: "quiz-3-005", chapter: "第3章 インターネット関連の法規", question: "住所や病歴など私生活に関する情報を無断で公開すると、何の権利が問題になるか。", answer: "プライバシーの権利", explanation: "私生活の情報を守る権利。", hint: "私生活、無断公開" },
  { id: "quiz-3-006", chapter: "第3章 インターネット関連の法規", question: "ネット上でデマを書き、他人の社会的評価を下げる行為は何か。", answer: "名誉毀損", explanation: "社会的評価低下が题眼。", hint: "デマ、社会的評価低下" },
  { id: "quiz-3-007", chapter: "第3章 インターネット関連の法規", question: "ネット通販で事業者情報や返品条件の表示を求める法律は何か。", answer: "特定商取引法", explanation: "通信販売、事業者情報が题眼。", hint: "通信販売、事業者情報" },
  { id: "quiz-3-008", chapter: "第3章 インターネット関連の法規", question: "電子契約で操作ミスを防ぐため確認画面が重要になる法律は何か。", answer: "電子契約法", explanation: "確認画面、操作ミスが题眼。", hint: "確認画面、操作ミス" },
  { id: "quiz-3-009", chapter: "第3章 インターネット関連の法規", question: "他人の ID とパスワードで無断ログインする行為を禁止する法律は何か。", answer: "不正アクセス禁止法", explanation: "他人のID、無断ログインが题眼。", hint: "他人のID、無断ログイン" },
  { id: "quiz-3-010", chapter: "第3章 インターネット関連の法規", question: "氏名や住所などの個人情報を利用目的に従って扱うことを求める法律は何か。", answer: "個人情報保護法", explanation: "個人情報、利用目的が题眼。", hint: "個人情報、利用目的" },
  { id: "quiz-3-011", chapter: "第3章 インターネット関連の法規", question: "広告メールの送信や配信停止に関するルールを定める法律は何か。", answer: "特定電子メール法", explanation: "広告メール、配信停止が题眼。", hint: "広告メール、配信停止" },
  { id: "quiz-3-012", chapter: "第3章 インターネット関連の法規", question: "広告であることを隠して口コミのように商品を紹介する行為は何の規制対象か。", answer: "ステマ規制", explanation: "広告を広告と分からないようにする点が题眼。", hint: "広告と隠す、口コミ" }
];
