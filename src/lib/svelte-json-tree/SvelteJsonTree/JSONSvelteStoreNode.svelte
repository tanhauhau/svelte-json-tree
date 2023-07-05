<script lang="ts">
  import JSONNested from './JSONNested.svelte';
  import JSONNode from './JSONNode.svelte';
  import PreviewList from './PreviewList.svelte';
  import type { Writable, Readable } from 'svelte/store';

  export let value: Writable<unknown> | Readable<unknown>;

  const STORE_VALUE = '$value';

  $: objectKeys = Object.getOwnPropertyNames(value);
  $: keys = [STORE_VALUE, ...objectKeys];
  $: previewKeys = objectKeys.slice(0, 5);

  $: storeValue = $value;
  $: isWritableStore = typeof (value as Writable<unknown>).set === 'function';

  function getValue(key: string) {
    if (key === STORE_VALUE) return storeValue;
    return value[key];
  }
</script>

<JSONNested {keys}>
  <svelte:fragment slot="summary"
    ><span class="label">{isWritableStore ? 'writable(' : 'readable('}<JSONNode value={storeValue} />{')'}</span></svelte:fragment
  >
  <svelte:fragment slot="preview" let:root>
    <PreviewList list={previewKeys} hasMore={previewKeys.length < objectKeys.length} prefix={'{'} postfix={'}'} {root}>
      <svelte:fragment slot="item" let:item
        ><span class="property">{item}</span><span class="operator">{': '}</span><JSONNode value={value[item]} /></svelte:fragment
      >
    </PreviewList>
  </svelte:fragment>
  <svelte:fragment slot="item_key" let:key><span class={key === STORE_VALUE ? 'internal' : 'property'}>{key}</span></svelte:fragment>
  <svelte:fragment slot="item_value" let:key>
    <JSONNode value={getValue(key)} />
  </svelte:fragment>
</JSONNested>
