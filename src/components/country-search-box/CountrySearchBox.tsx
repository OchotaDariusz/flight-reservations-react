import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import { toast } from 'react-toastify';

type CountriesSearchBoxProps = {
  onCountryChange: (country: Country) => void;
};

export const CountrySearchBox: React.FC<CountriesSearchBoxProps> = (props) => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (countries.length === 0) {
      fetch(`${process.env.REACT_APP_BACKEND_HOST}/country/all`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        cache: 'no-store',
      })
        .then((data) => data.json())
        .then((data: Country[]) => {
          setCountries(data.flat());
        })
        .catch((err) => toast.error(err.message));
    }
  }, [countries]);

  return (
    <Autocomplete
      disablePortal
      noOptionsText="Loading..."
      options={countries}
      getOptionLabel={(option) => option.name}
      onChange={(_event, value) => {
        props.onCountryChange(value as Country);
      }}
      sx={{ width: { xs: 200, sm: 300 } }}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
};
