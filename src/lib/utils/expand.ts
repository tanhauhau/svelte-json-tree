import { onMount } from 'svelte';
import type { Readable, Writable } from 'svelte/store';

export function useExpand(isParentExpanded: Readable<boolean>, expanded: Writable<boolean>, defaultValue?: boolean) {
  onMount(() => {
    return isParentExpanded.subscribe((value) => {
      if (!value) expanded.set(false);
      else expanded.set(defaultValue);
    });
  });

  function toggleExpand() {
    expanded.update(value => !value);
  }

  return { toggleExpand };
}