// 第4章「インターネット利用者のモラル」数据补丁文件。
// 本文件只用于人工检查，确认后再合并到 content-data.js。

const chapter4StudySections = [
  {
    id: "sec-4-1",
    chapter: "第4章 インターネット利用者のモラル",
    title: "個人情報とプライバシーを守る",
    category: "モラル",
    goal: "理解网上发布信息时要保护自己和他人的个人信息、隐私。",
    jpKeywords: ["個人情報", "プライバシー", "公開範囲", "位置情報"],
    explanation: "姓名、地址、照片、位置等信息可能识别个人，发布前要确认公开范围。",
    scenario: "上传照片时，背景里出现学校名和住址线索。",
    examHints: ["住所", "電話番号", "位置情報", "公開範囲"],
    confusion: "个人信息是能识别个人的信息，隐私更重视私人生活不被公开。",
    summary: "出す前に個人情報を確認"
  },
  {
    id: "sec-4-2",
    chapter: "第4章 インターネット利用者のモラル",
    title: "誹謗中傷と匿名性",
    category: "モラル",
    goal: "理解匿名并不代表可以随意攻击他人。",
    jpKeywords: ["誹謗中傷", "匿名性", "発信責任", "名誉毀損"],
    explanation: "网络上的恶意攻击会伤害他人，即使匿名也可能被追究责任。",
    scenario: "用匿名账号在 SNS 上持续写同学坏话。",
    examHints: ["悪口", "匿名", "社会的評価低下", "責任"],
    confusion: "匿名性可以保护隐私，但不能作为攻击他人的理由。",
    summary: "匿名でも責任は残る"
  },
  {
    id: "sec-4-3",
    chapter: "第4章 インターネット利用者のモラル",
    title: "メールマナーと BCC",
    category: "モラル",
    goal: "掌握电子邮件的基本礼仪和 BCC 的使用场景。",
    jpKeywords: ["メールマナー", "件名", "宛先", "CC", "BCC"],
    explanation: "邮件应写清楚主题、对象和正文。多人发送时，保护地址可使用 BCC。",
    scenario: "给很多人发送通知时，把所有邮箱都放在 To 中导致地址泄露。",
    examHints: ["一斉送信", "メールアドレスを隠す", "BCC"],
    confusion: "CC 是让他人可见的抄送，BCC 是隐藏收件人的密件抄送。",
    summary: "一斉送信は BCC を確認"
  },
  {
    id: "sec-4-4",
    chapter: "第4章 インターネット利用者のモラル",
    title: "チャットマナーと炎上",
    category: "モラル",
    goal: "理解聊天时的表达礼仪，以及炎上如何发生。",
    jpKeywords: ["チャットマナー", "炎上", "投稿", "感情的表現"],
    explanation: "短消息容易被误解，冲动发言、攻击性表达和不当投稿可能引发炎上。",
    scenario: "没有确认事实就发出刺激性评论，被大量批评和扩散。",
    examHints: ["短文", "誤解", "感情的", "炎上"],
    confusion: "批评可以有根据地表达，攻击和煽动容易造成问题。",
    summary: "送る前に一呼吸"
  },
  {
    id: "sec-4-5",
    chapter: "第4章 インターネット利用者のモラル",
    title: "デマと情報の偏り",
    category: "モラル",
    goal: "理解网络信息可能不准确或偏向，需要多来源确认。",
    jpKeywords: ["デマ", "情報の偏り", "複数情報源", "確認"],
    explanation: "网络信息不一定正确，可能是谣言、误传或只呈现一方观点。",
    scenario: "看到刺激性消息后没有查证就转发给朋友。",
    examHints: ["デマ", "複数情報源", "公式情報", "偏り"],
    confusion: "热门信息不一定正确，转发前要查证。",
    summary: "信じる前に確認"
  },
  {
    id: "sec-4-6",
    chapter: "第4章 インターネット利用者のモラル",
    title: "生成AI内容确认",
    category: "モラル",
    goal: "理解生成 AI 输出需要人工确认，不能直接当作事实。",
    jpKeywords: ["生成AI", "内容确认", "誤情報", "出典確認"],
    explanation: "生成 AI 可能输出错误、过时或偏向的信息，使用前要确认来源和事实。",
    scenario: "把 AI 生成的说明直接提交，里面含有不存在的法律名称。",
    examHints: ["AI", "誤情報", "出典", "人が確認"],
    confusion: "AI 能辅助整理，但最终确认责任在人。",
    summary: "AIの答えも確認する"
  }
];

