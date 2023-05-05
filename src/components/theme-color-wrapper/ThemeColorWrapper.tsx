import React, { useState, ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { useCustomTheme } from '@flight-reservations/hooks';
import { ColorModeContext } from '@flight-reservations/store/context';
import { getCookieValue, setThemeCookie } from '@flight-reservations/utils';

type ThemeColorWrapperProps = {
  children: ReactNode;
};

export function ThemeColorWrapper({ children }: ThemeColorWrapperProps) {
  const [mode, setMode] = useState<'light' | 'dark'>(
    (getCookieValue('theme') as 'light' | 'dark') === 'light'
      ? 'light'
      : 'dark',
  );
  const colorTheme = React.useMemo(
    () => ({
      toggleColorMode: () => {
        setMode((prevMode) => {
          setThemeCookie(prevMode === 'light' ? 'dark' : 'light');
          return prevMode === 'light' ? 'dark' : 'light';
        });
      },
    }),
    [],
  );

  const theme = useCustomTheme(mode);

  return (
    <ColorModeContext.Provider value={colorTheme}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
