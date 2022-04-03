<script>
	import { writable } from 'svelte/store';

	import { useState } from './utils/context';

	export let expanded;

	const expandable = writable(false);
	useState({ expanded, expandable });
</script>

<slot />
