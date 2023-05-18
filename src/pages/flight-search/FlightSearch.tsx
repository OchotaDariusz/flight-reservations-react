import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';

import { FlightSearchBox } from '@flight-reservations/components';

export const FlightSearch = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'rgba(255, 255, 255, 0.3)',
        margin: {
          xs: '.25rem',
          sm: '1.25rem',
        },
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
          padding: {
            xs: '.5rem',
            sm: '2rem',
            md: '4rem',
          },
          margin: {
            xs: '.5rem',
            sm: '2rem',
            md: '4rem',
          },
        }}
      >
        <FlightSearchBox />
      </Card>
    </Box>
  );
};
