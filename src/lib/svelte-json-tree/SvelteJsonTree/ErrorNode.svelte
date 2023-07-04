<script lang="ts">
  import ErrorStack from './ErrorStack.svelte';
  import JsonNested from './JSONNested.svelte';
  import JSONNode from './JSONNode.svelte';

  export let value: Error;

  $: stack = value.stack.split('\n');
</script>

<JsonNested keys={['message', 'stack']}>
  <svelte:fragment slot="summary"><span class="label">Error: {String(value.message)}</span></svelte:fragment>
  <svelte:fragment slot="preview"><span class="label">Error: {String(value.message)}</span></svelte:fragment>
  <svelte:fragment slot="item_key" let:key><span class="property">{key}</span></svelte:fragment>
  <svelte:fragment slot="item_value" let:key>
    {#if key === 'stack'}
      <ErrorStack {stack} />
    {:else}
      <JSONNode value={value[key]} />
    {/if}
  </svelte:fragment>
</JsonNested>
