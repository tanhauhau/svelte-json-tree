<script>
  export let key, isParentExpanded, isParentArray = false, colon = ':';

  $: showKey = (isParentExpanded || !isParentArray || key != +key);
</script>
<style>
  div {
    display: inline-block;
    color: var(--label-color);
    padding: 0;
  }
  .spaced {
    padding-right: var(--li-colon-space);
  }
</style>
{#if showKey && key}
  <div class:spaced={isParentExpanded} on:click>
    <span>{key}{colon}</span>
  </div>
{/if}