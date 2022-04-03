<script lang="ts">
	import { useState } from './utils/context';
	import JSONNested from './JSONNested.svelte';
	import JSONNode from './JSONNode.svelte';
	import PreviewList from './PreviewList.svelte';

	export let value: Iterable<unknown>;
	useState();

	let indexes = [];
	let keys = [];
	let values = [];

	$: {
		let _indexes = [];
		let _keys = [];
		let _values = [];
		let i = 0;
		for (const entry of value) {
			_indexes.push(i++);
			_keys.push(entry[0]);
			_values.push(entry[1]);
		}
		indexes = _indexes;
		keys = _keys;
		values = _values;
	}
	$: previewKeys = Array.from(value.keys()).slice(0, 5);

	const ENTRIES = '[[Entries]]';
</script>

<JSONNested keys={[ENTRIES, 'size']} shouldShowColon={(key) => key !== ENTRIES}>
	<svelte:fragment slot="summary">Map({keys.length})</svelte:fragment>
	<svelte:fragment slot="preview">
		<PreviewList list={previewKeys} hasMore={previewKeys.length < value.size} prefix={`Map(${keys.length}) {`} postfix="}">
			<svelte:fragment slot="item" let:item>
				<JSONNode value={item} />{' => '}<JSONNode value={value.get(item)} />
			</svelte:fragment>
		</PreviewList>
	</svelte:fragment>

	<svelte:fragment slot="item_key" let:key><span class:label={key === ENTRIES}>{key}</span></svelte:fragment>
	<svelte:fragment slot="item_value" let:key>
		{#if key === ENTRIES}<JSONNested keys={indexes} defaultExpanded>
				<svelte:fragment slot="item_key" let:key={index}>{index}</svelte:fragment>
				<svelte:fragment slot="item_value" let:key={index}>
					<JSONNested keys={['key', 'value']}>
						<svelte:fragment slot="preview"
							>{'{ '}<JSONNode value={keys[index]} />{' => '}<JSONNode value={values[index]} />{' }'}</svelte:fragment
						>
						<svelte:fragment slot="item_key" let:key={name}>{name}</svelte:fragment>
						<svelte:fragment slot="item_value" let:key={name}
							><JSONNode value={name === 'key' ? keys[index] : values[index]} /></svelte:fragment
						>
					</JSONNested>
				</svelte:fragment>
			</JSONNested>
		{:else}
			<JSONNode value={value[key]} />
		{/if}
	</svelte:fragment>
</JSONNested>

<style>
	.label {
		color: var(--internal-color);
	}
</style>
