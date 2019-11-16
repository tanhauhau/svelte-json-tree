<script>
  import JSONObjectNode from './JSONObjectNode.svelte';
  import JSONArrayNode from './JSONArrayNode.svelte';
  import JSONIterableArrayNode from './JSONIterableArrayNode.svelte';
  import JSONIterableMapNode from './JSONIterableMapNode.svelte';
  import JSONMapEntryNode from './JSONMapEntryNode.svelte';
  import JSONValueNode from './JSONValueNode.svelte';
  import ErrorNode from './ErrorNode.svelte';
  import objType from './objType';

  export let key, value, isParentExpanded, isParentArray;
  const nodeType = objType(value);
</script>

{#if nodeType === 'Object'}
  <JSONObjectNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} />
{:else if nodeType === 'Error'}
  <ErrorNode {key} {value} {isParentExpanded} {isParentArray} />
{:else if nodeType === 'Array'}
  <JSONArrayNode {key} {value} {isParentExpanded} {isParentArray} />
{:else if nodeType === 'Iterable' || nodeType === 'Map' || nodeType === 'Set'}
  {#if typeof value.set === 'function'}
    <JSONIterableMapNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} />
  {:else}
    <JSONIterableArrayNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} />
  {/if}
{:else if nodeType === 'MapEntry'}
  <JSONMapEntryNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} />
{:else if nodeType === 'String'}  
  <JSONValueNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} valueGetter={raw => `"${raw}"`} />
{:else if nodeType === 'Number'}
  <JSONValueNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} />
{:else if nodeType === 'Boolean'}
  <JSONValueNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} valueGetter={raw => (raw ? 'true' : 'false')} />
{:else if nodeType === 'Date'}
  <JSONValueNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} valueGetter={raw => raw.toISOString()} />
{:else if nodeType === 'Null'}
  <JSONValueNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} valueGetter={() => 'null'} />
{:else if nodeType === 'Undefined'}
  <JSONValueNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} valueGetter={() => 'undefined'} />
{:else if nodeType === 'Function' || nodeType === 'Symbol'}
  <JSONValueNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} valueGetter={raw => raw.toString()} />
{:else}
  <JSONValueNode {key} {value} {isParentExpanded} {isParentArray} {nodeType} valueGetter={() => `<${nodeType}>`} />
{/if}