import React, { useEffect, useState } from 'react';
import InteractiveMapSwitch from './InteractiveMapSwitch';

import {
  AirportsList,
  AirportsMap,
  CountriesSearchBox,
  Departures,
} from '@flight-reservations/components';

export const FlightSearchBox = () => {
  const [selectedCountry, setSelectedCountry] = useState<Country>({
    id: 0,
    name: 'country',
    latitude: 0,
    longitude: 0,
  });
  const [isCountrySelected, setIsCountrySelected] = useState(false);
  const [isInteractiveMapVisible, setIsInteractiveMapVisible] = useState(false);

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
      <InteractiveMapSwitch onChange={setIsInteractiveMapVisible} />
      {!isInteractiveMapVisible &&
        selectedCountry !== null &&
        isCountrySelected && (
          <AirportsList
            countryId={selectedCountry.id}
            onAirportSelect={setSelectedAirportIata}
          />
        )}
      {isInteractiveMapVisible &&
        selectedCountry !== null &&
        isCountrySelected && (
          <AirportsMap
            countryId={selectedCountry.id}
            countryLat={selectedCountry.latitude}
            countryLong={selectedCountry.longitude}
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