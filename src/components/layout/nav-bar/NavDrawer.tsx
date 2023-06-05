import React from 'react';
import { Link } from 'react-router-dom';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import ListItemText from '@mui/material/ListItemText';
import Drawer from '@mui/material/Drawer';
import { useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

import { ThemeSwitchButton } from '@flight-reservations/components';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

type NavDrawerProps = {
  isOpen: boolean;
  handleDrawerClose: () => void;
};
const NavDrawer = ({ isOpen, handleDrawerClose }: NavDrawerProps) => {
  const theme = useTheme();

  const pages = {
    home: {
      title: 'Home',
      route: '',
    },
    search: {
      title: 'Flight Search',
      route: 'search',
    },
    about: {
      title: 'About',
      route: 'about',
    },
  };

  return (
    <Drawer
      sx={{
        width: 240,
        flexShrink: 0,
        '& .MuiDrawer-paper': {
          width: 240,
          boxSizing: 'border-box',
        },
      }}
      variant="persistent"
      anchor="left"
      open={isOpen}
      onClose={handleDrawerClose}
    >
      <DrawerHeader>
        <ThemeSwitchButton />
        <IconButton onClick={handleDrawerClose}>
          {theme.direction === 'ltr' ? (
            <ChevronLeftIcon />
          ) : (
            <ChevronRightIcon />
          )}
        </IconButton>
      </DrawerHeader>
      <Divider />
      <List>
        {Object.entries(pages).map(([entryKey, { title, route }]) => (
          <ListItem key={entryKey} onClick={handleDrawerClose} disablePadding>
            <Link to={`/${route}`}>
              <ListItemButton>
                <ListItemIcon>
                  {entryKey === 'home' && <HomeIcon />}
                  {entryKey === 'search' && <FlightTakeoffIcon />}
                  {entryKey === 'about' && <HelpOutlineIcon />}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
