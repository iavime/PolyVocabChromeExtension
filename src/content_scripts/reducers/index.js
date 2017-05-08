import { combineReducers } from 'redux';

import visibilityState from './visibilityState';
import translation from './translation';

const reducers = combineReducers({
  visibilityState,
  translation
});

export default reducers;
