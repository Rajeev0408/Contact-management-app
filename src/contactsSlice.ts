// src/features/contacts/contactsSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Contact } from './types';

interface ContactsState {
  contacts: Contact[];
}

const initialState: ContactsState = {
  contacts: [],
};

export const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  reducers: {
    addContact: (state, action: PayloadAction<Contact>) => {
      state.contacts.push(action.payload);
    },
    // other reducers like deleteContact, updateContact
  },
});

export const { addContact } = contactsSlice.actions;

export default contactsSlice.reducer;
