import { ThemeSwitchButton } from '../theme-switch-button/ThemeSwitchButton';
import IconButton from '@mui/material/IconButton';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import { Link } from 'react-router-dom';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import HomeIcon from '@mui/icons-material/Home';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import HelpOutlineIcon from '@mui/icons-material/HelpOutline';
import MailIcon from '@mui/icons-material/Mail';
import ListItemText from '@mui/material/ListItemText';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import LogoutIcon from '@mui/icons-material/Logout';
import Drawer from '@mui/material/Drawer';
import * as React from 'react';
import { useTheme } from '@mui/material';
import { styled } from '@mui/material/styles';

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
  justifyContent: 'flex-end',
}));

interface NavDrawerProps {
  isOpen: boolean;
  handleDrawerClose: () => void;
}
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
    contact: {
      title: 'Contact',
      route: 'contact',
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
          <ListItem key={entryKey} disablePadding>
            <Link to={`/${route}`}>
              <ListItemButton>
                <ListItemIcon>
                  {entryKey === 'home' && <HomeIcon />}
                  {entryKey === 'search' && <FlightTakeoffIcon />}
                  {entryKey === 'about' && <HelpOutlineIcon />}
                  {entryKey === 'contact' && <MailIcon />}
                </ListItemIcon>
                <ListItemText primary={title} />
              </ListItemButton>
            </Link>
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {['Account', 'Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <AccountCircleIcon /> : <LogoutIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Drawer>
  );
};

export default NavDrawer;
