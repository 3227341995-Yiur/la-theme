import ThemeSettings from './ThemeSettings.vue'
import { applyTheme, clearTheme, setMode } from './engine'
import { destroyBackground, initBackground } from './background'

export const name = 'la-theme'
export const inject = ['theme', 'settings']

export function apply(ctx) {
  ctx.settings.register({
    id: 'la-theme',
    label: '主题',
    icon: 'Brush',
    order: 20,
    component: ThemeSettings,
  })

  // 挂载时先套用已保存的主题与背景图；停用插件时把颜色令牌还给宿主。
  ctx.effect(() => {
    applyTheme()
    initBackground().catch(error => console.warn('[la-theme] 背景图初始化失败:', error))
    return () => {
      destroyBackground()
      clearTheme()
    }
  })

  // 宿主切换亮色 / 暗色时，按新模式重算同一套主题的颜色。
  ctx.effect(() => {
    const off = ctx.theme.onChange(({ resolved }) => {
      setMode(resolved === 'dark' ? 'dark' : 'light')
    })
    return () => off?.()
  })
}

export default { name, inject, apply }
