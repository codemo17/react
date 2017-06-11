// @flow

import initialState from './initial-state';
import {
  BUSY,
  LOAD_CONTACTS_SUCCESS
} from './constants';

export const ContactsState = ( state:Object = initialState, action: Object ) => {
  switch(action.type) {

    case BUSY:
      return { ...state, busy: true }
    case LOAD_CONTACTS_SUCCESS:
      const { payload } = action
      debugger;
      return { ...state, data: payload };
    default:
      return state.data;
  }
}

