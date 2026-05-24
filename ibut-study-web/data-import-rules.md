# iBut 数据批量导入规则

## 1. 基本原则

- 每次只处理一个章节
- 不一次性处理全篇文档
- 不修改页面功能文件
- 不修改 app.js
- 不修改 HTML / CSS
- 只生成或补充 studySections、terms、examHints、quizzes 数据
- 每章生成前先检查现有 id，避免重复
- 每章生成后必须检查 sectionId 是否能对应 studySections.id
- 每章数据必须适合网页卡片阅读
- 原始资料中的中日英关键词必须尽量保留
- 考试题眼必须独立进入 examHints
- 模拟题必须独立进入 quizzes

---

## 2. 数据数组结构

content-data.js 中固定使用以下四个数组：

```js
const studySections = [];
const terms = [];
const examHints = [];
const quizzes = [];
```

禁止新增复杂数据结构。

禁止改字段名。

禁止使用 import / export。

---

## 3. studySections 规则

每个小节生成一个 studySection。

字段固定为：

```js
{
  id: "",
  chapter: "",
  title: "",
  category: "",
  goal: "",
  jpKeywords: [],
  explanation: "",
  scenario: "",
  examHints: [],
  confusion: "",
  summary: ""
}
```

### 3.1 id 命名规则

第1章：

```text
sec-1-1
sec-1-2
sec-1-3
```

第2章：

```text
sec-2-1
sec-2-2
sec-2-3
```

第3章：

```text
sec-3-1
sec-3-2
sec-3-3
```

依此类推。

禁止使用随机 id。

禁止使用中文 id。

禁止重复 id。

### 3.2 chapter 写法

chapter 必须统一写成：

```text
第1章 インターネットの基礎
第2章 インターネットでの被害
第3章 インターネット関連の法規
第4章 インターネット利用者のモラル
第5章 インターネットのしくみ
第6章 コンピュータウイルス
第7章 インターネットセキュリティ
```

### 3.3 category 写法

category 使用短标签：

```text
基礎
被害
法規
モラル
しくみ
ウイルス
セキュリティ
```

### 3.4 内容长度要求

- explanation 不要写成超长论文
- scenario 使用典型场景短句
- examHints 使用关键词数组
- confusion 用来写易混淆点
- summary 用口诀式总结

---

## 4. terms 规则

每个术语生成一个 term。

字段固定为：

```js
{
  id: "",
  sectionId: "",
  chapter: "",
  jp: "",
  reading: "",
  zh: "",
  en: "",
  hint: ""
}
```

### 4.1 id 命名规则

格式：

```text
term-章节号-英文或罗马字关键词
```

例：

```text
term-2-phishing
term-2-one-click
term-2-support-scam
term-3-copyright
term-3-portrait-rights
term-7-mfa
```

禁止重复 id。

### 4.2 sectionId 规则

每个 term 的 sectionId 必须指向某个已存在的 studySections.id。

例如：

```js
sectionId: "sec-2-2"
```

必须能在 studySections 中找到：

```js
id: "sec-2-2"
```

禁止出现孤立 term。

### 4.3 中日英字段要求

每个 term 必须包含：

- jp：日本語
- reading：読み方
- zh：中文
- en：English
- hint：考试题眼

例：

```js
{
  id: "term-2-phishing",
  sectionId: "sec-2-2",
  chapter: "第2章 インターネットでの被害",
  jp: "フィッシング詐欺",
  reading: "フィッシングさぎ",
  zh: "钓鱼诈骗",
  en: "phishing",
  hint: "偽サイト、ID、パスワード"
}
```

---

## 5. examHints 规则

每个题眼生成一个 examHint。

字段固定为：

```js
{
  id: "",
  chapter: "",
  keyword: "",
  answer: "",
  note: ""
}
```

### 5.1 id 命名规则

格式：

```text
hint-章节号-序号
```

例：

```text
hint-2-001
hint-2-002
hint-3-001
hint-7-001
```

### 5.2 keyword 和 answer 规则

keyword 写“题目中出现的关键词”。

