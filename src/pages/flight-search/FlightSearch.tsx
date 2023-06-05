import React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Typography from '@mui/material/Typography';
import { useTheme } from '@mui/material';

import { FlightSearchBox } from '@flight-reservations/components';
import classes from './FlightSearch.module.scss';

export const FlightSearch = () => {
  const theme = useTheme();

  const backgroundClasses =
    theme.palette.mode === 'light'
      ? classes['background-illustration__light']
      : classes['background-illustration__dark'];

  return (
    <>
      <Box
        sx={{
          margin: {
            xs: '.25rem',
            sm: '1.25rem',
          },
          paddingTop: '1px',
          paddingBottom: '1.25rem',
          opacity: '.95',
          maskImage: {
            xs: 'none',
            sm: 'linear-gradient(to left, rgba(0, 0, 0, 0) 7%, rgba(0, 0, 0, 1)10%,rgba(0, 0, 0, 1)90%, rgba(0, 0, 0, 0) 93%)',
          },
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
            border: 'none',
            padding: {
              xs: '2rem 1rem 2rem 1rem',
              sm: '4rem',
              md: '6rem 8rem 6rem 8rem',
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
      <div
        className={classes['background-illustration'] + ' ' + backgroundClasses}
      ></div>
    </>
  );
};
