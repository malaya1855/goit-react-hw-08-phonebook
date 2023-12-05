import { NavLink } from 'react-router-dom';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { useAuth } from 'useAuth';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header>
      <nav>
        <NavLink to="/">Home</NavLink>
        {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
      </nav>
      {isLoggedIn ? <UserMenu /> : <AuthMenu />}
    </header>
  );
};
