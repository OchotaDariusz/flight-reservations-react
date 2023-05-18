import React, { useEffect, useState } from 'react';
import InteractiveMapSwitch from '../interactive-map-switch/InteractiveMapSwitch';

import {
  AirportsList,
  AirportsMap,
  CountrySearchBox,
  Departures,
} from '@flight-reservations/components';
import { useWindowSize } from '@flight-reservations/hooks';

export const FlightSearchBox = () => {
  const windowSize = useWindowSize();
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
  }, [selectedCountry, isInteractiveMapVisible]);

  return (
    <>
      <CountrySearchBox onCountryChange={setSelectedCountry} />
      {windowSize >= 600 && (
        <InteractiveMapSwitch onChange={setIsInteractiveMapVisible} />
      )}
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
