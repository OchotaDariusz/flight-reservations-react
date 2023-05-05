import React from 'react';
import { Outlet } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';
import { Container, CssBaseline } from '@mui/material';

import {
  Footer,
  NavBar,
  ThemeColorWrapper,
} from '@flight-reservations/components';
import { useThemeCookie } from '@flight-reservations/hooks';

function App() {
  const mode = useThemeCookie();

  return (
    <ThemeColorWrapper>
      <CssBaseline />
      <NavBar />
      <Container>
        <Outlet />
      </Container>
      <ToastContainer
        position="bottom-center"
        autoClose={3000}
        limit={5}
        hideProgressBar={false}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss={false}
        draggable={false}
        pauseOnHover={true}
        theme={mode}
      />

      <Footer />
    </ThemeColorWrapper>
  );
}

export default App;
