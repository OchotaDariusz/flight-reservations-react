import React, { lazy, useEffect, useState, Suspense } from 'react';

import CountriesSearchBox from './CountriesSearchBox';
import { LoadingBox } from '../loading-box/LoadingBox';
const AirportsList = lazy(() => import('../airports-list/AirportsList'));
const Departures = lazy(() => import('../departures/Departures'));

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

  useEffect(() => {
    console.log(selectedAirportIata);
  }, [selectedAirportIata]);

  return (
    <>
      <CountriesSearchBox onCountryChange={setSelectedCountry} />
      <Suspense fallback={<LoadingBox />}>
        {selectedCountry !== null && isCountrySelected && (
          <AirportsList
            countryId={selectedCountry.id}
            onAirportSelect={setSelectedAirportIata}
          />
        )}
      </Suspense>
      <Suspense fallback={<LoadingBox />}>
        {selectedCountry !== null &&
          isCountrySelected &&
          selectedAirportIata !== '' && (
            <Departures airportIata={selectedAirportIata} />
          )}
      </Suspense>
    </>
  );
};
