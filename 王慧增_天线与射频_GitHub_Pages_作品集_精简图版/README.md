# 王慧增 · 天线与射频项目作品集

白底、黑灰正文、深蓝点缀的静态作品集。包含首页、四个独立项目页、移动端布局、页内导航及真实图片预览。无框架、无构建步骤、无外部字体或第三方脚本。

## 本地预览

解压后直接打开 `index.html`。也可以在目录中运行 `python -m http.server 8000`，然后打开 `http://localhost:8000`。所有链接均使用相对路径，支持 GitHub 项目站点的子目录。

## GitHub Pages 部署

1. 登录自己的 GitHub 账号，新建一个仓库，例如 `antenna-rf-portfolio`。
2. 上传本目录内的全部文件和 `assets` 文件夹。仓库根目录应直接包含 `index.html`，不要只上传 ZIP，也不要额外套一层文件夹。保留 `.nojekyll`。
3. 进入仓库 **Settings → Pages → Build and deployment**，Source 选择 **Deploy from a branch**。
4. Branch 选择存放文件的分支（通常为 `main`），文件夹选择 **/(root)**，点击 Save。
5. 等待部署完成，使用 Pages 页面显示的真实网址。项目站点通常为 `https://你的用户名.github.io/仓库名/`；这是格式示例，并非已经创建的网址。
6. 打开首页和四个项目页，确认图片和链接可用，再将简历中的“项目作品集”四字设为该网址的超链接。

步骤依据 [GitHub Pages 官方部署说明](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site)，核对日期：2026-09-08。此交付包尚未部署到某个 GitHub 账号。

## 替换图片（不需要改 HTML）

1. 把真实图片保存到 `assets/images/`。建议使用英文文件名，例如 `fet-structure.png`。
2. 编辑 `assets/media.js`，找到对应键，把空字符串改为图片路径。例如：

```js
"fet-structure": "assets/images/fet-structure.png",
"fet-circuit": "assets/images/fet-circuit.png"
```

3. 留空的键继续显示占位。图片加载失败时仍保留图名与占位提示，不会假装有测试图。
4. 刷新网页查看。真实图片按原比例完整显示，点击可放大，按 Esc 或“关闭”退出。PNG、JPG、WebP 均可，SVG仅用于已确认可公开的自有矢量图。
5. 推荐图表长边1600–2400像素、照片长边1200–2000像素；保留坐标轴、单位、图例和测试条件。同类图保持相同裁剪尺度。不要通过拉伸图片改变图表比例。

## 图位对照

精简为15个图位：FET 7张、WiFi 3张、无线输能2张、透明车窗3张。同类图组合展示；组合图应保留每个子图的独立坐标、频点、图例和单位。

| 页面 | 图位键 | 内容 |
| --- | --- | --- |
| FET有源接收天线 | `fet-structure` | 图1：有源接收天线整体结构 |
| FET有源接收天线 | `fet-circuit` | 图2：ADS有源前端电路 |
| FET有源接收天线 | `fet-stability` | 图3：μ与μ′稳定性对比组合图 |
| FET有源接收天线 | `fet-s21` | 图4：S21对比 |
| FET有源接收天线 | `fet-sweep` | 图5：Rdamp与Cdamp参数扫描 |
| FET有源接收天线 | `fet-prototype` | 图6：PCB与集成有源天线实物组合图 |
| FET有源接收天线 | `fet-chamber` | 图7：VNA或微波暗室测试照片 |
| WiFi高隔离天线 | `wifi-structure` | 图8：HFSS天线模型 |
| WiFi高隔离天线 | `wifi-sparams` | 图9：S11、S22与S21仿真结果 |
| WiFi高隔离天线 | `wifi-current` | 图10：2.45 GHz与5.8 GHz表面电流组合图 |
| 微波无线输能系统 | `wpt-field` | 图11：柳州设备安装与收发链路现场组合照片 |
| 微波无线输能系统 | `wpt-data` | 图12：接收功率测试记录 |
| 透明车窗多频带天线 | `window-structure` | 图13：透明车窗多端口天线结构 |
| 透明车窗多频带天线 | `window-sparams` | 图14：多端口S参数 |
| 透明车窗多频带天线 | `window-current` | 图15：2–3个代表频点表面电流组合图 |

## 修改文字与样式

- `index.html`：个人简介、四个项目入口、技术能力与联系方式。
- `project-fet.html`：FET有源接收天线。
- `project-wifi.html`：WiFi多频段高隔离天线。
- `project-wireless-power.html`：微波无线输能系统。
- `project-transparent-window.html`：透明车窗多频带天线。
- `assets/style.css`：颜色、字号、间距、移动端与打印布局。
- `assets/site.js`：图片加载、放大与键盘操作。
- `assets/media.js`：真实图片路径配置。

## 内容边界

网站只使用用户已提供的项目指标。WiFi性能标明为仿真结果；透明车窗项目保留“进行中”；AWPL标明“目前在投”。无线输能记录约10 m、100 W系统输入及约1.5 W接收功率，不推算1.5%传输效率。未添加ECC、DG、TARC、设备型号或未经确认的频率。

暂未添加原始HFSS、ADS工程、Gerber、未公开论文全文及客户资料。补充柳州现场照片前，请隐去客户名称、设备编号及敏感设备信息。出生日期和详细住址不在网站公开内容中。

## 分享前核对

替换待补图片，检查图表清晰度；在手机浏览器检查纵向阅读和图片放大；验证四个项目入口及联系链接；确认公开内容无敏感资料。当前所有实物、结构与曲线图均为明确标注的占位，不是实际成果图片。
