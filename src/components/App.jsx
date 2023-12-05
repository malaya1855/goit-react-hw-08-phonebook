import { Route, Routes } from 'react-router-dom';

import { Layout } from 'components/Layout';
import { lazy } from 'react';

const HomePage = lazy(() => import('../pages/Home'));
const NewUserPage = lazy(() => import('../pages/NewUser'));
const LogInPage = lazy(() => import('../pages/LogIn'));
const ContactsPage = lazy(() => import('../pages/Contacts/Contacts'));

export const App = () => {
  console.log(window.location.href);
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/register" element={<NewUserPage />} />
        <Route path="/login" element={<LogInPage />} />
        <Route path="/contacts" element={<ContactsPage />} />
      </Route>
    </Routes>
  );
};
