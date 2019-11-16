<script>
  import { isPrimitive } from './objType';
  import JSONNode from './JSONNode.svelte';

  export let key, isParentExpanded, isParentArray = false, colon = ':';

  $: showKey = (isParentExpanded || !isParentArray || key != +key);
</script>
<style>
  label {
    display: inline-block;
    color: var(--label-color);
    margin: 0;
  }
  .spaced {
    margin-right: var(--li-colon-space);
  }
</style>
{#if showKey && key}
  <label class:spaced={isParentExpanded}>
    <span>{key}{colon}</span>
  </label>
{/if}