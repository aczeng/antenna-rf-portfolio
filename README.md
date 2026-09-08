# 王慧增｜天线与射频项目作品集

上海大学电子信息硕士，2027届。面向天线工程师、射频工程师、RF前端工程师和微波工程师岗位。

## GitHub Pages地址

预期发布地址（完成下方设置且部署成功后生效）：

https://aczeng.github.io/antenna-rf-portfolio/

简历中可将“项目作品集”链接到此地址。

## 项目结构

```text
antenna-rf-portfolio/
├── index.html
├── 404.html
├── projects/
│   ├── active-antenna.html
│   ├── wifi-antenna.html
│   ├── microwave-wpt.html
│   └── vehicle-antenna.html
├── assets/
│   ├── css/
│   │   └── style.css
│   └── images/
│       └── README.md
├── README.md
└── .nojekyll
```

`index.html` 和 `.nojekyll` 必须直接位于 GitHub 仓库根目录。不要再添加中文目录或同名外层目录。上传解压后文件夹**里面的内容**，不要上传 ZIP 文件本身。

这是纯静态 HTML 与 CSS 网站，没有运行时 JavaScript、npm、Node.js、React、数据库或服务器依赖。双击首页即可本地浏览；GitHub Pages负责公开托管。

## 如何增加图片

1. 将真实图片上传到 `assets/images/`，建议使用下表中的英文小写文件名。
2. 打开对应 `projects/*.html`，搜索“此处插入”或图位标识。
3. 每个占位框前已有注释中的 `<img>` 示例。将整个 `<div class="media-stage">…</div>` 替换为该示例，保留外层 `<figure>` 和下方 `<figcaption>`。确认图片已上传，再启用图片引用。
4. 按图片实际内容修改 `alt` 和一句话图注；提交后检查桌面和手机效果。

项目详情页示例：

```html
<figure class="media" id="wifi-structure">
  <img class="project-image"
       src="../assets/images/wifi-antenna-structure.png"
       alt="金属侧板屏蔽环境下的共体双馈天线结构"
       loading="lazy" decoding="async">
  <figcaption>共辐射体双馈结构及隔离枝节。</figcaption>
</figure>
```

首页若增加图片，使用 `assets/images/文件名.png`；项目页使用 `../assets/images/文件名.png`。文件名大小写必须与引用完全一致。不要填写电脑磁盘路径、`file://` 或以 `/assets/` 开头的路径。

当前保留15个图位：FET 7个、WiFi 3个、无线输能2个、透明车窗3个。μ与μ′、样机实物、代表频点电流和现场照片可使用组合图。无线输能系统框图已有HTML文字结构，无需额外上传图片；若以后需要替换，建议命名 `wpt-system.png`。

| 图片文件名 | 对应HTML图位标识 |
| --- | --- |
| `active-antenna-structure.png` | fet-structure |
| `active-antenna-circuit.png` | fet-circuit |
| `active-antenna-stability.png` | fet-stability |
| `active-antenna-s21.png` | fet-s21 |
| `active-antenna-sweep.png` | fet-sweep |
| `active-antenna-prototype.jpg` | fet-prototype |
| `active-antenna-measurement.jpg` | fet-chamber |
| `wifi-antenna-structure.png` | wifi-structure |
| `wifi-antenna-sparams.png` | wifi-sparams |
| `wifi-antenna-current.png` | wifi-current |
| `wpt-site-liuzhou.jpg` | wpt-field |
| `wpt-test.png` | wpt-data |
| `vehicle-antenna-structure.png` | window-structure |
| `vehicle-antenna-sparams.png` | window-sparams |
| `vehicle-antenna-current.png` | window-current |

仅上传适合公开展示的结构截图、曲线和测试照片。不要上传原始HFSS、ADS工程、Gerber、未公开论文全文或客户内部资料。现场照片如有客户名称、设备编号等敏感内容，先处理后上传。不要使用无关网络图片或虚构仿真曲线。

## 如何更新网页

```text
修改文件
→ Commit changes
→ GitHub Pages自动重新部署
```

首页内容在 `index.html`；项目内容在对应的 `projects/*.html`；统一样式在 `assets/css/style.css`。页面顶部使用同一导航结构，修改导航文案时同步修改首页和四个项目页。

## GitHub Pages设置

在仓库 `aczeng/antenna-rf-portfolio` 中打开：

```text
Settings
→ Pages
→ Build and deployment
→ Source: Deploy from a branch
→ Branch: main
→ Folder: / (root)
→ Save
```

根目录保留 `.nojekyll`。等待仓库 Actions 中 Pages部署成功，再打开网站。

[GitHub官方发布来源说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)

## 从旧中文子目录迁移

先保留旧仓库提交记录；将本目录内的 `index.html`、`404.html`、`projects`、`assets`、`README.md` 和 `.nojekyll` 放到仓库根目录，随后删除旧中文目录并提交。若线上有后来添加的真实图片，先将它们保留到 `assets/images/` 并修正引用。不要用本地文件覆盖尚未核对的真实图片。

此交付包不包含旧中文外层目录，也不含本机绝对路径。旧中文子目录链接会失效，应将简历链接更新为上述仓库根地址。

## 路径与404说明

- 首页项目入口为 `projects/active-antenna.html` 等相对路径。
- 项目页品牌链接为 `../index.html`，“返回项目首页”链接为 `../index.html#projects`。
- 首页使用 `assets/css/style.css`，项目页使用 `../assets/css/style.css`。
- 首页导航锚点为 `#projects`、`#skills`、`#contact`。
- `404.html` 使用项目仓库路径 `/antenna-rf-portfolio/index.html` 返回首页，确保从任意深度的无效网址也能回到正确站点。它是刻意保留的站点路径，不是本地绝对路径。仓库改名或改用自定义域名时，需要相应更新404链接和本文网址。

## 发布后检查

- 首页以及四个项目页均能打开，CSS正常加载。
- 各项目品牌链接、返回入口和相邻项目链接正确。
- 在手机宽度检查项目卡片单列、导航换行、指标卡片换行与图片完整显示。
- 确认真实图片清晰、文件名大小写准确；未提供图片时只显示明确占位框。
- 打开一个不存在的地址，确认404页面的返回链接有效。
- 输入100 W与接收约1.5 W是不同参考位置的已提供数据，不推算或标注“效率1.5%”。
