import React from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

import { useFetchData } from '@flight-reservations/hooks';

type CountriesSearchBoxProps = {
  onCountryChange: (country: Country) => void;
};

export const CountrySearchBox: React.FC<CountriesSearchBoxProps> = (props) => {
  const [isLoading, countries] = useFetchData<Country[]>('/country/all');

  return (
    <Autocomplete
      disablePortal
      noOptionsText={isLoading ? 'Loading...' : 'Something went wrong.'}
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
