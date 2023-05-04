import React, { useState, useEffect } from 'react';
import { DataGrid, GridColDef, GridRowSelectionModel } from '@mui/x-data-grid';
import { LoadingBox } from '../loading-box/LoadingBox';

const columns: GridColDef[] = [
  { field: 'id', headerName: 'ID', flex: 1 },
  { field: 'airline', headerName: 'Airline', flex: 1 },
  { field: 'airlineId', headerName: 'Airline ID', flex: 1 },
  {
    field: 'sourceAirport',
    headerName: 'Source Airport',
    flex: 1,
  },
  {
    field: 'sourceAirportId',
    headerName: 'Source Airport ID',
    flex: 1,
  },
  {
    field: 'destinationAirport',
    headerName: 'Destination Airport',
    flex: 1,
  },
  {
    field: 'destinationAirportId',
    headerName: 'Destination Airport ID',
    flex: 1,
  },
];

type Props = {
  airportId: number;
};

const Departures: React.FC<Props> = ({ airportId }) => {
  const [listOfDepartures, setListOfDepartures] = useState<Departure[]>([]);
  const [isDeparturesLoading, setIsDeparturesLoading] = useState(false);

  useEffect(() => {
    if (airportId) {
      setIsDeparturesLoading(true);
      fetch(`/routes/airport/from/${airportId}`)
        .then((data) => data.json())
        .then((data: Departure[]) => {
          setIsDeparturesLoading(false);
          setListOfDepartures(data.flat());
        })
        .catch((err) => {
          setIsDeparturesLoading(false);
          console.error(err.message);
        });
    } else {
      setListOfDepartures([]);
    }
  }, [airportId]);

  // const departures = listOfDepartures.map((airport) => ({
  //   id: airport.id,
  //   name: airport.name,
  //   city: airport.city,
  //   iataCode: airport.iataCode,
  //   icaoCode: airport.icaoCode,
  // }));

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
                paginationModel: { page: 0, pageSize: 5 },
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

export default Departures;
