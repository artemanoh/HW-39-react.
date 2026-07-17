import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  deleteContact,
} from "./operations";
import { createEntityAdapter } from "@reduxjs/toolkit";

const contactsAdapter = createEntityAdapter();

const initialState = contactsAdapter.getInitialState({
  isLoading: false,
  error: null,
});

const contactsSlice = createSlice({
  name: 'contacts',
  initialState,
  extraReducers: builder => {
  builder
    .addCase(fetchContacts.pending, state => {
      state.isLoading = true;
    })
    .addCase(fetchContacts.fulfilled, (state, action) => {
      state.isLoading = false;
      state.error = null;
      contactsAdapter.setAll(state, action.payload);
    })
    .addCase(fetchContacts.rejected, (state, action) => {
      state.isLoading = false;
      state.error = action.payload;
    })
    .addCase(addContact.pending, state => {
  state.isLoading = true;
})
.addCase(addContact.fulfilled, (state, action) => {
  state.isLoading = false;
  state.error = null;
  contactsAdapter.addOne(state, action.payload);
})
.addCase(addContact.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
})
.addCase(deleteContact.pending, state => {
  state.isLoading = true;
})
.addCase(deleteContact.fulfilled, (state, action) => {
  state.isLoading = false;
  state.error = null;
  contactsAdapter.removeOne(state, action.payload);
})
.addCase(deleteContact.rejected, (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
});
}
});
export const contactsSelectors = contactsAdapter.getSelectors(
  state => state.contacts
);
export default contactsSlice.reducer;