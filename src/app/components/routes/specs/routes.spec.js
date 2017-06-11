// @flow

// core libraries
import React from 'react';
import { render } from 'react-dom';
import PropTypes from 'prop-types';


//essential third-parties
import { Router, createMemoryHistory as createHistory } from 'react-router';

// core test libraries
import { describe, it } from 'mocha';
import expect from 'expect';

// sut - component under test
import Layout from 'app/components/layout';
import Contacts from 'contacts/components/plural';
import Contact from 'contacts/components/singular';
import routes from '../config';

const { arrayOf } = PropTypes;

/** @test landing page is Contacts list page   */
describe('Root path "/"', function() {
  /** @test  renders Layout component as masterpage */
  describe('renders Layout as container', function() {
    /** @test renders Contacts page*/
    it('renders Contacts Page as a "content component"', function() {
      const node = document.createElement('div');
      const assert = (props:{components: arrayOf}) => {
        expect(props.components).toEqual([ Layout, Contacts ]);
        expect(props.components).toExclude([Contact]);
        return <div/>
      };

      render((<Router
        history={createHistory('/')}
        routes={ routes }
        render={assert}
        />),
        node)
    });

  });
});
