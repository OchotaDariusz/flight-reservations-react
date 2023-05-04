import React, { ReactNode } from 'react';
import { ThemeProvider } from '@mui/material/styles';

import { useCustomTheme } from '@flight-reservations/hooks';
import { ColorModeContext } from '@flight-reservations/store/context';

type ThemeColorWrapperProps = {
  children: ReactNode;
};

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

  const theme = useCustomTheme(mode);

  return (
    <ColorModeContext.Provider value={colorMode}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ColorModeContext.Provider>
  );
}
