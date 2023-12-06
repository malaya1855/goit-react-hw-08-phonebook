import {
  ContactList,
  Filter,
  ContactForm,
  InfoTable,
  PhoneBookForm,
  Title,
  NewContactForm,
  Subtitle,
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

export const Contacts = () => {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  const allContacts = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <PhoneBookForm>
      <Title>My Phonebook</Title>
      <InfoTable>
        <NewContactForm>
          <Subtitle>Add new contact</Subtitle>
          <ContactForm />
        </NewContactForm>

        <ContactListForm>
          <Subtitle>My contacts</Subtitle>

          {isLoading && <LoaderProgress />}
          {error && <p>{error.message}</p>}
          {allContacts.length === 0 ? (
            !isLoading && <p>No saved contacts</p>
          ) : (
            <div>
              <Filter />
              <ContactList />
            </div>
          )}
        </ContactListForm>
      </InfoTable>
    </PhoneBookForm>
  );
};
