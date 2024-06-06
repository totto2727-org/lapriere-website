import { component$ } from '@builder.io/qwik'

import { CalenderBody } from '#js/feature/ui/calender-body/calender-body'

import { prose } from './prose'

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
      <CalenderBody {...props} />
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
