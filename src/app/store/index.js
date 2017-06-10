// @flow

import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import state from './state';

const composeEnhancers = window.__REDUX_DEVTOOL_EXTENSION_COMPOSE__ || compose;

export default createStore(
  state,
  composeEnhancers(
    applyMiddleware(thunk)
  ),
);

