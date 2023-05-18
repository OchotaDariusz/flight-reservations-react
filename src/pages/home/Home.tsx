import React from 'react';
import { useNavigate } from 'react-router-dom';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import Typography from '@mui/material/Typography';

import { VideoContainer } from '@flight-reservations/components';
import { useWindowSize } from '@flight-reservations/hooks';
import styles from './Home.module.scss';

export const Home = () => {
  const navigate = useNavigate();
  const windowSize = useWindowSize();

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
          marginBottom: '10%',
        }}
      >
        <Button
          variant="contained"
          size="large"
          color="secondary"
          onClick={() => navigate('/search')}
          disableElevation
          sx={{
            marginBottom: '1.5rem',
          }}
        >
          Search Destinations
        </Button>
        <Divider />
        <Typography variant="subtitle1" component="p" gutterBottom pt={2}>
          Welcome to The Flight Reservation System.
        </Typography>
      </Box>
      {windowSize >= 1280 && <VideoContainer />}
    </div>
  );
};
