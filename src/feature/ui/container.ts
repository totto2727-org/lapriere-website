import { cva } from '@/feature/style'

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
