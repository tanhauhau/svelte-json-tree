<script lang="ts">
  import { useState } from './utils/context';
  import JSONNested from './JSONNested.svelte';
  import JSONNode from './JSONNode.svelte';
  import PreviewList from './PreviewList.svelte';

  export let value: Map<unknown, unknown>;
  useState();

  let indexes = [];
  let keys = [];
  let values = [];

  $: {
    let _indexes = [];
    let _keys = [];
    let _values = [];
    let i = 0;
    for (const entry of value) {
      _indexes.push(i++);
      _keys.push(entry[0]);
      _values.push(entry[1]);
    }
    indexes = _indexes;
    keys = _keys;
    values = _values;
  }
  $: previewKeys = Array.from(value.keys()).slice(0, 5);

  const ENTRIES = '[[Entries]]';
</script>

<JSONNested keys={[ENTRIES, 'size']} shouldShowColon={(key) => key !== ENTRIES}>
  <svelte:fragment slot="summary"><span color="label">Map({keys.length})</span></svelte:fragment>
  <svelte:fragment slot="preview" let:root>
    <PreviewList list={previewKeys} hasMore={previewKeys.length < value.size} label={`Map(${keys.length}) `} prefix={`{`} postfix="}" {root}>
      <svelte:fragment slot="item" let:item>
        <JSONNode value={item} /><span class="operator">{' => '}</span><JSONNode value={value.get(item)} />
      </svelte:fragment>
    </PreviewList>
  </svelte:fragment>

  <svelte:fragment slot="item_key" let:key><span class={key === ENTRIES ? 'internal' : 'property'}>{key}</span></svelte:fragment>
  <svelte:fragment slot="item_value" let:key>
    {#if key === ENTRIES}<JSONNested keys={indexes} expandKey={(index) => keys[index]} defaultExpanded>
        <svelte:fragment slot="item_key" let:key={index}><span class="property">{index}</span></svelte:fragment>
        <svelte:fragment slot="item_value" let:key={index}>
          <JSONNested keys={['key', 'value']}>
            <svelte:fragment slot="preview"
              ><span class="operator">{'{ '}</span><JSONNode value={keys[index]} /><span class="operator">{' => '}</span><JSONNode
                value={values[index]}
              /><span class="operator">{' }'}</span></svelte:fragment
            >
            <svelte:fragment slot="item_key" let:key={name}><span class="property">{name}</span></svelte:fragment>
            <svelte:fragment slot="item_value" let:key={name}
              ><JSONNode value={name === 'key' ? keys[index] : values[index]} /></svelte:fragment
            >
          </JSONNested>
        </svelte:fragment>
      </JSONNested>
    {:else}
      <JSONNode value={value[key]} />
    {/if}
  </svelte:fragment>
</JSONNested>
