<script>
	import JSONNested from './JSONNested.svelte';

	export let value, nodeType;

	let keys = [];

	$: {
		let result = [];
		let i = 0;
		for (const entry of value) {
			result.push([i++, entry]);
		}
		keys = result;
	}

	function getValue(key) {
		return key[1];
	}
</script>

<JSONNested isArray {keys} {getValue} bracketOpen={'{'} bracketClose={'}'}>
	<svelte:fragment slot="summary">{nodeType}({keys.length})</svelte:fragment>
	<svelte:fragment slot="label">{nodeType}({keys.length})</svelte:fragment>
	<svelte:fragment slot="child_key" let:key>{String(key[0])}:</svelte:fragment>
	<slot name="key" slot="key" />
</JSONNested>
