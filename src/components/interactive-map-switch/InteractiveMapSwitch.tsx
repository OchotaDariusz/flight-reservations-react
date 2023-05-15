import React from 'react';
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';
import FormGroup from '@mui/material/FormGroup';

type InteractiveMapSwitchProps = {
  onChange: (state: boolean) => void;
};

const InteractiveMapSwitch: React.FC<InteractiveMapSwitchProps> = (props) => {
  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    props.onChange(event.target.checked);
  };

  return (
    <FormGroup>
      <FormControlLabel
        control={<Switch onChange={handleSwitchChange} />}
        label="Interactive map"
      />
    </FormGroup>
  );
};

export default InteractiveMapSwitch;
