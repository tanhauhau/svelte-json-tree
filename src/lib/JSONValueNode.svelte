<script>
	import JSONKey from './JSONKey.svelte';
	import { useState } from './utils/context';

	export let value, nodeType;

	const { isParentExpanded } = useState();
</script>

<li class:indent={$isParentExpanded}>
	<JSONKey><slot name="key" slot="key" /></JSONKey>
	<span class={nodeType}>
		{value}
	</span>
</li>

<style>
	li {
		user-select: text;
		word-wrap: break-word;
		word-break: break-all;
	}
	.indent {
		padding-left: var(--li-identation);
	}
	.String {
		color: var(--string-color);
	}
	.Date {
		color: var(--date-color);
	}
	.Number {
		color: var(--number-color);
	}
	.Boolean {
		color: var(--boolean-color);
	}
	.Null {
		color: var(--null-color);
	}
	.Undefined {
		color: var(--undefined-color);
	}
	.Function {
		color: var(--function-color);
		font-style: italic;
	}
	.Symbol {
		color: var(--symbol-color);
	}
</style>
