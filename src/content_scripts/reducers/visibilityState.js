const DEFAULT_STATE = false;

export default function visibilityState(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return action.visibility;
    default:
      return state;
  }
}
