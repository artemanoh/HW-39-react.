import { contactsSelectors } from "./contactsSlice";

export const selectContacts = contactsSelectors.selectAll;
export const selectFilter = state => state.filter;
export const selectIsLoading = state => state.contacts.isLoading;
export const selectError = state => state.contacts.error;