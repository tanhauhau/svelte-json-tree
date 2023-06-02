# svelte-json-tree

<script>
  import JsonTree from '$lib';
</script>

## Install it

With `npm`

```sh
npm install svelte-json-tree
```

With `yarn`

```sh
yarn add svelte-json-tree
```

## Use it

```svelte
<script>
  import JsonTree from 'svelte-json-tree';
  let value = {
    message: 'hello world',
    item: [1, 2, 3],
  };
</script>

<JsonTree {value} />
```

**Result**

<JsonTree value={{message: "hello world", item: [1, 2, 3] }} />

### Customise theme

Style with [style-props](https://svelte.dev/docs#template-syntax-component-directives---style-props)

```svelte
<script>
  let value = {
    message: 'hello world',
    item: [1, 2, 3],
    symbol: Symbol(1),
    n: null,
    u: undefined,
    fn: function (a, b) {},
    map: new Map([
      [1, 2],
      ['3', false],
    ]),
    set: new Set([true, false, Infinity]),
    regex: /^https?:\/\/$/g,
    error: new Error('oops'),
    date: new Date(),
  };
</script>

<div style="background: #272822; padding: 1em;">
  <JsonTree
    {value}
    --json-tree-property-color="#a6e22e"
    --json-tree-string-color="#f25a00"
    --json-tree-symbol-color="#66d9ef"
    --json-tree-boolean-color="#c594c5"
    --json-tree-function-color="#c594c5"
    --json-tree-number-color="#f99157"
    --json-tree-label-color="#f92672"
    --json-tree-arrow-color="#ae81ff"
    --json-tree-null-color="#66d9ef"
    --json-tree-undefined-color="#66d9ef"
    --json-tree-date-color="#fd971f"
    --json-tree-operator-color="#f8f8f2"
    --json-tree-regex-color="#9effff"
    --json-tree-li-identation="2em"
    --json-tree-li-line-height="1.5"
    --json-tree-font-size="16px"
    --json-tree-font-family="monospace"
  />
</div>
```

**Result**

<div style="background: #272822; padding: 1em;">
<JsonTree value={{message: 'hello world',item: [1, 2, 3],symbol: Symbol(1),n: null,u: undefined,fn: function (a, b) {}, map: new Map([[1, 2], ["3", false]]), set: new Set([true, false, Infinity]), regex: /^https?:\/\/$/g, error: new Error('oops'), date: new Date() }} --json-tree-property-color="#a6e22e"  --json-tree-string-color="#f25a00"  --json-tree-symbol-color="#66d9ef"  --json-tree-boolean-color="#c594c5"  --json-tree-function-color="#c594c5"  --json-tree-number-color="#f99157"  --json-tree-label-color="#f92672"  --json-tree-arrow-color="#ae81ff"  --json-tree-null-color="#66d9ef"  --json-tree-undefined-color="#66d9ef"  --json-tree-date-color="#fd971f"  --json-tree-operator-color="#f8f8f2" --json-tree-regex-color="#9effff" --json-tree-li-identation="2em"
--json-tree-li-line-height="1.5" --json-tree-font-size="16px" --json-tree-font-family="monospace" /></div>

### Default expanded nodes

Expand by paths

```svelte
<script>
  let value = {
    a: {
      d: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      e: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      f: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
    },
    b: {
      d: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      e: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      f: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
    },
    c: {
      d: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      e: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      f: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
    },
  };
</script>

<JsonTree {value} defaultExpandedPaths={['$.a.d.h.1', '$.c.e.*']} />
```

**Result**

<JsonTree value={{
  a: {
    d: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    e: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    f: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
  },
  b: {
    d: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    e: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    f: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
  },
  c: {
    d: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    e: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    f: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
  },
}} defaultExpandedPaths={['$.a.d.h.1', '$.c.e.*']} />

Expand by level

```svelte
<script>
  let value = {
    a: {
      d: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      e: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      f: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
    },
    b: {
      d: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      e: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      f: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
    },
    c: {
      d: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      e: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
      f: { h: [{ x: 1 }, { y: 2 }], i: [{ x: 1 }, { y: 2 }], j: [{ x: 1 }, { y: 2 }] },
    },
  };
</script>

<JsonTree {value} defaultExpandedLevel={1} />
```

**Result**

<JsonTree value={{
  a: {
    d: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    e: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    f: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
  },
  b: {
    d: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    e: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    f: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
  },
  c: {
    d: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    e: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
    f: { h: [{x: 1}, { y: 2}], i: [{x: 1}, { y: 2}], j: [{x: 1}, { y: 2}] },
  },
}} defaultExpandedLevel={1} />

## CJS / ESM / Standalone / UMD

You can import `svelte-json-tree` directly, without having to setting up plugins to transform `.svelte` code

```js
import Jsontree from 'svelte-json-tree';

new Jsontree({
  target: document.body,
  props: { value: [14, 15] },
});
```

If you want to use it without installing `svelte`, use the **standalone** version

```js
import Jsontree from 'svelte-json-tree/standalone';

new Jsontree({
  target: document.body,
  props: { value: [14, 15] },
});
```

Or use the UMD version

```html
<html>
  <script src="https://unpkg.com/svelte-json-tree@1.0.0/dist/standalone/umd/index.js"></script>
  <script>
    new SvelteJsonTree({
      target: document.body,
      props: { value: [20, 21] },
    });
  </script>
</html>
```

<div class="spacer" />

<style>
  pre {
    /* In theory shiki will overwrite these, but this is to make sure there are defaults regardless */
    background-color: white;
    color: black;

    /* Give it some space to breathe */
    padding: 12px;
    margin-bottom: 3rem;

    /* Important to allow the code to move horizontally; */
    overflow-x: auto;
    position: relative;
  }
  .spacer {
    padding: 2rem;
  }
</style>
