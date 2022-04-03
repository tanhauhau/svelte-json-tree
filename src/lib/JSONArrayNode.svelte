<script>
	import JSONNested from './JSONNested.svelte';
	import JSONNode from './JSONNode.svelte';
	import PreviewList from './PreviewList.svelte';

	export let value;
	export let expanded;

	$: keys = Object.getOwnPropertyNames(value);
	$: preview = value.slice(0, 5);
</script>

<JSONNested {keys} {expanded}>
	<svelte:fragment slot="summary">Array({value.length})</svelte:fragment>
	<svelte:fragment slot="preview">
		<PreviewList list={preview} hasMore={preview.length < value.length} prefix="({value.length}) [" postfix="]">
			<svelte:fragment slot="item" let:item>
				<JSONNode value={item} />
			</svelte:fragment>
		</PreviewList>
	</svelte:fragment>
	<svelte:fragment slot="item_key" let:key>{String(key)}</svelte:fragment>
	<svelte:fragment slot="item_value" let:key let:expanded><JSONNode value={value[key]} {expanded} /></svelte:fragment>
</JSONNested>
