/**
 * 侧边栏图标拖拽排序（侵入式）。
 *
 * Tauri 的 WebView 默认接管原生拖放，HTML5 DnD 在桌面端会被吞掉，
 * 所以这里用 Pointer Events 自己实现：拖动时只改 CSS order 和顺序数据，
 * 不搬 DOM，避免和 Vue 的列表渲染打架。
 */
import { animate } from 'animejs'
import { moveKey } from './rail-order'
import './rail.css'

const ORDER_KEY = 'la-theme:rail-order'
const ENABLED_KEY = 'la-theme:rail-drag'
const ITEM_SELECTOR = '.rail-items > .rail-item'
const DRAG_THRESHOLD = 4

const listeners = new Set<() => void>()

let enabled = readEnabled()
let order = readOrder()
let observer: MutationObserver | null = null
let frame = 0
let listening = false

let drag: {
  pointerId: number
  source: HTMLElement
  startX: number
  startY: number
  active: boolean
  ghost: HTMLElement | null
  ghostWidth: number
  ghostHeight: number
  draft: string[]
} | null = null

function readEnabled() {
  try {
    return localStorage.getItem(ENABLED_KEY) !== '0'
  } catch {
    return true
  }
}

function readOrder(): string[] {
  try {
    const raw = JSON.parse(localStorage.getItem(ORDER_KEY) || '[]')
    if (!Array.isArray(raw)) return []
    return [...new Set(raw.filter(item => typeof item === 'string' && item))].slice(0, 100)
  } catch {
    return []
  }
}

function persistOrder() {
  try {
    localStorage.setItem(ORDER_KEY, JSON.stringify(order))
  } catch {
    // localStorage 不可用时只在当前会话生效
  }
}

function persistEnabled() {
  try {
    localStorage.setItem(ENABLED_KEY, enabled ? '1' : '0')
  } catch {
    // 同上
  }
}

function notify() {
  for (const listener of listeners) {
    try {
      listener()
    } catch (error) {
      console.error('[la-theme] 侧边栏排序监听器异常:', error)
    }
  }
}

function motionAllowed() {
  return typeof matchMedia !== 'function' || !matchMedia('(prefers-reduced-motion: reduce)').matches
}

function itemKey(item: HTMLElement) {
  return item.getAttribute('aria-label') || item.getAttribute('title') || ''
}

function items() {
  return [...document.querySelectorAll<HTMLElement>(ITEM_SELECTOR)].filter(item => itemKey(item))
}

/** DOM 顺序不等于用户看到的顺序，按当前 order 值还原。 */
function visualItems() {
  return items().sort((a, b) => Number(a.style.order || 0) - Number(b.style.order || 0))
}

function findItem(event: Event) {
  const element = event.target
  return element instanceof Element ? element.closest<HTMLElement>(ITEM_SELECTOR) : null
}

function itemAt(x: number, y: number) {
  const element = document.elementFromPoint(x, y)
  return element instanceof Element ? element.closest<HTMLElement>(ITEM_SELECTOR) : null
}

function applyKeys(keys: string[]) {
  items().forEach((item, index) => {
    const position = keys.indexOf(itemKey(item))
    item.style.order = String(position === -1 ? keys.length + index : position)
  })
}

function applyOrder() {
  applyKeys(order)
  for (const item of items()) {
    item.classList.toggle('la-rail-sortable', enabled)
    if (enabled) item.setAttribute('aria-keyshortcuts', 'Alt+ArrowUp Alt+ArrowDown')
    else item.removeAttribute('aria-keyshortcuts')
  }
}

function schedule() {
  if (frame) return
  frame = requestAnimationFrame(() => {
    frame = 0
    applyOrder()
  })
}

function blockNextClick() {
  const blocker = (event: Event) => {
    event.preventDefault()
    event.stopPropagation()
    document.removeEventListener('click', blocker, true)
  }
  document.addEventListener('click', blocker, true)
  setTimeout(() => document.removeEventListener('click', blocker, true), 350)
}

function createGhost(source: HTMLElement, x: number, y: number) {
  const ghost = source.cloneNode(true) as HTMLElement
  ghost.classList.add('la-rail-ghost')
  ghost.removeAttribute('aria-label')
  ghost.removeAttribute('title')
  ghost.removeAttribute('aria-keyshortcuts')
  ghost.tabIndex = -1
  const rect = source.getBoundingClientRect()
  ghost.style.left = `${x - rect.width / 2}px`
  ghost.style.top = `${y - rect.height / 2}px`
  document.body.appendChild(ghost)
  if (motionAllowed()) {
    animate(ghost, {
      scale: [0.75, 1.12],
      rotate: [0, 3],
      opacity: [0, 1],
      duration: 180,
      ease: 'outCubic',
    })
  }
  return ghost
}

function dropGhost(ghost: HTMLElement) {
  if (!motionAllowed()) {
    ghost.remove()
    return
  }
  animate(ghost, {
    scale: 0.8,
    opacity: 0,
    duration: 140,
    ease: 'inCubic',
    onComplete: () => ghost.remove(),
  })
}

function cleanupDrag(removeGhost = true) {
  drag?.source.classList.remove('la-rail-dragging')
  document.documentElement.classList.remove('la-rail-sorting')
  if (removeGhost) drag?.ghost?.remove()
  drag = null
}

