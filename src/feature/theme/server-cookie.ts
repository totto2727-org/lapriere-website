import type { AstroCookies } from "astro"
import {
  COLOR_THEME_PALETTE_COOKIE_NAME,
  COLOR_THEME_MODE_COOKIE_NAME,
} from "./const"
import { colorThemeValidator, type ColorTheme } from "./type"
import { parse } from "valibot"

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
