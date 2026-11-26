<script setup lang="ts">
import { computed, nextTick, onBeforeUnmount, onMounted, ref } from 'vue'
import { animate, stagger } from 'animejs'
import { ElMessage } from 'element-plus'
import { Check, Moon, Picture, Sunny } from '@element-plus/icons-vue'
import { AppDialog } from '@lucky-apps/client-ui'
import { THEMES, type ThemePack } from './themes'
import { getActiveThemeId, getMode, setThemePack, subscribe } from './engine'
import {
  BACKGROUND_PLACEMENTS,
  backgroundPlacementStyle,
  getBackgroundState,
  removeBackground,
  setBackgroundImage,
  setBackgroundOpacity,
  setBackgroundPlacement,
  subscribeBackground,
} from './background'
import { getRailState, resetRailOrder, setRailEnabled, subscribeRail } from './rail'
import {
  getLayoutState,
  resetLayout,
  setPanelWidth,
  setRailGap,
  setRailSize,
  subscribeLayout,
} from './layout'

defineOptions({ name: 'ThemeSettings' })

const layout = getLayoutState()
const activeId = ref(getActiveThemeId())
const mode = ref(getMode())
const background = ref(getBackgroundState())
const backgroundOpacity = ref(background.value.opacity)
const backgroundPlacement = ref(background.value.placement)
const backgroundDialog = ref(false)
const backgroundBusy = ref(false)
const backgroundDragging = ref(false)
const backgroundInput = ref<HTMLInputElement | null>(null)
const railEnabled = ref(getRailState().enabled)
const panelWidth = ref(layout.panelWidth)
const railSize = ref(layout.railSize)
const railGap = ref(layout.railGap)
let offTheme = null
let offBackground = null
let offRail = null
let offLayout = null

const activeName = computed(() => THEMES.find(theme => theme.id === activeId.value)?.name || '晨雾蓝')
const placementLabel = computed(() => (
  BACKGROUND_PLACEMENTS.find(item => item.value === background.value.placement)?.label || '填充'
))

onMounted(() => {
  offTheme = subscribe(() => {
    activeId.value = getActiveThemeId()
    mode.value = getMode()
  })
  offBackground = subscribeBackground(() => {
    background.value = getBackgroundState()
    backgroundOpacity.value = background.value.opacity
    backgroundPlacement.value = background.value.placement
  })
  offRail = subscribeRail(() => {
    railEnabled.value = getRailState().enabled
  })
  offLayout = subscribeLayout(syncLayout)

  if (motionAllowed()) {
    const cards = document.querySelectorAll<HTMLElement>('.theme-pack .tp-card')
    animate(cards, {
      opacity: [0, 1],
      translateY: [10, 0],
      duration: 320,
      delay: stagger(22),
      ease: 'outCubic',
      // 内联 transform 会压住 hover 的 translateY(-2px)，动画结束就还给 CSS。
      onComplete: () => cards.forEach(card => card.style.removeProperty('transform')),
    })
  }
})

onBeforeUnmount(() => {
  offTheme?.()
  offBackground?.()
  offRail?.()
  offLayout?.()
})

function motionAllowed() {
  return typeof matchMedia !== 'function' || !matchMedia('(prefers-reduced-motion: reduce)').matches
}

function syncLayout() {
  const next = getLayoutState()
  panelWidth.value = next.panelWidth
  railSize.value = next.railSize
  railGap.value = next.railGap
}

function previewStyle(theme: ThemePack) {
  const palette = theme[mode.value]
  return {
    '--p-bg': palette.bg,
    '--p-sidebar': palette.sidebar,
    '--p-surface': palette.surface,
    '--p-border': palette.border,
    '--p-accent': palette.accent,
    '--p-soft': palette.accentSoft,
    '--p-text': palette.text2,
  }
}

async function pick(theme: ThemePack) {
  setThemePack(theme.id)
  ElMessage.success(`已应用「${theme.name}」`)
  await nextTick()
  if (!motionAllowed()) return
  const card = document.querySelector<HTMLElement>(`.theme-pack .tp-card[data-theme-id="${theme.id}"]`)
  const check = card?.querySelector<HTMLElement>('.tp-check')
  if (check) {
    animate(check, {
      scale: [0.3, 1.35, 1],
      opacity: [0, 1],
      duration: 420,
      ease: 'outBack',
    })
  }
  flashTheme(theme[mode.value].accent)
}

