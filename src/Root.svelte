<script>
  import JSONNode from './JSONNode.svelte';
  import { setContext } from 'svelte';
  import contextKey from './context';

  setContext(contextKey, {});

  export let key = '', value;
</script>
<style>
  ul {
    --string-color: #cb3f41;
    --symbol-color: #cb3f41;
    --boolean-color: #112aa7;
    --function-color: #112aa7;
    --number-color: #3029cf;
    --label-color: #871d8f;
    --arrow-color: #727272;
    --null-color: #8d8d8d;
    --undefined-color: #8d8d8d;
    --date-color: #8d8d8d;
    --li-identation: 1em;
    --li-colon-space: 0.3em;
    font-size: var(--json-tree-font-size, 12px);
    font-family: 'Courier New', Courier, monospace;
  }
  ul :global(li) {
    line-height: var(--li-line-height, 1.3);
    display: var(--li-display, list-item);
    list-style: none;
  }
  ul, ul :global(ul) {
    padding: 0;
    margin: 0;
  }
</style>
<ul>
  <JSONNode {key} {value} isParentExpanded={true} isParentArray={false} />
</ul>
