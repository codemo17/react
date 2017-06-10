// @flow
/**
 * core packages
 */
import React from 'react';
/**
 * third-party packages
 */
import { Router, browserHistory  } from 'react-router';
import routes from './config';


/**
 * @namespace Routes
 * @memberof  demo017.interview.react-redux
 * @classdesc Routes Component  --  collection of routes
 *
 */

const Routes = () => {
  return (
    <Router
      history={browserHistory}
      routes={routes}
    />
  );
}
export default Routes;