/** 换色时一层极淡的主色光晕扫过，给切换一点存在感。 */
function flashTheme(color: string) {
  const flash = document.createElement('div')
  flash.className = 'la-theme-flash'
  flash.style.background = `radial-gradient(circle at 50% 42%, ${color}, transparent 68%)`
  document.body.appendChild(flash)
  animate(flash, {
    opacity: [0.12, 0],
    scale: [1, 1.3],
    duration: 520,
    ease: 'outQuad',
    onComplete: () => flash.remove(),
  })
}

function pickBackground() {
  backgroundInput.value?.click()
}

function openBackgroundDialog() {
  background.value = getBackgroundState()
  backgroundOpacity.value = background.value.opacity
  backgroundPlacement.value = background.value.placement
  backgroundDialog.value = true
}

/** 预览里只画图片本身；不透明度直接压在这个图层上，和真实背景一致。 */
function backgroundImageStyle() {
  return {
    ...backgroundPlacementStyle(background.value.placement),
    backgroundImage: background.value.url ? `url("${background.value.url}")` : 'none',
    opacity: String(background.value.opacity / 100),
  }
}

/** 预览底板模拟宿主窗口底色，方便判断图片实际可见度。 */
function backgroundPaneStyle() {
  return { background: mode.value === 'dark' ? '#1e1f22' : '#f7f8fa' }
}

async function applyBackground(file: File) {
  backgroundBusy.value = true
  try {
    await setBackgroundImage(file)
    background.value = getBackgroundState()
    backgroundOpacity.value = background.value.opacity
    ElMessage.success('背景图已更新')
  } catch (error) {
    ElMessage.error(error?.message || '读取背景图失败')
  } finally {
    backgroundBusy.value = false
  }
}

function onBackgroundFile(event: Event) {
  const input = event.target as HTMLInputElement
  const file = input.files?.[0]
  input.value = ''
  if (file) applyBackground(file)
}

function onBackgroundDrop(event: DragEvent) {
  backgroundDragging.value = false
  const file = event.dataTransfer?.files?.[0]
  if (file) applyBackground(file)
}

async function clearBackground() {
  try {
    await removeBackground()
    background.value = getBackgroundState()
    ElMessage.success('已移除背景图')
  } catch (error) {
    ElMessage.error(error?.message || '移除背景图失败')
  }
}

function changeBackgroundOpacity(value: number) {
  setBackgroundOpacity(value)
  background.value = getBackgroundState()
}

function changeBackgroundPlacement(value) {
  setBackgroundPlacement(value)
  background.value = getBackgroundState()
}

function toggleRail(value: boolean) {
  setRailEnabled(Boolean(value))
  ElMessage.success(value ? '侧边栏图标已可拖动' : '已关闭侧边栏图标拖动')
}

function changePanelWidth(value: number) {
  setPanelWidth(value)
}

function changeRailSize(value: number) {
  setRailSize(value)
}

function changeRailGap(value: number) {
  setRailGap(value)
}

function resetAllLayout() {
  resetRailOrder()
  resetLayout()
  syncLayout()
  ElMessage.success('已恢复默认布局')
}
</script>

