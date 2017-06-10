
import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';

import Layout from '../layout';
import Contacts from 'contacts/components/plural';

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={Contacts}/>
  </Route>
)

export default routes;
