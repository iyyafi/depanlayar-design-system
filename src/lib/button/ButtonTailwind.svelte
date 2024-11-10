<script lang="ts">
	import type { Snippet } from 'svelte';

	interface Props {
		primary: boolean;
		backgroundColor?: string;
		size: 'small' | 'medium' | 'large';
		onClick?: () => void;
		children: Snippet;
	}

	const { primary = false, backgroundColor, size = 'medium', children, onClick }: Props = $props();
</script>

<button
	type="button"
	class={[
		'rounded-full py-2 px-5 shadow',
		...(primary
			? ['text-white dark:text-zinc-900 bg-sky-600 dark:bg-sky-200']
			: ['text-white dark:text-zinc-900 bg-orange-600 dark:bg-orange-200'])
	].join(' ')}
	style:background-color={backgroundColor}
	onclick={onClick}
>
	{@render children()}
</button>
