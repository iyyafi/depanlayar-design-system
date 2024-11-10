<script context="module" lang="ts">
	import { defineMeta, setTemplate, type Args } from '@storybook/addon-svelte-csf';

	import Pharagraph from '$lib/typograpy/Paragraph.svelte';

	const { Story } = defineMeta({
		title: 'Example/Paragraph',
		component: Pharagraph,
		tags: ['autodocs'],
		args: {
			children: 'Click me'
		},
		argTypes: {
			children: { control: 'text' }
		}
	});
</script>

<script lang="ts">
	setTemplate(template);
</script>

{#snippet template({ children, ...args }: Args<typeof Story>)}
	<Pharagraph {...args}>{children}</Pharagraph>
{/snippet}

<Story name="Default" args={{ variant: 'filled', children: 'Halo di sana' }} />
