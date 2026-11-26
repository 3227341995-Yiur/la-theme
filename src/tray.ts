/**
 * 托盘右键菜单：和设置中心一样，每套配色一张缩略图，点缩略图直接切换。
 *
 * 托盘菜单窗口只吃纯数据，缩略图只能走 iconSvg：画一版 mini 界面，
 * 再用 addStyle 把图标位放大成卡片大小。换色后重新注册，✓ 和缩略图跟着走。
 */
import { THEMES, type ThemePack } from './themes'
import { getActiveThemeId, getMode, setThemePack, subscribe } from './engine'

const SECTION = 'la-theme'
const STYLE_ID = 'la-theme:tray'

const TRAY_CSS = `
[data-tray-item^="la-theme:"] {
  min-height: 50px;
}
[data-tray-item^="la-theme:"] svg {
  width: 64px !important;
  height: 40px !important;
  border-radius: 4px;
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
    disposers = THEMES.map((theme, index) => ctx.tray.registerItem({
      id: `la-theme:${theme.id}`,
      label: theme.id === getActiveThemeId() ? `✓ ${theme.name}` : theme.name,
      iconSvg: preview(theme),
      section: SECTION,
      order: 200 + index,
      onSelect: () => setThemePack(theme.id),
    }))
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
