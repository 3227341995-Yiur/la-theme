# la-theme

Lucky Apps 的独立主题插件。内置多套配色，跟随宿主的亮色 / 暗色模式，在设置中心「主题」里切换。

## 内置主题

| 主题 | 说明 |
| --- | --- |
| 晨雾蓝 | 宿主默认的 JetBrains 蓝 |
| 樱花粉 | 柔和粉调 |
| 森野绿 | 低饱和绿 |
| 琥珀暖阳 | 暖棕底色 |
| 暮紫 | 冷静的紫调 |
| 午夜青 | 冷色深空 |

每套主题都有亮色和暗色两份调色板，切换明暗模式时自动换用对应配色。

## 全局背景图

设置中心「主题」页点「设置背景图…」打开独立面板，布局对齐 IDEA 的 Set Background Image：

- 左侧是 16:10 的预览区，按当前不透明度和布局实时渲染，右上角显示当前参数；
- 右侧是图片选择、不透明度滑杆（0–100%，默认 45%）与布局下拉；
- 布局：填充 / 适应 / 拉伸 / 居中 / 平铺；
- 支持 PNG / JPG / WebP / SVG，最大 20MB；预览区可以直接拖入图片；
- 图片存在 IndexedDB，选项存在 localStorage，重启后自动恢复；
- 图片在所有主题之后透出，亮色 / 暗色都会自动换成对应的半透明底色。

## 安装

在 Lucky Apps 仓库里执行（推荐装到用户 profile）：

```bash
pnpm lucky-apps plugin add ../la-theme --user
```

也可以在设置中心「扩展」的安装框里填本地目录路径。

## 开发

```bash
pnpm install
pnpm build
```

产物：

- `lib/client.js`：Cordis client bundle（CSS 已内联注入）
- `lib/node.js`：Node half，只负责把 client bundle 登记给宿主

## 实现方式

- `src/themes.ts`：主题数据 + 调色板到宿主颜色令牌的展开；
- `src/engine.ts`：把选中的主题写成 `html` 上的内联 CSS 变量，`localStorage` 记住选择；
- `src/background.ts`：背景图图层、IndexedDB 存取与布局 / 不透明度；
- 选「晨雾蓝」且没有背景图时不写任何变量，直接使用宿主默认配色；
- 背景图模式下，`--wr-*` / `--el-*` 里的大面积底色换成半透明，图片从 `.la-theme-background` 图层透出；
- 插件被停用 / 卸载时清掉图层与内联变量，界面立即回到宿主默认配色；
- 只覆盖颜色令牌，不改布局、字体、圆角和阴影。

新增一套主题只需要在 `src/themes.ts` 的 `THEMES` 里追加一项，提供 `light` / `dark` 两份调色板。