answer 写“立刻想到的答案”。

例：

```js
{
  id: "hint-2-001",
  chapter: "第2章 インターネットでの被害",
  keyword: "偽サイト、ID、パスワード",
  answer: "フィッシング詐欺",
  note: "假网站诱导输入账号、密码、信用卡信息。"
}
```

---

## 6. quizzes 规则

每道题生成一个 quiz。

字段固定为：

```js
{
  id: "",
  chapter: "",
  question: "",
  answer: "",
  explanation: "",
  hint: ""
}
```

### 6.1 id 命名规则

格式：

```text
quiz-章节号-序号
```

例：

```text
quiz-2-001
quiz-2-002
quiz-3-001
quiz-7-001
```

### 6.2 题目写法

题目要接近 iBut 考试风格：

- 场景判断题
- 术语定义题
- 正确行动选择题
- 易混淆判断题

不要写成开放式作文题。

例：

```js
{
  id: "quiz-2-001",
  chapter: "第2章 インターネットでの被害",
  question: "銀行を装ったメールから偽サイトへ誘導し、IDとパスワードを入力させる手口は何か。",
  answer: "フィッシング詐欺",
  explanation: "题眼是 偽サイト、ID、パスワード。",
  hint: "偽サイト、ID、パスワード"
}
```

---

## 7. 每章生成数量建议

### 第2章 インターネットでの被害

建议：

- studySections: 7 个左右
- terms: 25〜35 个
- examHints: 20 个以上
- quizzes: 12〜15 道

必须覆盖：

- 具体的な被害
- フィッシング詐欺
- ワンクリック詐欺
- 架空請求
- サポート詐欺
- 偽通販サイト
- 投資詐欺
- ロマンス詐欺
- 迷惑メール
- チェーンメール
- 健康面への影響
- ネット依存

### 第3章 インターネット関連の法規

建议：

- studySections: 5〜8 个
- terms: 20〜30 个
- examHints: 20 个以上
- quizzes: 10〜15 道

必须覆盖：

- 著作権
- 肖像権
- パブリシティ権
- プライバシーの権利
- 違法ダウンロード
- 違法アップロード
- 名誉毀損
- 特定商取引法
- 電子契約法
- 不正アクセス禁止法
- 個人情報保護法
- 特定電子メール法
- ステマ規制

### 第4章 インターネット利用者のモラル

建议：

- studySections: 5〜8 个
- terms: 20〜30 个
- examHints: 15〜25 个
- quizzes: 10〜15 道

必须覆盖：

- 個人情報
- プライバシー
- 誹謗中傷
- 匿名性
- メールマナー
- チャットマナー
- BCC
- デマ
- 炎上
- 情報の偏り
- 生成AI内容确认

### 第5章 インターネットのしくみ

建议：

- studySections: 5〜8 个
- terms: 20〜30 个
- examHints: 15〜20 个
- quizzes: 8〜12 道

必须覆盖：

- Web
- URL
- HTTP
- HTTPS
- DNS
- SMTP
- POP3
- IMAP
- SNS
- CGM
- ネットショッピング
- ネットバンキング
- Wi-Fi
- クラウドサービス
- 生成AI

### 第6章 コンピュータウイルス

建议：

- studySections: 3〜5 个
- terms: 10〜20 个
- examHints: 10〜15 个
- quizzes: 8〜10 道

必须覆盖：

- マルウェア
- ウイルス
- ワーム
- トロイの木馬
- スパイウェア
- ランサムウェア
- 感染経路
- 感染防止

### 第7章 インターネットセキュリティ

建议：

- studySections: 6〜10 个
- terms: 20〜30 个
- examHints: 20 个以上
- quizzes: 10〜15 道

必须覆盖：

- ユーザー認証
- パスワード管理
- パスワードを狙った攻撃
- 総当たり攻撃
- 辞書攻撃
- パスワードリスト攻撃
- 生体認証
- 暗号化
- 電子証明書
- フィルタリング
- ソーシャル・エンジニアリング
- スキミング
- スマートフォン対策
- 多要素認証

