import { NavLink } from 'react-router-dom';
import { UserMenu } from './UserMenu/UserMenu';
import { AuthMenu } from './AuthMenu/AuthMenu';
import { useAuth } from 'useAuth';

import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';

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
              width: '100%',
            }}
          >
            <Box>
              <NavLink to="/">Home</NavLink>
              {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
            </Box>
            {isLoggedIn ? <UserMenu /> : <AuthMenu />}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

// import { AppBarMenu, MenuContainer } from './AppBar.styled';

// export const AppBar = () => {
//   return (
//     <header>
//       <MenuContainer>
//         <AppBarMenu>
//           <nav>
//             <NavLink to="/">Home</NavLink>
//             {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>}
//           </nav>
//           {isLoggedIn ? <UserMenu /> : <AuthMenu />}
//         </AppBarMenu>
//       </MenuContainer>
//     </header>
//   );
// };
