import React, { useEffect, useState } from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { toast } from 'react-toastify';

import { LoadingBox } from '@flight-reservations/components';
import DurationPopover from './DurationPopover';
import DelayPopover from './DelayPopover';
import DeparturePopover from './DeparturePopover';
import AirportPopover from './AirportPopover';

const columns: GridColDef[] = [
  { field: 'id' },
  {
    field: 'to',
    headerName: 'To',
    flex: window.innerWidth > 400 ? 4 : 3,
    renderCell: (params: GridCellParams): JSX.Element => {
      return <AirportPopover airportName={params.row.arrivalAirport.name} />;
    },
  },
  {
    field: 'departureTime',
    headerName: 'Departure Time',
    flex: window.innerWidth > 400 ? 2 : 3,
    renderCell: (params: GridCellParams): JSX.Element => {
      return (
        <DeparturePopover departureTimeUtc={params.row.departureTimeUtc} />
      );
    },
  },
  {
    field: 'duration',
    headerName: 'Duration',
    flex: 1,
    renderCell: (params: GridCellParams): JSX.Element => {
      return <DurationPopover duration={params.row.duration} />;
    },
  },
  {
    field: 'delayed',
    headerName: 'Delay',
    flex: 1,
    renderCell: (params: GridCellParams): JSX.Element => {
      return <DelayPopover delayed={+params.row.delayed} />;
    },
  },
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
      fetch(`${process.env.REACT_APP_BACKEND_HOST}/flights/${airportIata}`, {
        headers: {
          'Access-Control-Allow-Origin': '*',
        },
        cache: 'no-store',
      })
        .then((data) => data.json())
        .then((data: Departure[]) => {
          setIsDeparturesLoading(false);
          setListOfDepartures(data);
        })
        .catch((err) => {
          setIsDeparturesLoading(false);
          toast.error(err.message);
        });
    } else {
      setListOfDepartures([]);
    }
  }, [airportIata]);

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
                paginationModel: { page: 0, pageSize: 5 },
              },
              columns: {
                columnVisibilityModel: {
                  id: false,
                },
              },
            }}
            pageSizeOptions={[5, 10]}
          />
        )}
      </div>
    </>
  );
};
