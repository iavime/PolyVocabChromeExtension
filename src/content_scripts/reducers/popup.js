const DEFAULT_STATE = {
  x: null,
  y: null
}

export default function popupState(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case 'SET_POSITION':
      return {
        x: action.x,
        y: action.y,
      };
    default:
      return state;
  }
}