<template>
  <div class="theme-pack">
    <header class="tp-page-head">
      <h3>主题</h3>
      <p>配色方案与全局背景图；亮色 / 暗色仍由「外观」控制。</p>
    </header>

    <div class="tp-head">
      <div>
        <strong>配色方案</strong>
        <p>内置 {{ THEMES.length }} 套配色，每套都有亮色与暗色两版。</p>
      </div>
      <span class="tp-mode">
        <el-icon :size="13"><component :is="mode === 'dark' ? Moon : Sunny" /></el-icon>
        {{ mode === 'dark' ? '暗色' : '亮色' }}
      </span>
    </div>

    <div class="tp-grid">
      <button
        v-for="theme in THEMES"
        :key="theme.id"
        type="button"
        class="tp-card"
        :class="{ active: theme.id === activeId }"
        :data-theme-id="theme.id"
        :aria-pressed="theme.id === activeId"
        :aria-label="`应用主题 ${theme.name}`"
        @click="pick(theme)"
      >
        <span class="tp-preview" :style="previewStyle(theme)">
          <span class="tp-side">
            <span class="tp-logo"></span>
            <span class="tp-item is-active"></span>
            <span class="tp-item"></span>
            <span class="tp-item tp-item-short"></span>
          </span>
          <span class="tp-main">
            <span class="tp-title"></span>
            <span class="tp-panel">
              <span class="tp-line"></span>
              <span class="tp-line tp-line-short"></span>
              <span class="tp-pill"></span>
            </span>
          </span>
        </span>
        <span class="tp-meta">
          <span class="tp-name">{{ theme.name }}</span>
          <span class="tp-tagline">{{ theme.tagline }}</span>
          <span v-if="theme.id === activeId" class="tp-check">
            <el-icon :size="10"><Check /></el-icon>
          </span>
        </span>
      </button>
    </div>

    <p class="tp-note">
      当前使用「{{ activeName }}」。主题只覆盖颜色令牌；界面布局由下方独立模块接管，停用插件后自动还原。
    </p>

    <section class="tp-layout">
      <div class="tp-layout-head">
        <div>
          <strong>界面布局</strong>
          <p>宿主没提供的界面能力由插件外挂：拖动排序、拖宽面板、调整图标密度。</p>
        </div>
        <el-button size="small" text @click="resetAllLayout">恢复默认</el-button>
      </div>

      <div class="tp-layout-row">
        <div class="tp-layout-copy">
          <strong>侧边栏图标拖动排序</strong>
          <span>拖动图标调整顺序；键盘可用 Alt + ↑ / ↓。</span>
        </div>
        <div class="tp-layout-actions">
          <el-switch v-model="railEnabled" @change="toggleRail" />
        </div>
      </div>

      <div class="tp-layout-row">
        <div class="tp-layout-copy">
          <strong>侧边栏面板宽度</strong>
          <span>适用于插件提供的左侧面板（如周报）；也可以直接拖右边缘。</span>
        </div>
        <div class="tp-layout-control">
          <el-slider
            v-model="panelWidth"
            :min="220"
            :max="460"
            :step="4"
            @input="changePanelWidth"
          />
          <b>{{ panelWidth }}px</b>
        </div>
      </div>

      <div class="tp-layout-row">
        <div class="tp-layout-copy">
          <strong>图标尺寸</strong>
        </div>
        <div class="tp-layout-control">
          <el-slider v-model="railSize" :min="28" :max="42" :step="1" @input="changeRailSize" />
          <b>{{ railSize }}px</b>
        </div>
      </div>

      <div class="tp-layout-row">
        <div class="tp-layout-copy">
          <strong>图标间距</strong>
        </div>
        <div class="tp-layout-control">
          <el-slider v-model="railGap" :min="2" :max="10" :step="1" @input="changeRailGap" />
          <b>{{ railGap }}px</b>
        </div>
      </div>
    </section>

    <section class="tp-bg">
      <div class="tp-bg-head">
        <div>
          <strong>全局背景图</strong>
          <p>像 IDEA 一样把图片垫在界面最底层，图片、不透明度与布局在独立面板里设置。</p>
        </div>
        <div class="tp-bg-actions">
          <el-button size="small" @click="openBackgroundDialog">
            {{ background.url ? '背景图…' : '设置背景图…' }}
          </el-button>
          <el-button v-if="background.url" size="small" type="danger" plain @click="clearBackground">移除</el-button>
        </div>
      </div>
      <p class="tp-bg-summary">
        <template v-if="background.url">
          当前：{{ background.name || '自定义图片' }} · {{ background.opacity }}% · {{ placementLabel }}
        </template>
        <template v-else>未设置背景图</template>
      </p>

      <input
        ref="backgroundInput"
        class="tp-bg-input"
        type="file"
        accept="image/*"
        @change="onBackgroundFile"
      />
    </section>

    <AppDialog
      v-model="backgroundDialog"
      title="背景图"
      subtitle="选择图片、调整不透明度与布局，设置即时生效"
      icon="Picture"
      width="760px"
    >
      <div class="bg-dialog">
        <div
          class="bg-preview"
          :class="{ dragging: backgroundDragging, 'is-empty': !background.url }"
          :style="backgroundPaneStyle()"
          @click="pickBackground"
          @dragover.prevent="backgroundDragging = true"
          @dragleave="backgroundDragging = false"
          @drop.prevent="onBackgroundDrop"
        >
          <span v-if="background.url" class="bg-preview-image" :style="backgroundImageStyle()"></span>
          <span v-else class="bg-preview-empty">
            <el-icon :size="26"><Picture /></el-icon>
            <strong>选择或拖入一张图片</strong>
            <em>支持 PNG / JPG / WebP / SVG，最大 20MB</em>
          </span>
          <span v-if="background.url" class="bg-preview-meta">
            {{ background.opacity }}% · {{ placementLabel }}
          </span>
        </div>

        <div class="bg-controls">
          <div class="bg-field">
            <span class="bg-label">图片</span>
            <div class="bg-file">
              <span class="bg-filename" :title="background.name">{{ background.name || '未选择图片' }}</span>
              <el-button size="small" :loading="backgroundBusy" @click="pickBackground">选择图片…</el-button>
            </div>
          </div>

          <div class="bg-field">
            <span class="bg-label">不透明度</span>
            <div class="bg-range">
              <el-slider
                v-model="backgroundOpacity"
                :min="0"
                :max="100"
                :step="5"
                :disabled="!background.url"
                @input="changeBackgroundOpacity"
              />
              <b class="bg-range-value">{{ Math.round(backgroundOpacity) }}%</b>
            </div>
          </div>

          <div class="bg-field">
            <span class="bg-label">布局</span>
            <el-select
              v-model="backgroundPlacement"
              class="bg-select"
              :disabled="!background.url"
              @change="changeBackgroundPlacement"
            >
              <el-option
                v-for="item in BACKGROUND_PLACEMENTS"
                :key="item.value"
                :label="item.label"
                :value="item.value"
              />
            </el-select>
          </div>

          <p class="bg-hint">布局与 IDEA 一致：填充会裁切铺满，适应会完整显示，平铺适合小图。</p>
        </div>
      </div>
    </AppDialog>
  </div>
