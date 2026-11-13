/**
 * 内置主题定义。
 *
 * 每套主题提供亮色 / 暗色两份调色板；引擎把它们展开成宿主的
 * --wr-* 语义变量和 Element Plus 颜色变量。
 */
export type ThemeMode = 'light' | 'dark'

export interface ThemePalette {
  /** 页面底色 */
  bg: string
  /** 侧边栏底色 */
  sidebar: string
  /** 卡片 / 弹窗底色 */
  surface: string
  /** 次级填充 */
  surface2: string
  border: string
  text: string
  text2: string
  muted: string
  accent: string
  accentSoft: string
  /** 半透明标题栏 */
  headerBg: string
}

export interface ThemePack {
  id: string
  name: string
  tagline: string
  light: ThemePalette
  dark: ThemePalette
}

export const DEFAULT_THEME_ID = 'default'

export const THEMES: ThemePack[] = [
  {
    id: 'default',
    name: '晨雾蓝',
    tagline: '宿主默认的 JetBrains 蓝',
    light: {
      bg: '#f7f8fa',
      sidebar: '#f2f4f7',
      surface: '#ffffff',
      surface2: '#f6f7f9',
      border: '#e3e7ed',
      text: '#1e1f22',
      text2: '#3c3f45',
      muted: '#868a91',
      accent: '#3574f0',
      accentSoft: '#eaf1ff',
      headerBg: 'rgba(255, 255, 255, 0.9)',
    },
    dark: {
      bg: '#1e1f22',
      sidebar: '#2b2d30',
      surface: '#26282b',
      surface2: '#2b2d30',
      border: '#393b40',
      text: '#dfe1e5',
      text2: '#c9ccd1',
      muted: '#9da0a6',
      accent: '#4c7eff',
      accentSoft: '#22304d',
      headerBg: 'rgba(30, 31, 34, 0.92)',
    },
  },
  {
    id: 'sakura',
    name: '樱花粉',
    tagline: '柔和粉调，适合长时间阅读',
    light: {
      bg: '#fdf6f8',
      sidebar: '#f9edf2',
      surface: '#fffdfe',
      surface2: '#f9f1f4',
      border: '#efdbe3',
      text: '#2b1e24',
      text2: '#4a3840',
      muted: '#957e88',
      accent: '#c93a7c',
      accentSoft: '#fbe4ee',
      headerBg: 'rgba(255, 253, 254, 0.9)',
    },
    dark: {
      bg: '#1d161a',
      sidebar: '#251b20',
      surface: '#291f24',
      surface2: '#30242a',
      border: '#3e2f36',
      text: '#efe3e8',
      text2: '#d0bec6',
      muted: '#a08b95',
      accent: '#ef7fb3',
      accentSoft: '#3a2330',
      headerBg: 'rgba(29, 22, 26, 0.92)',
    },
  },
  {
    id: 'forest',
    name: '森野绿',
    tagline: '低饱和绿，安静克制',
    light: {
      bg: '#f5faf6',
      sidebar: '#ecf5ee',
      surface: '#fdfffd',
      surface2: '#f2f8f3',
      border: '#d9e7dd',
      text: '#17241b',
      text2: '#34473a',
      muted: '#75877b',
      accent: '#15803d',
      accentSoft: '#e4f5ea',
      headerBg: 'rgba(253, 255, 253, 0.9)',
    },
    dark: {
      bg: '#121a14',
      sidebar: '#17211a',
      surface: '#1b261e',
      surface2: '#202d24',
      border: '#2d3d32',
      text: '#e2ece5',
      text2: '#c3d2c8',
      muted: '#8b9b90',
      accent: '#46c67c',
      accentSoft: '#1d3527',
      headerBg: 'rgba(18, 26, 20, 0.92)',
    },
  },
  {
    id: 'amber',
    name: '琥珀暖阳',
    tagline: '暖棕底色，像旧纸张',
    light: {
      bg: '#fbf7f1',
      sidebar: '#f6efe3',
      surface: '#fffdf8',
      surface2: '#f8f1e6',
      border: '#e9dcc6',
      text: '#2a2116',
      text2: '#4b3e2d',
      muted: '#91816a',
      accent: '#b4610c',
      accentSoft: '#fbefda',
      headerBg: 'rgba(255, 253, 248, 0.9)',
    },
    dark: {
      bg: '#1b1711',
      sidebar: '#221c14',
      surface: '#271f17',
      surface2: '#2f261b',
      border: '#3e3223',
      text: '#efe6d8',
      text2: '#d3c5b0',
      muted: '#a2917a',
      accent: '#eda63c',
      accentSoft: '#3a2c19',
      headerBg: 'rgba(27, 23, 17, 0.92)',
    },
  },
  {
    id: 'violet',
    name: '暮紫',
    tagline: '冷静的紫调，专注写作',
    light: {
      bg: '#f8f6fd',
      sidebar: '#f1edfa',
      surface: '#fdfcff',
      surface2: '#f5f2fb',
      border: '#e3ddf1',
      text: '#211a33',
      text2: '#3d3454',
      muted: '#837a99',
      accent: '#7553e8',
      accentSoft: '#ece7fd',
      headerBg: 'rgba(253, 252, 255, 0.9)',
    },
    dark: {
      bg: '#15121f',
      sidebar: '#1a1626',
      surface: '#1f1a2c',
      surface2: '#251f34',
      border: '#332c45',
      text: '#e8e3f3',
      text2: '#cbc4da',
      muted: '#938ba8',
      accent: '#9c82ff',
      accentSoft: '#2a2143',
      headerBg: 'rgba(21, 18, 31, 0.92)',
    },
  },
  {
    id: 'midnight',
    name: '午夜青',
    tagline: '冷色深空，暗色下最沉',
    light: {
      bg: '#f4f8fa',
      sidebar: '#eaf1f5',
      surface: '#fcfeff',
      surface2: '#f1f6f9',
      border: '#d7e4ea',
      text: '#122029',
      text2: '#2f4250',
      muted: '#738895',
      accent: '#0b7d99',
      accentSoft: '#e0f2f7',
      headerBg: 'rgba(252, 254, 255, 0.9)',
    },
    dark: {
      bg: '#0b1015',
      sidebar: '#0f151c',
      surface: '#121a22',
      surface2: '#16212a',
      border: '#22303c',
      text: '#dce7ee',
      text2: '#b9c9d4',
      muted: '#7f93a1',
      accent: '#38b6d8',
      accentSoft: '#12303a',
      headerBg: 'rgba(11, 16, 21, 0.92)',
    },
  },
]

