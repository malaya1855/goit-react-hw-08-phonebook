import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <div>
      <NavLink to="/login">Sign In</NavLink>
      <NavLink to="/register">Sign Up</NavLink>
    </div>
  );
};
