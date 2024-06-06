import { component$ } from '@builder.io/qwik'

import { iframeClass } from './_style'
import type { CalenderBody as Original } from './calender-body'

export const CalenderBody: typeof Original = component$(() => {
  return (
    <div class={`${iframeClass} skeleton`} />
  /* iframeのデフォルトの属性、非推奨のため無効化 */
  /* frameborder="0" scrolling="no" --> */
  )
})
