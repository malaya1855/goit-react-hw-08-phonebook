import { Box, Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
      <NavLink
        as={Link}
        to="./login"
        style={{ color: 'rgb(72, 76, 122)', textDecoration: 'none' }}
      >
        Sign In
      </NavLink>
      <NavLink
        as={Link}
        to="./register"
        style={{ color: 'rgb(72, 76, 122)', textDecoration: 'none' }}
      >
        Sign Up
      </NavLink>
    </Box>
  );
};
