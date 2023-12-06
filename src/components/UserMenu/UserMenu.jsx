import { Button, SvgIcon } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'useAuth';

export const UserMenu = () => {
  const { user } = useAuth();
  const dispatch = useDispatch();

  return (
    <div>
      <p>Welcome to your contacts {user.name}</p>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        sx={{
          // marginLeft: 'auto',
          // marginRight: 'auto',

          width: '45px',
          color: 'rgb(72, 76, 122)',
          boxShadow:
            '0 4px 11px 0 rgb(37 44 97 / 15%), 0 1px 3px 0 rgb(93 100 148 / 20%)',
          transition: 'all 0.2s ease-out',
        }}
      >
        <SvgIcon
          component={ExitToAppIcon}
          sx={{ fontSize: '20px', color: 'rgb(72, 76, 122)' }}
        ></SvgIcon>{' '}
      </Button>
    </div>
  );
};
