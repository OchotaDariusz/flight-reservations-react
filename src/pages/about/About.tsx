import React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import { Link } from 'react-router-dom';

export const About = () => {
  return (
    <Box
      sx={{
        textAlign: 'center',
        marginTop: '1.25rem',
      }}
    >
      <Typography variant="h3" component="h3" gutterBottom pt={2}>
        This App was created only for educational purposes.
      </Typography>
      <Divider />
      <Typography variant="subtitle1" component="p" gutterBottom pt={2}>
        Developers:
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        gutterBottom
        sx={{
          '&:hover': {
            color: '#ccc',
          },
        }}
      >
        <Link to="https://github.com/szopszop">Szymon Tracz</Link>
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        gutterBottom
        sx={{
          '&:hover': {
            color: '#ccc',
          },
        }}
      >
        <Link to="https://github.com/OchotaDariusz">Dariusz Ochota</Link>
      </Typography>
    </Box>
  );
};
