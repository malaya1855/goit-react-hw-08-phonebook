import { UserMenu } from './UserMenu';
import { AuthMenu } from './AuthMenu';
import { useAuth } from 'components/useAuth';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from '@mui/material';
import { NavLink } from 'react-router-dom';

export const AppBarMenu = () => {
  const { isLoggedIn } = useAuth();

  return (
    <Box sx={{ width: '1000px', marginLeft: 'auto', marginRight: 'auto' }}>
      <AppBar
        position="static"
        sx={{ backgroundColor: '#f5f5fa', color: 'rgb(72, 76, 122)' }}
      >
        <Toolbar>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              width: '100%',
            }}
          >
            <Box sx={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
              <NavLink
                as={Link}
                to="./"
                style={{ color: 'rgb(72, 76, 122)', textDecoration: 'none' }}
              >
                Home
              </NavLink>
              {isLoggedIn && (
                <NavLink
                  as={Link}
                  to="./contacts"
                  style={{ color: 'rgb(72, 76, 122)', textDecoration: 'none' }}
                >
                  Contacts
                </NavLink>
              )}
            </Box>
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};
