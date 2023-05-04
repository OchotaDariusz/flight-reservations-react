import React from 'react';

import styles from './Footer.module.scss';
import { useTheme } from '@mui/material';

export const Footer = () => {
  const theme = useTheme();
  const classes =
    theme.palette.mode === 'light'
      ? styles['footer__light']
      : styles['footer__dark'];

  return (
    <footer className={styles['footer'] + ' ' + classes}>
      <div>
        <h6>&copy; 2023</h6>
      </div>
    </footer>
  );
};
