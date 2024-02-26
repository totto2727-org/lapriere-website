import { Slot, component$, useOn, $ } from "@builder.io/qwik"
import { dispatchColorThemeChange } from "../event"
import PaletteIcon from "~icons/material-symbols/palette-outline"
import {
  isColorThemeMode,
  type ColorThemeMode,
  type ColorThemePalette,
  COLOR_THEME_MODE_DEFAULT,
  isColorThemePallete,
  COLOR_THEME_PALETTE_DEFAULT,
} from "../const"
import type { ColorTheme } from "../type"
import { dropDown, dropDownContent } from "@/feature/ui"

const ratioClass = "btn join-item after:whitespace-nowrap"
const COLOR_THEME_MODE_RATIO_NANE = "color-theme-mode-ratio"
const COLOR_THEME_PALETTE_RATIO_NAME = "color-theme-palette-ratio"

type RatioProps<T extends string> = {
  value: T
  label: string
  checkedValue: T
}

export const ColorThemeModeRatio = component$<RatioProps<ColorThemeMode>>(
  (props) => {
    const id = `${props.label}-${props.value}`

    useOn(
      "change",
      $((e) => {
        if (!(e.target instanceof HTMLInputElement)) return

        const target = e.target

        target.removeAttribute("checked")

        const { value } = target

        if (isColorThemeMode(value)) {
          dispatchColorThemeChange({
            mode: value,
          })
        } else {
          dispatchColorThemeChange({
            mode: COLOR_THEME_MODE_DEFAULT,
          })
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
      "change",
      $((e) => {
        if (!(e.target instanceof HTMLInputElement)) return

        const target = e.target

        target.removeAttribute("checked")

        const { value } = target

        if (isColorThemePallete(value)) {
          dispatchColorThemeChange({ palette: value })
        } else {
          dispatchColorThemeChange({ palette: COLOR_THEME_PALETTE_DEFAULT })
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

export const ColorThemePopupButton = component$<{ theme: ColorTheme }>(
  ({ theme }) => {
    return (
      <div
        class={dropDown.class({ class: "dropdown-end" })}
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
                checkedValue={theme.mode}
              />
              <ColorThemeModeRatio
                label="Dark"
                value="dark"
                checkedValue={theme.mode}
              />
            </div>
          </fieldset>

          <fieldset>
            <ColorModeLegend>Palette</ColorModeLegend>
            <div class="join join-vertical w-full">
              <ColorModePaletteRatio
                label="La prière"
                value="lapriere"
                checkedValue={theme.palette}
              />
              <ColorModePaletteRatio
                label="棗いつき"
                value="tamu"
                checkedValue={theme.palette}
              />
              <ColorModePaletteRatio
                label="藍月なくる"
                value="nakutya"
                checkedValue={theme.palette}
              />
              <ColorModePaletteRatio
                label="nayuta"
                value="nayuta"
                checkedValue={theme.palette}
              />
            </div>
          </fieldset>
        </form>
      </div>
    )
  },
)
