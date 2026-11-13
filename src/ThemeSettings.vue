<script setup lang="ts">
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'
import { ElMessage } from 'element-plus'
import { Check, Moon, Picture, Sunny } from '@element-plus/icons-vue'
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

defineOptions({ name: 'ThemeSettings' })

const activeId = ref(getActiveThemeId())
const mode = ref(getMode())
const background = ref(getBackgroundState())
const backgroundOpacity = ref(background.value.opacity)
const backgroundPlacement = ref(background.value.placement)
const backgroundDialog = ref(false)
const backgroundBusy = ref(false)
const backgroundDragging = ref(false)
const backgroundInput = ref<HTMLInputElement | null>(null)
let offTheme = null
let offBackground = null

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
})

onBeforeUnmount(() => {
  offTheme?.()
  offBackground?.()
})

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

function pick(theme: ThemePack) {
  setThemePack(theme.id)
  ElMessage.success(`已应用「${theme.name}」`)
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
</script>

<template>
  <div class="theme-pack">
    <div class="tp-head">
      <div>
        <strong>配色方案</strong>
        <p>内置 {{ THEMES.length }} 套配色。亮色 / 暗色仍由「外观」控制，每套主题都有对应的两种模式。</p>
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
      当前使用「{{ activeName }}」。主题只覆盖颜色令牌，不改动布局与字体；停用插件后自动回到宿主默认配色。
    </p>

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

    <el-dialog
      v-model="backgroundDialog"
      title="背景图"
      width="min(720px, 92vw)"
      append-to-body
      :close-on-click-modal="false"
      class="tp-bg-dialog"
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

      <template #footer>
        <div class="bg-footer">
          <el-button v-if="background.url" type="danger" plain @click="clearBackground">清除背景图</el-button>
          <span class="bg-footer-spacer"></span>
          <el-button type="primary" @click="backgroundDialog = false">完成</el-button>
        </div>
      </template>
    </el-dialog>
  </div>
</template>

<style scoped>
.theme-pack {
  display: flex;
  flex-direction: column;
  gap: 14px;
}

.tp-head {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}

.tp-head strong {
  display: block;
  font-size: 12.5px;
  color: var(--el-text-color-primary);
}

.tp-head p {
  margin: 4px 0 0;
  font-size: 11px;
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
  box-shadow: var(--wr-shadow-md);
  transform: translateY(-1px);
}

.tp-card.active {
  border-color: var(--el-color-primary);
  box-shadow: 0 0 0 1px var(--el-color-primary);
}

.tp-card:focus-visible {
  outline: 2px solid var(--el-color-primary-light-5);
  outline-offset: 2px;
}

.tp-preview {
  display: flex;
  gap: 6px;
  height: 92px;
  padding: 8px;
  border-bottom: 1px solid var(--p-border);
  background: var(--p-bg);
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
  padding: 9px 11px 10px;
}

.tp-name {
  padding-right: 22px;
  font-size: 12px;
  font-weight: 600;
  color: var(--el-text-color-primary);
}

.tp-tagline {
  font-size: 10.5px;
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
}

.tp-note {
  margin: 0;
  font-size: 10.5px;
  line-height: 1.7;
  color: var(--el-text-color-placeholder);
}

.tp-bg {
  display: flex;
  flex-direction: column;
  gap: 8px;
  padding-top: 12px;
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
  font-size: 12.5px;
  color: var(--el-text-color-primary);
}

.tp-bg-head p {
  margin: 4px 0 0;
  font-size: 11px;
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
  font-size: 10.5px;
  color: var(--el-text-color-placeholder);
}

.bg-dialog {
  display: grid;
  grid-template-columns: minmax(0, 1.08fr) minmax(0, 0.92fr);
  gap: 18px;
  align-items: start;
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

.bg-footer {
  display: flex;
  align-items: center;
  width: 100%;
}

.bg-footer-spacer {
  flex: 1;
}

@media (max-width: 640px) {
  .bg-dialog {
    grid-template-columns: 1fr;
  }
}
</style>
