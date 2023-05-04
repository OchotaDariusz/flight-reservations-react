import React from 'react';
import { styled } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import Toolbar from '@mui/material/Toolbar';
import { ClickAwayListener } from '@mui/material';

import NavDrawer from './NavDrawer';
import SearchBar from './SearchBar';

const StyledToolbar = styled(Toolbar)(({ theme }) => ({
  alignItems: 'flex-start',
  paddingTop: theme.spacing(1),
  paddingBottom: theme.spacing(2),
  // Override media queries injected by theme.mixins.toolbar
  '@media all': {
    minHeight: 128,
  },
}));

export const NavBar = () => {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setIsOpen(true);
  };

  const handleDrawerClose = () => {
    setIsOpen(false);
  };

  return (
    <ClickAwayListener onClickAway={handleDrawerClose}>
      <Box sx={{ flexGrow: 1 }}>
        <AppBar position="static" color={'secondary'}>
          <StyledToolbar>
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              onClick={handleDrawerOpen}
              aria-label="open drawer"
              sx={{ mr: 2 }}
            >
              <MenuIcon />
            </IconButton>
            <Typography
              variant="h5"
              noWrap
              component="div"
              sx={{ flexGrow: 1, alignSelf: 'flex-end' }}
            >
              Flight Reservations
            </Typography>
            <Box
              sx={{
                marginTop: 'auto',
                marginBottom: 'auto',
                '&:hover': {
                  background: 'none',
                },
              }}
            >
              <SearchBar />
            </Box>
            <IconButton
              size="large"
              aria-label="account"
              edge="end"
              color="inherit"
              sx={{
                marginTop: 'auto',
                marginBottom: 'auto',
              }}
            >
              <AccountCircleIcon sx={{ fontSize: '2.5rem' }} />
            </IconButton>
          </StyledToolbar>
        </AppBar>
        <NavDrawer isOpen={isOpen} handleDrawerClose={handleDrawerClose} />
      </Box>
    </ClickAwayListener>
  );
};
