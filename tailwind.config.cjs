const defaultTheme = require('tailwindcss/defaultTheme');

/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				serif: ['Quicksand Variable', ...defaultTheme.fontFamily.sans],
			},
			screens: {
				mobile: { max: '767px' },
			},
		},
	},
	plugins: [require('daisyui')],
	daisyui: {
		themes: ['light', 'dark'],
	},
};
