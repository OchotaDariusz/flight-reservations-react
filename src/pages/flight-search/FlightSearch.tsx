import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { SearchBox } from '../../components';

export const FlightSearch = () => {
  return (
    <Box>
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

      <Card variant="outlined">
        <SearchBox />
      </Card>
    </Box>
  );
};
