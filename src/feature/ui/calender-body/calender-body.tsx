import { component$ } from '@builder.io/qwik'

import { iframeClass } from './_style'

export const CalenderBody = component$<{
	title: string
	iframeUrl: string
	icsUrl: string
}>((props) => {
	const iframeUrl = new URL(props.iframeUrl)

	// カレンダーのデフォルトで表示されるタイトルを非表示
	iframeUrl.searchParams.set('showTitle', `${0}`)

	return (
		<div class={`${iframeClass} skeleton`} />
	)
})