</template>

<style>
/* 宿主会给外部设置面板渲染通用标题；本面板自带标题，隐藏它以统一排版。 */
.settings-content-inner:has(.theme-pack) > .panel-head {
  display: none;
}

/* 换主题时的一次性光晕。 */
.la-theme-flash {
  position: fixed;
  inset: 0;
  z-index: 3000;
  pointer-events: none;
  opacity: 0.12;
  will-change: opacity, transform;
}

@media (prefers-reduced-motion: reduce) {
  .la-theme-flash {
    display: none;
  }
}
</style>

<style scoped>
.theme-pack {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.tp-page-head h3 {
  margin: 0 0 4px;
  font-size: 16px;
  font-weight: 650;
  color: var(--el-text-color-primary);
}

.tp-page-head p {
  margin: 0;
  font-size: 12px;
  line-height: 1.6;
  color: var(--el-text-color-secondary);
}

.tp-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.tp-head strong {
  display: block;
  font-size: 13px;
  font-weight: 650;
  color: var(--el-text-color-primary);
}

.tp-head p {
  margin: 4px 0 0;
  font-size: 11.5px;
  line-height: 1.7;
  color: var(--el-text-color-secondary);
}

.tp-mode {
  display: inline-flex;
  align-items: center;
  gap: 5px;
  flex: none;
  padding: 3px 9px;
  border-radius: 999px;
  background: var(--el-fill-color-lighter);
  font-size: 11px;
  color: var(--el-text-color-secondary);
}

.tp-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(206px, 1fr));
  gap: 10px;
}

.tp-card {
  position: relative;
  display: flex;
  flex-direction: column;
  padding: 0;
  overflow: hidden;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 14px;
  background: var(--el-bg-color);
  font: inherit;
  text-align: left;
  cursor: pointer;
  transition: border-color 0.16s, box-shadow 0.16s, transform 0.16s;
}

.tp-card:hover {
  border-color: var(--el-color-primary-light-5);
  box-shadow:
    0 14px 30px -22px color-mix(in srgb, var(--el-color-primary) 55%, transparent),
    var(--wr-shadow-md);
  transform: translateY(-2px);
}

.tp-card.active {
  border-color: var(--el-color-primary);
  box-shadow:
    0 0 0 1px var(--el-color-primary),
    0 16px 32px -24px var(--el-color-primary);
}

.tp-card:focus-visible {
  outline: 2px solid var(--el-color-primary-light-5);
  outline-offset: 2px;
}

.tp-preview {
  position: relative;
  display: flex;
  gap: 6px;
  height: 92px;
  padding: 8px;
  overflow: hidden;
  border-bottom: 1px solid var(--p-border);
  background: var(--p-bg);
}

