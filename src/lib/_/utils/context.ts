import { getContext, setContext } from 'svelte';
import type { Readable, Writable } from 'svelte/store';

const STATE = {};
type State = {
  isParentExpanded: Readable<boolean>;
  expanded: Writable<boolean>;
  expandable: Writable<boolean>;
  displayMode: 'summary' | undefined;
  root: boolean;
};

export function useState(newState?: Partial<State>, opts?: { expandable?: boolean }): State {
  const currentState = getContext<State>(STATE);
  const nextState = { ...currentState, ...newState };
  if (opts?.expandable) nextState.isParentExpanded = nextState.expanded;

  setContext(STATE, nextState);
  return currentState;
}
