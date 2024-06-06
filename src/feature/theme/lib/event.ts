import { saveColorThemeOnCookie } from './client-cookie'
import type { ColorTheme } from './type'

/**
 * テーマを変更するイベント名
 */
const COLOR_THEME_CHANGE_EVENT = 'color-theme'

/**
 * テーマを変更するイベントのデフォルトのターゲットを取得する関数
 *
 * 現在はデフォルトでHTMLタグを返します。
 */
export function getColorThemeChangeEventDefaultTarget() {
  return document.documentElement
}

const COLOR_THEME_MODE_ATTRIBUTE = 'data-theme'
const COLOR_THEME_PALETTE_ATTRIBUTE = 'data-color-theme-palette'

type ColorThemeChangeEvent = CustomEvent<Partial<ColorTheme>>

/**
 * テーマ変更イベントの値に基づいてテーマに関する属性を更新する関数
 *
 * data-theme, data-theme-type の属性を更新します。
 *
 * @param event 変更先のテーマのイベント
 * @param target テーマに関する属性を持った要素
 */
function onColorThemeChange(event: ColorThemeChangeEvent, target: HTMLElement) {
  const value = event.detail
  if (!value)
    return

  if (value.mode) {
    // daisyUIのテーマ変更に対応するために、data-theme属性を指定
    // daisyUIのテーマを完全に上書きする場合は独自の属性を指定しても良い
    target.setAttribute(COLOR_THEME_MODE_ATTRIBUTE, value.mode)
  }
  if (value.palette) {
    target.setAttribute(COLOR_THEME_PALETTE_ATTRIBUTE, value.palette)
  }
  saveColorThemeOnCookie(value)
}

/**
 * テーマ変更イベントを発火する関数
 *
 * ターゲットの指定がない場合はデフォルトのターゲットに発火します。
 *
 * @param theme 変更先のテーマの値
 * @param targetElement テーマに関する属性を持った要素
 */
export function dispatchColorThemeChange(
  theme: Partial<ColorTheme>,
  targetElement: HTMLElement,
) {
  const event: ColorThemeChangeEvent = new CustomEvent(
    COLOR_THEME_CHANGE_EVENT,
    { detail: theme },
  )

  targetElement.dispatchEvent(event)
}

/**
 * テーマ変更イベントのリスナーを追加する関数
 *
 * ターゲットの指定がない場合はデフォルトのターゲットに発火します。
 *
 * 以下のように設定してください。
 *
 * ```html
 * <html data-theme="light" data-color-theme-palette="blue">
 *   <head>
 *     ...
 *     <script type="module">
 *       addThemeChangeEventListener()
 *     </script>
 *     ...
 * </html>
 * ```
 *
 * @param targetElement テーマに関する属性を持った要素
 */
export function addColorThemeChangeEventListener(targetElement: HTMLElement) {
  targetElement.addEventListener(COLOR_THEME_CHANGE_EVENT, (e) => {
    // TODO as
    onColorThemeChange(e as ColorThemeChangeEvent, targetElement)
  })
}
