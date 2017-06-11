// @flow

// core libraries
import thunk from 'redux-thunk';

// essential test libraries
import { describe, it } from 'mocha';
import expect from 'expect';
import configureStore from 'redux-mock-store';


// sut - component under test
import initialData from 'contacts/store/initial-state';
import {
  BUSY,
  LOAD_CONTACTS_SUCCESS
} from 'contacts/store/constants';

import { loadContacts } from '../actions';

import payload from 'restapi/contacts/data';




/** @test async actions do behave as expected */
describe('contacts related async actions', function() {

  const mockStore = configureStore([thunk]);
  /** @test plural related actions */
  describe('plural', function() {
    /** @test  */
    describe('load contacts with deliberate "delay 500ms"', function() {
      /** @test  */
      it(`
        following ACTIONS sequence should be taken place in sequence
        ------------------------------------------------------------
        1.BUSY
        2.LOAD_CONTACTS_SUCCESS, payload: []
      `,
        function() {
          const store = mockStore(initialData);
          return store.dispatch(loadContacts()).then(()=> {
            const actions = store.getActions();
            expect(actions[0]).toEqual({ type: BUSY });
            expect(actions[1]).toEqual({ type: LOAD_CONTACTS_SUCCESS, payload });
          });
        });

    });

  });



});
