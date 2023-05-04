import React, { useEffect, useState } from 'react';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CountriesSearchBox from './CountriesSearchBox';

type Country = { id: number; name: string };

export const SearchBox = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    id: 0,
    name: 'country',
  });
  const [isCountrySelected, setIsCountrySelected] = useState(false);

  useEffect(() => {
    if (selectedCountry === null || selectedCountry.id === 0) {
      setIsCountrySelected(false);
    } else {
      setIsCountrySelected(true);
    }
  }, [selectedCountry]);

  return (
    <>
      <CountriesSearchBox onCountryChange={setSelectedCountry} />
      {isCountrySelected && <div>AIRPORTS</div>}
    </>
  );
};
