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

interface Route {
  id: number;
  airline: string;
  airlineId: number;
  sourceAirport: string;
  sourceAirportId: number;
  destinationAirport: string;
  destiantionAirportId: number;
}

interface Departure {
  id: string | null | undefined;
  departureAirport: Airport | null | undefined;
  arrivalAirport: Airport | null | undefined;
  departureTime: string | null | undefined;
  departureTimeUtc: string | null | undefined;
  arrivalTime: string | null | undefined;
  arrivalTimeUtc: string | null | undefined;
  airlineIata: string | null | undefined;
  flightIata: string | null | undefined;
  flightNumber: string | null | undefined;
  depTerminal: string | number | null | undefined;
  depGate: string | number | null | undefined;
  status: string | null | undefined;
  duration: number | null | undefined;
  delayed: number | null | undefined;
  aircraftIcao: string | null;
  price: string | number | null | undefined;
  reservations: string | number | null | undefined;
}
