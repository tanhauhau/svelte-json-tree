<script>
	import JSONNested from './JSONNested.svelte';
	import JsonNode from './JSONNode.svelte';
	import { useState } from './utils/context';

	export let value;

	const keys = ['key', 'value'];

	const { isParentExpanded } = useState({ isParentArray: false });
</script>

<JSONNested {keys} customNotExpanded bracketOpen={$isParentExpanded ? 'Entry {' : '{'} bracketClose={'}'}>
	<svelte:fragment slot="summary"><JsonNode value={value.value} /></svelte:fragment>
	<svelte:fragment slot="key">
		{#if isParentExpanded}<slot name="key" />{:else}{value.key}{/if}
	</svelte:fragment>
	<svelte:fragment slot="not_expanded">
		<JsonNode value={value.key} /> => <JsonNode value={value.value} />
	</svelte:fragment>
</JSONNested>
