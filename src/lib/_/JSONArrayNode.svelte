<script lang="ts">
  import JSONNested from './JSONNested.svelte';
  import JSONNode from './JSONNode.svelte';
  import PreviewList from './PreviewList.svelte';

  export let value: Array<unknown>;

  $: keys = Object.getOwnPropertyNames(value);
  $: preview = value.slice(0, 5);
</script>

<JSONNested {keys}>
  <svelte:fragment slot="summary"><span class="label">Array({value.length})</span></svelte:fragment>
  <svelte:fragment slot="preview">
    <PreviewList list={preview} hasMore={preview.length < value.length} prefix="({value.length}) [" postfix="]">
      <svelte:fragment slot="item" let:item>
        <JSONNode value={item} />
      </svelte:fragment>
    </PreviewList>
  </svelte:fragment>
  <svelte:fragment slot="item_key" let:key><span class="property">{String(key)}</span></svelte:fragment>
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