/* 悬停时扫过一层很淡的高光，让预览有“玻璃”质感。 */
.tp-preview::after {
  content: '';
  position: absolute;
  inset: -20% -45%;
  background: linear-gradient(115deg, transparent 42%, rgba(255, 255, 255, 0.24) 50%, transparent 58%);
  transform: translateX(-70%);
  transition: transform 0.6s cubic-bezier(0.22, 0.61, 0.36, 1);
  pointer-events: none;
}

.tp-card:hover .tp-preview::after,
.tp-card:focus-visible .tp-preview::after {
  transform: translateX(70%);
}

.tp-side {
  display: flex;
  flex-direction: column;
  gap: 5px;
  width: 34%;
  padding: 6px;
  border-radius: 8px;
  background: var(--p-sidebar);
}

.tp-logo {
  width: 12px;
  height: 12px;
  border-radius: 4px;
  background: var(--p-accent);
}

.tp-item {
  height: 5px;
  border-radius: 3px;
  background: var(--p-border);
}

.tp-item.is-active {
  background: var(--p-soft);
}

/* 选中卡的强调色做一条缓慢流动的光带，静止时也有质感。 */
.tp-card.active .tp-item.is-active,
.tp-card.active .tp-pill {
  background-image: linear-gradient(100deg, var(--p-accent), var(--p-soft), var(--p-accent));
  background-size: 220% 100%;
  animation: la-accent-flow 3.6s linear infinite;
}

@keyframes la-accent-flow {
  to {
    background-position: -220% 0;
  }
}

.tp-item-short {
  width: 70%;
}

.tp-main {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 6px;
  min-width: 0;
}

.tp-title {
  width: 55%;
  height: 7px;
  border-radius: 3px;
  background: var(--p-text);
  opacity: 0.7;
}

.tp-panel {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 5px;
  padding: 7px;
  border: 1px solid var(--p-border);
  border-radius: 8px;
  background: var(--p-surface);
}

.tp-line {
  height: 5px;
  border-radius: 3px;
  background: var(--p-border);
}

.tp-line-short {
  width: 62%;
}

.tp-pill {
  width: 34px;
  height: 9px;
  margin-top: auto;
  border-radius: 5px;
  background: var(--p-accent);
}

.tp-meta {
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding: 10px 12px 11px;
}

