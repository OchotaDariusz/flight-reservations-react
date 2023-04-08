import React, { ReactNode } from 'react';
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { indigo } from '@mui/material/colors';

export const ColorModeContext = React.createContext({
  // eslint-disable-next-line @typescript-eslint/no-empty-function
  toggleColorMode: () => {},
});

interface ThemeColorWrapperProps {
  children: ReactNode;
}

export function ThemeColorWrapper({ children }: ThemeColorWrapperProps) {
  const [mode, setMode] = React.useState<'light' | 'dark'>('light');
  const colorMode = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => (prevMode === 'light' ? 'dark' : 'light'));
      },
    }),
    [],
  );

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          mode,
          primary: {
            main: indigo[400],
          },
          secondary: {
            main: indigo[600],
          },
          error: {
            main: '#e53935',
          },
          info: {
            main: '#84ffff',
          },
          success: {
            main: '#9ccc65',
          },
        },
      }),
    [mode],
  );

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
