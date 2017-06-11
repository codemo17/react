// @flow

// core test libraries
import { describe, it } from 'mocha';
import expect from 'expect';

// sut - component under test
import { ContactsState } from '../reducers';
import payload  from 'restapi/contacts/data';
import seed from  'contacts/store/initial-state';

import {
  LOAD_CONTACTS_SUCCESS
} from 'contacts/store/constants';


/** @test contacts reducers */
describe('contacts related reducers', function() {
  /** @test plural contacts reducer */
  describe('plural', function() {

    /** @test  */
    it('return consistent state when "loadContact = success""', function() {
      const newState = ContactsState(seed, { type: LOAD_CONTACTS_SUCCESS,  payload });
      expect( newState.data.length ).toEqual( payload.length );
    });
  });
});

