export interface EventWithName<T extends string, U extends string> {
  eventName: T
  astroEventName: U
  create: () => CustomEvent
}

const QWIK_PAGE_LOAD_EVENT_NAME = 'qwikPageLoad'
export const qwikPageLoadEvent: EventWithName<typeof QWIK_PAGE_LOAD_EVENT_NAME, 'astro:page-load'> = {
  eventName: QWIK_PAGE_LOAD_EVENT_NAME,
  astroEventName: 'astro:page-load',
  create: () => new CustomEvent(QWIK_PAGE_LOAD_EVENT_NAME),
}

const QWIK_AFTER_SWAP_EVENT_NAME = 'qwikAfterSwap'
export const qwikAfterSwapEvent: EventWithName<typeof QWIK_AFTER_SWAP_EVENT_NAME, 'astro:after-swap'> = {
  eventName: QWIK_AFTER_SWAP_EVENT_NAME,
  astroEventName: 'astro:after-swap',
  create: () => new CustomEvent(QWIK_AFTER_SWAP_EVENT_NAME),
}
