<script lang="ts">
  import JSONNested from './JSONNested.svelte';
  import JSONNode from './JSONNode.svelte';

  export let value: RegExp;

  $: str = value.toString();

  const keys = ['lastIndex', 'dotAll', 'flags', 'global', 'hasIndices', 'ignoreCase', 'multiline', 'source', 'sticky', 'unicode'];
</script>

<JSONNested {keys}>
  <svelte:fragment slot="summary"><span class="regex">{str}</span></svelte:fragment>
  <svelte:fragment slot="preview"><span class="regex">{str}</span></svelte:fragment>
  <svelte:fragment slot="item_key" let:key><span class="internal">{String(key)}</span></svelte:fragment>
  <svelte:fragment slot="item_value" let:key><JSONNode value={value[key]} /></svelte:fragment>
</JSONNested>

<style>
  .regex {
    color: var(--regex-color);
  }
</style>
