/**
 * 界面布局增强（侵入式）：侧边栏面板拖宽、图标尺寸与间距。
 *
 * 不改宿主代码：面板拖宽直接写 .nav-panel 的 inline width，
 * 图标尺寸 / 间距用 CSS 变量覆盖 rail。全部按本机保存。
 */
import './layout.css'

const PANEL_KEY = 'la-theme:panel-width'
const RAIL_KEY = 'la-theme:rail-style'

const PANEL_DEFAULT = 268
const PANEL_MIN = 220
const PANEL_MAX = 460
const RAIL_MIN = 28
const RAIL_MAX = 42
const GAP_MIN = 2
const GAP_MAX = 10
const RAIL_DEFAULT = { size: 34, gap: 4 }

const listeners = new Set<() => void>()

let storedPanel: number | null = readPanel()
let rail = readRail()
let panel: HTMLElement | null = null
let handle: HTMLDivElement | null = null
let observer: MutationObserver | null = null
let panelObserver: ResizeObserver | null = null
let frame = 0
let dragging = false
let startX = 0
let startWidth = 0

function clamp(value: number, min: number, max: number) {
  return Math.min(max, Math.max(min, Math.round(value)))
}

function readPanel(): number | null {
  try {
    const value = Number(localStorage.getItem(PANEL_KEY))
    return Number.isFinite(value) && value > 0 ? clamp(value, PANEL_MIN, PANEL_MAX) : null
  } catch {
    return null
  }
}

function readRail() {
  try {
    const raw = JSON.parse(localStorage.getItem(RAIL_KEY) || '{}')
    return {
      size: clamp(Number(raw.size) || RAIL_DEFAULT.size, RAIL_MIN, RAIL_MAX),
      gap: clamp(Number(raw.gap ?? RAIL_DEFAULT.gap), GAP_MIN, GAP_MAX),
    }
  } catch {
    return { ...RAIL_DEFAULT }
  }
}

function save(key: string, value: unknown) {
  try {
    localStorage.setItem(key, typeof value === 'string' ? value : JSON.stringify(value))
  } catch {
    // localStorage 不可用时只在当前会话生效
  }
}

function notify() {
  for (const listener of listeners) {
    try {
      listener()
    } catch (error) {
      console.error('[la-theme] 布局监听器异常:', error)
    }
  }
}

function applyRail() {
  const root = document.documentElement
  root.style.setProperty('--la-rail-size', `${rail.size}px`)
  root.style.setProperty('--la-rail-gap', `${rail.gap}px`)
}

function again() {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    refresh()
  })
}

function positionHandle() {
  if (!handle) return
  if (!panel) {
    handle.style.display = 'none'
    return
  }
  const rect = panel.getBoundingClientRect()
  handle.style.display = 'block'
  handle.style.left = `${rect.right}px`
  handle.style.top = `${rect.top}px`
  handle.style.height = `${rect.height}px`
}

function applyPanel() {
  panel = document.querySelector<HTMLElement>('.nav-panel')
  if (!panel) {
    positionHandle()
    return
  }
  if (storedPanel === null) {
    if (panel.style.width) panel.style.removeProperty('width')
  } else {
    const next = `${storedPanel}px`
    if (panel.style.width !== next) panel.style.width = next
  }
  positionHandle()
}

function refresh() {
  const next = document.querySelector<HTMLElement>('.nav-panel')
  if (next !== panel) {
    panel = next
    panelObserver?.disconnect()
    if (panel && typeof ResizeObserver !== 'undefined') {
      panelObserver = new ResizeObserver(positionHandle)
      panelObserver.observe(panel)
    }
  }
  applyPanel()
}

function onHandleDown(event: PointerEvent) {
  if (!panel || event.button !== 0) return
  event.preventDefault()
  dragging = true
  startX = event.clientX
  startWidth = panel.getBoundingClientRect().width
  handle?.setPointerCapture(event.pointerId)
  document.documentElement.classList.add('la-layout-resizing')
}

function onHandleMove(event: PointerEvent) {
  if (!dragging || !handle?.hasPointerCapture(event.pointerId)) return
  storedPanel = clamp(startWidth + event.clientX - startX, PANEL_MIN, PANEL_MAX)
  if (panel) panel.style.width = `${storedPanel}px`
  positionHandle()
}

