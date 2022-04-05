<script lang="ts">
  import JSONNested from './JSONNested.svelte';
  import JSONNode from './JSONNode.svelte';
  import JsonObjectNode from './JSONObjectNode.svelte';

  export let value: () => void;

  $: str = toString(value);
  $: ctx = parseFunction(str);

  function parseFunction(str: string) {
    const match = str.match(/^(?:(async)\s+)?(?:function)?(\*)?\s*([^(]+)?(\([^)]*\))\s*(=>)?/);
    const isAsync = match?.[1];
    const isGenerator = match?.[2];
    const fnName = match?.[3];
    const args = match?.[4];
    const isArrow = match?.[5];
    const classMatch = str.match(/^class\s+([^\s]+)/);
    const isClass = classMatch?.[1];

    return {
      args,
      isAsync,
      isGenerator,
      fnName,
      isArrow,
      isClass,
    };
  }

  function getPreview1({ isGenerator, isAsync, isClass }) {
    if (isClass) return `class ${isClass}`;
    return (isAsync ? 'async ' : '') + 'ƒ' + (isGenerator ? '*' : '');
  }

  function getPreview2({ isAsync, isArrow, fnName, args }) {
    return (isArrow && isAsync ? 'async' : '') + ' ' + (fnName ?? '') + args + (isArrow ? ' => …' : '');
  }

  const FUNCTION = '[[Function]]';
  const PROTO = '[[Prototype]]';

  function getValue(key: string) {
    if (key === PROTO) return (value as any).__proto__;
    return value[key];
  }

  function filterKeys(key: string) {
    if (key === FUNCTION) return true;
    return getValue(key);
  }

  function toString(value: () => void) {
    try {
      return value.toString();
    } catch {
      switch (value.constructor.name) {
        case 'AsyncFunction':
          return 'async function () {}';
        case 'AsyncGeneratorFunction':
          return 'async function * () {}';
        case 'GeneratorFunction:':
          return 'function * () {}';
        default:
          return 'function () {}';
      }
    }
  }

  $: keys = ['length', 'name', 'prototype', FUNCTION, PROTO].filter(filterKeys);
</script>

<JSONNested {keys}>
  <svelte:fragment slot="summary"><span class="i">ƒ</span></svelte:fragment>
  <svelte:fragment slot="preview"
    >{#if !ctx.isArrow}<span class="fn i">{getPreview1(ctx)}</span>{/if}{#if !ctx.isClass}<span class="i">{getPreview2(ctx)}</span
      >{/if}</svelte:fragment
  >
  <svelte:fragment slot="item_key" let:key
    ><span class={key === FUNCTION || key === PROTO ? 'internal' : 'property'}>{key}</span></svelte:fragment
  >
  <svelte:fragment slot="item_value" let:key
    >{#if key === FUNCTION}<span class="i">{str}</span>{:else if key === 'prototype'}<JsonObjectNode
        value={getValue(key)}
      />{:else}<JSONNode value={getValue(key)} />{/if}</svelte:fragment
  >
</JSONNested>

<style>
  .i {
    font-style: italic;
  }
  .fn,
  .i {
    color: var(--function-color);
  }
</style>
