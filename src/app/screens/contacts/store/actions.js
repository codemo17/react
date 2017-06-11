// @flow
import restapi from 'restapi/contacts';

import {
  BUSY,
  LOAD_CONTACTS_SUCCESS
} from 'contacts/store/constants';


export const loadContacts = () => (dispatch: Function) => {
  dispatch({type: BUSY});

  return restapi.loadAll().then((resp) => {
    const { payload } = resp;
    dispatch({type: LOAD_CONTACTS_SUCCESS, payload});
  })

}