function onHandleUp(event: PointerEvent) {
  if (!dragging) return
  dragging = false
  document.documentElement.classList.remove('la-layout-resizing')
  if (storedPanel !== null) save(PANEL_KEY, String(storedPanel))
  notify()
  try {
    handle?.releasePointerCapture(event.pointerId)
  } catch {
    // 指针已取消时 capture 会自动释放
  }
}

function onHandleKey(event: KeyboardEvent) {
  if (event.key === 'Home') {
    event.preventDefault()
    resetPanelWidth()
    return
  }
  if (event.key !== 'ArrowLeft' && event.key !== 'ArrowRight') return
  event.preventDefault()
  setPanelWidth(getLayoutState().panelWidth + (event.key === 'ArrowRight' ? 16 : -16))
}

function ensureHandle() {
  if (handle || typeof document === 'undefined' || !document.body) return
  handle = document.createElement('div')
  handle.className = 'la-panel-resizer'
  handle.setAttribute('role', 'separator')
  handle.setAttribute('aria-orientation', 'vertical')
  handle.setAttribute('aria-label', '拖动调整侧边栏宽度')
  handle.tabIndex = 0
  handle.addEventListener('pointerdown', onHandleDown)
  handle.addEventListener('pointermove', onHandleMove)
  handle.addEventListener('pointerup', onHandleUp)
  handle.addEventListener('pointercancel', onHandleUp)
  handle.addEventListener('dblclick', resetPanelWidth)
  handle.addEventListener('keydown', onHandleKey)
  document.body.appendChild(handle)
}

function onWindowResize() {
  again()
}

export function initLayout() {
  if (typeof document === 'undefined' || observer || !document.body) return
  ensureHandle()
  applyRail()
  observer = new MutationObserver(again)
  observer.observe(document.body, { childList: true, subtree: true })
  window.addEventListener('resize', onWindowResize, { passive: true })
  refresh()
}

export function setPanelWidth(value: number) {
  storedPanel = clamp(value, PANEL_MIN, PANEL_MAX)
  save(PANEL_KEY, String(storedPanel))
  applyPanel()
  notify()
}

export function resetPanelWidth() {
  storedPanel = null
  try {
    localStorage.removeItem(PANEL_KEY)
  } catch {
    // 同上
  }
  applyPanel()
  notify()
}

export function setRailSize(value: number) {
  rail = { ...rail, size: clamp(value, RAIL_MIN, RAIL_MAX) }
  save(RAIL_KEY, rail)
  applyRail()
  notify()
}

export function setRailGap(value: number) {
  rail = { ...rail, gap: clamp(value, GAP_MIN, GAP_MAX) }
  save(RAIL_KEY, rail)
  applyRail()
  notify()
}

export function resetLayout() {
  resetPanelWidth()
  rail = { ...RAIL_DEFAULT }
  try {
    localStorage.removeItem(RAIL_KEY)
  } catch {
    // 同上
  }
  applyRail()
  notify()
}

export function getLayoutState() {
  return {
    panelWidth: storedPanel ?? PANEL_DEFAULT,
    panelMin: PANEL_MIN,
    panelMax: PANEL_MAX,
    railSize: rail.size,
    railGap: rail.gap,
  }
}

export function subscribeLayout(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** 插件停用 / 卸载时把面板宽度、图标尺寸和拖动条还给宿主。 */
export function destroyLayout() {
  observer?.disconnect()
  observer = null
  panelObserver?.disconnect()
  panelObserver = null
  if (frame) cancelAnimationFrame(frame)
  frame = 0
  dragging = false
  window.removeEventListener('resize', onWindowResize)
  document.documentElement.classList.remove('la-layout-resizing')
  handle?.remove()
  handle = null
  document.querySelector<HTMLElement>('.nav-panel')?.style.removeProperty('width')
  const root = document.documentElement
  root.style.removeProperty('--la-rail-size')
  root.style.removeProperty('--la-rail-gap')
  panel = null
  listeners.clear()
}
