<script>
  export let key, isParentExpanded, isParentArray = false, colon = ':';

  $: showKey = (isParentExpanded || !isParentArray || key != +key);
</script>
<style>
  label {
    display: inline-block;
    color: var(--label-color);
    padding: 0;
  }
  .spaced {
    padding-right: var(--li-colon-space);
  }
</style>
{#if showKey && key}
  <!-- svelte-ignore a11y-label-has-associated-control -->
  <label class:spaced={isParentExpanded} on:click>
    <span>{key}{colon}</span>
  </label>
{/if}