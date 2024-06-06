import { component$ } from '@builder.io/qwik'

import type { Calender as Original } from './calender'
import { iframeClass } from './calender.internal'

export const CalenderInternal: typeof Original = component$(() => {
	return (
		<div class={`${iframeClass} skeleton`} />
		/* iframeのデフォルトの属性、非推奨のため無効化 */
		/* frameborder="0" scrolling="no" --> */
	)
})
