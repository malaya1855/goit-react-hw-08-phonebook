import { Box } from '@mui/material';
import { Link } from 'react-router-dom';
import { useAuth } from 'components/useAuth';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        alignItems: 'center',
        marginTop: '150px',
      }}
    >
      <h1>Welcome to your Phone Book</h1>
      {isLoggedIn ? (
        <p>
          Visit your <Link to="./contacts">Contacts Page</Link>
        </p>
      ) : (
        <p>
          To start, please <Link to="./login">sign in</Link> or
          <Link to="./register"> create new account.</Link>
        </p>
      )}
    </Box>
  );
}
