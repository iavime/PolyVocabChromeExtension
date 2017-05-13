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

const config = {
  language: 'ru',
  fonts: [{ fontFamily: 'Roboto', url: 'https://fonts.googleapis.com/css?family=Roboto' }]
}

class Main {
  constructor() {
    this.loadFonts(config.fonts);

    const store = createStore(reducer, applyMiddleware(thunk, logger));

    this.render(App, store);
    this.registerListeners(store);
  }

  registerListeners(store) {
    this.registerDoubleClick(store);
    this.regsterOuterClick(store);
  }

  registerDoubleClick({ dispatch }) {
    document.addEventListener('dblclick', event => this.doubleClickHandler(dispatch, event));
  }

  regsterOuterClick({ dispatch, getState }) {
    document.addEventListener('click', event => this.clickHandler({ dispatch, getState }, event));
  }

  doubleClickHandler(dispatch, event) {
    const selection = utils.getSelection();
    console.log('Click', event);

    dispatch(actions.fetchTranslation({ initial: selection, to: config.language}))
    .then(() => dispatch(actions.setPosition({ x: event.pageX, y: event.pageY })))
    .then(() => dispatch(actions.setVisibility(true)));
  }

  clickHandler({ dispatch, getState }, event) {
    const state = getState();

    if (state.visibilityState === true) {
      dispatch(actions.setVisibility(false));
    }
  }

  /*
   * Checks if font is presented, if not loads it
   * @param fonts: Array of { fontFamily, url }
   */
  loadFonts(fonts) {
    fonts.forEach(({ fontFamily, url }) => {
      if (document.fonts.check(`1px ${fontFamily}`) == false) {
        this.loadFont(url);
      }
    });
  }

  loadFont(fontUrl) {
    const link = document.createElement('link');
    link.setAttribute('rel', 'stylesheet');
    link.href = fontUrl;
    document.head.appendChild(link);
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
