<script>
	import JSONNested from './JSONNested.svelte';
	import JSONNode from './JSONNode.svelte';
	import PreviewList from './PreviewList.svelte';

	export let value;
	export let expanded;

	$: keys = Object.getOwnPropertyNames(value);
	$: previewKeys = keys.slice(0, 5);
</script>

<JSONNested {keys} {expanded}>
	<svelte:fragment slot="summary">{'{…}'}</svelte:fragment>
	<svelte:fragment slot="preview">
		<PreviewList list={previewKeys} hasMore={previewKeys.length < keys.length} prefix={'{'} postfix={'}'}>
			<svelte:fragment slot="item" let:item>{item}{': '}<JSONNode value={value[item]} /></svelte:fragment>
		</PreviewList>
	</svelte:fragment>
	<svelte:fragment slot="item_key" let:key>{key}</svelte:fragment>
	<svelte:fragment slot="item_value" let:key let:expanded><JSONNode value={value[key]} {expanded} /></svelte:fragment>
</JSONNested>
