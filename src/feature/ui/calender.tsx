import { component$ } from '@builder.io/qwik'

import { CalenderInternal } from '#js/feature/ui/calender.internal'

import { prose } from '.'

export const Calender = component$<{
	title: string
	iframeUrl: string
	icsUrl: string
}>((props) => {
	return (
		<article
			class={prose({
				class: 'prose-headings:m-0 max-w-none flex flex-col items-center gap-4',
			})}
		>
			<h2>{props.title}</h2>
			<CalenderInternal {...props} />
			<a
				href={props.icsUrl}
				target="_blank"
				rel="noopener noreferrer"
				title="La prière公式イベントカレンダーを購読する"
				class="not-prose btn btn-primary max-w-80"
			>
				購読する
			</a>
		</article>
	)
})
