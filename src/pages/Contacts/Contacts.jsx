import {
  ContactList,
  Filter,
  PhoneBookForm,
  Title,
  ContactListForm,
} from 'components';
import { useEffect } from 'react';
import { fetchContacts } from 'redux/contacts/operations';
import { useDispatch, useSelector } from 'react-redux';
import 'primeicons/primeicons.css';
import {
  selectError,
  selectIsLoading,
  selectContacts,
} from 'redux/contacts/selectors';
import { LoaderProgress } from 'components/LoaderProgress';
import { Box } from '@mui/material';
import { ModalNewContact } from 'components/Modal';
const style = {
  display: 'flex',
  justifyContent: 'space-evenly',
  alignItems: 'center',
  width: '100%',
};

export default function Contacts() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const allContacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <PhoneBookForm>
      <ContactListForm>
        <Title>My Contacts</Title>
        {isLoading && <LoaderProgress />}
        {error && <p>{error.message}</p>}
        {allContacts.length === 0 ? (
          !isLoading && (
            <Box sx={style}>
              <ModalNewContact />
              <p>No saved contacts</p>
            </Box>
          )
        ) : (
          <div>
            <Box sx={style}>
              <ModalNewContact />
              <Filter />
            </Box>
            <ContactList />
          </div>
        )}
      </ContactListForm>
    </PhoneBookForm>
  );
}
