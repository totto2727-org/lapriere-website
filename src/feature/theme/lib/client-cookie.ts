import Cookies from 'js-cookie'
import { parse } from 'valibot'

import {
  COLOR_THEME_COOKIE_OPTION,
  COLOR_THEME_MODE_COOKIE_NAME,
  COLOR_THEME_PALETTE_COOKIE_NAME,
} from './const'
import type { ColorTheme } from './type'
import { colorThemeValidator } from './type'

/**
 * ブラウザ上でCookieにカラーテーマを保存する関数
 *
 * @param theme
 */
export function saveColorThemeOnCookie(theme: Partial<ColorTheme>) {
  const validatedTheme = parse(colorThemeValidator, theme)

  Cookies.set(
    COLOR_THEME_MODE_COOKIE_NAME,
    validatedTheme.mode,
    COLOR_THEME_COOKIE_OPTION,
  )

  Cookies.set(
    COLOR_THEME_PALETTE_COOKIE_NAME,
    validatedTheme.palette,
    COLOR_THEME_COOKIE_OPTION,
  )
}

/**
 * ブラウザ上でCookieにカラーテーマを保存する関数
 *
 * @param cookie
 */
export function loadColorThemeOnClientCookie(
  cookie: Partial<Record<string, string>>,
): ColorTheme {
  const mode = cookie[COLOR_THEME_MODE_COOKIE_NAME]
  const palette = cookie[COLOR_THEME_MODE_COOKIE_NAME]

  return parse(colorThemeValidator, { mode, palette })
}
