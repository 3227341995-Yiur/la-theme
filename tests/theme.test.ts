import test from 'node:test'
import assert from 'node:assert/strict'
import { THEMES, backgroundVars, findTheme, mixColor, themeVars, withAlpha } from '../src/themes.ts'

const HEX = /^#[0-9a-f]{6}$/i

test('每套主题都有亮色 / 暗色两份合法调色板', () => {
  assert.ok(THEMES.length >= 4)
  for (const theme of THEMES) {
    for (const mode of ['light', 'dark'] as const) {
      for (const [key, value] of Object.entries(theme[mode])) {
        assert.match(value, key === 'headerBg' ? /^rgba\(/ : HEX, `${theme.id}.${mode}.${key}`)
      }
    }
  }
  assert.equal(findTheme('sakura')?.name, '樱花粉')
  assert.equal(findTheme('missing'), null)
})

test('mixColor 按权重混合', () => {
  assert.equal(mixColor('#000000', '#ffffff', 0.5), '#808080')
  assert.equal(mixColor('#3574f0', '#ffffff', 1), '#3574f0')
  assert.equal(mixColor('#3574f0', '#ffffff', 0), '#ffffff')
})

test('withAlpha 输出 rgba', () => {
  assert.equal(withAlpha('#3574f0', 0.5), 'rgba(53, 116, 240, 0.5)')
  assert.equal(withAlpha('#fff', 1), 'rgba(255, 255, 255, 1)')
})

test('themeVars 把调色板展开成宿主令牌', () => {
  for (const theme of THEMES) {
    for (const mode of ['light', 'dark'] as const) {
      const palette = theme[mode]
      const vars = themeVars(palette, mode)
      assert.equal(vars['--wr-accent'], palette.accent)
      assert.equal(vars['--el-color-primary'], palette.accent)
      assert.equal(vars['--el-bg-color'], palette.surface)
      assert.equal(vars['--el-bg-color-page'], palette.bg)
      assert.equal(vars['--wr-bg'], palette.bg)
      for (const value of Object.values(vars)) {
        assert.match(value, /^(#[0-9a-f]{6}|rgba\()/i)
      }
    }
  }
})

test('backgroundVars 把大面积底色变成半透明', () => {
  for (const theme of THEMES) {
    for (const mode of ['light', 'dark'] as const) {
      const vars = backgroundVars(theme[mode], mode)
      for (const key of ['--wr-bg', '--wr-sidebar-bg', '--wr-surface', '--el-bg-color', '--el-bg-color-page']) {
        assert.match(vars[key], /^rgba\(/, `${theme.id}.${mode}.${key}`)
        assert.ok(!vars[key].endsWith(', 1)'), `${theme.id}.${mode}.${key} 应带透明度`)
      }
      assert.match(vars['--el-mask-color'], /^rgba\(/)
    }
  }
})
