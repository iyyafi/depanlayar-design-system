<script module>
	import { defineMeta } from '@storybook/addon-svelte-csf';
	import Pharagraph from '../lib/typograpy/Paragraph.svelte';

	// More on how to set up stories at: https://storybook.js.org/docs/writing-stories
	const { Story } = defineMeta({
		title: 'Example/Paragraph',
		component: Pharagraph
	});
</script>

<!-- More on writing stories with args: https://storybook.js.org/docs/writing-stories/args -->
<Story name="Default">ASDASDasd</Story>
