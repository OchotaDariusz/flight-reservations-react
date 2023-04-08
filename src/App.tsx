import React from 'react';
import { Outlet } from 'react-router-dom';
import { Container } from '@mui/material';

import { Footer, NavBar, ThemeColorWrapper } from './components';

function App() {
  return (
    <ThemeColorWrapper>
      <NavBar />
      <Container>
        <Outlet />
      </Container>
      <Footer />
    </ThemeColorWrapper>
  );
}

export default App;
