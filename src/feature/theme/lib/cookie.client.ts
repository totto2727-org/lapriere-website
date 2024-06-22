import Cookies from 'js-cookie'
import { parse } from 'valibot'

import { COLOR_THEME_MODE_COOKIE_NAME, COLOR_THEME_PALETTE_COOKIE_NAME } from '../_const'
import type { ColorTheme } from './type'
import { colorThemeValidator } from './type'

/**
 * カラーテーマのCookieのオプション
 *
 * js-cookieのオプションベースで設定しているため、必要であれば都度変換してください。
 */
export const COLOR_THEME_COOKIE_OPTION = {
  expires: 3650,
  sameSite: 'strict',
} as const

/**
 * ブラウザ上でCookieにカラーテーマを保存する関数
 *
 * @param theme
 */
export function saveColorThemeOnCookie(theme: Partial<ColorTheme>): void {
  if (theme.mode) {
    Cookies.set(
      COLOR_THEME_MODE_COOKIE_NAME,
      theme.mode,
      COLOR_THEME_COOKIE_OPTION,
    )
  }

  if (theme.palette) {
    Cookies.set(
      COLOR_THEME_PALETTE_COOKIE_NAME,
      theme.palette,
      COLOR_THEME_COOKIE_OPTION,
    )
  }
}

/**
 * Cookieから現在のカラーテーマを読み込む関数
 *
 * @param cookie
 */
export function loadColorThemeFromCookie(
  cookie: Partial<Record<string, string>>,
): ColorTheme {
  const mode = cookie[COLOR_THEME_MODE_COOKIE_NAME]
  const palette = cookie[COLOR_THEME_PALETTE_COOKIE_NAME]

  return parse(colorThemeValidator, { mode, palette })
}
