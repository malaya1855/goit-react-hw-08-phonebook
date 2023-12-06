import { Box, Button } from '@mui/material';
// import { NavLink } from 'react-router-dom';

export const AuthMenu = () => {
  return (
    <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
      <Button
        to="/login"
        // onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Sign In
      </Button>
      <Button
        to="/register"
        // onClick={handleCloseNavMenu}
        sx={{ my: 2, color: 'white', display: 'block' }}
      >
        Sign Up
      </Button>
    </Box>
    // <div>
    //   <NavLink to="/login">Sign In</NavLink>
    //   <NavLink to="/register">Sign Up</NavLink>
    // </div>
  );
};
