import React from 'react';
import { CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';

export const LoadingBox = () => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
      }}
    >
      <CircularProgress />
    </Box>
  );
};
