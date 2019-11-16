<script>
	import { createEventDispatcher } from 'svelte';
	const dispatch = createEventDispatcher();

  function onClick(event) {
    dispatch('click', event);
  }

  export let expanded;
</script>
<style>
  .container {
    display: inline-block;
    width: var(--li-identation);
    cursor: pointer;
    margin-left: calc(-7px - var(--li-identation));
    text-align: right;
  }
  .arrow {
    transform-origin: 67% 50%;
    position: relative;
    line-height: 1.1em;
    font-size: 0.75em;
    margin-left: 0;
    transition: 150ms;
    color: var(--arrow-sign);
  }
  .expanded {
    transform: rotateZ(90deg) translateX(-3px);
  }
</style>

<div class="container" on:click={onClick}>
  <div class="arrow" class:expanded={expanded}>{'\u25B6'}</div>
</div>