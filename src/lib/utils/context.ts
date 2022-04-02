import { getContext, setContext } from 'svelte';
import type { Readable } from 'svelte/store';

const STATE = {};
type State = {
  colon: string,
  isParentExpanded: Readable<boolean>,
  isParentArray: boolean,
  parentNodeType: Readable<string>
};

export function useState(newState?: Partial<State>): State {
  const currentState = getContext<State>(STATE);
  setContext(STATE, { ...currentState, ...newState });
  return currentState;
}
