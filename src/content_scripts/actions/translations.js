import API from '../api';
import { setVisibility } from './visibilityState';
import _ from 'lodash';

export const startFetchTranslation = () => {
  return {
    type: 'FETCH_TRANSLATION',
    date: Date.now()
  }
}

export const fetchTranslationSucceed = ({ data, initial }) => {
  return {
    type: 'FETCH_TRANSLATION_SUCCESS',
    date: Date.now(),
    data,
    initial
  };
}

export const fetchTranslation = ({ initial, to }) => {
  return function(dispatch) {

    dispatch(startFetchTranslation());

    return API.getTranslations({ initial, to })
      .then(data => dispatch(fetchTranslationSucceed({ data, initial })))
  }
}
