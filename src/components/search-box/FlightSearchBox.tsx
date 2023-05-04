import React, { lazy, useEffect, useState } from 'react';

import CountriesSearchBox from './CountriesSearchBox';
const AirportsList = lazy(() => import('../airports-list/AirportsList'));

type Country = { id: number; name: string };

export const FlightSearchBox = () => {
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
      {selectedCountry !== null && isCountrySelected && (
        <AirportsList countryId={selectedCountry.id} />
      )}
    </>
  );
};
