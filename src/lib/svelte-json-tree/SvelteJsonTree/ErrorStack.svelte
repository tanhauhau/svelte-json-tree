<script lang="ts">
  import JsonNode from './JSONNode.svelte';
  import { useState } from './utils/context';

  export let stack: string[];
  const { expanded, expandable } = useState();
  $expandable = true;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events a11y-no-static-element-interactions -->
<span on:click={() => ($expanded = !$expanded)}>
  {#if $expanded}
    {#each stack as line, index}
      {@const appendNewLine = index < stack.length - 1}
      <span class:indent={index > 0}><JsonNode value={line + (appendNewLine ? '\\n' : '')} /><span class="operator">{appendNewLine ? ' +' : ''}</span></span><br />
    {/each}
  {:else}
    <span><JsonNode value={stack[0] + '…'} /></span>
  {/if}
</span>

<style>
  .indent {
    padding-left: var(--li-identation);
  }
</style>
