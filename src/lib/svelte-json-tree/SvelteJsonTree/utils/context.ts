import { getContext, setContext } from 'svelte';
import type { Readable, Writable } from 'svelte/store';

const STATE = {};
export type State = {
  isParentExpanded: Readable<boolean>;
  expanded: Writable<boolean>;
  expandable: Writable<boolean>;
  displayMode: 'summary' | undefined;
  root: boolean;
  shouldExpandNode: (opts: { keyPath: string[]; level: number }) => boolean;
  keyPath: string[],
  level: number,
  showPreview: boolean;
  shouldTreatIterableAsObject: boolean;
};

export function useState(newState?: Partial<State> | ((state: State) => Partial<State>), opts?: { expandable?: boolean }): State {
  const currentState = getContext<State>(STATE);
  const _newState = typeof newState === 'function' ? newState(currentState) : newState;
  const nextState = { ...currentState, ..._newState };
  if (opts?.expandable) nextState.isParentExpanded = nextState.expanded;

  setContext(STATE, nextState);
  return currentState;
}
