import { NavLink } from 'react-router-dom';

export const AppBar = () => {
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        <NavLink to="/contacts">Contacts</NavLink>
        <NavLink to="/login">LogIn</NavLink>
        <NavLink to="/register">NewUser</NavLink>
      </nav>
    </header>
  );
};
