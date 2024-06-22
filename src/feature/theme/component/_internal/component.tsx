import { $, component$, Slot, useOn } from '@builder.io/qwik'
import { parse } from 'valibot'

import type { ColorThemeMode, ColorThemePalette } from '../../lib'
import { colorThemeModeValidator, colorThemePaletteValidator, dispatchColorThemeChange, getColorThemeChangeEventDefaultTarget } from '../../lib'
import type { ColorThemeRatioProps } from './type'

const ratioClass = 'btn join-item after:whitespace-nowrap'

const COLOR_THEME_MODE_RATIO_NANE = 'color-theme-mode-ratio'
const COLOR_THEME_PALETTE_RATIO_NAME = 'color-theme-palette-ratio'

export const ColorThemeModeRatio = component$<ColorThemeRatioProps<ColorThemeMode>>(
  (props) => {
    const id = `${props.label}-${props.value}`

    useOn(
      'change',
      $((e) => {
        if (!(e.target instanceof HTMLInputElement))
          return

        const target = e.target

        target.removeAttribute('checked')

        const { value } = target
        const mode = parse(colorThemeModeValidator, value)

        dispatchColorThemeChange(
          { mode },
          getColorThemeChangeEventDefaultTarget(),
        )
      }),
    )

    return (
      <input
        id={id}
        type="radio"
        name={COLOR_THEME_MODE_RATIO_NANE}
        aria-label={props.label}
        value={props.value}
        checked={props.selected}
        class={ratioClass}
      />
    )
  },
)

export const ColorModePaletteRatio = component$<ColorThemeRatioProps<ColorThemePalette>>(
  (props) => {
    const id = `${props.label}-${props.value}`

    useOn(
      'change',
      $((e) => {
        if (!(e.target instanceof HTMLInputElement))
          return

        const target = e.target

        target.removeAttribute('checked')

        const { value } = target
        const palette = parse(colorThemePaletteValidator, value)

        dispatchColorThemeChange({ palette }, getColorThemeChangeEventDefaultTarget())
      }),
    )

    return (
      <input
        id={id}
        type="radio"
        name={COLOR_THEME_PALETTE_RATIO_NAME}
        aria-label={props.label}
        value={props.value}
        checked={props.selected}
        class={ratioClass}
      />
    )
  },
)

export const ColorModeLegend = component$(() => {
  return (
    <legend class="menu-title text-center">
      <Slot />
    </legend>
  )
})
