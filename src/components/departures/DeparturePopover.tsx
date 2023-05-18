import React, { useState } from 'react';
import { Popover, Typography } from '@mui/material';

type DeparturePopoverProps = {
  departureTimeUtc: string;
};

const DeparturePopover: React.FC<DeparturePopoverProps> = ({
  departureTimeUtc,
}) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'departure-popover' : undefined;

  const date = new Date(departureTimeUtc);
  const formatedDate = new Intl.DateTimeFormat(undefined, {
    dateStyle: window.innerWidth > 400 ? 'medium' : 'short',
    timeStyle: window.innerWidth > 400 ? 'medium' : 'short',
  })
    .format(date)
    .toString();

  return (
    <>
      <Typography
        aria-owns={open ? id : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {formatedDate}
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
        <Typography sx={{ p: 2 }}>{formatedDate}</Typography>
      </Popover>
    </>
  );
};

export default DeparturePopover;
