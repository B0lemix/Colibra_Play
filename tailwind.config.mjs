/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	darkMode:'class',
	theme: {
		extend: {
			fontFamily: {
				workSans: ["WorkSans", "sans-serif"],
			},
			width: {
				96: '24rem',
			  },
		}
	},
	plugins: [],
}
