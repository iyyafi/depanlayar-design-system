<script>
	/**
	 * @typedef {Object} Props
	 * @property {boolean} [primary] Is this the principal call to action on the page?
	 * @property {string} [backgroundColor] What background color to use
	 * @property {'small' | 'medium' | 'large'} [size] How large should the button be?
	 * @property {string} label Button contents
	 * @property {() => void} [onClick] The onclick event handler
	 */

	/** @type {Props} */
	const { primary = false, backgroundColor, size = 'medium', label, onClick } = $props();
</script>

<button
	type="button"
	class={[
		'rounded-full py-2 px-5',
		...(primary
			? ['text-white dark:text-zinc-900 bg-sky-600 dark:bg-sky-200']
			: ['text-white dark:text-zinc-900 bg-orange-600 dark:bg-orange-200'])
	].join(' ')}
	style:background-color={backgroundColor}
	onclick={onClick}
>
	{label}
</button>
