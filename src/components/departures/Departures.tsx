import React, { useEffect, useState } from 'react';
import {
  DataGrid,
  GridColDef,
  GridRowSelectionModel,
  GridValueGetterParams,
} from '@mui/x-data-grid';

import { LoadingBox } from '@flight-reservations/components';

const columns: GridColDef[] = [
  { field: 'id' },
  {
    field: 'from',
    headerName: 'From',
    flex: 4,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.departureAirport.name}`,
  },
  {
    field: 'to',
    headerName: 'To',
    flex: 4,
    valueGetter: (params: GridValueGetterParams) =>
      `${params.row.arrivalAirport.name}`,
  },
  {
    field: 'departureTime',
    headerName: 'Departure Time',
    flex: 3,
    valueGetter: (params: GridValueGetterParams) => {
      const date = new Date(params.row.departureTimeUtc);
      return new Intl.DateTimeFormat(undefined, {
        dateStyle: 'medium',
        timeStyle: 'medium',
      })
        .format(date)
        .toString();
    },
  },
  { field: 'duration', headerName: 'Duration', flex: 1 },
  { field: 'delayed', headerName: 'Delay', flex: 1 },
];

type DeparturesProps = {
  airportIata: string;
};

export const Departures: React.FC<DeparturesProps> = (props) => {
  const [listOfDepartures, setListOfDepartures] = useState<Departure[]>([]);
  const [isDeparturesLoading, setIsDeparturesLoading] = useState(false);

  const { airportIata } = props;

  useEffect(() => {
    if (airportIata) {
      setIsDeparturesLoading(true);
      fetch(`/flights/${airportIata}`)
        .then((data) => data.json())
        .then((data: Departure[]) => {
          console.log(data);
          setIsDeparturesLoading(false);
          setListOfDepartures(data);
        })
        .catch((err) => {
          setIsDeparturesLoading(false);
          console.error(err.message);
        });
    } else {
      setListOfDepartures([]);
    }
  }, [airportIata]);

  const handleAirportChange = (rowSelectionModel: GridRowSelectionModel) => {
    // if (rowSelectionModel.length !== 0) {
    //   onAirportSelect(rowSelectionModel[0] as number);
    // } else {
    //   onAirportSelect(0);
    // }
    console.log(rowSelectionModel);
  };

  return (
    <>
      <div style={{ height: '100%', width: '100%', paddingBottom: '2rem' }}>
        <h2>Departures</h2>
        {isDeparturesLoading && <LoadingBox />}
        {!isDeparturesLoading && (
          <DataGrid
            rows={listOfDepartures}
            columns={columns}
            initialState={{
              pagination: {
                paginationModel: { page: 0, pageSize: 10 },
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