const chapter4Terms = [
  { id: "term-4-personal-information", sectionId: "sec-4-1", chapter: "第4章 インターネット利用者のモラル", jp: "個人情報", reading: "こじんじょうほう", zh: "个人信息", en: "personal information", hint: "氏名、住所、電話番号" },
  { id: "term-4-privacy", sectionId: "sec-4-1", chapter: "第4章 インターネット利用者のモラル", jp: "プライバシー", reading: "プライバシー", zh: "隐私", en: "privacy", hint: "私生活、知られたくない情報" },
  { id: "term-4-public-range", sectionId: "sec-4-1", chapter: "第4章 インターネット利用者のモラル", jp: "公開範囲", reading: "こうかいはんい", zh: "公开范围", en: "visibility range", hint: "誰に見えるか" },
  { id: "term-4-location-information", sectionId: "sec-4-1", chapter: "第4章 インターネット利用者のモラル", jp: "位置情報", reading: "いちじょうほう", zh: "位置信息", en: "location information", hint: "写真や投稿の場所" },
  { id: "term-4-account", sectionId: "sec-4-1", chapter: "第4章 インターネット利用者のモラル", jp: "アカウント", reading: "アカウント", zh: "账号", en: "account", hint: "利用者を識別する" },
  { id: "term-4-online-abuse", sectionId: "sec-4-2", chapter: "第4章 インターネット利用者のモラル", jp: "誹謗中傷", reading: "ひぼうちゅうしょう", zh: "诽谤中伤", en: "online abuse", hint: "悪口、攻撃的投稿" },
  { id: "term-4-anonymity", sectionId: "sec-4-2", chapter: "第4章 インターネット利用者のモラル", jp: "匿名性", reading: "とくめいせい", zh: "匿名性", en: "anonymity", hint: "名前を出さない性質" },
  { id: "term-4-posting-responsibility", sectionId: "sec-4-2", chapter: "第4章 インターネット利用者のモラル", jp: "発信責任", reading: "はっしんせきにん", zh: "发布责任", en: "responsibility for posting", hint: "投稿した人の責任" },
  { id: "term-4-defamation", sectionId: "sec-4-2", chapter: "第4章 インターネット利用者のモラル", jp: "名誉毀損", reading: "めいよきそん", zh: "名誉毁损", en: "defamation", hint: "社会的評価低下" },
  { id: "term-4-block", sectionId: "sec-4-2", chapter: "第4章 インターネット利用者のモラル", jp: "ブロック", reading: "ブロック", zh: "屏蔽", en: "block", hint: "相手との接触を止める" },
  { id: "term-4-email-manners", sectionId: "sec-4-3", chapter: "第4章 インターネット利用者のモラル", jp: "メールマナー", reading: "メールマナー", zh: "邮件礼仪", en: "email etiquette", hint: "件名、本文、宛先" },
  { id: "term-4-subject", sectionId: "sec-4-3", chapter: "第4章 インターネット利用者のモラル", jp: "件名", reading: "けんめい", zh: "邮件主题", en: "subject", hint: "メールの題名" },
  { id: "term-4-to", sectionId: "sec-4-3", chapter: "第4章 インターネット利用者のモラル", jp: "宛先", reading: "あてさき", zh: "收件人", en: "recipient", hint: "送る相手" },
  { id: "term-4-cc", sectionId: "sec-4-3", chapter: "第4章 インターネット利用者のモラル", jp: "CC", reading: "シーシー", zh: "抄送", en: "carbon copy", hint: "見える控え送信" },
  { id: "term-4-bcc", sectionId: "sec-4-3", chapter: "第4章 インターネット利用者のモラル", jp: "BCC", reading: "ビーシーシー", zh: "密件抄送", en: "blind carbon copy", hint: "メールアドレスを隠す" },
  { id: "term-4-chat-manners", sectionId: "sec-4-4", chapter: "第4章 インターネット利用者のモラル", jp: "チャットマナー", reading: "チャットマナー", zh: "聊天礼仪", en: "chat etiquette", hint: "短文、誤解に注意" },
  { id: "term-4-flaming", sectionId: "sec-4-4", chapter: "第4章 インターネット利用者のモラル", jp: "炎上", reading: "えんじょう", zh: "网络炎上、舆论爆发", en: "online backlash", hint: "批判が集中して広がる" },
  { id: "term-4-post", sectionId: "sec-4-4", chapter: "第4章 インターネット利用者のモラル", jp: "投稿", reading: "とうこう", zh: "发帖、投稿", en: "post", hint: "SNSに書き込む" },
  { id: "term-4-emotional-expression", sectionId: "sec-4-4", chapter: "第4章 インターネット利用者のモラル", jp: "感情的表現", reading: "かんじょうてきひょうげん", zh: "情绪化表达", en: "emotional expression", hint: "強い言葉、怒り" },
  { id: "term-4-rumor", sectionId: "sec-4-5", chapter: "第4章 インターネット利用者のモラル", jp: "デマ", reading: "デマ", zh: "谣言", en: "false rumor", hint: "根拠がない情報" },
  { id: "term-4-information-bias", sectionId: "sec-4-5", chapter: "第4章 インターネット利用者のモラル", jp: "情報の偏り", reading: "じょうほうのかたより", zh: "信息偏向", en: "information bias", hint: "一方だけの情報" },
  { id: "term-4-multiple-sources", sectionId: "sec-4-5", chapter: "第4章 インターネット利用者のモラル", jp: "複数情報源", reading: "ふくすうじょうほうげん", zh: "多个信息来源", en: "multiple sources", hint: "別の情報でも確認" },
  { id: "term-4-official-information", sectionId: "sec-4-5", chapter: "第4章 インターネット利用者のモラル", jp: "公式情報", reading: "こうしきじょうほう", zh: "官方信息", en: "official information", hint: "官公庁、公式サイト" },
  { id: "term-4-generative-ai", sectionId: "sec-4-6", chapter: "第4章 インターネット利用者のモラル", jp: "生成AI", reading: "せいせいエーアイ", zh: "生成式 AI", en: "generative AI", hint: "文章や画像を生成" },
  { id: "term-4-ai-content-check", sectionId: "sec-4-6", chapter: "第4章 インターネット利用者のモラル", jp: "内容确认", reading: "ないようかくにん", zh: "内容确认", en: "content verification", hint: "人が確認する" },
  { id: "term-4-misinformation", sectionId: "sec-4-6", chapter: "第4章 インターネット利用者のモラル", jp: "誤情報", reading: "ごじょうほう", zh: "错误信息", en: "misinformation", hint: "正しくない情報" },
  { id: "term-4-source-check", sectionId: "sec-4-6", chapter: "第4章 インターネット利用者のモラル", jp: "出典確認", reading: "しゅってんかくにん", zh: "出处确认", en: "source checking", hint: "根拠を確認" }
];

