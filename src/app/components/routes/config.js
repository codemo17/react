
import React from 'react';
import {
  Route,
  IndexRoute
} from 'react-router';

import Layout from '../layout';
import Contacts from 'contacts/components/plural';
import Contact from 'contacts/components/singular';

const routes = (
  <Route path='/' component={Layout}>
    <IndexRoute component={Contacts}/>
    <Route path="/contacts" component={Contacts}/>
    <Route path="/contacts/:filter" component={Contact}/>

  </Route>
)

export default routes;
