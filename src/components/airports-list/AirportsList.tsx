import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { LoadingBox } from '../loading-box/LoadingBox';

const columns: GridColDef[] = [
  { field: 'id' },
  { field: 'name', headerName: 'Airport', flex: 3 },
  { field: 'city', headerName: 'City', flex: 2 },
];

type Props = {
  countryId: number;
  onAirportSelect: (id: string) => void;
};

const AirportsList: React.FC<Props> = ({ countryId, onAirportSelect }) => {
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

  const airports = listOfAirports.map((airport) => ({
    id: airport.iataCode,
    name: airport.name,
    city: airport.city,
  }));

  const handleAirportChange = (rowSelectionModel: GridRowSelectionModel) => {
    if (rowSelectionModel.length !== 0) {
      onAirportSelect(rowSelectionModel[0] as string);
    } else {
      onAirportSelect('');
    }
  };

  return (
    <>
      <div style={{ height: '100%', width: '100%', paddingBottom: '2rem' }}>
        <h2>Airports</h2>
        {isAirportsLoading && <LoadingBox />}
        {!isAirportsLoading && (
          <DataGrid
            rows={airports}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 5 },
              },
              columns: {
                columnVisibilityModel: {
                  id: false,
                },
              },
            }}
            pageSizeOptions={[5, 10]}
            onRowSelectionModelChange={handleAirportChange}
          />
        )}
      </div>
    </>
  );
};

export default AirportsList;
