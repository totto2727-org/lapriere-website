import type { HTMLAttributes } from '@builder.io/qwik'
import { component$, Slot } from '@builder.io/qwik'

export const Button = component$<
  Omit<HTMLAttributes<HTMLButtonElement>, 'type'> & {
    type: 'button' | 'submit' | 'reset'
  }
>((props) => {
  return (
    <button {...props}>
      <Slot />
    </button>
  )
})
