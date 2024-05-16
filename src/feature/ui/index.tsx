import { Slot, type HTMLAttributes, component$ } from "@builder.io/qwik"
import { cva } from "@/feature/style"

export { Ul, Ol } from "./list"
export { dropDown, dropDownContent } from "./dropdown"
export { ExternalLink } from "./link"
export { LatestMusicVideo } from "./latestMusicVideo"

export const Button = component$<
  Omit<HTMLAttributes<HTMLButtonElement>, "type"> & {
    type: "button" | "submit" | "reset"
  }
>((props) => {
  return (
    <button {...props}>
      <Slot />
    </button>
  )
})

export const Calender = component$<{
  title: string
  iframeUrl: string
  icsUrl: string
}>((props) => {
  const iframeUrl = new URL(props.iframeUrl)

  // カレンダーのデフォルトで表示されるタイトルを非表示
  iframeUrl.searchParams.set("showTitle", `${0}`)

  const iframeClass =
    "max-w-full w-screen aspect-square sm:aspect-video sm:px-4"

  return (
    <article
      class={prose({
        class: "prose-headings:m-0 max-w-none flex flex-col items-center gap-4",
      })}
    >
      <h2>{props.title}</h2>
      {import.meta.env.DEV ? (
        <div class={`${iframeClass} skeleton`} />
      ) : (
        <iframe src={iframeUrl.toString()} class={iframeClass} />
      )}
      {/* iframeのデフォルトの属性、非推奨のため無効化 */}
      {/* frameborder="0" scrolling="no" -->*/}
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

export const prose = cva({ base: "prose max-w-none sm:prose-base" })

export const container = cva({
  base: "w-full max-w-7xl",
  variants: {
    x: { enable: "mx-auto px-[2.5vw]", disable: "" },
    y: { enable: "my-4", disable: "" },
  },
  defaultVariants: {
    x: "enable",
    y: "enable",
  },
})
