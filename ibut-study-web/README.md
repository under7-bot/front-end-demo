# iBut考试对策学习网页

## 一、项目名称

iBut考试对策学习网页

## 二、项目简介

这是一个用于复习 iBut 考试内容的静态学习网页。

它把考试复习内容整理成适合逐章查看、快速搜索、移动端阅读的页面。当前项目包含：

- 章节学习
- 每章关键词中日英对照
- 考试题眼速查
- 模拟题练习
- 已读进度记录
- 移动端阅读

## 三、技术栈

本项目使用：

- HTML
- CSS
- 原生 JavaScript
- localStorage

本项目明确不使用：

- 不使用 React
- 不使用 Vue
- 不使用 Next.js
- 不使用 Tailwind
- 不使用 Bootstrap
- 不需要后端
- 不需要数据库

## 四、文件结构

```text
ibut-study-web/
├── spec.md
├── constitution.md
├── index.html
├── styles.css
├── content-data.js
├── app.js
└── README.md
```

各文件作用：

- `spec.md`：项目规格说明，定义页面结构和功能范围。
- `constitution.md`：项目开发规则，说明技术边界、代码规则和禁止事项。
- `index.html`：页面 HTML 结构，包含 header、nav、search、main、aside、section、footer。
- `styles.css`：页面样式文件，负责布局、颜色、卡片、表格和移动端适配。
- `content-data.js`：学习资料数据文件，保存章节、关键词、题眼和模拟题。
- `app.js`：页面交互逻辑，负责渲染内容、搜索、筛选、已读状态和模拟题答案展开。
- `README.md`：项目说明文档，说明如何运行、验收和部署。

## 五、本地运行方法

方法一：直接打开文件。

1. 下载或克隆项目。
2. 进入项目文件夹。
3. 找到 `index.html`。
4. 用浏览器直接打开 `index.html`。

方法二：使用 VS Code Live Server。

1. 用 VS Code 打开项目文件夹。
2. 安装或启用 Live Server 插件。
3. 右键 `index.html`。
4. 选择 `Open with Live Server`。

注意：

- 不需要 `npm install`
- 不需要 `npm run dev`
- 不需要启动后端服务器

## 六、主要功能说明

1. 章节导航：点击顶部导航按钮，可以按章节筛选学习内容。
2. 关键词搜索：在搜索框输入中文、日本語或 English 关键词，可以筛选相关内容。
3. 左侧章节目录：显示当前筛选后的学习板块，点击目录可以切换内容。
4. 内容阅读区：显示当前学习板块的目标、关键词、解释、场景、题眼、易混点和小结。
5. 每章关键词中日英表：根据当前学习板块显示对应的日本語、読み方、中文、English 和考试题眼。
6. 题眼速查表：把考试题目中常见关键词对应到应该想到的答案。
7. 模拟题答案展开：点击“查看答案”可以显示正确答案、解析和题眼关键词，再次点击可以收起。
8. 已读标记：点击“标记为已读”后，当前学习板块会显示为已读。
9. localStorage 进度保存：已读状态会保存在浏览器里，刷新页面后仍然保留。
10. 移动端响应式布局：手机宽度下页面会改为单列，导航按钮会自动换行。

## 七、验收方法

本地运行检查：

- 页面能正常打开
- Console 没有红色报错
- CSS 正常加载
- JS 正常加载

功能检查：

- 点击章节导航可以筛选
- 输入关键词可以搜索
- 点击目录可以切换内容
- 当前章节关键词表可以显示
- 题眼速查表可以显示
- 模拟题答案可以展开和收起
- 已读按钮可以更新进度
- 刷新页面后已读状态保留

移动端检查：

- 打开浏览器开发者工具
- 切换到手机宽度
- 页面没有横向滚动
- 导航按钮自动换行
- Sidebar 和正文上下排列
- 表格区域可以单独横向滑动

## 八、Vercel 部署方法

本项目是纯静态网页，根目录有 `index.html`，因此可以直接部署到 Vercel。

部署步骤：

1. 将项目上传到 GitHub。
2. 打开 Vercel。
3. 点击 `Import Git Repository`。
4. 选择项目仓库。
5. `Framework Preset` 选择 `Other` 或保持默认。
6. `Build Command` 留空。
7. `Output Directory` 留空。
8. 点击 `Deploy`。

部署完成后，Vercel 会生成一个网页地址，可以直接访问学习网页。

## 九、Git 提交记录建议

```bash
git add README.md
git commit -m "docs: add usage and deployment guide"
```

## 十、后续开发注意事项

- `spec.md v1.0` 已锁定。
- 新功能不能随意加入 v1。
- 新功能应进入 v2。
- 修改代码前先确认是否符合 `constitution.md`。
- 每次修改后都要解释代码逻辑。
- 每次修改后都要提交 Git。
