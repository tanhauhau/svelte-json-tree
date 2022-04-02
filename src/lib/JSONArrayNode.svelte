<script>
	import JSONNested from './JSONNested.svelte';

	export let value;
	const filteredKey = new Set(['length']);

	$: keys = Object.getOwnPropertyNames(value);
	$: previewKeys = keys.filter((key) => !filteredKey.has(key));

	function getValue(key) {
		return value[key];
	}
</script>

<JSONNested isArray {keys} {getValue} {previewKeys} bracketOpen="[" bracketClose="]">
	<svelte:fragment slot="summary">Array({value.length})</svelte:fragment>
	<svelte:fragment slot="label">({value.length})</svelte:fragment>
	<slot name="key" slot="key" />
</JSONNested>
