<script>
  import JsonTree from '../src/Root.svelte';
  const placeholder = 'Type anything, eg: {\"foo\": \"1\"}, function foo(a,b) { return a + b; }, ..."'
  let value = '';
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