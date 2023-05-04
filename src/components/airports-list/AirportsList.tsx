import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridValueGetterParams } from '@mui/x-data-grid';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', width: 70 },
  { field: 'name', headerName: 'Airport', width: 130 },
  { field: 'city', headerName: 'City', width: 130 },
  {
    field: 'iataCode',
    headerName: 'IATA',
    type: 'number',
    width: 90,
  },
  {
    field: 'icaoCode',
    headerName: 'ICAO',
    type: 'number',
    width: 90,
  },
];

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

  const airports = listOfAirports.map((airport) => ({
    id: airport.id,
    name: airport.name,
    city: airport.city,
    iataCode: airport.iataCode,
    icaoCode: airport.icaoCode,
  }));

  return (
    <>
      <div style={{ height: '100%', width: '100%', paddingBottom: '2rem' }}>
        <h2>Airports</h2>
        <DataGrid
          rows={airports}
          columns={columns}
          initialState={{
            pagination: {
              paginationModel: { page: 0, pageSize: 5 },
            },
          }}
          pageSizeOptions={[5, 10]}
        />
      </div>
    </>
  );
};

export default AirportsList;
