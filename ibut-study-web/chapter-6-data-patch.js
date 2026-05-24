// 第6章「コンピュータウイルス」数据补丁文件。
// 本文件只用于人工检查，确认后再合并到 content-data.js。

const chapter6StudySections = [
  {
    id: "sec-6-1",
    chapter: "第6章 コンピュータウイルス",
    title: "マルウェアとは",
    category: "ウイルス",
    goal: "理解マルウェア的定义和常见类型。",
    jpKeywords: ["マルウェア", "ウイルス", "ワーム", "トロイの木馬", "スパイウェア", "ランサムウェア"],
    explanation: "マルウェア 是恶意软件的统称，包括病毒、蠕虫、木马、间谍软件、勒索软件等。",
    scenario: "电脑运行变慢，弹出广告，可能是マルウェア 感染。",
    examHints: ["マルウェア", "悪意あるソフト", "種類"],
    confusion: "マルウェア 是总称，各种具体类型有不同特征。",
    summary: "マルウェアは悪意あるソフトの総称"
  },
  {
    id: "sec-6-2",
    chapter: "第6章 コンピュータウイルス",
    title: "ウイルス・ワーム・トロイの木馬",
    category: "ウイルス",
    goal: "理解病毒、蠕虫和木马的区别。",
    jpKeywords: ["ウイルス", "ワーム", "トロイの木馬", "自己複製", "潜伏"],
    explanation: "病毒需要附在宿主程序上，蠕虫可以自我复制传播，木马伪装成有用程序暗中运行。",
    scenario: "打开邮件附件后，电脑开始自动向联系人发送文件。",
    examHints: ["宿主が必要", "自己複製", "偽装"],
    confusion: "病毒需要宿主，蠕虫不需要；木马不是病毒但同样危险。",
    summary: "ウイルスは宿主、蠕虫は自己複製、木马は偽装"
  },
  {
    id: "sec-6-3",
    chapter: "第6章 コンピュータウイルス",
    title: "スパイウェア・ランサムウェア",
    category: "ウイルス",
    goal: "理解间谍软件和勒索软件的特点和危害。",
    jpKeywords: ["スパイウェア", "ランサムウェア", "身代金", "暗号化", "情報窃取"],
    explanation: "间谍软件窃取个人信息，勒索软件加密文件并索要赎金。",
    scenario: "文件被加密无法打开，屏幕上显示「支付赎金恢复文件」。",
    examHints: ["ファイル暗号化", "身代金", "情報流出"],
    confusion: "间谍软件不锁文件，只偷信息；勒索软件会锁文件。",
    summary: "スパイは偷情報、勒索は锁文件"
  },
  {
    id: "sec-6-4",
    chapter: "第6章 コンピュータウイルス",
    title: "感染経路",
    category: "ウイルス",
    goal: "了解恶意软件的常见感染途径。",
    jpKeywords: ["感染経路", "メール添付", "不正サイト", "USB", "脆弱性"],
    explanation: "感染途径包括：邮件附件、不良网站、可移动媒体、系统漏洞等。",
    scenario: "插入他人给的 U 盘后电脑出现异常。",
    examHints: ["添付ファイル", "不信な网站", "USB", "OS更新"],
    confusion: "不只是网站，邮件、U 盘、假冒软件都可能感染。",
    summary: "多种経路で感染する"
  },
  {
    id: "sec-6-5",
    chapter: "第6章 コンピュータウイルス",
    title: "感染防止",
    category: "ウイルス",
    goal: "掌握预防病毒感染的基本措施。",
    jpKeywords: ["感染防止", "OS更新", "アンチウイルス", "パスワード管理", "バックアップ", "注意喚起"],
    explanation: "防止感染的方法包括：保持系统和软件更新、使用杀毒软件、不打开可疑附件、不安装未知软件、使用强密码、定期备份。",
    scenario: "收到「您的电脑已感染，点击这里修复」的弹窗，点击后反而感染了。",
    examHints: ["OS更新", "怪しい添付を開かない", "バックアップ", "パスワードの使い回し防止"],
    confusion: "防病毒软件不能 100% 防护，综合措施更重要。",
    summary: "更新・バックアップ・確認の三点"
  }
];

