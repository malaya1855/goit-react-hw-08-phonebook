import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <div>
      <NavLink to="/login">LogIn</NavLink>
      <NavLink to="/register">NewUser</NavLink>
    </div>
  );
};
