import { is, partial } from 'valibot'

import { saveColorThemeOnCookie } from './cookie.client'
import { saveColorThemeOnDom } from './dom'
import type { ColorTheme } from './type'
import { colorThemeValidator } from './type'

/**
 * テーマを変更するイベントのデフォルトのターゲットを取得する関数
 *
 * 現在はデフォルトでHTMLタグを返します。
 */
export function getColorThemeChangeEventDefaultTarget(): HTMLElement {
  return document.documentElement
}

class ColorThemeChangeEvent extends CustomEvent<Partial<ColorTheme>> {
  static eventName = 'color-theme:change'

  /**
   * Vite利用時、開発環境と本番環境でinstanceofの結果が異なることがあるため緩衝策して実装している関数
   *
   * 検証結果に応じてパススルー、初期化等を切り替えます
   *
   * ColorThemeChangeEventに該当しないイベントオブジェクトを渡すと例外を返します
   *
   * @param e イベント
   * @returns
   */
  static reconstructor(e: Event) {
    if (e instanceof ColorThemeChangeEvent) {
      return e
    }

    if (e instanceof CustomEvent && is(partial(colorThemeValidator), e.detail)) {
      return new ColorThemeChangeEvent(e.detail)
    }

    throw new Error('不適切なイベントオブジェクトが渡されています')
  }

  constructor(theme: Partial<ColorTheme>) {
    super(ColorThemeChangeEvent.eventName, { detail: theme })
  }
}

/**
 * テーマ変更イベントの値に基づいてテーマに関する属性を更新する関数
 *
 * data-theme, data-theme-type の属性を更新します。
 *
 * @param event 変更先のテーマのイベント
 * @param target テーマに関する属性を持った要素
 */
function onColorThemeChange(event: ColorThemeChangeEvent, target: HTMLElement): void {
  const theme = event.detail

  saveColorThemeOnDom(theme, target)

  saveColorThemeOnCookie(theme)
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
): boolean {
  return targetElement.dispatchEvent(new ColorThemeChangeEvent(theme))
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
export function addColorThemeChangeEventListener(targetElement: HTMLElement): void {
  targetElement.addEventListener(ColorThemeChangeEvent.eventName, (e) => {
    const event = ColorThemeChangeEvent.reconstructor(e)

    onColorThemeChange(event, targetElement)
  })
}
