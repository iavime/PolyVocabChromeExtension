export default function visibilityState(state = false, action) {
  switch (action.type) {
    case 'SET_VISIBILITY':
      return action.visibility;
    default:
      return state;
  }
}
