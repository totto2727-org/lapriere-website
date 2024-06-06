import { component$ } from '@builder.io/qwik'

export const iframeClass = 'max-w-full w-screen aspect-square sm:aspect-video sm:px-4'

export const CalenderInternal = component$<{
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
