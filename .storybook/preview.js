/** @type { import('@storybook/svelte').Preview } */
import '../src/lib/app.css';
import { withThemeByDataAttribute } from '@storybook/addon-themes';

const preview = {
    parameters: {
		controls: {
			matchers: {
				color: /(background|color)$/i,
				date: /Date$/i
			}
		}
	},

    tags: ['autodocs']
};

export const decorators = [
	withThemeByDataAttribute({
		themes: {
			light: 'light',
			dark: 'dark'
		},
		defaultTheme: 'light',
		attributeName: 'data-mode'
	})
];

export default preview;
