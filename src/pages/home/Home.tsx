import * as React from 'react';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';

import styles from './Home.module.scss';
import { VideoContainer } from '../../components';
import Box from '@mui/material/Box';

// <iframe src="https://player.vimeo.com/video/820590525?h=f8021c95d3" width="640" height="564" frameBorder="0"
//         allow="autoplay; fullscreen" allowFullScreen></iframe>
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
