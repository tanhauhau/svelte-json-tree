<script>
	import JSONNested from './JSONNested.svelte';
	import JSONNode from './JSONNode.svelte';
	import PreviewList from './PreviewList.svelte';

	export let value, nodeType;
	export let expanded;

	let indexes = [];
	let items = [];

	$: {
		let _indexes = [];
		let _items = [];
		let i = 0;
		for (const entry of value) {
			_indexes.push(i++);
			_items.push(entry);
		}
		indexes = _indexes;
		items = _items;
	}
	$: previewItems = items.slice(0, 5);

	const ENTRIES = '[[Entries]]';
</script>

<JSONNested keys={[ENTRIES, 'size']} {expanded} shouldShowColon={(key) => key !== ENTRIES}>
	<svelte:fragment slot="summary">{nodeType}({indexes.length})</svelte:fragment>
	<svelte:fragment slot="preview">
		<PreviewList list={previewItems} hasMore={previewItems.length < items.length} prefix={`${nodeType}(${indexes.length}) {`} postfix="}">
			<svelte:fragment slot="item" let:item>
				<JSONNode value={item} />
			</svelte:fragment>
		</PreviewList>
	</svelte:fragment>

	<svelte:fragment slot="item_key" let:key><span class:label={key === ENTRIES}>{key}</span></svelte:fragment>
	<svelte:fragment slot="item_value" let:key let:expanded>
		{#if key === ENTRIES}
			<JSONNested keys={indexes} defaultExpanded {expanded}>
				<svelte:fragment slot="item_key" let:key={index}>{index}</svelte:fragment>
				<svelte:fragment slot="item_value" let:key={index} let:expanded><JSONNode value={items[index]} {expanded} /></svelte:fragment>
			</JSONNested>
		{:else}
			<JSONNode value={value[key]} {expanded} />
		{/if}
	</svelte:fragment>
</JSONNested>

<style>
	.label {
		color: grey;
	}
</style>
