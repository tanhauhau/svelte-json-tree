<script lang="ts">
	import type { Writable } from 'svelte/store';

	export let expanded: Writable<boolean>;
</script>

{#if $expanded !== undefined}
	<div
		class="container"
		on:click={(event) => {
			event.stopPropagation();
			$expanded = !$expanded;
		}}
	>
		<div class="arrow" class:expanded={$expanded}>{'\u25B6'}</div>
	</div>
{/if}

<style>
	.container {
		display: inline-block;
		transform: translate(calc(0px - var(--li-identation)), -50%);
		position: absolute;
		top: 50%;
		padding-right: 100%;
	}
	.arrow {
		transform-origin: 25% 50%;
		position: relative;
		line-height: 1.1em;
		font-size: 0.75em;
		margin-left: 0;
		transition: 150ms;
		color: var(--arrow-sign);
		user-select: none;
		font-family: 'Courier New', Courier, monospace;
	}
	.expanded {
		transform: rotateZ(90deg) translateX(-3px);
	}
</style>
