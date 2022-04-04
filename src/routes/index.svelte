<script>
  import JsonTree from '$lib';
  const placeholder = 'Type anything, eg: {"foo": "1"}, function foo(a,b) { return a + b; }, ..."';
  let value = `{
  z: 1,
  y: '2',
  x: true,
  a: [ 11, 12, { b: 13, c: "d" }, 14, [1, 2] ],
  b: new Set([11, 12, 13]),
  c: new Map([
    ['1', '1'],
    [2, '2'],
    [undefined, undefined],
    [false, false],
    [true, true],
    ['6', '6'],
    [null, null],
    [Infinity, Infinity],
    ['9', '9'],
    ['10', { a: {b:{c:2}}}]
  ]),
  d: { a: 1, b: 2, c: { ca: {caa:4}, cb:{cbb:5}}, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 },
  e: new Error("FOO"),
  f: {
    a: new Error("bar"),
    b: [1,2,3],
    c: [new Error("c").stack, new Error("cc"), new Error("dd")],
  },
  g: /^[a-z]+(b)?$/,
}
`;
  let jsonValue;
  let error = null;
  $: {
    try {
      jsonValue = new Function(`return ${value}`)();
      error = null;
    } catch (e) {
      error = e;
    }
  }
</script>

<div class="container">
  <h1 class="title">
    svelte-json-tree &nbsp;
    <a target="_blank" href="https://npmjs.com/svelte-json-tree">
      <img alt="npm-version" src="https://img.shields.io/npm/v/svelte-json-tree.svg" />
    </a>
    &nbsp;
    <a target="_blank" href="https://github.com/tanhauhau/svelte-json-tree">
      <img alt="github" src="https://img.shields.io/github/stars/tanhauhau/svelte-json-tree?style=social" />
    </a>
  </h1>
  <div class="editor">
    <textarea bind:value class:error {placeholder} />
  </div>
  <div class="preview">
    <JsonTree value={jsonValue} />
  </div>
</div>

<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  .container {
    display: grid;
    grid-template-areas: 'title title' 'editor preview';
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto 1fr;
    height: 100vh;
    width: 100vw;
  }
  .title {
    grid-area: title;
    margin: 0;
    padding: 4px 8px;
    display: flex;
    align-items: center;
    font-size: 18px;
  }
  .preview {
    grid-area: preview;
    padding: 8px;
  }
  .editor {
    grid-area: editor;
  }
  .error {
    border: 2px solid red;
  }
  textarea {
    width: 100%;
    height: 100%;
    box-sizing: border-box;
  }
  a {
    display: flex;
  }
</style>
