import type { Component } from '@builder.io/qwik'

import * as Links from '@/feature/link'

export const globalNavigationContents: {
	name: string
	shortName?: string
	contents: {
		name: string
		shortName?: string
		Link: Component<Links.GlobalNavigationAnchorProps>
	}[]
}[] = [
	{
		name: '推し活支援',
		contents: [
			{
				name: 'イベントカレンダー',
				shortName: 'カレンダー',
				Link: Links.CalendersPageLink,
			},
			{ name: 'SNS', Link: Links.SnsPageLink },
			{ name: 'ショップ', Link: Links.ShopsPageLink },
			{ name: 'ファンメイド', Link: Links.FanMadesPageLink },
		],
	},
	{
		name: 'もっとらぷりを知る',
		shortName: 'らぷりを知る',
		contents: [
			{
				name: 'これまでの歩み',
				shortName: '歩み',
				Link: Links.PendulumsPageLink,
			},
			{ name: '楽曲', Link: Links.SongsPageLink },
			{ name: 'メンバー', Link: Links.MembersPageLink },
			{ name: 'ライブ', Link: Links.LivesPageLink },
		],
	},
]
