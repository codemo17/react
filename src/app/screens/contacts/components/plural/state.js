// @flow
export const contacts = (state: Object) => state.contacts.many && state.contacts.many.data || [];

export const selector = (state: Object) => ({
  data: contacts(state),
});

