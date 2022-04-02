<script>
	import { useState } from './utils/context';

	const { isParentExpanded } = useState();
</script>

<div class:spaced={$isParentExpanded} on:click>
	<slot name="key" />
</div>

<style>
	div {
		display: inline-block;
		color: var(--label-color);
		padding: 0;
	}
	.spaced {
		padding-right: var(--li-colon-space);
	}
</style>
