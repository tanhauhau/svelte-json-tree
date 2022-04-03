<script>
	import JSONArrow from './JSONArrow.svelte';
	import JSONNode from './JSONNode.svelte';
	import { useState } from './utils/context';
	import { useExpand } from './utils/expand';
	import { writable } from 'svelte/store';
	import Summary from './Summary.svelte';

	export let keys;
  export let shouldShowColon = undefined;

	export let defaultExpanded = false;
	export let expanded = writable(defaultExpanded);
	const { isParentExpanded, displayMode, root } = useState({
		isParentExpanded: expanded,
		root: false
	});
	const { toggleExpand } = useExpand(isParentExpanded, expanded, defaultExpanded);

	$: child_expanded = keys.map(() => writable(false));
</script>

<span class="root" on:click={toggleExpand}>
	{#if root}
		<JSONArrow {expanded} />
	{/if}
	{#if displayMode === 'summary'}
		<slot name="summary" />
	{:else}
		<Summary>
			<slot name="preview" />
		</Summary>
	{/if}
</span>

{#if $expanded}
	<ul on:click|stopPropagation={toggleExpand}>
		{#each keys as key, index}
			<li class:indent={$expanded} on:click|stopPropagation={() => {}}>
				<span class="label"><JSONArrow expanded={child_expanded[index]} /><slot name="item_key" {key} {index} />{!shouldShowColon || shouldShowColon(key) ? ':': ''}</span>
				<slot name="item_value" {key} {index} expanded={child_expanded[index]} />
			</li>
		{/each}
	</ul>
{/if}

<style>
	.root {
		display: inline-block;
		position: relative;
	}
	.indent {
		padding-left: var(--li-identation);
	}
	.label {
		color: var(--label-color);
		position: relative;
	}
</style>
