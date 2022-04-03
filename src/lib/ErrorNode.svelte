<script>
	import ErrorStack from './ErrorStack.svelte';
	import JsonNested from './JSONNested.svelte';
	import JSONNode from './JSONNode.svelte';

	export let value;

	$: stack = value.stack.split('\n');
</script>

<JsonNested keys={['message', 'stack']}>
	<svelte:fragment slot="summary">Error: {String(value.message)}</svelte:fragment>
	<svelte:fragment slot="preview">Error: {String(value.message)}</svelte:fragment>
	<svelte:fragment slot="item_key" let:key>{key}</svelte:fragment>
	<svelte:fragment slot="item_value" let:key>
		{#if key === 'stack'}
			<ErrorStack {stack} />
		{:else}
			<JSONNode value={value[key]} />
		{/if}
	</svelte:fragment>
</JsonNested>