const chapter4ExamHints = [
  { id: "hint-4-001", chapter: "第4章 インターネット利用者のモラル", keyword: "氏名、住所、電話番号", answer: "個人情報", note: "能识别个人的信息。" },
  { id: "hint-4-002", chapter: "第4章 インターネット利用者のモラル", keyword: "私生活、知られたくない情報", answer: "プライバシー", note: "私人生活相关信息要谨慎。" },
  { id: "hint-4-003", chapter: "第4章 インターネット利用者のモラル", keyword: "写真、背景、学校名", answer: "個人情報漏れに注意", note: "照片背景也可能泄露信息。" },
  { id: "hint-4-004", chapter: "第4章 インターネット利用者のモラル", keyword: "誰に見えるか", answer: "公開範囲", note: "发布前确认可见对象。" },
  { id: "hint-4-005", chapter: "第4章 インターネット利用者のモラル", keyword: "位置、GPS、写真", answer: "位置情報", note: "位置信息可能暴露住址和行动。" },
  { id: "hint-4-006", chapter: "第4章 インターネット利用者のモラル", keyword: "悪口、攻撃的投稿", answer: "誹謗中傷", note: "网上恶意攻击会伤害他人。" },
  { id: "hint-4-007", chapter: "第4章 インターネット利用者のモラル", keyword: "名前を出さない", answer: "匿名性", note: "匿名也要承担发言责任。" },
  { id: "hint-4-008", chapter: "第4章 インターネット利用者のモラル", keyword: "匿名でも責任", answer: "発信責任", note: "发布者要对内容负责。" },
  { id: "hint-4-009", chapter: "第4章 インターネット利用者のモラル", keyword: "社会的評価低下", answer: "名誉毀損", note: "损害他人社会评价可能违法。" },
  { id: "hint-4-010", chapter: "第4章 インターネット利用者のモラル", keyword: "件名、本文、宛先", answer: "メールマナー", note: "邮件要清楚、礼貌、对象正确。" },
  { id: "hint-4-011", chapter: "第4章 インターネット利用者のモラル", keyword: "一斉送信、メールアドレスを隠す", answer: "BCC", note: "多人发送时可用 BCC 保护地址。" },
  { id: "hint-4-012", chapter: "第4章 インターネット利用者のモラル", keyword: "見える控え送信", answer: "CC", note: "CC 收件人彼此可见。" },
  { id: "hint-4-013", chapter: "第4章 インターネット利用者のモラル", keyword: "短文、誤解、強い言葉", answer: "チャットマナー", note: "聊天短文容易被误解。" },
  { id: "hint-4-014", chapter: "第4章 インターネット利用者のモラル", keyword: "批判が集中して広がる", answer: "炎上", note: "不当发言被大量扩散批评。" },
  { id: "hint-4-015", chapter: "第4章 インターネット利用者のモラル", keyword: "根拠がない情報", answer: "デマ", note: "没有根据的信息不要转发。" },
  { id: "hint-4-016", chapter: "第4章 インターネット利用者のモラル", keyword: "一方だけの情報", answer: "情報の偏り", note: "只看单一来源容易偏向。" },
  { id: "hint-4-017", chapter: "第4章 インターネット利用者のモラル", keyword: "複数情報源で確認", answer: "情報の偏り対策", note: "用多个来源确认。" },
  { id: "hint-4-018", chapter: "第4章 インターネット利用者のモラル", keyword: "官公庁、公式サイト", answer: "公式情報", note: "重要信息优先看官方来源。" },
  { id: "hint-4-019", chapter: "第4章 インターネット利用者のモラル", keyword: "AI、文章や画像を生成", answer: "生成AI", note: "生成 AI 可辅助生成内容。" },
  { id: "hint-4-020", chapter: "第4章 インターネット利用者のモラル", keyword: "AIの答え、人が確認", answer: "生成AI内容确认", note: "AI 输出需要人工确认。" },
  { id: "hint-4-021", chapter: "第4章 インターネット利用者のモラル", keyword: "正しくない情報、AI", answer: "誤情報", note: "AI 可能输出错误内容。" },
  { id: "hint-4-022", chapter: "第4章 インターネット利用者のモラル", keyword: "根拠、出典", answer: "出典確認", note: "确认信息来源和依据。" }
];

