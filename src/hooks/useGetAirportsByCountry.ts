import { useEffect } from 'react';
import { toast } from 'react-toastify';

import { useFetchData } from '@flight-reservations/hooks';

export const useGetAirportsByCountry = (
  countryId: number,
): [boolean, Airport[]] => {
  const [error, isAirportsLoading, listOfAirports, fetchData] =
    useFetchData<Airport[]>();

  useEffect(() => {
    if (countryId) {
      fetchData(`/airports/${countryId}`);
    }

    if (error) {
      toast.error(error.message);
    }
  }, [countryId, error]);

  return [isAirportsLoading, listOfAirports];
};
