<script>
	import JSONNested from './JSONNested.svelte';
	import JSONNode from './JSONNode.svelte';
	import PreviewList from './PreviewList.svelte';

	export let value;

	const STORE_VALUE = '$value';

	$: objectKeys = Object.getOwnPropertyNames(value);
	$: keys = [STORE_VALUE, ...objectKeys];
	$: previewKeys = objectKeys.slice(0, 5);

	$: storeValue = $value;
	$: isWritableStore = typeof value.set === 'function';

	function getValue(key) {
		if (key === STORE_VALUE) return storeValue;
		return value[key];
	}
</script>

<JSONNested {keys}>
	<svelte:fragment slot="summary">{isWritableStore ? 'writable(' : 'readable('}<JSONNode value={storeValue} />{')'}</svelte:fragment>
	<svelte:fragment slot="preview">
		<PreviewList list={previewKeys} hasMore={previewKeys.length < objectKeys.length} prefix={'{'} postfix={'}'}>
			<svelte:fragment slot="item" let:item>{item}{': '}<JSONNode value={value[item]} /></svelte:fragment>
		</PreviewList>
	</svelte:fragment>
	<svelte:fragment slot="item_key" let:key><span class:label={key === STORE_VALUE}>{key}</span></svelte:fragment>
	<svelte:fragment slot="item_value" let:key>
		<JSONNode value={getValue(key)} />
	</svelte:fragment>
</JSONNested>

<style>
	.label {
		color: var(--internal-color);
	}
</style>
