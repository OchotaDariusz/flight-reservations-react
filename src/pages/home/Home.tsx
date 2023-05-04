import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { VideoContainer } from '@flight-reservations/components';
import styles from './Home.module.scss';

export const Home = () => {
  return (
    <div className={styles['home-container']}>
      <Box
        sx={{
          background: 'rgba(255,255,255,0.3)',
          boxShadow: '0 0 10px 10px rgba(255,255,255,0.3)',
          borderRadius: '24px',
          marginTop: '10%',
          paddingTop: '1.5rem',
          paddingBottom: '1.5rem',
        }}
      >
        <Button variant="outlined">Welcome</Button>
        <Typography
          variant="h1"
          component="h1"
          gutterBottom
          sx={{
            fontWeight: 'bold',
            color: 'white',
            textShadow: '0 0 50px rgba(0,0,0,0.25)',
            textDecorationStyle: 'solid',
          }}
        >
          Welcome!
        </Typography>
        <Divider />
        <Typography variant="subtitle1" component="p" gutterBottom pt={2}>
          This is flight reservation system
        </Typography>
      </Box>
      <VideoContainer />
    </div>
  );
};
