import React, { useEffect, useRef } from 'react';
import { DataGrid, GridCellParams, GridColDef } from '@mui/x-data-grid';

import { LoadingBox } from '@flight-reservations/components';
import { useFetchData } from '@flight-reservations/hooks';
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

export const Departures: React.FC<DeparturesProps> = ({ airportIata }) => {
  const [isDeparturesLoading, listOfDepartures] = useFetchData<Departure[]>(
    `/flights/${airportIata}`,
  );

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
