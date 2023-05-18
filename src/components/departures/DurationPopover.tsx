import React, { useState } from 'react';
import { Popover, Typography } from '@mui/material';

type DurationPopoverProps = {
  duration: number;
};

const DurationPopover: React.FC<DurationPopoverProps> = ({ duration }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'duration-popover' : undefined;

  return (
    <>
      <Typography
        aria-owns={open ? id : undefined}
        aria-haspopup="true"
        onClick={handleClick}
      >
        {`${duration}m`}
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
        <Typography sx={{ p: 2 }}>{`${duration}m`}</Typography>
      </Popover>
    </>
  );
};

export default DurationPopover;
