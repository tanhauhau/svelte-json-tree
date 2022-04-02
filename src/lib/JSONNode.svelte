<script lang="ts">
	import JSONObjectNode from './JSONObjectNode.svelte';
	import JSONArrayNode from './JSONArrayNode.svelte';
	import JSONIterableArrayNode from './JSONIterableArrayNode.svelte';
	import JSONIterableMapNode from './JSONIterableMapNode.svelte';
	import JSONMapEntryNode from './JSONMapEntryNode.svelte';
	import JSONValueNode from './JSONValueNode.svelte';
	import ErrorNode from './ErrorNode.svelte';
	import objType from './objType';
	import { useState } from './utils/context';
	import { writable } from 'svelte/store';

	export let value;
	const nodeType = writable<string>();
	$: $nodeType = objType(value);
	$: [componentType, props] = getComponentAndProps($nodeType, value);

	useState({ parentNodeType: nodeType });

	function getComponentAndProps(nodeType, value) {
		switch (nodeType) {
			case 'Object':
				return [JSONObjectNode];
			case 'Error':
				return [ErrorNode];
			case 'Array':
				return [JSONArrayNode];
			case 'Map':
				return [JSONIterableMapNode];
			case 'Iterable':
			// ???
			case 'Set':
				return [JSONIterableArrayNode, { nodeType }];
			case 'MapEntry':
				return [JSONMapEntryNode];
			case 'Number':
				return [JSONValueNode, { nodeType }];
			case 'String':
				return [JSONValueNode, { nodeType, value: `"${value}"` }];
			case 'Boolean':
				return [JSONValueNode, { nodeType, value: value ? 'true' : 'false' }];
			case 'Date':
				return [JSONValueNode, { nodeType, value: value.toISOString() }];
			case 'Null':
				return [JSONValueNode, { nodeType, value: 'null' }];
			case 'Undefined':
				return [JSONValueNode, { nodeType, value: 'undefined' }];
			case 'Function':
			case 'Symbol':
				return [JSONValueNode, { nodeType, value: value.toString() }];
			default:
				return [JSONValueNode, { nodeType, value: `<${nodeType}>` }];
		}
	}
</script>

<svelte:component this={componentType} {value} {...props}>
	<slot slot="key" name="key" />
</svelte:component>
