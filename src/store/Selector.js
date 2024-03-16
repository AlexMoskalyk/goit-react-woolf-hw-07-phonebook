import { createSelector } from '@reduxjs/toolkit';

export const contactsArrSelector = state => state.root.contacts.items;
export const filterSelector = state => state.root.filter;

export const filteredContacts = createSelector(
  contactsArrSelector,
  filterSelector,
  (contacts, filterValue) => {
    return contacts.length > 0
      ? contacts.filter(contact =>
          contact.name.toLowerCase().includes(filterValue?.toLowerCase())
        )
      : [];
  }
);