const chapter6Terms = [
  { id: "term-6-malware", sectionId: "sec-6-1", chapter: "第6章 コンピュータウイルス", jp: "マルウェア", reading: "マルウェア", zh: "恶意软件", en: "malware", hint: "悪意あるソフトの総称" },
  { id: "term-6-virus", sectionId: "sec-6-1", chapter: "第6章 コンピュータウイルス", jp: "ウイルス", reading: "ウイルス", zh: "病毒", en: "virus", hint: "宿主ファイルに寄生" },
  { id: "term-6-worm", sectionId: "sec-6-1", chapter: "第6章 コンピュータウイルス", jp: "ワーム", reading: "ワーム", zh: "蠕虫", en: "worm", hint: "自己複製でネットワーク感染" },
  { id: "term-6-trojan", sectionId: "sec-6-1", chapter: "第6章 コンピュータウイルス", jp: "トロイの木馬", reading: "トロイのもくば", zh: "木马程序", en: "Trojan horse", hint: "有用なソフトに偽装" },
  { id: "term-6-spyware", sectionId: "sec-6-1", chapter: "第6章 コンピュータウイルス", jp: "スパイウェア", reading: "スパイウェア", zh: "间谍软件", en: "spyware", hint: "情報を窃取" },
  { id: "term-6-ransomware", sectionId: "sec-6-1", chapter: "第6章 コンピュータウイルス", jp: "ランサムウェア", reading: "ランサムウェア", zh: "勒索软件", en: "ransomware", hint: "ファイルを暗号化、身代金要求" },
  { id: "term-6-self-replication", sectionId: "sec-6-2", chapter: "第6章 コンピュータウイルス", jp: "自己複製", reading: "じこふくせい", zh: "自我复制", en: "self-replication", hint: "自身をコピーして広がる" },
  { id: "term-6-host", sectionId: "sec-6-2", chapter: "第6章 コンピュータウイルス", jp: "宿主", reading: "しゅくしゅく", zh: "宿主", en: "host", hint: "ウイルスが寄生するファイル" },
  { id: "term-6-disguise", sectionId: "sec-6-2", chapter: "第6章 コンピュータウイルス", jp: "偽装", reading: "ぎそう", zh: "伪装", en: "disguise", hint: "无害な软件に成り済ます" },
  { id: "term-6-backdoor", sectionId: "sec-6-2", chapter: "第6章 コンピュータウイルス", jp: "バックドア", reading: "バックドア", zh: "后门", en: "backdoor", hint: "不正アクセス用の裏口" },
  { id: "term-6-ransom", sectionId: "sec-6-3", chapter: "第6章 コンピュータウイルス", jp: "身代金", reading: "みのしろきん", zh: "赎金", en: "ransom", hint: "ファイルを恢复するための支払い" },
  { id: "term-6-file-encryption", sectionId: "sec-6-3", chapter: "第6章 コンピュータウイルス", jp: "ファイル暗号化", reading: "ファイルあんごうか", zh: "文件加密", en: "file encryption", hint: "ファイルを読み取り不能にする" },
  { id: "term-6-infection-route", sectionId: "sec-6-4", chapter: "第6章 コンピュータウイルス", jp: "感染経路", reading: "かんせんけいろ", zh: "感染途径", en: "infection route", hint: "ウイルスが侵入する道筋" },
  { id: "term-6-email-attachment", sectionId: "sec-6-4", chapter: "第6章 コンピュータウイルス", jp: "メール添付", reading: "メールてんぷ", zh: "邮件附件", en: "email attachment", hint: "メールに付けたファイル" },
  { id: "term-6-usb", sectionId: "sec-6-4", chapter: "第6章 コンピュータウイルス", jp: "USB", reading: "ユーアンドイーピー", zh: "USB", en: "USB", hint: "USBメモリなどの外部記憶装置" },
  { id: "term-6-vulnerability", sectionId: "sec-6-4", chapter: "第6章 コンピュータウイルス", jp: "脆弱性", reading: "ぜじゃくせい", zh: "漏洞", en: "vulnerability", hint: "ソフトウェアのセキュリティ欠陥" },
  { id: "term-6-antivirus", sectionId: "sec-6-5", chapter: "第6章 コンピュータウイルス", jp: "アンチウイルスソフト", reading: "アンチウイルスソフト", zh: "杀毒软件", en: "antivirus software", hint: "病毒を检测・除去するソフト" },
  { id: "term-6-backup", sectionId: "sec-6-5", chapter: "第6章 コンピュータウイルス", jp: "バックアップ", reading: "バックアップ", zh: "备份", en: "backup", hint: "データのコピー保存" },
  { id: "term-6-password-reuse", sectionId: "sec-6-5", chapter: "第6章 コンピュータウイルス", jp: "パスワード使い回し", reading: "パスワードつかいまわし", zh: "密码重复使用", en: "password reuse", hint: "同じ密码用于多个账号" }
];

