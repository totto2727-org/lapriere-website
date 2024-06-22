import {
  $,
  component$,
  Slot,
  useOn,
  useSignal,
} from '@builder.io/qwik'
import Cookies from 'js-cookie'
import { getDefault, is } from 'valibot'

import { usePageLoadTask } from '@/feature/qwik'
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
  checked: boolean
}

export const ColorThemeModeRatio_ = component$<RatioProps<ColorThemeMode>>(
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
        checked={props.checked}
        class={ratioClass}
      />
    )
  },
)

export const ColorModePaletteRatio_ = component$<RatioProps<ColorThemePalette>>(
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
        checked={props.checked}
        class={ratioClass}
      />
    )
  },
)

export const ColorModeLegend_ = component$(() => {
  return (
    <legend class="menu-title text-center">
      <Slot />
    </legend>
  )
})

const modes = [
  { value: 'light', label: 'Light' },
  { value: 'dark', label: 'Dark' },
] as const

const palettes = [
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
] as const

interface ThemeSignalLoaded { type: 'loaded', theme: ColorTheme }
interface ThemeSignalUnLoaded { type: 'unloaded' }
type ThemeSignal = ThemeSignalLoaded | ThemeSignalUnLoaded

function isLoaded(x: ThemeSignal): x is ThemeSignalLoaded {
  return x.type === 'loaded'
}

export const ColorThemeChangeButton = component$(() => {
  const themeStore = useSignal<
    ThemeSignal
  >({ type: 'unloaded' })

  // TypeScriptの型推論の都合で切り出し
  const themeStoreValue = themeStore.value

  usePageLoadTask($(() => {
    themeStore.value = {
      type: 'loaded',
      theme: loadColorThemeOnClientCookie(Cookies.get()),
    }
  },
  ))

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
      {isLoaded(themeStoreValue)
        ? (
          <form
            tabIndex={dropDownContent.tabIndex}
            class={dropDownContent.class()}
          >
            <fieldset>
              <ColorModeLegend_>Mode</ColorModeLegend_>
              <div class="join join-vertical w-full">
                {modes.map(v => <ColorThemeModeRatio_ {...v} checked={v.value === themeStoreValue.theme.mode} />)}
              </div>
            </fieldset>

            <fieldset>
              <ColorModeLegend_>Palette</ColorModeLegend_>
              <div class="join join-vertical w-full">
                {palettes.map(v => <ColorModePaletteRatio_ {...v} checked={v.value === themeStoreValue.theme.palette} />)}
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
