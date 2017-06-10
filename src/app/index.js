// @flow

import React from 'react';
import ReactDOM  from 'react-dom';
import { Provider } from 'redux';

import Routes from './components/routes';
import store from './store';


ReactDOM.render(
  <Routes/>,
  document.getElementById('root'),
)
