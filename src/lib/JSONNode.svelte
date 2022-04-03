<script lang="ts">
	import JSONObjectNode from './JSONObjectNode.svelte';
	import JSONArrayNode from './JSONArrayNode.svelte';
	import JSONIterableArrayNode from './JSONIterableArrayNode.svelte';
	import JSONIterableMapNode from './JSONIterableMapNode.svelte';
	import JSONValueNode from './JSONValueNode.svelte';
	import ErrorNode from './ErrorNode.svelte';
	import objType from './objType';
	import { useState } from './utils/context';
	import { writable } from 'svelte/store';

	export let value;
	export let expanded = undefined;
	const nodeType = writable<string>();
	$: $nodeType = objType(value);
	$: [componentType, props] = getComponentAndProps($nodeType, value);

	function getComponentAndProps(nodeType, value) {
		switch (nodeType) {
			case 'Object':
				return [JSONObjectNode, { expanded }];
			case 'Error':
				return [ErrorNode, { expanded }];
			case 'Array':
				return [JSONArrayNode, { expanded }];
			case 'Map':
				return [JSONIterableMapNode, { expanded }];
			case 'Iterable':
			// ???
			case 'Set':
				return [JSONIterableArrayNode, { nodeType, expanded }];
			case 'Number':
				disallowExpanding();
				return [JSONValueNode, { nodeType }];
			case 'String':
				disallowExpanding();
				return [JSONValueNode, { nodeType, value: `"${value}"` }];
			case 'Boolean':
				disallowExpanding();
				return [JSONValueNode, { nodeType, value: value ? 'true' : 'false' }];
			case 'Date':
				disallowExpanding();
				return [JSONValueNode, { nodeType, value: value.toISOString() }];
			case 'Null':
				disallowExpanding();
				return [JSONValueNode, { nodeType, value: 'null' }];
			case 'Undefined':
				disallowExpanding();
				return [JSONValueNode, { nodeType, value: 'undefined' }];
			case 'Function':
			case 'Symbol':
				disallowExpanding();
				return [JSONValueNode, { nodeType, value: value.toString() }];
			default:
				disallowExpanding();
				return [JSONValueNode, { nodeType, value: `<${nodeType}>` }];
		}
	}
	function disallowExpanding() {
		if (expanded) $expanded = undefined;
	}
</script>

<svelte:component this={componentType} {value} {...props} />
