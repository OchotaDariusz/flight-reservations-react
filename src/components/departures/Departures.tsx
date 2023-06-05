import React, { useEffect, useRef } from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';
import { toast } from 'react-toastify';

import { LoadingBox } from '@flight-reservations/components';
import DurationPopover from './DurationPopover';
import DelayPopover from './DelayPopover';
import DeparturePopover from './DeparturePopover';
import AirportPopover from './AirportPopover';
import { useFetchData } from '@flight-reservations/hooks';

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
  const [error, isDeparturesLoading, listOfDepartures, fetchData] =
    useFetchData<Departure[]>();

  const departuresListElement = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = departuresListElement.current;
    if (element && listOfDepartures.length !== 0) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
        inline: 'end',
      });
    }
  }, [departuresListElement, listOfDepartures, isDeparturesLoading]);

  const { airportIata } = props;

  useEffect(() => {
    if (airportIata) {
      fetchData(`/flights/${airportIata}`);
    }

    if (error) {
      toast.error(error.message);
    }
  }, [airportIata, error]);

  return (
    <>
      <div
        ref={departuresListElement}
        style={{ height: '100%', width: '100%', paddingBottom: '2rem' }}
      >
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
