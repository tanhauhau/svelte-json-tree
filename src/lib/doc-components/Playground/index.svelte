<script>
  import JsonTree from '$lib/svelte-json-tree';
  import { writable, readable, derived } from 'svelte/store';
  import objects from './snippets/objects.text?raw';
  import maps from './snippets/maps.text?raw';
  import regexps from './snippets/regex.text?raw';
  import functions from './snippets/functions.text?raw';
  import errors from './snippets/errors.text?raw';
  import stores from './snippets/store.text?raw';
  import simple from './snippets/simple.text?raw';

  const previewValue = writable({});
  let instance, doc;
  let mounted = true;
  let template;

  const SNIPPETS = {
    simple,
    'objects-arrays': objects,
    'maps-sets': maps,
    regexps,
    functions,
    stores,
    errors,
  };

  $: updateCode(SNIPPETS[template]);

  const CODE_BEFORE = ['<script>', '  import JsonTree from "svelte-json-tree";', '  let value = '].join('\n');
  const CODE_AFTER = ';\n<' + '/script>\n\n<JsonTree {value} defaultExpandedLevel={1} />';

  function codemirror(elem) {
    (async () => {
      const CodeMirror = (await import('./codemirror')).default;
      if (!mounted) return;

      instance = CodeMirror(elem, {
        value: CODE_BEFORE + '{}' + CODE_AFTER,
        mode: {
          name: 'handlebars',
          base: 'text/html',
        },
        autoCloseBrackets: true,
        autoCloseTags: true,
        lineWrapping: true,
        indentWithTabs: true,
        indentUnit: 2,
        tabSize: 2,
        foldGutter: true,
        theme: 'dracula',
      });
      doc = instance.getDoc();
      doc.markText({ line: 0, ch: 0 }, { line: 2, ch: 14 }, { readOnly: true });
      doc.markText({ line: 2, ch: 16 }, { line: 6, ch: 0 }, { readOnly: true });

      instance.on('change', (instance) => {
        try {
          const value = instance.getValue();
          const content = value.slice(value.indexOf(CODE_BEFORE) + CODE_BEFORE.length, value.indexOf(CODE_AFTER));
          $previewValue = new Function('{ writable, readable, derived }', `return ${content};`)({ writable, readable, derived });
        } catch (e) {
          console.log(e);
        }
      });

      updateCode(SNIPPETS[template]);
    })();
    return {
      destroy() {
        mounted = false;
      },
    };
  }

  function updateCode(code) {
    if (!mounted || !instance || !doc || !code) return;
    const value = instance.getValue();
    const start = locate(value.indexOf(CODE_BEFORE) + CODE_BEFORE.length, value);
    const end = locate(value.indexOf(CODE_AFTER), value);
    doc.replaceRange(code, start, end);
  }
  function locate(position, value) {
    const before = value.slice(0, position);
    const lines = before.split('\n');
    return { line: lines.length - 1, ch: lines[lines.length - 1].length };
  }
</script>

<div class="playground">
  <div class="editor">
    <div class="controls">
      <span class="dots">
        <span class="dot" style="background: #fe5f56;" />
        <span class="dot" style="background: #ffbd2f;" />
        <span class="dot" style="background: #28c93f;" />
      </span>
      <select bind:value={template}>
        <option value="simple">Getting Started</option>
        <option value="objects-arrays">Objects and Arrays</option>
        <option value="maps-sets">Maps and Sets</option>
        <option value="regexps">RegExps</option>
        <option value="functions">Functions</option>
        <option value="stores">Svelte Store</option>
        <option value="errors">Errors</option>
      </select>
    </div>
    <div class="codemirror" use:codemirror />
  </div>
  <div class="preview"><JsonTree value={$previewValue} defaultExpandedLevel={1} /></div>
</div>

<style>
  .playground {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr;
    grid-template-areas: 'editor preview';
    height: 400px;
    gap: 20px;
  }
  .editor {
    grid-area: editor;
    display: flex;
    flex-direction: column;
    margin: 20px;
    background: #282a36;
    border-radius: 3px;
    box-shadow: 0 0 10px 3px rgba(0, 0, 0, 20%);
  }
  .controls {
    height: 34px;
    display: flex;
    align-items: center;
    padding: 0 10px;
    position: relative;
  }
  .dots {
    position: absolute;
  }
  .dot {
    width: 12px;
    height: 12px;
    margin: 0 2px;
    border-radius: 50%;
    display: inline-block;
  }
  .codemirror {
    margin: 12px;
    flex: 1;
    font-size: 16px;
    line-height: 1.4;
  }
  .preview {
    grid-area: preview;
  }
  select {
    text-align: center;
    margin: auto;
  }
  option {
    background-color: #282a36;
    color: white;
  }
</style>
