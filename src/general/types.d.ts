interface Country {
  id: number;
  name: string;
}

interface Airport {
  id: number;
  name: string;
  city: string;
  country: string;
  iataCode: string;
  icaoCode: string;
  latitude: number;
  longitude: number;
  timezone: number;
  dst: string;
}

interface Departure {
  id: number;
  airline: string;
  airlineId: number;
  sourceAirport: string;
  sourceAirportId: number;
  destinationAirport: string;
  destiantionAirportId: number;
}
