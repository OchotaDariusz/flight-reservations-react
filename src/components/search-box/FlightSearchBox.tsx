import React, { lazy, useEffect, useState, Suspense } from 'react';

import CountriesSearchBox from './CountriesSearchBox';
import { LoadingBox } from '../loading-box/LoadingBox';
const AirportsList = lazy(() => import('../airports-list/AirportsList'));

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
      setSelectedAirportId(0);
    } else {
      setIsCountrySelected(true);
    }
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
    </>
  );
};
