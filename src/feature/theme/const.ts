export const COLOR_THEME_MODE_COOKIE_NAME = 'color-theme-mode'
export const COLOR_THEME_PALETTE_COOKIE_NAME = 'color-theme-palette'

/**
 * カラーテーマのCookieのオプション
 *
 * js-cookieのオプションベースで設定しているため、必要であれば都度変換してください。
 */
export const COLOR_THEME_COOKIE_OPTION = {
	expires: 3650,
	sameSite: 'strict',
} as const
