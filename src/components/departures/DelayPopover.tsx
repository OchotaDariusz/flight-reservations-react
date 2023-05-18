import React, { useState } from 'react';
import { Chip, Popover } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';

type DelayPopoverProps = {
  delayed: number;
};

const DelayPopover: React.FC<DelayPopoverProps> = ({ delayed }) => {
  const [anchorEl, setAnchorEl] = useState<HTMLDivElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLDivElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'delay-popover' : undefined;

  const delayTime = delayed;
  let status: 'success' | 'warning' | 'error' = 'success';
  let icon = <CheckCircleIcon />;
  if (delayTime > 0 && delayTime <= 60) {
    status = 'warning';
    icon = <WarningIcon />;
  } else if (delayTime > 60) {
    status = 'error';
    icon = <ReportIcon />;
  }

  return (
    <>
      <Chip
        aria-owns={open ? id : undefined}
        aria-haspopup="true"
        onClickCapture={handleClick}
        variant="outlined"
        color={status}
        size="small"
        icon={icon}
        label={delayTime}
      />
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
        <Chip
          aria-owns={open ? id : undefined}
          aria-haspopup="true"
          onClickCapture={handleClick}
          variant="outlined"
          color={status}
          size="small"
          icon={icon}
          label={delayTime}
        />
      </Popover>
    </>
  );
};

export default DelayPopover;
