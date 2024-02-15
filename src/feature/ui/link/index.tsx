import { component$, Slot, type HTMLAttributes } from "@builder.io/qwik"

// export { default as ExternalLink } from "./ExternalLink.astro"
export const ExternalLink = component$<
  Omit<HTMLAttributes<HTMLAnchorElement>, "rel" | "target"> & { href: string }
>((props) => {
  return (
    <a {...props} target="_blank" rel="noreferrer">
      <Slot />
    </a>
  )
})
