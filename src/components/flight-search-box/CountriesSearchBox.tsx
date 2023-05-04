import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type CountriesSearchBoxProps = {
  onCountryChange: (country: Country) => void;
};

export const CountriesSearchBox: React.FC<CountriesSearchBoxProps> = (
  props,
) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (countries.length === 0) {
      fetch('/api/v1/country/all')
        .then((data) => data.json())
        .then((data: Country[]) => {
          setCountries(data.flat());
        })
        .catch((err) => console.error(err.message));
    }
  }, [countries]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={countries}
      getOptionLabel={(option) => option.name}
      onChange={(_event, value) => {
        props.onCountryChange(value as Country);
      }}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
};
