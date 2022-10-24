import React from 'react';
import * as yup from 'yup';
import { Formik, Form, ErrorMessage } from 'formik';
import { FormField, Input, Label, ErrorMessageStyle } from './Form.styled';
import { addContact } from '../../redux/contactsSlice';
import { useDispatch, useSelector } from 'react-redux';
import { getContacts } from '../../redux/storeSelectors';
import { createValidContact } from '../../helpers';
import Button from '../Button';

const nameRegEx = /^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$/;
const phoneRegEx =
  /\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}/;

const schema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRegEx, 'The name must contain only characters')
    .required(),
  number: yup
    .string()
    .matches(phoneRegEx, 'Phone number is not valid')
    .min(7, "It's not looks like phone!")
    .max(13, 'Must be minimum 7 maximum 13 digits ')
    .required(),
});

export const AppForm = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(getContacts);

  const handleSubmit = (values, { resetForm }) => {
    const contact = createValidContact(values, contacts);
    dispatch(addContact(contact));
    resetForm();
  };

  return (
    <div>
      <Formik
        initialValues={{ name: '', number: '' }}
        validationSchema={schema}
        onSubmit={handleSubmit}
      >
        <Form>
          <FormField>
            <Label htmlFor="name">Contact Name</Label>
            <Input name="name" type="text" placeholder=" " />
            <ErrorMessage
              name="name"
              render={msg => <ErrorMessageStyle>{msg}</ErrorMessageStyle>}
            />
          </FormField>

          <FormField>
            <Label htmlFor="number">Contact Number</Label>
            <Input name="number" type="tel" placeholder=" " />
            <ErrorMessage
              name="number"
              render={msg => <ErrorMessageStyle>{msg}</ErrorMessageStyle>}
            />
          </FormField>

          <Button type={'submit'} title={'Add Contact'} />
        </Form>
      </Formik>
    </div>
  );
};

export default AppForm;