### 第1章 インターネットの基礎

建议：

- studySections: 3〜5 个
- terms: 10〜20 个
- examHints: 8〜12 个
- quizzes: 5〜8 道

必须覆盖：

- インターネット
- Web / WWW
- サーバ
- クライアント
- プロバイダ
- IPアドレス
- DNS

---

## 8. 禁止事项

- 不要改变字段名
- 不要删除现有数据
- 不要把正文写成超长段落
- 不要把多个小节混成一个 section
- 不要生成重复 id
- 不要让 terms.sectionId 指向不存在的 section
- 不要混入 v2 功能
- 不要修改 app.js
- 不要修改页面布局
- 不要改 CSS
- 不要一次性导入全章以外的内容
- 不要直接覆盖 content-data.js
- 不要把 patch 文件直接用于页面运行

---

## 9. 每章生成后的检查

每章生成后必须检查：

1. content-data.js 语法是否正确
2. 新增 studySections 是否能显示
3. 新增 terms 是否能显示
4. terms.sectionId 是否全部有效
5. 搜索日文关键词是否有效
6. 搜索中文关键词是否有效
7. 搜索英文关键词是否有效
8. 模拟题是否能展开答案
9. Console 是否无红色报错
10. 没有重复 id
11. 没有孤立 sectionId
12. 没有修改页面功能文件

---

## 10. 推荐批量导入流程

每章采用以下流程：

```text
原始资料
↓
生成 chapter-x-data-patch.js
↓
人工检查 patch
↓
合并到 content-data.js
↓
页面验收
↓
Git 提交
```

不要使用：

```text
原始资料 → 直接覆盖 content-data.js
```

---

## 11. 每章 patch 文件命名

第1章：

```text
chapter-1-data-patch.js
```

第2章：

```text
chapter-2-data-patch.js
```

第3章：

```text
chapter-3-data-patch.js
```

依此类推。

每个 patch 文件只用于人工检查，不直接被 index.html 引入。

---

## 12. patch 文件格式

每个 patch 文件必须包含四个数组。

以第2章为例：

```js
const chapter2StudySections = [];
const chapter2Terms = [];
const chapter2ExamHints = [];
const chapter2Quizzes = [];
```

第3章：

```js
const chapter3StudySections = [];
const chapter3Terms = [];
const chapter3ExamHints = [];
const chapter3Quizzes = [];
```

---

## 13. 合并规则

合并到 content-data.js 时：

1. 不删除旧数据
2. 如果发现旧数据是 MVP 简略版，可以由完整数据替换，但必须说明
3. 不允许重复 id
4. 不允许重复完全相同的 term
5. 不允许重复完全相同的 quiz
6. 合并后必须检查语法
7. 合并后必须检查网页显示

---

## 14. Git 提交规则

每完成一章，单独提交。

第2章：

```bash
git add content-data.js
git commit -m "data: complete chapter 2 iBut content"
```

第3章：

```bash
git add content-data.js
git commit -m "data: complete chapter 3 iBut content"
```

第4章：

```bash
git add content-data.js
git commit -m "data: complete chapter 4 iBut content"
```

第7章：

```bash
git add content-data.js
git commit -m "data: complete chapter 7 iBut content"
```

第6章：

```bash
git add content-data.js
git commit -m "data: complete chapter 6 iBut content"
```

第5章：

```bash
git add content-data.js
git commit -m "data: complete chapter 5 iBut content"
```

第1章：

```bash
git add content-data.js
git commit -m "data: complete chapter 1 iBut content"
```

综合题眼和模拟题：

```bash
git add content-data.js
git commit -m "data: add final review hints and quizzes"
```

---

## 15. 人工检查关键词

每章导入后，至少搜索 3 类关键词：

### 日语

例如：

```text
フィッシング詐欺
著作権
多要素認証
```

### 中文

例如：

```text
钓鱼诈骗
著作权
多因素认证
```

### 英语

例如：

```text
phishing
copyright
multi-factor authentication
```

三种语言都能找到相关内容，才算通过。
