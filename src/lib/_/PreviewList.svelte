<script lang="ts">
	export let list: Array<unknown>;
	export let hasMore: boolean;
	export let prefix: string = undefined;
	export let postfix: string = undefined;
</script>

{#if prefix}<span>{prefix}</span>{/if}
{#each list as item, index}
	<slot name="item" {item} {index} />
	{#if index < list.length - 1}
		<span class="comma">,</span>
	{/if}
{/each}
{#if hasMore}
	<span class="comma">,</span>
	<span>…</span>
{/if}
{#if postfix}<span>{postfix}</span>{/if}

<style>
	.comma {
		margin-left: -0.5em;
		margin-right: 0.5em;
	}
</style>
