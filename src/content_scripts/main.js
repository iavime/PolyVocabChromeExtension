import App from './app'

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import utils from './utils'
import * as actions from './actions';

class Main {
  constructor() {
    this.lang = 'ru';

    let store = createStore(reducer, applyMiddleware(thunk, logger));
    this.render(App, store);
    this.registerListeners(store);
  }

  registerListeners({ dispatch }) {
    document.addEventListener('dblclick', event => {
      const selection = utils.getSelection();
      dispatch(actions.fetchTranslation({ initial: selection, to: this.lang }))
    });
  }

  /*
   * Injects App into the page
   */
  render(app, store) {
    const injectDom = document.createElement('div');
    document.body.appendChild(injectDom);
    render(<Provider store={ store }>{ React.createElement(app) }</Provider>, injectDom);
  }
}

new Main();