export function findTheme(id: string | null | undefined) {
  return THEMES.find(theme => theme.id === id) || null
}

function normalizeHex(value: string) {
  const hex = value.replace('#', '')
  return hex.length === 3 ? hex.split('').map(char => char + char).join('') : hex.slice(0, 6)
}

/** 按权重混合两个颜色：weight 为 a 的占比。 */
export function mixColor(a: string, b: string, weight: number) {
  const colorA = normalizeHex(a)
  const colorB = normalizeHex(b)
  const ratio = Math.min(1, Math.max(0, weight))
  const channel = (offset: number) => Math.round(
    Number.parseInt(colorA.slice(offset, offset + 2), 16) * ratio
    + Number.parseInt(colorB.slice(offset, offset + 2), 16) * (1 - ratio),
  )
  return `#${[0, 2, 4].map(offset => channel(offset).toString(16).padStart(2, '0')).join('')}`
}

/** 给十六进制颜色加透明度，背景图模式下让界面透出图片。 */
export function withAlpha(color: string, alpha: number) {
  const hex = normalizeHex(color)
  const channel = (offset: number) => Number.parseInt(hex.slice(offset, offset + 2), 16)
  return `rgba(${channel(0)}, ${channel(2)}, ${channel(4)}, ${alpha})`
}

/**
 * 把调色板展开成宿主的颜色令牌。
 *
 * --wr-* 是宿主自己的语义变量；--el-* 是 Element Plus 组件用的变量。
 * 只覆盖颜色，不动圆角、字号、阴影，避免和宿主其它样式打架。
 */
