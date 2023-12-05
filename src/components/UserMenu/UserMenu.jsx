import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'useAuth';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome to your contacts {user.name}</p>
      <button type="button" onClick={() => dispatch(logOut())}>
        Sign Out
      </button>
    </div>
  );
};
