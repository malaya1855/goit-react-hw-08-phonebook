// import { useEffect } from 'react';
// import { useDispatch } from 'react-redux';
import 'primeicons/primeicons.css';
// import { selectError, selectIsLoading, selectContacts } from 'redux/selectors';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from 'pages/Home';
import { NewUserPage } from 'pages/NewUser';
import { ContactsPage } from 'pages/Contacts';
import { LogInPage } from 'pages/LogIn';
import { Layout } from 'Layout';

const App = () => {
  // const dispatch = useDispatch();
  // const isLoading = useSelector(selectIsLoading);
  // const error = useSelector(selectError);

  return (
    <Routes>
      <Route path="/" element={<Layout />} />
      <Route index element={<HomePage />} />
      <Route path="/register" element={<NewUserPage />} />
      <Route path="/login" element={<LogInPage />} />
      <Route path="/contacts" element={<ContactsPage />} />
    </Routes>
  );
};

export default App;
