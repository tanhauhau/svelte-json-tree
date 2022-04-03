<script>
	export let value, nodeType;
</script>

<span class={nodeType}>
	{value}
</span>

<style>
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
