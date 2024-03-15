import React from 'react';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import {
  contactsArrSelector,
  filterSelector,
  filteredContacts,
} from 'store/Selector';
import { getAllContactsThunk } from 'store/operations';

const ContactList = () => {
  // const filter = useSelector(filterSelector);
  // const contactsArr = useSelector(contactsArrSelector);

  const contacts = useSelector(filteredContacts);

  return (
    <ul>
      {contacts.map(contact => (
        <ContactItem key={contact.id} contact={contact} />
      ))}
    </ul>
  );
};

export default ContactList;
