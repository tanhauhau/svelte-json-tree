<script lang="ts">
  import { useState } from './utils/context';

  export let value: string;

  const map = {
    '\n': '\\n',
    '\t': '\\t',
    '\r': '\\r',
  };

  $: serialised = value.replace(/[\n\t\r]/g, (_: string) => map[_]);

  const { displayMode } = useState();
</script>

{#if displayMode === 'summary'}
  <span>"{serialised.slice(0, 30) + (serialised.length > 30 ? '…' : '')}"</span>
{:else}
  <span>"{serialised}"</span>
{/if}

<style>
  span {
    color: var(--string-color);
    word-break: break-all;
    word-wrap: break-word;
  }
</style>
