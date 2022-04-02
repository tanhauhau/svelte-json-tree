<script>
	import { useState } from './utils/context';
	import JSONNested from './JSONNested.svelte';

	export let value;

	useState({ isParentArray: false });

	$: keys = Object.getOwnPropertyNames(value);

	function getValue(key) {
		return value[key];
	}
</script>

<JSONNested {keys} previewKeys={keys} {getValue} bracketOpen={'{'} bracketClose={'}'}>
	<svelte:fragment slot="summary">{'{…}'}</svelte:fragment>
	<slot name="key" slot="key" />
</JSONNested>
