import { cva } from '@/feature/style'

export const dropDown = {
	class: cva({
		base: [
			'dropdown dropdown-hover',
			`hover:mb-[calc(-1*var(--margin))] hover:pb-[var(--margin)]`,
		],
	}),
	style: { '--margin': '1rem' },
}

export const dropDownContent = {
	class: cva({
		base: [
			'menu dropdown-content z-10 w-max rounded-box border-2 border-primary bg-base-100 shadow-lg',
			`mt-[var(--margin)]`,
		],
	}),
	// iOS Safariでドロップダウン内のクリッカブルな要素が反応しない問題の対策
	tabIndex: 0,
}
