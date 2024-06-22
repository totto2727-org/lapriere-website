import { useOnDocument } from '@builder.io/qwik'

import { qwikAfterSwapEvent, qwikPageLoadEvent } from './event'

export const usePageLoadTask = (eventQrl: Parameters<typeof useOnDocument>[1]) => useOnDocument(qwikPageLoadEvent.name, eventQrl)

export const useAfterSwapTask = (eventQrl: Parameters<typeof useOnDocument>[1]) => useOnDocument(qwikAfterSwapEvent.name, eventQrl)
