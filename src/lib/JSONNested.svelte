<script>
	import JSONArrow from './JSONArrow.svelte';
	import JSONKey from './JSONKey.svelte';
	import { useState } from './utils/context';
	import JsonNestedContent from './JSONNestedContent.svelte';

	export let keys, bracketOpen, bracketClose;
	export let customNotExpanded = false;
	export let previewKeys = keys;
	export let getValue = (key) => key;
	export let isArray = false;
	let expandable = true;

	let expanded;
	let toggleExpand;

	const { isParentExpanded } = useState();
</script>

<li class:indent={$isParentExpanded}>
	<div on:click={toggleExpand}>
		{#if expandable && $isParentExpanded}
			<JSONArrow {expanded} />
		{/if}
		<JSONKey><slot name="key" slot="key" /></JSONKey>
		{#if $isParentExpanded}
			<slot name="label" />
			<span>{bracketOpen}</span>
		{/if}
	</div>

	<JsonNestedContent bind:expanded bind:toggleExpand {keys} {previewKeys} {getValue} {isArray} {customNotExpanded}>
		<slot name="summary" slot="summary" />
		<svelte:fragment slot="key" let:key let:index>
			<slot name="child_key" {key} {index}>{key}:</slot>
		</svelte:fragment>
		<svelte:fragment slot="key_expanded" let:key let:index>
			<slot name="child_key_expanded" {key} {index}><slot name="child_key" {key} {index}>{key}:</slot></slot>
		</svelte:fragment>
		<slot slot="not_expanded" name="not_expanded" />
	</JsonNestedContent>
	{#if $isParentExpanded}
		<span>{bracketClose}</span>
	{/if}
</li>

<style>
	div {
		display: inline-block;
		position: relative;
	}
	.indent {
		padding-left: var(--li-identation);
	}
</style>
