import axios from 'axios';

axios.defaults.baseURL = 'https://6355e6ac483f5d2df3bb025a.mockapi.io';

export const fetchAllContacts = async () => {
  const response = await axios.get('/contacts');
  return response.data;
};

export const postContact = async newContact => {
  const response = await axios.post('/contacts', newContact);
  return response.data;
};
export const deleteContactById = async id => {
  await axios.delete(`/contacts/${id}`);
};
