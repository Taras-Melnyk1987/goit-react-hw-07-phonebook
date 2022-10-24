import React from 'react';

import IconButton from '../IconButton';
import { FaTrashAlt } from 'react-icons/fa';
import { List, Item, Name, Number } from './ContactList.styles';
import { useSelector, useDispatch } from 'react-redux';
import { removeContact } from '../../redux/contactsSlice';
import { getContacts, getFilterValue } from '../../redux/storeSelectors';
import { showfilteredContacts } from '../../helpers';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);
  const filter = useSelector(getFilterValue);
  const filteredContacts = showfilteredContacts(contacts, filter);

  return (
    <List>
      {filteredContacts.map(contact => {
        const { id, name, number } = contact;
        return (
          <Item key={id}>
            <Name>{name}</Name>
            <Number>{number}</Number>
            <IconButton
              type="button"
              background="blue"
              aria-label="Button to delete contact"
              onClick={() => dispatch(removeContact({ id, name }))}
            >
              <FaTrashAlt />
            </IconButton>
          </Item>
        );
      })}
    </List>
  );
};

export default ContactList;
