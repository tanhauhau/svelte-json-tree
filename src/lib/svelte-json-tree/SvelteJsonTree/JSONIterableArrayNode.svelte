<script lang="ts">
  import JSONNested from './JSONNested.svelte';
  import JSONNode from './JSONNode.svelte';
  import PreviewList from './PreviewList.svelte';

  export let value: Iterable<unknown>;
  export let nodeType: string;

  let indexes = [];
  let items = [];

  $: {
    let _indexes = [];
    let _items = [];
    let i = 0;
    for (const entry of value) {
      _indexes.push(i++);
      _items.push(entry);
    }
    indexes = _indexes;
    items = _items;
  }
  $: previewItems = items.slice(0, 5);

  const ENTRIES = '[[Entries]]';
</script>

<JSONNested keys={[ENTRIES, 'size']} shouldShowColon={(key) => key !== ENTRIES}>
  <svelte:fragment slot="summary"><span class="label">{nodeType}({indexes.length})</span></svelte:fragment>
  <svelte:fragment slot="preview" let:root>
    <PreviewList list={previewItems} hasMore={previewItems.length < items.length} label={`${nodeType}(${indexes.length}) `} prefix={'{'} postfix="}" {root}>
      <svelte:fragment slot="item" let:item>
        <JSONNode value={item} />
      </svelte:fragment>
    </PreviewList>
  </svelte:fragment>

  <svelte:fragment slot="item_key" let:key><span class={key === ENTRIES ? 'internal' : 'property'}>{key}</span></svelte:fragment>
  <svelte:fragment slot="item_value" let:key>
    {#if key === ENTRIES}
      <JSONNested keys={indexes} defaultExpanded>
        <svelte:fragment slot="item_key" let:key={index}><span class="property">{index}</span></svelte:fragment>
        <svelte:fragment slot="item_value" let:key={index}><JSONNode value={items[index]} /></svelte:fragment>
      </JSONNested>
    {:else}
      <JSONNode value={value[key]} />
    {/if}
  </svelte:fragment>
</JSONNested>
