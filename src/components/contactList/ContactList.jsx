import React from 'react';
import ContactItem from './ContactItem';
import { useSelector } from 'react-redux';
import { filteredContacts } from 'store/Selector';

const ContactList = () => {
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
