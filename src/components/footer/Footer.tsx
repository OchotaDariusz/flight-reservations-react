import React from 'react';

import styles from './Footer.module.css';
import { useTheme } from '@mui/material';

export const Footer = () => {
  const theme = useTheme();

  return (
    <footer
      className={
        theme.palette.mode === 'light'
          ? styles['footer__light']
          : styles['footer__dark']
      }
    >
      <div>
        <h6>&copy; 2023</h6>
      </div>
    </footer>
  );
};
