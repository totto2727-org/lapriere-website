/* eslint-disable ts/no-var-requires */
/* eslint-disable ts/no-require-imports */

/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {},
	},
	plugins: [
		require('daisyui'),
		require('@iconify/tailwind').addDynamicIconSelectors(),
		require('@tailwindcss/container-queries'),
		require('@tailwindcss/typography'),
	],
}
