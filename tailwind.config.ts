import containerQueries from '@tailwindcss/container-queries';
import forms from '@tailwindcss/forms';
import typography from '@tailwindcss/typography';
import type { Config } from 'tailwindcss';

export default {
	content: ['./src/**/*.{html,js,svelte,ts}'],

	darkMode: ['class', '[data-mode="dark"]'],

	theme: {
		extend: {}
	},

	plugins: [typography, forms, containerQueries]
} as Config;
