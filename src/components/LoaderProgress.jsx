import { Box, LinearProgress } from '@mui/material';

export const LoaderProgress = () => {
  return (
    <Box sx={{ color: 'rgb(72, 76, 122)' }}>
      <LinearProgress color="inherit" />
    </Box>
  );
};
