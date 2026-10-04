# CleanTempMail 宣传网站

中英双语响应式产品介绍页，主要按钮指向 https://cleantempmail.com/ 。静态 HTML / CSS，加上轻量语言偏好脚本，无构建步骤、外部字体、追踪脚本或运行时依赖。邮箱卡片为视觉示意，不能收取邮件。

## 语言切换

- 中文：https://chatgptorguk.github.io/cleantempmail-pages/?lang=zh
- English：https://chatgptorguk.github.io/cleantempmail-pages/en/?lang=en
- 页头的 `中文 / EN` 可以切换语言。浏览器允许本地存储时，会记住访客选择；`?lang=zh` 或 `?lang=en` 优先于已保存偏好。
- 两种语言都是完整静态页面，JavaScript 被禁用时仍可阅读及切换。两页有各自标题、描述、canonical 和 hreflang。

## 本地预览

在本目录运行：

```sh
python3 -m http.server 8080 --directory site
```

打开 http://localhost:8080 。

## 发布到 GitHub Pages

1. 在你的 GitHub 账号下新建仓库，例如 `cleantempmail-pages`。GitHub Free 账号请使用公开仓库。
2. 上传本项目的 `site/` 文件夹、`.github/workflows/pages.yml` 和本说明，保留目录结构。工作流目录以点开头，注意不要遗漏。
3. 仓库默认分支使用 `main`。在 **Settings → Pages → Build and deployment → Source** 选择 **GitHub Actions**。
4. 在 **Actions → Deploy GitHub Pages → Run workflow** 手动运行首次发布。以后修改 `site/` 并推送到 `main` 会自动部署。
5. 工作流成功后，在 **Settings → Pages** 查看实际公开地址，通常为 `https://你的账号.github.io/cleantempmail-pages/`。

工作流仅上传 `site/`，说明文件不会被发布。所有本地资源使用相对路径，支持项目子路径。上线前请确认公开的文案和链接。

官方部署说明：https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages

## 修改内容

- 中文宣传文案、官网链接、SEO 描述：`site/index.html`
- English copy and metadata：`site/en/index.html`
- 语言偏好：`site/assets/language.js`
- 配色、布局、移动端样式：`site/assets/style.css`
- 网站图标：`site/assets/favicon.svg`

域名供应情况与服务规则以官网为准。页面没有编造用户数、评价、可用性保证或邮件保留时长。两种语言均已配置 canonical 和 hreflang。
