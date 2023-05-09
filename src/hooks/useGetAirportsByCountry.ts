import { useEffect, useState } from 'react';

export const useGetAirportsByCountry = (
  countryId: number,
): [boolean, Airport[]] => {
  const [listOfAirports, setListOfAirports] = useState<Airport[]>([]);
  const [isAirportsLoading, setIsAirportsLoading] = useState(false);

  useEffect(() => {
    if (countryId) {
      setIsAirportsLoading(true);
      fetch(`/airports/${countryId}`)
        .then((data) => data.json())
        .then((data: Airport[]) => {
          setIsAirportsLoading(false);
          setListOfAirports(data.flat());
        })
        .catch((err) => {
          setIsAirportsLoading(false);
          console.error(err.message);
        });
    } else {
      setListOfAirports([]);
    }
  }, [countryId]);

  return [isAirportsLoading, listOfAirports];
};
