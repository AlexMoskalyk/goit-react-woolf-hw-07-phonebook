import axios from 'axios';

const BASE_URL = 'https://65f0a2a5da8c6584131c30ce.mockapi.io/contacts/';

export const fetchAllContacts = async () => {
  const response = await axios.get(BASE_URL);
  return response.data;
};

export const createNewContact = async newContact => {
  const response = await axios.post(BASE_URL, newContact, {
    headers: {
      'Content-Type': 'application/json',
    },
  });
  return response.data;
};

export const deleteContact = async contactId => {
  const response = await axios.delete(`${BASE_URL}${contactId}`);
  return response.data;
};
