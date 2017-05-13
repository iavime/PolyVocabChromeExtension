import _ from 'lodash';

const DEFAULT_STATE = {
  isFetching: false,
  error: null,
  initial: null,
  iso: null,
  translations: []
}

export default function translation(state = DEFAULT_STATE, action) {
  switch (action.type) {
    case "FETCH_TRANSLATION":
      return _.assign(DEFAULT_STATE, { isFetching: true });
    case "FETCH_TRANSLATION_ERROR":
      return _.assign(DEFAULT_STATE, { error: action.error });
    case "FETCH_TRANSLATION_SUCCESS":
      return _.assign(DEFAULT_STATE, mapTranslations(action));
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
