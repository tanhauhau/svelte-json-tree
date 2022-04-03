<script>
  import JsonTree from '$lib';
  const placeholder = 'Type anything, eg: {\"foo\": \"1\"}, function foo(a,b) { return a + b; }, ..."'
  let value = `{
  z: 1,
  y: '2',
  x: true,
  a: [
    11, 12, 13, 14, 15, 16, 17, 18, 19, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
    123, 124, 125, 126, 127, 128, 129,
  ],
  b: new Set([
    11, 12, 13, 14, 15, 16, 17, 18, 19, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
    123, 124, 125, 126, 127, 128, 129,
  ]),
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
    [11, '11'],
    [12, '12'],
    [13, '13'],
    [14, '14'],
    [15, '15'],
    [16, '16'],
    [17, '17'],
    [18, '18'],
    [19, '19'],
    [20, '20'],
    [21, '21'],
    [22, '22'],
    [23, '23'],
    [24, '24'],
    [25, '25'],
    [26, '26'],
    [27, '27'],
    [28, '28'],
    [29, '29'],
  ]),
  d: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 },
  e: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 },
  f: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 },
  g: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 },
  h: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 },
  i: { a: 1, b: 2, c: 3, d: 4, e: 5, f: 6, g: 7, h: 8, i: 9, j: 10, k: 11, l: 12, m: 13, n: 14, o: 15, p: 16, q: 17, r: 18, s: 19, t: 20, u: 21, v: 22, w: 23, x: 24, y: 25, z: 26 },
  j: new Error("FOO"),
  k: {
    a: new Error("bar"),
    b: [1,2,3],
    c: [new Error("c").stack, new Error("cc"), new Error("dd")],
  },
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
  $: console.log(jsonValue);
</script>
<style>
  :global(body) {
    margin: 0;
    padding: 0;
  }
  .container {
    display: grid;
    grid-template-areas: "title title" "editor preview";
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
<div class="container">
  <h1 class="title">svelte-json-tree
    &nbsp;
    <a target="_blank" href="https://npmjs.com/svelte-json-tree">
      <img alt="npm-version" src="https://img.shields.io/npm/v/svelte-json-tree.svg" />
    </a>
    &nbsp;
    <a target="_blank" href="https://github.com/tanhauhau/svelte-json-tree">
      <img alt="github" src="https://img.shields.io/github/stars/tanhauhau/svelte-json-tree?style=social" />
    </a>
  </h1>
  <div class="editor">
    <textarea bind:value class:error {placeholder}></textarea>
  </div>
  <div class="preview">
    <JsonTree value={jsonValue} />
  </div>
</div>