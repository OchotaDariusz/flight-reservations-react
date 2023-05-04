import React, { useEffect, useState } from 'react';

import {
  AirportsList,
  CountriesSearchBox,
  Departures,
} from '@flight-reservations/components';

type Country = { id: number; name: string };

export const FlightSearchBox = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    id: 0,
    name: 'country',
  });
  const [isCountrySelected, setIsCountrySelected] = useState(false);

  const [selectedAirportIata, setSelectedAirportIata] = useState('');

  useEffect(() => {
    if (selectedCountry === null || selectedCountry.id === 0) {
      setIsCountrySelected(false);
    } else {
      setIsCountrySelected(true);
    }
    setSelectedAirportIata('');
  }, [selectedCountry]);

  return (
    <>
      <CountriesSearchBox onCountryChange={setSelectedCountry} />
      {selectedCountry !== null && isCountrySelected && (
        <AirportsList
          countryId={selectedCountry.id}
          onAirportSelect={setSelectedAirportIata}
        />
      )}
      {selectedCountry !== null &&
        isCountrySelected &&
        selectedAirportIata !== '' && (
          <Departures airportIata={selectedAirportIata} />
        )}
    </>
  );
};