export function themeVars(palette: ThemePalette, mode: ThemeMode) {
  const dark = mode === 'dark'
  const mix = mixColor
  return {
    '--wr-bg': palette.bg,
    '--wr-sidebar-bg': palette.sidebar,
    '--wr-surface': palette.surface,
    '--wr-surface-2': palette.surface2,
    '--wr-border': palette.border,
    '--wr-text': palette.text,
    '--wr-text-2': palette.text2,
    '--wr-muted': palette.muted,
    '--wr-accent': palette.accent,
    '--wr-accent-soft': palette.accentSoft,
    '--wr-header-bg': palette.headerBg,

    '--el-color-primary': palette.accent,
    // light-3 是比主色更亮的悬停色；暗色下只提亮一点点，避免发光。
    '--el-color-primary-light-3': mix(palette.accent, '#ffffff', dark ? 0.7 : 0.65),
    // light-5 及以后是逐级靠近页面底色的浅色层，用作选中 / 悬浮背景。
    '--el-color-primary-light-5': dark ? mix(palette.accent, palette.bg, 0.55) : mix(palette.accent, '#ffffff', 0.5),
    '--el-color-primary-light-7': dark ? mix(palette.accent, palette.bg, 0.45) : mix(palette.accent, '#ffffff', 0.3),
    '--el-color-primary-light-8': dark ? mix(palette.accent, palette.bg, 0.35) : mix(palette.accent, '#ffffff', 0.2),
    '--el-color-primary-light-9': dark ? mix(palette.accent, palette.bg, 0.25) : mix(palette.accent, '#ffffff', 0.1),
    '--el-color-primary-dark-2': mix(palette.accent, '#000000', 0.82),

    '--el-bg-color-page': palette.bg,
    '--el-bg-color': palette.surface,
    '--el-bg-color-overlay': palette.surface,
    '--el-fill-color-blank': palette.surface,
    '--el-fill-color-lighter': palette.surface2,
    '--el-fill-color-light': mix(palette.surface2, palette.surface, 0.75),
    '--el-fill-color': mix(palette.border, palette.surface, dark ? 0.5 : 0.45),
    '--el-fill-color-dark': mix(palette.border, palette.surface, dark ? 0.7 : 0.65),
    '--el-fill-color-darker': palette.border,

    '--el-border-color-extra-light': mix(palette.border, palette.surface, 0.4),
    '--el-border-color-lighter': mix(palette.border, palette.surface, 0.65),
    '--el-border-color-light': palette.border,
    '--el-border-color': mix(palette.border, palette.text, 0.15),
    '--el-border-color-dark': mix(palette.border, palette.text, 0.3),
    '--el-border-color-darker': mix(palette.border, palette.text, 0.45),

    '--el-text-color-primary': palette.text,
    '--el-text-color-regular': palette.text2,
    '--el-text-color-secondary': palette.muted,
    '--el-text-color-placeholder': mix(palette.muted, palette.bg, dark ? 0.6 : 0.75),
    '--el-text-color-disabled': mix(palette.muted, palette.bg, 0.45),
    '--el-mask-color': dark ? 'rgba(6, 8, 10, 0.7)' : 'rgba(255, 255, 255, 0.72)',
  }
}

/**
 * 背景图模式：把大面积底色换成半透明，图片从界面后面透出来。
 * 只改底色 / 填充 / 遮罩这类“面”，文字、边框、主色保持不透明，避免发灰。
 */
export function backgroundVars(palette: ThemePalette, mode: ThemeMode) {
  const dark = mode === 'dark'
  return {
    '--wr-bg': withAlpha(palette.bg, 0.55),
    '--wr-sidebar-bg': withAlpha(palette.sidebar, 0.7),
    '--wr-surface': withAlpha(palette.surface, 0.8),
    '--wr-surface-2': withAlpha(palette.surface2, 0.66),
    '--wr-header-bg': withAlpha(palette.surface, 0.5),

    '--el-bg-color-page': withAlpha(palette.bg, 0.5),
    '--el-bg-color': withAlpha(palette.surface, 0.8),
    '--el-bg-color-overlay': withAlpha(palette.surface, 0.9),
    '--el-fill-color-blank': withAlpha(palette.surface, 0.85),
    '--el-fill-color-lighter': withAlpha(palette.surface2, 0.7),
    '--el-fill-color-light': withAlpha(mixColor(palette.surface2, palette.surface, 0.75), 0.7),
    '--el-fill-color': withAlpha(mixColor(palette.border, palette.surface, dark ? 0.5 : 0.45), 0.72),
    '--el-mask-color': dark ? 'rgba(0, 0, 0, 0.45)' : 'rgba(15, 23, 42, 0.22)',
  }
}
