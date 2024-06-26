import { Box, Button, SvgIcon, Typography } from '@mui/material';
import ExitToAppIcon from '@mui/icons-material/ExitToApp';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/operations';
import { useAuth } from 'components/useAuth';

export const UserMenu = () => {
  const { user } = useAuth() || {};
  const dispatch = useDispatch();
  return (
    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <Typography>Welcome to your contacts, {user.name}</Typography>
      <Button
        type="button"
        onClick={() => dispatch(logOut())}
        sx={{
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
        ></SvgIcon>
      </Button>
    </Box>
  );
};
