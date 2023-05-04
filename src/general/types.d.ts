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
