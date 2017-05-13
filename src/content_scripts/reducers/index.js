import { combineReducers } from 'redux';

import visibilityState from './visibilityState';
import translation from './translation';
import popup from './popup';

const reducers = combineReducers({
  visibilityState,
  translation,
  popup
});

export default reducers;
