/**
 * 全局背景图：图片存在 IndexedDB，浏览器里生成 object URL，
 * 用一个固定在 #app 后面的图层铺开；主题引擎把大面积底色切成半透明。
 */
import { setBackgroundActive } from './engine'
import './background.css'

export type BackgroundPlacement = 'fill' | 'fit' | 'stretch' | 'center' | 'tile'

export interface BackgroundSettings {
  opacity: number
  placement: BackgroundPlacement
  /** 文件名，仅用于界面展示 */
  name: string
}

export const BACKGROUND_PLACEMENTS: Array<{
  value: BackgroundPlacement
  label: string
  size: string
  repeat: string
  position: string
}> = [
  { value: 'fill', label: '填充', size: 'cover', repeat: 'no-repeat', position: 'center' },
  { value: 'fit', label: '适应', size: 'contain', repeat: 'no-repeat', position: 'center' },
  { value: 'stretch', label: '拉伸', size: '100% 100%', repeat: 'no-repeat', position: 'center' },
  { value: 'center', label: '居中', size: 'auto', repeat: 'no-repeat', position: 'center' },
  { value: 'tile', label: '平铺', size: 'auto', repeat: 'repeat', position: 'left top' },
]

const SETTINGS_KEY = 'la-theme:background'
const DB_NAME = 'la-theme'
const STORE_NAME = 'background'
const IMAGE_KEY = 'image'
const MAX_IMAGE_BYTES = 20 * 1024 * 1024
const DEFAULT_SETTINGS: BackgroundSettings = { opacity: 45, placement: 'fill', name: '' }

const listeners = new Set<() => void>()
let settings = readSettings()
let objectUrl: string | null = null
let layer: HTMLDivElement | null = null
let destroyed = false

function clampOpacity(value: number) {
  if (!Number.isFinite(value)) return DEFAULT_SETTINGS.opacity
  return Math.min(100, Math.max(0, Math.round(value)))
}

function readSettings(): BackgroundSettings {
  try {
    const raw = JSON.parse(localStorage.getItem(SETTINGS_KEY) || '{}')
    const placement = BACKGROUND_PLACEMENTS.some(item => item.value === raw.placement)
      ? raw.placement as BackgroundPlacement
      : DEFAULT_SETTINGS.placement
    return {
      opacity: clampOpacity(Number(raw.opacity ?? DEFAULT_SETTINGS.opacity)),
      placement,
      name: String(raw.name || '').slice(0, 200),
    }
  } catch {
    return { ...DEFAULT_SETTINGS }
  }
}

function saveSettings() {
  try {
    localStorage.setItem(SETTINGS_KEY, JSON.stringify(settings))
  } catch {
    // localStorage 不可用时只在当前会话生效
  }
}

function notify() {
  for (const listener of listeners) {
    try {
      listener()
    } catch (error) {
      console.error('[la-theme] 背景图监听器异常:', error)
    }
  }
}

function openDb() {
  return new Promise<IDBDatabase>((resolve, reject) => {
    const request = indexedDB.open(DB_NAME, 1)
    request.onupgradeneeded = () => request.result.createObjectStore(STORE_NAME)
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
  })
}

function runStore<T>(mode: IDBTransactionMode, run: (store: IDBObjectStore) => IDBRequest<T>) {
  return openDb().then(db => new Promise<T>((resolve, reject) => {
    const tx = db.transaction(STORE_NAME, mode)
    const request = run(tx.objectStore(STORE_NAME))
    request.onsuccess = () => resolve(request.result)
    request.onerror = () => reject(request.error)
    tx.oncomplete = () => db.close()
    tx.onerror = () => { db.close(); reject(tx.error) }
  }))
}

function readImage() {
  return runStore<Blob | undefined>('readonly', store => store.get(IMAGE_KEY))
}

function writeImage(blob: Blob) {
  return runStore('readwrite', store => store.put(blob, IMAGE_KEY))
}

function deleteImage() {
  return runStore('readwrite', store => store.delete(IMAGE_KEY))
}

function revokeUrl() {
  if (!objectUrl) return
  URL.revokeObjectURL(objectUrl)
  objectUrl = null
}

function applyPlacement() {
  if (!layer) return
  const item = BACKGROUND_PLACEMENTS.find(entry => entry.value === settings.placement)
    || BACKGROUND_PLACEMENTS[0]
  layer.style.backgroundSize = item.size
  layer.style.backgroundRepeat = item.repeat
  layer.style.backgroundPosition = item.position
}

function ensureLayer() {
  if (layer || typeof document === 'undefined') return layer
  layer = document.createElement('div')
  layer.className = 'la-theme-background'
  layer.setAttribute('aria-hidden', 'true')
  document.body.appendChild(layer)
  document.documentElement.classList.add('la-theme-has-bg')
  return layer
}

function detach() {
  document.documentElement.classList.remove('la-theme-has-bg')
  layer?.remove()
  layer = null
  revokeUrl()
  setBackgroundActive(false)
  notify()
}

function attach(blob: Blob) {
  if (destroyed || typeof document === 'undefined') return
  revokeUrl()
  objectUrl = URL.createObjectURL(blob)
  const target = ensureLayer()
  if (!target) return
  target.style.backgroundImage = `url("${objectUrl}")`
  target.style.opacity = String(settings.opacity / 100)
  applyPlacement()
  setBackgroundActive(true)
  notify()
}

function assertImage(file: File) {
  if (!file.type.startsWith('image/')) throw new Error('请选择图片文件（PNG / JPG / WebP / SVG）')
  if (file.size > MAX_IMAGE_BYTES) throw new Error('图片不能超过 20MB')
}

/** 启动时从 IndexedDB 取回上次的背景图。 */
export async function initBackground() {
  const blob = await readImage().catch(error => {
    console.warn('[la-theme] 读取背景图失败:', error)
    return null
  })
  if (blob) attach(blob)
}

export async function setBackgroundImage(file: File) {
  assertImage(file)
  await writeImage(file)
  settings = { ...settings, name: file.name }
  saveSettings()
  attach(file)
}

export async function removeBackground() {
  await deleteImage().catch(error => console.warn('[la-theme] 删除背景图失败:', error))
  settings = { ...settings, name: '' }
  saveSettings()
  detach()
}

export function setBackgroundOpacity(value: number) {
  settings = { ...settings, opacity: clampOpacity(value) }
  saveSettings()
  if (layer) layer.style.opacity = String(settings.opacity / 100)
}

export function setBackgroundPlacement(value: BackgroundPlacement) {
  if (!BACKGROUND_PLACEMENTS.some(item => item.value === value)) return
  settings = { ...settings, placement: value }
  saveSettings()
  applyPlacement()
  notify()
}

export function backgroundPlacementStyle(value: BackgroundPlacement) {
  const item = BACKGROUND_PLACEMENTS.find(entry => entry.value === value) || BACKGROUND_PLACEMENTS[0]
  return {
    backgroundSize: item.size,
    backgroundRepeat: item.repeat,
    backgroundPosition: item.position,
  }
}

export function getBackgroundState() {
  return {
    active: Boolean(layer),
    url: objectUrl,
    opacity: settings.opacity,
    placement: settings.placement,
    name: settings.name,
  }
}

export function subscribeBackground(listener: () => void) {
  listeners.add(listener)
  return () => listeners.delete(listener)
}

/** 插件停用 / 卸载时移除图层，界面回到普通主题。 */
export function destroyBackground() {
  destroyed = true
  detach()
  listeners.clear()
}
