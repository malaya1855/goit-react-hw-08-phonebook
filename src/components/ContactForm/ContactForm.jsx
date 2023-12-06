import { Form, Input } from 'components';
import { useDispatch, useSelector } from 'react-redux';
import { addContact } from 'redux/contacts/operations';
import { InputMask } from 'primereact/inputmask';
import { selectContacts } from 'redux/contacts/selectors';
import PersonAddIcon from '@mui/icons-material/PersonAdd';
import { Button, SvgIcon } from '@mui/material';

export const ContactForm = () => {
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
      alert(`${newContact.name} is already in your contacts`);
    } else {
      dispatch(addContact(newContact));
    }
  };

  return (
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
  );
};
