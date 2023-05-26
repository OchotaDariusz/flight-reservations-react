import React from 'react';
import L from 'leaflet';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import Box from '@mui/material/Box';

import { useGetAirportsByCountry } from '@flight-reservations/hooks';

import 'leaflet/dist/leaflet.css';
import icon from 'leaflet/dist/images/marker-icon.png';
import iconShadow from 'leaflet/dist/images/marker-shadow.png';
import { LoadingBox } from '@flight-reservations/components';
import Button from '@mui/material/Button';

const DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
});

L.Marker.prototype.options.icon = DefaultIcon;

type AirportsMapProps = {
  countryId: number;
  countryLat: number;
  countryLong: number;
  onAirportSelect: (iata: string) => void;
};

export const AirportsMap: React.FC<AirportsMapProps> = (props) => {
  const [isAirportsLoading, listOfAirports] = useGetAirportsByCountry(
    props.countryId,
  );

  return (
    <Box
      id="#airports"
      sx={{
        margin: '1.25rem',
        display: 'flex',
        justifyContent: 'center',
        paddingBottom: '2rem',
      }}
    >
      {isAirportsLoading && <LoadingBox />}
      {!isAirportsLoading && (
        <MapContainer
          style={{
            height: '600px',
            minWidth: '700px',
            zIndex: 99,
          }}
          center={[props.countryLat, props.countryLong]}
          zoom={5}
          scrollWheelZoom={true}
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
          {listOfAirports.map((airport: Airport) => {
            return (
              <Marker
                key={airport.id}
                position={[airport.latitude, airport.longitude]}
              >
                <Popup>
                  <Button
                    variant="outlined"
                    onClick={() => {
                      props.onAirportSelect(airport.iataCode);
                    }}
                  >
                    {airport.name}
                  </Button>
                </Popup>
              </Marker>
            );
          })}
        </MapContainer>
      )}
    </Box>
  );
};
