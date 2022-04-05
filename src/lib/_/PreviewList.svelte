<script lang="ts">
  export let list: Array<unknown>;
  export let hasMore: boolean;
  export let prefix: string = undefined;
  export let postfix: string = undefined;
</script>

{#if prefix}<span class="label">{prefix}</span>{/if}
{#each list as item, index}
  <slot name="item" {item} {index} />
  {#if index < list.length - 1}
    <span class="comma">,</span>
  {/if}
{/each}
{#if hasMore}
  <span class="comma">,</span>
  <span class="label">…</span>
{/if}
{#if postfix}<span class="label">{postfix}</span>{/if}

<style>
  .comma {
    margin-left: -0.5em;
    margin-right: 0.5em;
    color: var(--label-color);
  }
  .label {
    color: var(--label-color);
  }
</style>
