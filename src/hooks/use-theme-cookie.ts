import { useEffect, useState } from 'react';
import { getCookieValue } from '@flight-reservations/utils';

export const useThemeCookie = (): 'light' | 'dark' => {
  const [mode, setMode] = useState<'light' | 'dark'>(
    (getCookieValue('theme') as 'light' | 'dark') === 'light'
      ? 'light'
      : 'dark',
  );

  useEffect(() => {
    const themeCheckTimer = setInterval(() => {
      setMode(
        (getCookieValue('theme') as 'light' | 'dark') === 'light'
          ? 'light'
          : 'dark',
      );
    }, 5000);

    return () => {
      clearInterval(themeCheckTimer);
    };
  }, []);

  return mode;
};
