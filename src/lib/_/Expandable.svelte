<script lang="ts">
  import { type Writable, writable } from 'svelte/store';

  import { useState } from './utils/context';

  export let expanded: Writable<boolean>;
  export let key: string;

  const expandable = writable(false);
  useState(({ keyPath, level }) => {
    if (key !== '[[Entries]]') {
      keyPath = [...keyPath, key];
      level = level + 1;
    }
    return {
      keyPath,
      level,
      expanded,
      expandable,
    };
  });
</script>

<slot />
