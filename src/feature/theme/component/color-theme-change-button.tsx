import {
  $,
  component$,
  useSignal,
} from '@builder.io/qwik'

import { usePageLoadTask } from '@/feature/qwik'
import { dropDown, dropDownContent } from '@/feature/ui/drop-down'
import PaletteIcon from '~icons/material-symbols/palette-outline'

import type { ColorTheme } from '../lib'
import {
  getColorThemeChangeEventDefaultTarget,
  loadColorThemeFromDom,
} from '../lib'
import { COLOR_THEME_MODE_LIST, COLOR_THEME_PALETTE_LIST } from './_const'
import { ColorModeLegend, ColorModePaletteRatio, ColorThemeModeRatio } from './_internal/component'

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
      theme: loadColorThemeFromDom(getColorThemeChangeEventDefaultTarget()),
    }
  }))

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
      <form
        tabIndex={dropDownContent.tabIndex}
        class={dropDownContent.class()}
      >
        <fieldset>
          <ColorModeLegend>Mode</ColorModeLegend>
          <div class="join join-vertical w-full">
            {isLoaded(themeStoreValue) && COLOR_THEME_MODE_LIST.map(v => <ColorThemeModeRatio {...v} selected={v.value === themeStoreValue.theme.mode} />)}
          </div>
        </fieldset>

        <fieldset>
          <ColorModeLegend>Palette</ColorModeLegend>
          <div class="join join-vertical w-full">
            {isLoaded(themeStoreValue) && COLOR_THEME_PALETTE_LIST.map(v => <ColorModePaletteRatio {...v} selected={v.value === themeStoreValue.theme.palette} />)}
          </div>
        </fieldset>
      </form>
    </div>
  )
})
