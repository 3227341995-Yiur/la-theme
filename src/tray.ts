/**
 * 托盘右键菜单：一级「主题」悬浮后在左侧展开二级菜单，
 * 每套配色一张和设置中心同款的主题缩略图，点缩略图直接切换。
 *
 * 托盘菜单窗口只吃纯数据，缩略图只能走 iconSvg：画一版 mini 界面，
 * 再用 addStyle 把图标位放大成卡片大小。换色后重新注册，✓ 和缩略图跟着走。
 */
import { THEMES, type ThemePack } from './themes'
import { getActiveThemeId, getMode, setThemePack, subscribe } from './engine'

const SECTION = 'la-theme'
const STYLE_ID = 'la-theme:tray'
const ITEM_PREFIX = 'la-theme:pack:'

const TRAY_CSS = `
/* 二级面板排成 3×3 缩略图网格，标签放图下，和设置中心的主题卡一致； */
/* 第一层菜单只有这份面板用，顺便去掉重复标题，让 9 套配色正好放得下。 */
.tray-shell .tray-flyout {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-auto-rows: 56px;
  align-content: start;
  gap: 2px;
  padding: 3px;
  scrollbar-width: thin;
}
.tray-shell .tray-flyout .tray-menu-title {
  display: none;
}
.tray-shell .tray-flyout [data-tray-item^="${ITEM_PREFIX}"] {
  height: 56px;
  box-sizing: border-box;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2px;
  padding: 0;
  text-align: center;
}
.tray-shell .tray-flyout [data-tray-item^="${ITEM_PREFIX}"] .tray-icon {
  width: 64px !important;
  height: 40px !important;
}
.tray-shell .tray-flyout [data-tray-item^="${ITEM_PREFIX}"] svg {
  width: 64px !important;
  height: 40px !important;
  border-radius: 4px;
}
.tray-shell .tray-flyout [data-tray-item^="${ITEM_PREFIX}"] .tray-label {
  flex: none;
  max-width: 100%;
  overflow: hidden;
  font-size: 10.5px;
  line-height: 1.15;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
}
`

/** 与设置中心主题卡同一套结构：底色 / 侧栏 / 标题 / 面板 / 主色胶囊。 */
function preview(theme: ThemePack) {
  const p = theme[getMode()]
  return `<svg xmlns="http://www.w3.org/2000/svg" width="64" height="40" viewBox="0 0 64 40" aria-hidden="true">`
    + `<rect width="64" height="40" rx="5" fill="${p.bg}"/>`
    + `<rect x="5" y="5" width="15" height="30" rx="3" fill="${p.sidebar}"/>`
    + `<rect x="7.5" y="7.5" width="5" height="5" rx="1.5" fill="${p.accent}"/>`
    + `<rect x="7.5" y="14.5" width="10" height="3.5" rx="1.75" fill="${p.accentSoft}"/>`
    + `<rect x="7.5" y="20" width="10" height="3" rx="1.5" fill="${p.border}"/>`
    + `<rect x="7.5" y="25" width="7" height="3" rx="1.5" fill="${p.border}"/>`
    + `<rect x="24" y="6" width="22" height="3.5" rx="1.75" fill="${p.text}" opacity="0.55"/>`
    + `<rect x="24" y="12" width="35" height="23" rx="3" fill="${p.surface}" stroke="${p.border}" stroke-width="0.7"/>`
    + `<rect x="27" y="15.5" width="24" height="3" rx="1.5" fill="${p.border}"/>`
    + `<rect x="27" y="20.5" width="16" height="3" rx="1.5" fill="${p.border}"/>`
    + `<rect x="27" y="27" width="11" height="4.5" rx="2.25" fill="${p.accent}"/>`
    + `</svg>`
}

export function initTrayMenu(ctx) {
  const disposeStyle = ctx.tray.addStyle?.(STYLE_ID, TRAY_CSS)
  let disposers: Array<() => void> = []
  const render = () => {
    for (const dispose of disposers) dispose()
    const active = THEMES.find(theme => theme.id === getActiveThemeId()) || THEMES[0]
    disposers = [ctx.tray.registerItem({
      id: 'la-theme:themes',
      label: '主题',
      icon: 'Brush',
      hint: active.name,
      section: SECTION,
      order: 200,
      children: THEMES.map(theme => ({
        id: `${ITEM_PREFIX}${theme.id}`,
        label: theme.id === active.id ? `✓ ${theme.name}` : theme.name,
        iconSvg: preview(theme),
        keepOpen: true,
        onSelect: () => setThemePack(theme.id),
      })),
    })]
    // 菜单正开着时换主题，让托盘窗口立刻重取菜单数据。
    ctx.tray.refresh?.()
  }
  render()
  const off = subscribe(render)
  return () => {
    off()
    for (const dispose of disposers) dispose()
    disposers = []
    disposeStyle?.()
  }
}
