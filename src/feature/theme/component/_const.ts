import type { ColorThemeMode, ColorThemePalette } from '../lib'
import type { ColorThemeRatioProps } from './_internal/type'

/**
 * ラジオボタンとして表示するモードの一覧
 */
export const COLOR_THEME_MODE_LIST = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
] as const satisfies Pick<ColorThemeRatioProps<ColorThemeMode>, 'value' | 'label'>[]

/**
 * ラジオボタンとして表示するパレットの一覧
 */
export const COLOR_THEME_PALETTE_LIST = [
  {
    label: 'La prière',
    value: 'lapriere',
  },
  {
    label: '棗いつき',
    value: 'tamu',
  },
  {
    label: '藍月なくる',
    value: 'nakutya',
  },
  {
    label: 'nayuta',
    value: 'nayuta',
  },
] as const satisfies Pick<ColorThemeRatioProps<ColorThemePalette>, 'value' | 'label'>[]
