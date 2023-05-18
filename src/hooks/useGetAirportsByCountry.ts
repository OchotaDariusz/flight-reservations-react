import { useEffect, useState } from 'react';
import { toast } from 'react-toastify';

export const useGetAirportsByCountry = (
  countryId: number,
): [boolean, Airport[]] => {
  const [listOfAirports, setListOfAirports] = useState<Airport[]>([]);
  const [isAirportsLoading, setIsAirportsLoading] = useState(false);

  useEffect(() => {
    if (countryId) {
      setIsAirportsLoading(true);
      fetch(`https://szymontracz.com/api/v1/airports/${countryId}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        cache: 'no-store',
      })
        .then((data) => data.json())
        .then((data: Airport[]) => {
          setIsAirportsLoading(false);
          setListOfAirports(data.flat());
        })
        .catch((err) => {
          setIsAirportsLoading(false);
          toast.error(err.message);
        });
    } else {
      setListOfAirports([]);
    }
  }, [countryId]);

  return [isAirportsLoading, listOfAirports];
};
