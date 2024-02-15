import type { AstroCookies } from "astro"
import {
  COLOR_THEME_PALETTE_COOKIE_NAME,
  COLOR_THEME_MODE_COOKIE_NAME,
  COLOR_THEME_MODE_DEFAULT,
  COLOR_THEME_PALETTE_DEFAULT,
  isColorThemeMode,
  isColorThemePallete,
} from "./const"
import type { ColorTheme } from "./type"

/**
 * Astro.cookiesからテーマを読み込む関数
 *
 * @param cookie Astro.cookies
 */
export function loadColorThemeOnCookie(cookie: AstroCookies): ColorTheme {
  const mode = cookie.get(COLOR_THEME_MODE_COOKIE_NAME)?.value
  const palette = cookie.get(COLOR_THEME_PALETTE_COOKIE_NAME)?.value

  return {
    mode: isColorThemeMode(mode) ? mode : COLOR_THEME_MODE_DEFAULT,
    palette: isColorThemePallete(palette)
      ? palette
      : COLOR_THEME_PALETTE_DEFAULT,
  }
}
