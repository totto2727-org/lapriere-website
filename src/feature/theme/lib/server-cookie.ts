import type { AstroCookies } from 'astro'
import { parse } from 'valibot'

import {
  COLOR_THEME_MODE_COOKIE_NAME,
  COLOR_THEME_PALETTE_COOKIE_NAME,
} from './const'
import type { ColorTheme } from './type'
import { colorThemeValidator } from './type'

/**
 * Astro.cookiesからテーマを読み込む関数
 *
 * @param cookie Astro.cookies
 */
export function loadColorThemeOnCookie(cookie: AstroCookies): ColorTheme {
  const mode = cookie.get(COLOR_THEME_MODE_COOKIE_NAME)?.value
  const palette = cookie.get(COLOR_THEME_PALETTE_COOKIE_NAME)?.value

  return parse(colorThemeValidator, { mode, palette })
}
