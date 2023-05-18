import React, { useEffect, useState } from 'react';
import {
  DataGrid,
  GridCellParams,
  GridColDef,
  GridValueGetterParams,
} from '@mui/x-data-grid';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import WarningIcon from '@mui/icons-material/Warning';
import ReportIcon from '@mui/icons-material/Report';
import { Chip } from '@mui/material';
import { toast } from 'react-toastify';

import { LoadingBox } from '@flight-reservations/components';

const columns: GridColDef[] = [
  { field: 'id' },
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
    flex: 2,
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
  {
    field: 'duration',
    headerName: 'Duration',
    flex: 1,
    valueGetter: (params: GridValueGetterParams) => {
      return `${params.row.duration}m`;
    },
  },
  {
    field: 'delayed',
    headerName: 'Delay',
    flex: 1,
    renderCell: (params: GridCellParams): JSX.Element => {
      const delayTime = +params.row.delayed;
      let status: 'success' | 'warning' | 'error' = 'success';
      let icon = <CheckCircleIcon />;
      if (delayTime > 0 && delayTime <= 60) {
        status = 'warning';
        icon = <WarningIcon />;
      } else if (delayTime > 60) {
        status = 'error';
        icon = <ReportIcon />;
      }

      return (
        <Chip
          variant="outlined"
          color={status}
          size="small"
          icon={icon}
          label={delayTime}
        />
      );
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
      fetch(`https://szymontracz.com/api/v1/flights/${airportIata}`, {
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
