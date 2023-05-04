import React from 'react';
import { createTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

export const useCustomTheme = (mode: 'light' | 'dark') => {
  return React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          // background: {
          //   default: mode === 'light' ? '#fff' : '#bbb',
          // },
          primary: {
            main: mode === 'light' ? indigo[400] : indigo[700],
          },
          secondary: {
            main: mode === 'light' ? indigo[600] : indigo[800],
          },
          error: {
            main: mode === 'light' ? '#e53935' : '#f44336',
          },
          info: {
            main: mode === 'light' ? '#84ffff' : '#40c4ff',
          },
          success: {
            main: mode === 'light' ? '#9ccc65' : '#7cb342',
          },
        },
      }),
    [mode],
  );
};
