export interface EventWithName {
  name: string
  create: () => CustomEvent
}

const QWIK_PAGE_LOAD_EVENT_NAME = 'qwik:page-load'
export const qwikPageLoadEvent: EventWithName = {
  name: QWIK_PAGE_LOAD_EVENT_NAME,
  create: () => new CustomEvent(QWIK_PAGE_LOAD_EVENT_NAME),
}

const QWIK_AFTER_SWAP_EVENT_NAME = 'qwik:after-swap'
export const qwikAfterSwapEvent: EventWithName = {
  name: QWIK_AFTER_SWAP_EVENT_NAME,
  create: () => new CustomEvent(QWIK_PAGE_LOAD_EVENT_NAME),
}
