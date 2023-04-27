import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

type Country = { country: string };

export const SearchBox = () => {
  const [countries, setCountries] = useState<Country[]>([]);

  useEffect(() => {
    if (countries.length === 0) {
      fetch(
        'https://gist.githubusercontent.com/OchotaDariusz/2cc3fad4147d7172e5f805fe576d8c68/raw/8c21cc873b73e5d658c2b30f4146d7812d84b2ea/countries.json',
      )
        .then((data) => data.json())
        .then((data: { countries: Country[] }) => {
          setCountries(data.countries.flat());
        })
        .catch((err) => console.error(err.message));
    }
  }, [countries]);

  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={countries}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Country" />}
    />
  );
};