const chapter6ExamHints = [
  { id: "hint-6-001", chapter: "第6章 コンピュータウイルス", keyword: "悪意あるソフトの総称", answer: "マルウェア", note: "マルウェア 包括各种恶意软件。" },
  { id: "hint-6-002", chapter: "第6章 コンピュータウイルス", keyword: "宿主ファイルに寄生", answer: "ウイルス", note: "病毒需要附在宿主文件上才能运行。" },
  { id: "hint-6-003", chapter: "第6章 コンピュータウイルス", keyword: "自己複製でネットワーク感染", answer: "ワーム", note: "蠕虫可以自我复制并通过网络传播。" },
  { id: "hint-6-004", chapter: "第6章 コンピュータウイルス", keyword: "有用なソフトに偽装", answer: "トロイの木馬", note: "木马伪装成有用软件暗中运行。" },
  { id: "hint-6-005", chapter: "第6章 コンピュータウイルス", keyword: "情報を窃取", answer: "スパイウェア", note: "间谍软件窃取用户信息。" },
  { id: "hint-6-006", chapter: "第6章 コンピュータウイルス", keyword: "ファイルを暗号化、身代金要求", answer: "ランサムウェア", note: "勒索软件锁文件并索要赎金。" },
  { id: "hint-6-007", chapter: "第6章 コンピュータウイルス", keyword: "自身をコピーして広がる", answer: "自己複製", note: "自我复制是蠕虫的特征。" },
  { id: "hint-6-008", chapter: "第6章 コンピュータウイルス", keyword: "病毒が寄生するファイル", answer: "宿主", note: "病毒需要宿主文件来传播。" },
  { id: "hint-6-009", chapter: "第6章 コンピュータウイルス", keyword: "无害な软件に成り済ます", answer: "偽装", note: "伪装是木马的主要特征。" },
  { id: "hint-6-010", chapter: "第6章 コンピュータウイルス", keyword: "ファイルを恢复するための支払い", answer: "身代金", note: "赎金是勒索软件的要求。" },
  { id: "hint-6-011", chapter: "第6章 コンピュータウイルス", keyword: "メールに付けたファイル", answer: "メール添付", note: "邮件附件是常见感染途径。" },
  { id: "hint-6-012", chapter: "第6章 コンピュータウイルス", keyword: "USBメモリなど", answer: "USB", note: "USB 设备可能携带恶意软件。" },
  { id: "hint-6-013", chapter: "第6章 コンピュータウイルス", keyword: "ソフトウェアのセキュリティ欠陥", answer: "脆弱性", note: "漏洞是攻击者入侵的入口。" },
  { id: "hint-6-014", chapter: "第6章 コンピュータウイルス", keyword: "OSやアプリを最新に更新", answer: "OS更新", note: "更新可以修补已知漏洞。" },
  { id: "hint-6-015", chapter: "第6章 コンピュータウイルス", keyword: "病毒を检测・除去する", answer: "アンチウイルスソフト", note: "杀毒软件用于检测和清除病毒。" },
  { id: "hint-6-016", chapter: "第6章 コンピュータウイルス", keyword: "データのコピー保存", answer: "バックアップ", note: "备份可以恢复被加密的文件。" },
  { id: "hint-6-017", chapter: "第6章 コンピュータウイルス", keyword: "同じ密码用于多个账号", answer: "パスワード使い回し防止", note: "密码重复使用会增加风险。" }
];