.tp-name {
  padding-right: 22px;
  font-size: 12.5px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.tp-tagline {
  font-size: 11px;
  line-height: 1.5;
  color: var(--el-text-color-secondary);
}

.tp-check {
  position: absolute;
  top: 9px;
  right: 10px;
  display: grid;
  place-items: center;
  width: 16px;
  height: 16px;
  border-radius: 50%;
  background: var(--el-color-primary);
  color: #fff;
  box-shadow: 0 0 0 3px var(--el-color-primary-light-9);
}

.tp-card.active .tp-check::after {
  content: '';
  position: absolute;
  inset: -1px;
  border-radius: 50%;
  border: 1px solid var(--el-color-primary);
  animation: la-check-halo 2.4s ease-out infinite;
}

@keyframes la-check-halo {
  0% {
    transform: scale(0.85);
    opacity: 0.55;
  }

  70%,
  100% {
    transform: scale(1.55);
    opacity: 0;
  }
}

.tp-note {
  margin: 0;
  font-size: 11px;
  line-height: 1.7;
  color: var(--el-text-color-placeholder);
}

.tp-bg {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 14px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.tp-bg-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.tp-bg-head strong {
  display: block;
  font-size: 13px;
  font-weight: 650;
  color: var(--el-text-color-primary);
}

.tp-bg-head p {
  margin: 4px 0 0;
  font-size: 11.5px;
  line-height: 1.7;
  color: var(--el-text-color-secondary);
}

.tp-bg-actions {
  display: flex;
  flex: none;
  gap: 6px;
}

.tp-bg-actions :deep(.el-button + .el-button) {
  margin-left: 0;
}

.tp-bg-input {
  display: none;
}

.tp-bg-summary {
  margin: 0;
  font-size: 11px;
  color: var(--el-text-color-placeholder);
}

.tp-layout {
  display: flex;
  flex-direction: column;
  gap: 10px;
  padding-top: 14px;
  border-top: 1px solid var(--el-border-color-lighter);
}

.tp-layout-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.tp-layout-head > div {
  min-width: 0;
}

.tp-layout-head strong {
  display: block;
  font-size: 13px;
  font-weight: 650;
  color: var(--el-text-color-primary);
}

.tp-layout-head p {
  margin: 4px 0 0;
  font-size: 11.5px;
  line-height: 1.7;
  color: var(--el-text-color-secondary);
}

.tp-layout-row {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 16px;
  padding: 10px 12px;
  border: 1px solid var(--el-border-color-lighter);
  border-radius: 10px;
  background: var(--el-fill-color-lighter);
}

.tp-layout-copy {
  display: flex;
  flex: 1;
  flex-direction: column;
  gap: 2px;
  min-width: 0;
}

.tp-layout-copy strong {
  font-size: 12px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.tp-layout-copy span {
  font-size: 11px;
  line-height: 1.5;
  color: var(--el-text-color-secondary);
}

.tp-layout-actions {
  display: flex;
  flex: none;
  align-items: center;
  gap: 8px;
}

.tp-layout-control {
  display: flex;
  flex: 0 1 220px;
  align-items: center;
  gap: 10px;
  min-width: 0;
}

.tp-layout-control :deep(.el-slider) {
  flex: 1;
  margin: 0;
}

.tp-layout-control b {
  flex: none;
  width: 42px;
  font-family: var(--wr-mono, ui-monospace, monospace);
  font-size: 10.5px;
  font-variant-numeric: tabular-nums;
  text-align: right;
  color: var(--el-text-color-primary);
}

.bg-dialog {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: 18px;
  align-items: start;
  padding: 16px 20px 20px;
}

.bg-preview {
  position: relative;
  width: 100%;
  aspect-ratio: 16 / 10;
  overflow: hidden;
  border: 1px solid var(--el-border-color);
  border-radius: 12px;
  cursor: pointer;
  transition: border-color 0.16s, box-shadow 0.16s;
}

.bg-preview:hover,
.bg-preview.dragging {
  border-color: var(--el-color-primary);
  box-shadow: 0 0 0 1px var(--el-color-primary);
}

.bg-preview-image {
  position: absolute;
  inset: 0;
  background-repeat: no-repeat;
  transition: opacity 0.16s;
}

.bg-preview-empty {
  position: absolute;
  inset: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 4px;
  color: var(--el-text-color-secondary);
}

.bg-preview-empty .el-icon {
  color: var(--el-color-primary);
}

.bg-preview-empty strong {
  font-size: 12px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.bg-preview-empty em {
  font-size: 10.5px;
  font-style: normal;
  color: var(--el-text-color-placeholder);
}

.bg-preview-meta {
  position: absolute;
  right: 8px;
  bottom: 8px;
  padding: 2px 8px;
  border-radius: 999px;
  background: rgba(0, 0, 0, 0.45);
  color: #fff;
  font-size: 10px;
}

.bg-controls {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.bg-field {
  display: flex;
  flex-direction: column;
  gap: 5px;
}

.bg-label {
  font-size: 11px;
  color: var(--el-text-color-secondary);
}

.bg-file {
  display: flex;
  align-items: center;
  gap: 8px;
}

.bg-filename {
  flex: 1;
  min-width: 0;
  overflow: hidden;
  font-size: 11.5px;
  color: var(--el-text-color-primary);
  text-overflow: ellipsis;
  white-space: nowrap;
}

.bg-range {
  display: flex;
  align-items: center;
  gap: 10px;
}

.bg-range :deep(.el-slider) {
  flex: 1;
  margin: 0;
}

.bg-range-value {
  flex: none;
  width: 36px;
  font-size: 11px;
  font-variant-numeric: tabular-nums;
  text-align: right;
  color: var(--el-text-color-primary);
}

.bg-select {
  width: 100%;
}

.bg-hint {
  margin: 0;
  font-size: 10.5px;
  line-height: 1.7;
  color: var(--el-text-color-placeholder);
}

@media (max-width: 640px) {
  .bg-dialog {
    grid-template-columns: 1fr;
  }
}

@media (prefers-reduced-motion: reduce) {
  .tp-card,
  .tp-card .tp-preview::after,
  .tp-card .tp-check::after,
  .tp-card.active .tp-item.is-active,
  .tp-card.active .tp-pill {
    transition: none;
    animation: none;
  }
}
</style>
