import type { Output } from 'valibot'
import { fallback, literal, object, union } from 'valibot'

export const colorThemeModeValidator = fallback(
	union([literal('light'), literal('dark')]),
	'light',
)

export type ColorThemeMode = Output<typeof colorThemeModeValidator>

export const colorThemePaletteValidator = fallback(
	union([
		literal('lapriere'),
		literal('tamu'),
		literal('nakutya'),
		literal('nayuta'),
	]),
	'lapriere',
)

export type ColorThemePalette = Output<typeof colorThemePaletteValidator>

export const colorThemeValidator = object({
	mode: colorThemeModeValidator,
	palette: colorThemePaletteValidator,
})

export type ColorTheme = Output<typeof colorThemeValidator>
