<script lang="ts">
  import JSONNested from './JSONNested.svelte';
  import JSONNode from './JSONNode.svelte';
  import PreviewList from './PreviewList.svelte';

  export let value: Record<string, unknown>;

  $: keys = Object.getOwnPropertyNames(value);
  $: previewKeys = keys.slice(0, 5);
</script>

<JSONNested {keys}>
  <svelte:fragment slot="summary"><span class="label">{'{…}'}</span></svelte:fragment>
  <svelte:fragment slot="preview">
    <PreviewList list={previewKeys} hasMore={previewKeys.length < keys.length} prefix={'{'} postfix={'}'}>
      <svelte:fragment slot="item" let:item><span class="property">{item}</span><span class="label">{': '}</span><JSONNode value={value[item]} /></svelte:fragment>
    </PreviewList>
  </svelte:fragment>
  <svelte:fragment slot="item_key" let:key><span class="property">{key}</span></svelte:fragment>
  <svelte:fragment slot="item_value" let:key><JSONNode value={value[key]} /></svelte:fragment>
</JSONNested>

<style>
  .label {
    color: var(--label-color);
  }
  .property {
    color: var(--property-color);
  }
</style>