const chapter4Quizzes = [
  { id: "quiz-4-001", chapter: "第4章 インターネット利用者のモラル", question: "氏名、住所、電話番号など、個人を識別できる情報を何というか。", answer: "個人情報", explanation: "个人信息是能识别个人的信息。", hint: "氏名、住所、電話番号" },
  { id: "quiz-4-002", chapter: "第4章 インターネット利用者のモラル", question: "私生活や知られたくない情報を勝手に公開しない考え方は何に関係するか。", answer: "プライバシー", explanation: "私人生活信息属于隐私。", hint: "私生活、知られたくない情報" },
  { id: "quiz-4-003", chapter: "第4章 インターネット利用者のモラル", question: "ネット上で他人の悪口を攻撃的に書き込む行為は何か。", answer: "誹謗中傷", explanation: "恶意攻击他人的发言是誹謗中傷。", hint: "悪口、攻撃的投稿" },
  { id: "quiz-4-004", chapter: "第4章 インターネット利用者のモラル", question: "名前を出さずに投稿できる性質を何というか。", answer: "匿名性", explanation: "匿名性は名前を出さない性質。", hint: "名前を出さない" },
  { id: "quiz-4-005", chapter: "第4章 インターネット利用者のモラル", question: "複数人にメールを送り、互いのメールアドレスを隠したいとき使う欄は何か。", answer: "BCC", explanation: "BCC は受信者同士にアドレスを見せない。", hint: "一斉送信、メールアドレスを隠す" },
  { id: "quiz-4-006", chapter: "第4章 インターネット利用者のモラル", question: "メールで内容が分かる題名を書くことは、何のマナーにあたるか。", answer: "メールマナー", explanation: "件名、宛先、本文を分かりやすくする。", hint: "件名、本文、宛先" },
  { id: "quiz-4-007", chapter: "第4章 インターネット利用者のモラル", question: "短い文章で誤解を生まないように、言葉遣いに注意することは何のマナーか。", answer: "チャットマナー", explanation: "チャットは短文なので誤解されやすい。", hint: "短文、誤解" },
  { id: "quiz-4-008", chapter: "第4章 インターネット利用者のモラル", question: "不適切な投稿に批判が集中して広がることを何というか。", answer: "炎上", explanation: "批判が集中して拡散する状態。", hint: "批判が集中して広がる" },
  { id: "quiz-4-009", chapter: "第4章 インターネット利用者のモラル", question: "根拠のない情報を確認せずに転送することは、何を広める危険があるか。", answer: "デマ", explanation: "没有根据的信息可能是谣言。", hint: "根拠がない情報" },
  { id: "quiz-4-010", chapter: "第4章 インターネット利用者のモラル", question: "一方の意見だけを見て判断すると、何に注意が必要か。", answer: "情報の偏り", explanation: "只看单一来源容易偏向。", hint: "一方だけの情報" },
  { id: "quiz-4-011", chapter: "第4章 インターネット利用者のモラル", question: "情報が正しいか確認するため、複数の情報源を見ることは何の対策か。", answer: "情報の偏り対策", explanation: "多个来源可以降低偏见和误信。", hint: "複数情報源で確認" },
  { id: "quiz-4-012", chapter: "第4章 インターネット利用者のモラル", question: "生成AIが出した内容をそのまま信じず、人が根拠を確認することを何というか。", answer: "生成AI内容确认", explanation: "AI 输出可能有误，需要人工确认。", hint: "AIの答え、人が確認" }
];
