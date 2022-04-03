<script>
	import JSONArrow from './JSONArrow.svelte';
	import { useState } from './utils/context';
	import { useExpand } from './utils/expand';
	import { writable } from 'svelte/store';
	import Summary from './Summary.svelte';
	import Expandable from './Expandable.svelte';

	export let keys;
	export let shouldShowColon = undefined;

	export let defaultExpanded = false;
	const { isParentExpanded, displayMode, root, expanded, expandable } = useState({ root: false }, { expandable: true });
	$expandable = true;
	let toggleExpand;
	if (displayMode !== 'summary') {
		({ toggleExpand } = useExpand(isParentExpanded, expanded, defaultExpanded, keys));
	}
	$: child_expanded = keys.map(() => writable(false));
</script>

{#if displayMode === 'summary'}
	<slot name="summary" />
{:else}
	<span class="root" on:click={toggleExpand}>
		{#if root}
			<JSONArrow {expanded} />
		{/if}
		<Summary>
			<slot name="preview" />
		</Summary>
	</span>

	{#if $expanded}
		<ul on:click|stopPropagation={toggleExpand}>
			{#each keys as key, index}
				<li class:indent={$expanded} on:click|stopPropagation={() => {}}>
					<Expandable expanded={child_expanded[index]}>
						<span class="label" on:click={() => child_expanded[index].update((value) => !value)}>
							<JSONArrow /><slot name="item_key" {key} {index} />{!shouldShowColon || shouldShowColon(key) ? ':' : ''}
						</span><slot name="item_value" {key} {index} />
					</Expandable>
				</li>
			{/each}
		</ul>
	{/if}
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
