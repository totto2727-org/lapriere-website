import type { HTMLAttributes } from '@builder.io/qwik'
import { component$, Slot } from '@builder.io/qwik'

import { cva } from '@/feature/style'

export { dropDown, dropDownContent } from './drop-down.style'
export { ExternalLink } from './link'
export { Ol, Ul } from './list'

export const prose = cva({ base: 'prose max-w-none sm:prose-base' })

export const container = cva({
	base: 'w-full max-w-7xl',
	variants: {
		x: { enable: 'mx-auto px-[2.5vw]', disable: '' },
		y: { enable: 'my-4', disable: '' },
	},
	defaultVariants: {
		x: 'enable',
		y: 'enable',
	},
})

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
