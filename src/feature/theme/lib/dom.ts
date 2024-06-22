import { parse } from 'valibot'

import { COLOR_THEME_MODE_ATTRIBUTE, COLOR_THEME_PALETTE_ATTRIBUTE } from '../_const'
import type { ColorTheme } from './type'
import { colorThemeValidator } from './type'

/**
 * DOMにカラーテーマを保存する関数
 *
 * @param theme
 */
export function saveColorThemeOnDom(theme: Partial<ColorTheme>, target: HTMLElement): void {
  if (theme.mode) {
    // daisyUIのテーマ変更に対応するために、data-theme属性を指定
    // daisyUIのテーマを完全に上書きする場合は独自の属性を指定しても良い
    target.setAttribute(COLOR_THEME_MODE_ATTRIBUTE, theme.mode)
  }

  if (theme.palette) {
    target.setAttribute(COLOR_THEME_PALETTE_ATTRIBUTE, theme.palette)
  }
}

/**
 * DOMから現在のカラーテーマを読み込む関数
 *
 * @param documentElement カラーテーマが設定されているhtml要素
 */
export function loadColorThemeFromDom(documentElement: HTMLElement): ColorTheme {
  const mode = documentElement.getAttribute(COLOR_THEME_MODE_ATTRIBUTE)
  const palette = documentElement.getAttribute(COLOR_THEME_PALETTE_ATTRIBUTE)

  return parse(colorThemeValidator, { mode, palette })
}
