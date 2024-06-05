import { component$ } from '@builder.io/qwik'

import type { LatestMusicVideo as Original } from './latest-music-video'
import { latestMusicVideoIFrameClass } from './latest-music-video'

export const LatestMusicVideo: typeof Original = component$(() => {
	return (
		<div class={[latestMusicVideoIFrameClass, `skeleton`]} />
	)
})
