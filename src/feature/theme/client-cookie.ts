import Cookies from "js-cookie"
import {
  COLOR_THEME_COOKIE_OPTION,
  COLOR_THEME_MODE_COOKIE_NAME,
  COLOR_THEME_MODE_DEFAULT,
  COLOR_THEME_PALETTE_COOKIE_NAME,
  COLOR_THEME_PALETTE_DEFAULT,
} from "./const"
import type { ColorTheme } from "./type"

/**
 * ブラウザ上でCookieにカラーテーマを保存する関数
 *
 * @param theme
 */
export function saveColorThemeOnCookie(theme: Partial<ColorTheme>) {
  if (theme.mode) {
    Cookies.set(
      COLOR_THEME_MODE_COOKIE_NAME,
      theme.mode ?? COLOR_THEME_MODE_DEFAULT,
      COLOR_THEME_COOKIE_OPTION,
    )
  }

  if (theme.palette) {
    Cookies.set(
      COLOR_THEME_PALETTE_COOKIE_NAME,
      theme.palette ?? COLOR_THEME_PALETTE_DEFAULT,
      COLOR_THEME_COOKIE_OPTION,
    )
  }
}
