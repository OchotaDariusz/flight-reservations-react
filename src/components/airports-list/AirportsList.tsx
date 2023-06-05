import React, { useEffect, useRef } from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';

import { LoadingBox } from '@flight-reservations/components';
import { useGetAirportsByCountry } from '@flight-reservations/hooks';

const columns: GridColDef[] = [
  { field: 'id' },
  { field: 'name', headerName: 'Airport', flex: 3 },
  { field: 'city', headerName: 'City', flex: 2 },
];

type AirportsListProps = {
  countryId: number;
  onAirportSelect: (id: string) => void;
};

export const AirportsList: React.FC<AirportsListProps> = (props) => {
  const [isAirportsLoading, listOfAirports] = useGetAirportsByCountry(
    props.countryId,
  );

  const airportsListElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = airportsListElement.current;
    if (element && listOfAirports.length !== 0) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'end',
      });
    }
  }, [airportsListElement, listOfAirports, isAirportsLoading]);

  const airports = listOfAirports.map((airport: Airport) => ({
    id: airport.iataCode,
    name: airport.name,
    city: airport.city,
  }));

  const handleAirportChange = (rowSelectionModel: GridRowSelectionModel) => {
    if (rowSelectionModel.length !== 0) {
      props.onAirportSelect(rowSelectionModel[0] as string);
    } else {
      props.onAirportSelect('');
    }
  };

  return (
    <>
      <div
        ref={airportsListElement}
        style={{ height: '100%', width: '100%', paddingBottom: '2rem' }}
      >
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
