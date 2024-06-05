import type { HTMLAttributes } from '@builder.io/qwik'
import { component$, Slot } from '@builder.io/qwik'

export type GlobalNavigationAnchorProps = Omit<
	HTMLAttributes<HTMLAnchorElement>,
	'href'
>

export const CalendersPageLink = component$<GlobalNavigationAnchorProps>(
	(props) => {
		return (
			<a href="/calenders" {...props}>
				<Slot />
			</a>
		)
	},
)

export const SnsPageLink = component$<GlobalNavigationAnchorProps>((props) => {
	return (
		<a href="/sns" {...props}>
			<Slot />
		</a>
	)
})

export const ShopsPageLink = component$<GlobalNavigationAnchorProps>(
	(props) => {
		return (
			<a href="/shops" {...props}>
				<Slot />
			</a>
		)
	},
)

export const MembersPageLink = component$<GlobalNavigationAnchorProps>(
	(props) => {
		return (
			<a href="/members" {...props}>
				<Slot />
			</a>
		)
	},
)

export const PendulumsPageLink = component$<GlobalNavigationAnchorProps>(
	(props) => {
		return (
			<a href="/pendulums" {...props}>
				<Slot />
			</a>
		)
	},
)

export const SongsPageLink = component$<GlobalNavigationAnchorProps>(
	(props) => {
		return (
			<a href="/songs" {...props}>
				<Slot />
			</a>
		)
	},
)

export const LivesPageLink = component$<GlobalNavigationAnchorProps>(
	(props) => {
		return (
			<a href="/lives" {...props}>
				<Slot />
			</a>
		)
	},
)

export const FanMadesPageLink = component$<GlobalNavigationAnchorProps>(
	(props) => {
		return (
			<a href="/fanmades" {...props}>
				<Slot />
			</a>
		)
	},
)