const chapter6Quizzes = [
  { id: "quiz-6-001", chapter: "第6章 コンピュータウイルス", question: "恶意软件的総称は何か。", answer: "マルウェア", explanation: "マルウェア 是恶意软件的统称，包括病毒、蠕虫、木马等。", hint: "悪意あるソフトの総称" },
  { id: "quiz-6-002", chapter: "第6章 コンピュータウイルス", question: "他のファイルに寄生しないと動作できないマルウェアは何か。", answer: "ウイルス", explanation: "病毒需要附在宿主文件上才能执行。", hint: "宿主ファイルに寄生" },
  { id: "quiz-6-003", chapter: "第6章 コンピュータウイルス", question: "ネットワークを通じて自分を複製し、自動的に広がるマルウェアは何か。", answer: "ワーム", explanation: "蠕虫可以自我复制并通过网络自动传播。", hint: "自己複製でネットワーク感染" },
  { id: "quiz-6-004", chapter: "第6章 コンピュータウイルス", question: "有用な免费软件に見せかけて、电脑に侵入し、不正行為を行うマルウェアは何か。", answer: "トロイの木馬", explanation: "木马伪装成有用软件，实际上执行恶意行为。", hint: "有用なソフトに偽装" },
  { id: "quiz-6-005", chapter: "第6章 コンピュータウイルス", question: "电脑内のファイルを暗号化し、元に戻す代わりに身代金を要求するマルウェアは何か。", answer: "ランサムウェア", explanation: "勒索软件加密文件并索要赎金。", hint: "ファイルを暗号化、身代金要求" },
  { id: "quiz-6-006", chapter: "第6章 コンピュータウイルス", question: "メールに添付されたファイルを開いた後、电脑が動き始めた場合、最も考えられる感染経路は何か。", answer: "メール添付", explanation: "邮件附件是病毒传播的常见途径。", hint: "メールに付けたファイル" },
  { id: "quiz-6-007", chapter: "第6章 コンピュータウイルス", question: "OSや及应用软件的セキュリティ欠陥を突いて侵入する行為を何と呼ぶか。", answer: "脆弱性を突く攻撃", explanation: "利用漏洞是攻击者入侵的常用方法。", hint: "ソフトウェアのセキュリティ欠陥" },
  { id: "quiz-6-008", chapter: "第6章 コンピュータウイルス", question: "ランサムウェア被害で開ransomされたファイルを復元する最も確実な方法は何か。", answer: "バックアップからの復元", explanation: "定期备份是应对勒索软件的最有效方法。", hint: "データのコピー保存" },
  { id: "quiz-6-009", chapter: "第6章 コンピュータウイルス", question: "病毒的感染経路として、不正网站上访问>Requiredファイルダウンロードと同じくらい重要な防范は何か。", answer: "OSや应用软件的更新", explanation: "保持系统和软件更新可以修补漏洞，防止感染。", hint: "OSやアプリを最新に更新" },
  { id: "quiz-6-010", chapter: "第6章 コンピュータウイルス", question: "複数のウェブサイトで同じ账号、パスワードを使い回すことのリスクは何か。", answer: "パスワードリスト攻撃", explanation: "一个网站泄露后，攻击者用相同密码尝试其他网站。", hint: "同じ密码用于多个账号" }
];