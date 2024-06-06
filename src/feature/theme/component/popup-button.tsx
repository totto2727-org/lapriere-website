import {
  $,
  component$,
  Slot,
  useOn,
  useSignal,
  useVisibleTask$,
} from '@builder.io/qwik'
import Cookies from 'js-cookie'
import { getDefault, is } from 'valibot'

import { dropDown, dropDownContent } from '@/feature/ui/drop-down'
import PaletteIcon from '~icons/material-symbols/palette-outline'

import type { ColorTheme, ColorThemeMode, ColorThemePalette } from '../lib'
import {
  colorThemeModeValidator,
  colorThemePaletteValidator,
  dispatchColorThemeChange,
  getColorThemeChangeEventDefaultTarget,
  loadColorThemeOnClientCookie,
} from '../lib'

const ratioClass = 'btn join-item after:whitespace-nowrap'
const COLOR_THEME_MODE_RATIO_NANE = 'color-theme-mode-ratio'
const COLOR_THEME_PALETTE_RATIO_NAME = 'color-theme-palette-ratio'

interface RatioProps<T extends string> {
  value: T
  label: string
  checkedValue: T
}

export const ColorThemeModeRatio = component$<RatioProps<ColorThemeMode>>(
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

        const updateTarget = getColorThemeChangeEventDefaultTarget()

        if (is(colorThemeModeValidator, value)) {
          dispatchColorThemeChange(
            {
              mode: value,
            },
            updateTarget,
          )
        }
        else {
          dispatchColorThemeChange(
            {
              mode: getDefault(colorThemeModeValidator),
            },
            updateTarget,
          )
        }
      }),
    )

    return (
      <input
        id={id}
        type="radio"
        name={COLOR_THEME_MODE_RATIO_NANE}
        aria-label={props.label}
        value={props.value}
        checked={props.checkedValue === props.value}
        class={ratioClass}
      />
    )
  },
)

export const ColorModePaletteRatio = component$<RatioProps<ColorThemePalette>>(
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

        const updateTarget = getColorThemeChangeEventDefaultTarget()

        if (is(colorThemePaletteValidator, value)) {
          dispatchColorThemeChange({ palette: value }, updateTarget)
        }
        else {
          dispatchColorThemeChange(
            {
              palette: getDefault(colorThemePaletteValidator),
            },
            updateTarget,
          )
        }
      }),
    )

    return (
      <input
        id={id}
        type="radio"
        name={COLOR_THEME_PALETTE_RATIO_NAME}
        aria-label={props.label}
        value={props.value}
        checked={props.checkedValue === props.value}
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

export const ColorThemePopupButton = component$(() => {
  const themeStore = useSignal<
    { type: 'loaded', theme: ColorTheme } | { type: 'unloaded' }
  >({ type: 'unloaded' })

  useVisibleTask$(() => {
    themeStore.value = {
      type: 'loaded',
      theme: loadColorThemeOnClientCookie(Cookies.get()),
    }
  })

  return (
    <div
      class={dropDown.class({ class: 'dropdown-end' })}
      style={dropDown.style}
    >
      <div
        tabIndex={0}
        role="button"
        class="btn btn-primary animate-none"
        aria-label="カラーテーマの設定のトリガーボタン"
      >
        <PaletteIcon
          name="material-symbols:palette-outline"
          class="size-6 sm:size-8"
        />
      </div>
      {themeStore.value.type === 'loaded'
        ? (
          <form
            tabIndex={dropDownContent.tabIndex}
            class={dropDownContent.class()}
          >
            <fieldset>
              <ColorModeLegend>Mode</ColorModeLegend>
              <div class="join join-vertical w-full">
                <ColorThemeModeRatio
                  label="Light"
                  value="light"
                  checkedValue={themeStore.value.theme.mode}
                />
                <ColorThemeModeRatio
                  label="Dark"
                  value="dark"
                  checkedValue={themeStore.value.theme.mode}
                />
              </div>
            </fieldset>

            <fieldset>
              <ColorModeLegend>Palette</ColorModeLegend>
              <div class="join join-vertical w-full">
                <ColorModePaletteRatio
                  label="La prière"
                  value="lapriere"
                  checkedValue={themeStore.value.theme.palette}
                />
                <ColorModePaletteRatio
                  label="棗いつき"
                  value="tamu"
                  checkedValue={themeStore.value.theme.palette}
                />
                <ColorModePaletteRatio
                  label="藍月なくる"
                  value="nakutya"
                  checkedValue={themeStore.value.theme.palette}
                />
                <ColorModePaletteRatio
                  label="nayuta"
                  value="nayuta"
                  checkedValue={themeStore.value.theme.palette}
                />
              </div>
            </fieldset>
          </form>
          )
        : (
          <></>
          )}
    </div>
  )
})
