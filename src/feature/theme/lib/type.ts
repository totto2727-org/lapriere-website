import type { InferOutput } from 'valibot'
import { fallback, literal, object, union } from 'valibot'

export const colorThemeModeValidator = fallback(
  union([literal('light'), literal('dark')]),
  'light',
)

export type ColorThemeMode = InferOutput<typeof colorThemeModeValidator>

export const colorThemePaletteValidator = fallback(
  union([
    literal('lapriere'),
    literal('tamu'),
    literal('nakutya'),
    literal('nayuta'),
  ]),
  'lapriere',
)

export type ColorThemePalette = InferOutput<typeof colorThemePaletteValidator>

export const colorThemeValidator = object({
  mode: colorThemeModeValidator,
  palette: colorThemePaletteValidator,
})

export type ColorTheme = InferOutput<typeof colorThemeValidator>
