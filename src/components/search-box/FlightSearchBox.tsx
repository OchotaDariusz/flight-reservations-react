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

  const [selectedAirportId, setSelectedAirportId] = useState(0);

  useEffect(() => {
    if (selectedCountry === null || selectedCountry.id === 0) {
      setIsCountrySelected(false);
    } else {
      setIsCountrySelected(true);
    }
    setSelectedAirportId(0);
  }, [selectedCountry]);

  useEffect(() => {
    console.log(selectedAirportId);
  }, [selectedAirportId]);

  return (
    <>
      <CountriesSearchBox onCountryChange={setSelectedCountry} />
      <Suspense fallback={<LoadingBox />}>
        {selectedCountry !== null && isCountrySelected && (
          <AirportsList
            countryId={selectedCountry.id}
            onAirportSelect={setSelectedAirportId}
          />
        )}
      </Suspense>
      <Suspense fallback={<LoadingBox />}>
        {selectedCountry !== null &&
          isCountrySelected &&
          selectedAirportId !== 0 && (
            <Departures airportId={selectedAirportId} />
          )}
      </Suspense>
    </>
  );
};
