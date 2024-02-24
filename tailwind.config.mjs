/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			backgroundImage: {
        'colors': "url('/bg-colors.webp')",
      },
			textColor: {
				'primary': '#e9e9e9',
				'secondary': '#bfbdb6', 
			},
			backgroundColor: {
				'primary': '#121112',
				'secondary': '#1a191a',
				'tertiary': '#bfbdb6',
				'orange-primary': '#f3b029',
			},
			boxShadowColor: {
				primary: '#222122',	
			},
			ringColor: {
				'orange-primary': '#f3b029',
			},
		},
	},
	plugins: [],
}
