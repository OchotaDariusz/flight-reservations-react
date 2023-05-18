import React, { useState } from 'react';
import { Popover, Typography } from '@mui/material';

type AirportPopoverProps = {
  airportName: string;
};

const AirportPopover: React.FC<AirportPopoverProps> = ({ airportName }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'airport-popover' : undefined;

  return (
    <>
      <Typography
        aria-owns={open ? id : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {airportName}
      </Typography>
      <Popover
        id={id}
        open={open}
        anchorEl={anchorEl}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'top',
          horizontal: 'center',
        }}
        transformOrigin={{
          vertical: 'center',
          horizontal: 'center',
        }}
      >
        <Typography sx={{ p: 2 }}>{airportName}</Typography>
      </Popover>
    </>
  );
};

export default AirportPopover;
