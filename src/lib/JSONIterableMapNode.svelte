<script>
	import { useState } from './utils/context';

	import JSONNested from './JSONNested.svelte';
	import MapEntry from './utils/MapEntry';
	import JsonNode from './JSONNode.svelte';

	export let value;
	useState({ isParentArray: false });

	let keys = [];

	$: {
		let result = [];
		let i = 0;
		for (const entry of value) {
			result.push([i++, new MapEntry(entry[0], entry[1])]);
		}
		keys = result;
	}

	function getValue(entry) {
		return entry[1];
	}
</script>

<JSONNested {keys} {getValue} bracketOpen={'{'} bracketClose={'}'}>
	<svelte:fragment slot="summary">Map({keys.length})</svelte:fragment>
	<svelte:fragment slot="label">Map({keys.length})</svelte:fragment>
	<svelte:fragment slot="child_key" let:key><JsonNode value={key[1].key} />{' =>'}</svelte:fragment>
	<svelte:fragment slot="child_key_expanded" let:key>{key[0]}:</svelte:fragment>
	<slot name="key" slot="key" />
</JSONNested>
