import type { COLOR_THEME_MODE, COLOR_THEME_PALETTE } from "./const"

export type ColorTheme = {
  mode: (typeof COLOR_THEME_MODE)[number]
  palette: (typeof COLOR_THEME_PALETTE)[number]
}
