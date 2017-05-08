import _ from 'lodash';

const defaultState = {
  isFetching: false,
  error: null,
  initial: null,
  iso: null,
  translations: []
}

export default function translation(state = defaultState, action) {
  switch (action.type) {
    case "FETCH_TRANSLATION":
      return _.assign(defaultState, { isFetching: true });
    case "FETCH_TRANSLATION_ERROR":
      return _.assign(defaultState, { error: action.error });
    case "FETCH_TRANSLATION_SUCCESS":
      return _.assign(defaultState, mapTranslations(action));
    default:
      return state;
  }
}

const mapTranslations = ({ data, initial }) => {
  return {
    translations: [ data.text ],
    isFetching: false,
    iso: data.from.language.iso,
    initial: initial
  };
}
