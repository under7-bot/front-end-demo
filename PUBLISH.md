# 发布与手机查看说明

## 手机在同一 Wi-Fi 下查看

在电脑 PowerShell 里运行：

```powershell
cd "C:\Users\golde\OneDrive\Documents\New project 3"
"C:\Users\golde\.cache\codex-runtimes\codex-primary-runtime\dependencies\node\bin\node.exe" share-server.js
```

手机浏览器打开：

```text
http://10.220.14.12:8000/
```

如果 Windows 防火墙提示，允许专用网络访问。

## 分享给别人

### 方式一：Netlify Drop

1. 解压 `site-publish-package.zip`
2. 打开 https://app.netlify.com/drop
3. 把解压后的文件夹拖进去
4. Netlify 会生成公开网址

### 方式二：GitHub Pages

1. 在 GitHub 新建空仓库，例如 `classroom-study-pages`
2. 把仓库地址添加到本地：

```powershell
git remote add origin https://github.com/你的用户名/classroom-study-pages.git
git push -u origin master
```

3. 在 GitHub 仓库页面打开：

```text
Settings -> Pages -> Deploy from a branch
Branch: master
Folder: /root
```

4. 最终链接通常是：

```text
https://你的用户名.github.io/classroom-study-pages/
```

根目录的 `index.html` 会自动跳转到课堂资料总览页。