function onPointerDown(event: PointerEvent) {
  if (!enabled || event.button !== 0) return
  const item = findItem(event)
  if (!item || !itemKey(item)) return
  try {
    item.setPointerCapture(event.pointerId)
  } catch {
    // 浏览器不支持 pointer capture 时仍可拖动，只是移出窗口会中断
  }
  drag = {
    pointerId: event.pointerId,
    source: item,
    startX: event.clientX,
    startY: event.clientY,
    active: false,
    ghost: null,
    ghostWidth: 0,
    ghostHeight: 0,
    draft: order,
  }
}

function onPointerMove(event: PointerEvent) {
  if (!drag || event.pointerId !== drag.pointerId) return
  if (!drag.active) {
    if (Math.hypot(event.clientX - drag.startX, event.clientY - drag.startY) < DRAG_THRESHOLD) return
    drag.active = true
    drag.source.classList.add('la-rail-dragging')
    document.documentElement.classList.add('la-rail-sorting')
    drag.draft = visualItems().map(itemKey)
    const rect = drag.source.getBoundingClientRect()
    drag.ghostWidth = rect.width
    drag.ghostHeight = rect.height
    drag.ghost = createGhost(drag.source, event.clientX, event.clientY)
  }

  event.preventDefault()
  if (drag.ghost) {
    drag.ghost.style.left = `${event.clientX - drag.ghostWidth / 2}px`
    drag.ghost.style.top = `${event.clientY - drag.ghostHeight / 2}px`
  }

  const target = itemAt(event.clientX, event.clientY)
  if (!target || target === drag.source) return
  const next = moveKey(drag.draft, itemKey(drag.source), itemKey(target))
  if (next !== drag.draft) {
    drag.draft = next
    applyKeys(next)
  }
}

function onPointerUp(event: PointerEvent) {
  if (!drag || event.pointerId !== drag.pointerId) return
  if (!drag.active) {
    drag = null
    return
  }
  const ghost = drag.ghost
  const changed = drag.draft !== order
  if (changed) {
    order = drag.draft
    persistOrder()
    notify()
  }
  cleanupDrag(false)
  applyOrder()
  if (ghost) dropGhost(ghost)
  blockNextClick()
}

function onPointerCancel(event: PointerEvent) {
  if (!drag || event.pointerId !== drag.pointerId) return
  cleanupDrag()
  applyOrder()
}

function onKeyDown(event: KeyboardEvent) {
  if (!enabled || !event.altKey) return
  if (event.key !== 'ArrowUp' && event.key !== 'ArrowDown') return
  const item = findItem(event)
  if (!item) return
  const keys = visualItems().map(itemKey)
  const index = keys.indexOf(itemKey(item))
  const target = event.key === 'ArrowUp' ? index - 1 : index + 1
  if (index === -1 || target < 0 || target >= keys.length) return
  event.preventDefault()
  const next = [...keys]
  next.splice(target, 0, next.splice(index, 1)[0])
  order = next
  persistOrder()
  applyOrder()
  notify()
  item.focus()
}

function listen() {
  if (listening || typeof document === 'undefined') return
  listening = true
  document.addEventListener('pointerdown', onPointerDown)
  document.addEventListener('pointermove', onPointerMove, { passive: false })
  document.addEventListener('pointerup', onPointerUp)
  document.addEventListener('pointercancel', onPointerCancel)
  document.addEventListener('keydown', onKeyDown)
}

function unlisten() {
  if (!listening) return
  listening = false
  document.removeEventListener('pointerdown', onPointerDown)
  document.removeEventListener('pointermove', onPointerMove)
  document.removeEventListener('pointerup', onPointerUp)
  document.removeEventListener('pointercancel', onPointerCancel)
  document.removeEventListener('keydown', onKeyDown)
}

/** 插件加载时调用：观察侧栏增删，热更新后新按钮也能带上顺序。 */
export function initRailReorder() {
  if (typeof document === 'undefined' || observer || !document.body) return
  listen()
  observer = new MutationObserver(schedule)
  observer.observe(document.body, { childList: true, subtree: true })
  applyOrder()
}

export function setRailEnabled(value: boolean) {
  if (value === enabled) return
  enabled = value
  persistEnabled()
  cleanupDrag()
  applyOrder()
  notify()
}

export function resetRailOrder() {
  order = []
  try {
    localStorage.removeItem(ORDER_KEY)
  } catch {
    // 同上
  }
  items().forEach(item => {
    item.style.removeProperty('order')
    item.classList.remove('la-rail-dragging')
  })
  applyOrder()
  notify()
}

export function getRailState() {
  return { enabled, order: [...order] }
}

export function subscribeRail(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** 插件停用 / 卸载时恢复宿主默认顺序与原生光标。 */
export function destroyRailReorder() {
  observer?.disconnect()
  observer = null
  if (frame) cancelAnimationFrame(frame)
  frame = 0
  cleanupDrag()
  unlisten()
  for (const item of items()) {
    item.style.removeProperty('order')
    item.classList.remove('la-rail-sortable', 'la-rail-dragging')
    item.removeAttribute('aria-keyshortcuts')
  }
  listeners.clear()
}
