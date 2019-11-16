<script>
  import JSONArrow from './JSONArrow.svelte';
  import JSONNode from './JSONNode.svelte';
  import JSONKey from './JSONKey.svelte';
  import JSONNested from './JSONNested.svelte';

  export let key, value, isParentExpanded;
  export let expanded = false;

  const keys = ['key', 'value'];

  function getValue(key) {
    return value[key];
  }
</script>
<JSONNested
  {expanded}
  {isParentExpanded}
  key={isParentExpanded ? String(key) : value.key}
  {keys}
  {getValue}
  label={isParentExpanded ? ': Entry ': '=> '}
  bracketOpen={'{'}
  bracketClose={'}'}
/>