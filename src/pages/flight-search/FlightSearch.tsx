import React, { useEffect } from 'react';
import { toast } from 'react-toastify';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { FlightSearchBox } from '@flight-reservations/components';
import { useTheme } from '@mui/material';

export const FlightSearch = () => {
  const theme = useTheme();
  const { mode: colorMode } = theme.palette;
  useEffect(() => {
    toast.success('success');
  }, [colorMode]);

  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        margin: '1.25rem',
        paddingTop: '1px',
        paddingBottom: '1.25rem',
        borderRadius: '4px',
        boxShadow: '0 0 1px rgba(255, 255, 255, 0.3)',
      }}
    >
      <Typography
        variant="h3"
        component="h1"
        gutterBottom
        sx={{
          textShadow: '0 0 50px rgba(0,0,0,0.25)',
          textDecorationStyle: 'solid',
          textAlign: 'center',
          margin: '5vh 0 5vh 0',
        }}
      >
        Flight Search
      </Typography>

      <Card
        variant="outlined"
        sx={{
          display: 'flex',
          flexDirection: 'column',
          placeItems: 'center',
          padding: '2rem',
          margin: '2rem',
        }}
      >
        <FlightSearchBox />
      </Card>
    </Box>
  );
};
