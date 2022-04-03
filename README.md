# svelte-json-tree

![version](https://img.shields.io/npm/v/svelte-json-tree?style=flat-square) ![MIT License](https://img.shields.io/npm/l/svelte-json-tree?style=flat-square)

![svelte-json-tree](./images/screenshot.png)

Svelte JSON Viewer Component used in [Svelte REPL](https://svelte.dev/repl). Supports [Map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map), [Set](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set), [Iterable](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Iteration_protocols#iterable), [Symbol](https://developer.mozilla.org/en-US/docs/Glossary/Symbol).

[Try it out on repl](https://svelte.dev/repl/89867bd1acaa48b4b29e29d1fdfa1ddf?version=3.14.1).

## Install

Use [npm](https://www.npmjs.com/) or [yarn](https://yarnpkg.com/lang/en) to install:

```sh
# npm
npm install --save svelte-json-tree

# yarn
yarn add svelte-json-tree
```

## Usage

With Svelte:

```html
<script>
  import JSONTree from 'svelte-json-tree';
  // your json data to view
  const value = {
    array: [1, 2, 3],
    bool: true,
    object: {
      foo: 'bar',
    },
  };
</script>

<JSONTree {value} />
```

Without Svelte:

```js
const JSONTree = require('svelte-json-tree');
const jsonTree = new JSONTree({
  target: document.body,
  props: {
    value: { foo: 'bar' },
  },
});

// update value
jsonTree.$set({ value: ['1'] });
```

## Overriding Styles

**svelte-json-tree** uses the following CSS variables to theme:

```css
/* color */
--json-tree-string-color: #cb3f41;
--json-tree-symbol-color: #cb3f41;
--json-tree-boolean-color: #112aa7;
--json-tree-function-color: #112aa7;
--json-tree-number-color: #3029cf;
--json-tree-label-color: #871d8f;
--json-tree-arrow-color: #727272;
--json-tree-null-color: #8d8d8d;
--json-tree-undefined-color: #8d8d8d;
--json-tree-date-color: #8d8d8d;
/* position */
--json-tree-li-indentation: 1em;
--json-tree-li-line-height: 1.3;
/* font */
--json-tree-font-size: 12px;
--json-tree-font-family: 'Courier New', Courier, monospace;
```

To overwrite the style, specify the css variables on the parent:

```html
<div style="--json-tree-string-color: yellow;">
  <JSONTree {value} />
</div>
```

## License

[MIT](https://github.com/tanhauhau/svelte-json-tree/blob/master/LICENSE)
