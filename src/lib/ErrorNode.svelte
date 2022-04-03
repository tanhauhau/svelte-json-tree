<script>
	import ErrorStack from './ErrorStack.svelte';
	import JsonNested from './JSONNested.svelte';
	import JSONNode from './JSONNode.svelte';

	export let value;
	export let expanded;

	$: stack = value.stack.split('\n');
</script>

<JsonNested keys={['message', 'stack']} {expanded}>
	<svelte:fragment slot="summary">Error: {String(value.message)}</svelte:fragment>
	<svelte:fragment slot="preview">Error: {String(value.message)}</svelte:fragment>
	<svelte:fragment slot="item_key" let:key>{key}</svelte:fragment>
	<svelte:fragment slot="item_value" let:key let:expanded>
		{#if key === 'stack'}
			<ErrorStack {stack} {expanded} />
		{:else}
			<JSONNode value={value[key]} {expanded} />
		{/if}
	</svelte:fragment>
</JsonNested>
