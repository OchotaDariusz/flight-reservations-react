import { useFetchData } from '@flight-reservations/hooks';

export const useGetAirportsByCountry = (
  countryId: number,
): [boolean, Airport[]] => {
  const [isAirportsLoading, listOfAirports] = useFetchData<Airport[]>(
    `/airports/${countryId}`,
  );

  return [isAirportsLoading, listOfAirports];
};
