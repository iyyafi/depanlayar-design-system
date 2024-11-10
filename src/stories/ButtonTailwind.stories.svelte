<script module>
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';
	import ButtonTailwind from '$lib/button/ButtonTailwind.svelte';
	import { fn } from '@storybook/test';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Example/Button Tailwind',
		component: ButtonTailwind,
		tags: ['autodocs'],
		argTypes: {
			children: { control: 'text' },
			backgroundColor: { control: 'color' },
			size: {
				control: { type: 'select' },
				options: ['small', 'medium', 'large']
			}
		},
		args: {
			children: 'Click me',
			onClick: fn()
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template({ children, ...args }: Args<typeof Story>)}
	<ButtonTailwind primary={false} size="medium" {...args}>{children}</ButtonTailwind>
{/snippet}

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Primary" args={{ primary: true, children: 'Button' }} />

<Story name="Secondary" args={{ children: 'Button' }} />

<Story name="Large" args={{ size: 'large', children: 'Button' }} />

<Story name="Small" args={{ size: 'small', children: 'Button' }} />
