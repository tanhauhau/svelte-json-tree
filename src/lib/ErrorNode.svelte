<script>
	import JSONArrow from './JSONArrow.svelte';
	import JSONNode from './JSONNode.svelte';
	import JSONKey from './JSONKey.svelte';
	import { writable } from 'svelte/store';
	import { useState } from './utils/context';

	export let key, value;
	const expanded = writable(false);

	$: stack = value.stack.split('\n');

	const { isParentExpanded } = useState();

	$: if (!$isParentExpanded) {
		$expanded = false;
	}

	function toggleExpand() {
		$expanded = !$expanded;
	}
</script>

<li class:indent={$isParentExpanded}>
	{#if $isParentExpanded}
		<JSONArrow on:click={toggleExpand} />
	{/if}
	<JSONKey {key} />
	<span on:click={toggleExpand}>Error: {$expanded ? '' : value.message}</span>
	{#if $isParentExpanded}
		<ul class:collapse={!$expanded}>
			{#if $expanded}
				<JSONNode key="message" value={value.message} />
				<li>
					<JSONKey key="stack" />
					<span>
						{#each stack as line, index}
							<span class:indent={index > 0}>{line}</span><br />
						{/each}
					</span>
				</li>
			{/if}
		</ul>
	{/if}
</li>

<style>
	li {
		user-select: text;
		word-wrap: break-word;
		word-break: break-all;
	}
	.indent {
		padding-left: var(--li-identation);
	}
	.collapse {
		--li-display: inline;
		display: inline;
		font-style: italic;
	}
</style>
