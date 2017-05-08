import App from './app'

import React, { Component } from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reducer from './reducers';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

import * as actions from './actions';

class Main {
  constructor() {
    // Init Redux
    let store = createStore(reducer, applyMiddleware(logger, thunk));
    this.render(App, store);
    // Register Listeners
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
