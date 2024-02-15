export const COLOR_THEME_MODE = ["light", "dark"] as const

export const COLOR_THEME_MODE_DEFAULT =
  "light" satisfies (typeof COLOR_THEME_MODE)[number]

export type ColorThemeMode = (typeof COLOR_THEME_MODE)[number]

export function isColorThemeMode(value: unknown): value is ColorThemeMode {
  return COLOR_THEME_MODE.includes(value as ColorThemeMode)
}

export const COLOR_THEME_PALETTE = [
  "lapriere",
  "tamu",
  "nakutya",
  "nayuta",
] as const
export const COLOR_THEME_PALETTE_DEFAULT =
  "lapriere" satisfies (typeof COLOR_THEME_PALETTE)[number]

export type ColorThemePalette = (typeof COLOR_THEME_PALETTE)[number]

export function isColorThemePallete(
  value: unknown,
): value is ColorThemePalette {
  return COLOR_THEME_PALETTE.includes(value as ColorThemePalette)
}

export const COLOR_THEME_MODE_COOKIE_NAME = "color-theme-mode"
export const COLOR_THEME_PALETTE_COOKIE_NAME = "color-theme-palette"

/**
 * カラーテーマのCookieのオプション
 *
 * js-cookieのオプションベースで設定しているため、必要であれば都度変換してください。
 */
export const COLOR_THEME_COOKIE_OPTION = {
  expires: 3650,
  sameSite: "strict",
} as const
