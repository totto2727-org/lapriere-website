import { component$, Slot, type HTMLAttributes } from "@builder.io/qwik"

export const Ol = component$<
  Omit<HTMLAttributes<HTMLOListElement>, "role"> &
    Required<Pick<HTMLAttributes<HTMLOListElement>, "role">>
>((props) => {
  return (
    <ol {...props}>
      <Slot />
    </ol>
  )
})

export const Ul = component$<
  Omit<HTMLAttributes<HTMLUListElement>, "role"> &
    Required<Pick<HTMLAttributes<HTMLUListElement>, "role">>
>((props) => {
  return (
    <ul {...props}>
      <Slot />
    </ul>
  )
})
