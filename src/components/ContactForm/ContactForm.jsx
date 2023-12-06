import { Form, Input, Subtitle } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { InputMask } from 'primereact/inputmask';
import { selectContacts } from 'redux/contacts/selectors';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, SvgIcon } from '@mui/material';
import { Notify } from 'notiflix/build/notiflix-notify-aio';

import * as React from 'react';
import Box from '@mui/material/Box';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 300,
  bgcolor: '#f5f5fa',
  borderRadius: '50px',
  boxShadow:
    '0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%)',
  p: 4,
};

export const ContactForm = ({ onClose }) => {
  const allContacts = useSelector(selectContacts);
  const dispatch = useDispatch();

  const onSubmitForm = ev => {
    ev.preventDefault();
    const currentElement = ev.currentTarget.elements;
    const name = currentElement.name.value.trim();
    const number = currentElement.number.value;

    const newContact = { name, number };

    ev.target.reset();
    const existedContact = allContacts.find(
      contact => contact.name.toLowerCase() === newContact.name.toLowerCase()
    );
    if (existedContact) {
      Notify.warning(`${newContact.name} is already in your contacts`);
    } else {
      dispatch(addContact(newContact));
      Notify.success('Contact is saved');
      onClose();
    }
  };

  return (
    <Box sx={style}>
      <Subtitle>Add new contact</Subtitle>
      <Form onSubmit={onSubmitForm}>
        <label htmlFor="name">
          <Input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
          />
        </label>
        <label htmlFor="number">
          <Input
            as={InputMask}
            type="tel"
            name="number"
            mask="+39 999-9999999"
            placeholder="Phone number"
            required
          />
        </label>
        <Button
          type="sybmit"
          sx={{
            marginLeft: 'auto',
            marginRight: 'auto',

            width: '45px',
            color: 'rgb(72, 76, 122)',
            boxShadow:
              '0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%)',
            transition: 'all 0.2s ease-out',
          }}
        >
          <SvgIcon
            component={PersonAddIcon}
            sx={{ fontSize: '20px', color: 'rgb(72, 76, 122)' }}
          ></SvgIcon>
        </Button>
      </Form>
    </Box>
  );
};
