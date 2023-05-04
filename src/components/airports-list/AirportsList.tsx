import React, { useState, useEffect } from 'react';

type Props = {
  countryId: number;
};

const AirportsList: React.FC<Props> = ({ countryId }) => {
  const [listOfAirports, setListOfAirports] = useState<Airport[]>([]);

  useEffect(() => {
    if (countryId) {
      fetch(`/airports/${countryId}`)
        .then((data) => data.json())
        .then((data: Airport[]) => {
          setListOfAirports(data.flat());
        });
    } else {
      setListOfAirports([]);
    }
  }, [countryId]);

  return (
    <>
      <div>Airports</div>
      {listOfAirports.map((airport) => (
        <div key={airport.id}>{airport.name}</div>
      ))}
    </>
  );
};

export default AirportsList;
