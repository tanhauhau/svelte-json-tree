<script>
	import JSONNode from './JSONNode.svelte';
	import { writable } from 'svelte/store';
	import { useState } from './utils/context';

	export let keys;
	export let previewKeys = keys;
	export let getValue;
	export let isArray;
	export let customNotExpanded;

	export const expanded = writable(false);

	const { isParentExpanded } = useState({
		isParentExpanded: expanded,
		isParentArray: isArray
	});

	$: slicedKeys = previewKeys.slice(0, 5);

	$: if (!$isParentExpanded) {
		$expanded = false;
	}

	export function toggleExpand() {
		$expanded = !$expanded;
	}

	function expand() {
		$expanded = true;
	}
</script>

<ul class:collapse={!$expanded} on:click={expand}>
	{#if !$isParentExpanded}
		<slot name="summary" />
	{:else if !$expanded}
		{#if customNotExpanded}
			<slot name="not_expanded" />
		{:else}
			{#each slicedKeys as key, index}
				<JSONNode value={getValue(key)}>
					<svelte:fragment slot="key"><slot name="key" {key} {index} /></svelte:fragment>
				</JSONNode>
				{#if !$expanded && index < previewKeys.length - 1}
					<span class="comma">,</span>
				{/if}
			{/each}
			{#if slicedKeys.length < previewKeys.length}
				<span>…</span>
			{/if}
		{/if}
	{:else}
		{#each keys as key, index}
			<JSONNode value={getValue(key)}>
				<svelte:fragment slot="key"><slot name="key_expanded" {key} {index} /></svelte:fragment>
			</JSONNode>
			{#if !$expanded && index < previewKeys.length - 1}
				<span class="comma">,</span>
			{/if}
		{/each}
	{/if}
</ul>

<style>
	.collapse {
		--li-display: inline;
		display: inline;
		font-style: italic;
	}
	.comma {
		margin-left: -0.5em;
		margin-right: 0.5em;
	}
</style>
