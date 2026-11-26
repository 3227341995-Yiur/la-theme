/**
 * 托盘右键菜单：每套配色一个菜单项，当前项带 ✓ 与主色圆点。
 *
 * 菜单项是注册时拍平的纯数据，换主题后重新注册一遍，勾选标记才会跟着走；
 * onSelect 在主窗口执行，直接调插件自己的引擎，和设置中心双向同步。
 */
import { THEMES, type ThemePack } from './themes'
import { getActiveThemeId, getMode, setThemePack, subscribe } from './engine'

const SECTION = 'la-theme'

/** 菜单项左侧的迷你窗口预览：底色 / 侧栏 / 主色 / 面板。 */
function preview(theme: ThemePack) {
  const p = theme[getMode()]
  return `<svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" aria-hidden="true">`
    + `<rect x="1" y="1" width="16" height="16" rx="4" fill="${p.bg}" stroke="${p.border}"/>`
    + `<rect x="3.6" y="3.6" width="4" height="10.8" rx="1.4" fill="${p.sidebar}"/>`
    + `<rect x="9" y="3.6" width="5.4" height="2.3" rx="1.1" fill="${p.accent}"/>`
    + `<rect x="9" y="7.1" width="5.4" height="7.3" rx="1.2" fill="${p.surface}" stroke="${p.border}" stroke-width="0.6"/>`
    + `</svg>`
}

export function initTrayMenu(ctx) {
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
  }
}
