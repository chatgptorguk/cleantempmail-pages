# CleanTempMail 宣传网站

中英双语响应式产品介绍页，主要按钮指向 https://cleantempmail.com/ 。静态 HTML / CSS，加上轻量语言偏好、滚动动画和额度估算脚本，无构建步骤、外部字体、追踪脚本或运行时依赖。邮箱卡片为视觉示意，不能收取邮件。

## 语言切换

- 中文：https://cleantempmailcom.github.io/cleantempmail-pages/?lang=zh
- English：https://cleantempmailcom.github.io/cleantempmail-pages/en/?lang=en
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
- 基础布局：`site/assets/style.css`
- 深色视觉、悬浮导航、功能卡片布局与移动端：`site/assets/polish.css`
- 滚动入场、卡片光效、移动导航、额度估算：`site/assets/effects.js`
- 双语指南：`site/guide/temporary-email.html`、`site/en/guide/temporary-email.html`
- 分享预览：`site/assets/social.png`
- 站点地图：`site/sitemap.xml`
- 网站图标：`site/assets/favicon.svg`

域名供应情况与服务规则以官网为准。页面没有编造用户数、评价、可用性保证或邮件保留时长。两种语言均已配置 canonical 和 hreflang。

## 功能与 API 介绍

中英文页面介绍免费网页邮箱、自定义前缀、多域名、自有域名接入、邮件管理、追踪保护、隐私工具、iOS App、Chrome 扩展和付费 REST API。API 区域包含四档一次性请求套餐、额度规则和官网购买入口。

价格与规则核对于 2026-10-04，来源为 https://cleantempmail.com/api 。首页与帮助来源：https://cleantempmail.com/ 、https://cleantempmail.com/help 。套餐价格若有变化，应同步更新两个语言页面中的价格和核对日期。宣传页不处理付款或 API 密钥。

## 视觉与 SEO

提供悬浮圆角导航、薄荷绿与淡紫色层次、收件箱示意、大小组合的功能卡片、SVG 图标、多端入口图形、API 测试流程图，以及动态光晕、滚动入场、指针卡片光效、阅读进度与回到顶部。中英文首页共用样式，指南页同步使用品牌与导航样式。尊重 `prefers-reduced-motion`；JavaScript 关闭时正文可见。动画使用 CSS transform 和 opacity，滚动监听使用 requestAnimationFrame，移动端不启用指针光效，无动画框架或外部字体依赖。

四个静态页面各自配置标题、描述、canonical、双向 hreflang、Open Graph 分享图和 JSON-LD。主站使用 WebSite / WebPage，指南使用 Article。没有虚构评分或用户评价，也没有承诺搜索排名或富媒体结果。

站点地图：https://cleantempmailcom.github.io/cleantempmail-pages/sitemap.xml 。可在你已验证的 Google Search Console 资源中提交；本次未进行 Search Console 所有权验证或提交。GitHub Pages 项目路径下的 robots.txt 不能控制域名根目录的抓取，因此本项目未添加无效的子目录 robots 文件。

额度估算器只进行本地计算，不收集 API 密钥。估算公式为：流程数 ×（向上取整的等待秒数 / 轮询间隔 + 3）；三次基础操作分别为创建地址、读取一封邮件和删除一封邮件。实际重试和额外操作会增加消耗。
