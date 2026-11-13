/**
 * 主题引擎：把选中的主题写成 html 上的内联 CSS 变量。
 *
 * - 选“晨雾蓝”（宿主默认）时不写任何变量，完全交回宿主；
 * - 亮色 / 暗色由宿主 theme 服务决定，引擎只按当前模式选调色板；
 * - 插件 dispose 时清掉所有内联变量，界面立即回到宿主默认配色。
 */
import { DEFAULT_THEME_ID, backgroundVars, findTheme, themeVars, type ThemeMode } from './themes'

export const THEME_STORAGE_KEY = 'la-theme:pack'

const listeners = new Set<() => void>()
const appliedKeys = new Set<string>()

let activeId = readStored()
let mode: ThemeMode = resolveMode()
let backgroundActive = false

function readStored() {
  try {
    const stored = localStorage.getItem(THEME_STORAGE_KEY)
    return findTheme(stored) ? stored : DEFAULT_THEME_ID
  } catch {
    return DEFAULT_THEME_ID
  }
}

function resolveMode(): ThemeMode {
  if (typeof document === 'undefined') return 'light'
  return document.documentElement.classList.contains('dark') ? 'dark' : 'light'
}

function notify() {
  for (const listener of listeners) {
    try {
      listener()
    } catch (error) {
      console.error('[la-theme] 监听器异常:', error)
    }
  }
}

function clearApplied() {
  if (typeof document === 'undefined') return
  for (const key of appliedKeys) document.documentElement.style.removeProperty(key)
  appliedKeys.clear()
}

/** 按当前主题与模式重写变量；默认主题且没有背景图时直接清空。 */
export function applyTheme() {
  clearApplied()
  if (typeof document === 'undefined') return
  const theme = findTheme(activeId)
  if (!theme) return
  // 背景图模式即使选默认主题也要写变量，把大面积底色换成半透明。
  if (theme.id === DEFAULT_THEME_ID && !backgroundActive) return
  const palette = theme[mode]
  const vars = backgroundActive
    ? { ...themeVars(palette, mode), ...backgroundVars(palette, mode) }
    : themeVars(palette, mode)
  const root = document.documentElement
  for (const [key, value] of Object.entries(vars)) {
    root.style.setProperty(key, value)
    appliedKeys.add(key)
  }
}

/** 背景图挂载 / 移除时切换界面令牌的透明度。 */
export function setBackgroundActive(active: boolean) {
  if (active === backgroundActive) return
  backgroundActive = active
  applyTheme()
  notify()
}

/** 恢复宿主默认配色（插件被停用 / 卸载时调用）。 */
export function clearTheme() {
  clearApplied()
}

export function setThemePack(id: string) {
  const theme = findTheme(id)
  if (!theme) return activeId
  if (theme.id !== activeId) {
    activeId = theme.id
    try {
      localStorage.setItem(THEME_STORAGE_KEY, activeId)
    } catch {
      // localStorage 不可用时只在当前会话生效
    }
    applyTheme()
    notify()
  }
  return activeId
}

/** 跟随宿主亮暗模式切换调色板。 */
export function setMode(next: ThemeMode) {
  if (next !== 'light' && next !== 'dark') return
  if (next === mode) return
  mode = next
  applyTheme()
  notify()
}

export function getActiveThemeId() {
  return activeId
}

export function getMode() {
  return mode
}

export function subscribe(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}
