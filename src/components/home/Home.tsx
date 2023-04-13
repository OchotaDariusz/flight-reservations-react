import * as React from 'react';
import Typography from '@mui/material/Typography';

import styles from './Home.module.scss';
import Divider from '@mui/material/Divider';

export const Home = () => {
  return (
    <div className={styles['home-container']}>
      <Typography variant="h3" component="h2" gutterBottom>
        Welcome!
      </Typography>
      <Divider />
      <Typography variant="subtitle1" component="p" gutterBottom pt={2}>
        This is flight reservation system
      </Typography>
      {/*<img src={'https://source.unsplash.com/random'} im alt="image" />*/}
    </div>
  );
};
