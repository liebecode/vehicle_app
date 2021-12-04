import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MapIcon from '@mui/icons-material/Map'
import MapDialog from "../MapDialog/MapDialog";

function TravelNowTable() {

  const [rows, setRows] = useState([]);
  const [point, setPoint] = useState({ id: 1, title: "travelNowPoint", lat: 51.4970, lng: 11.9688 });
  useEffect(() => { console.log(point) }, [point])


  // dialog
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => setOpenDialog(false)

  useEffect(() => {
    setRows([])
    fetch('http://localhost:5011/travel-now/vehicles')
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        setRows(result['placemarks'])
      })
  }, []);

  const handleClick = (param, event) => {
    setOpenDialog(true)
    setPoint({ id: 1, title: "Point", lat: event.row.coordinates[1], lng: event.row.coordinates[0] });
  };

  const columns = [
    { field: "id", headerName: "id", hide: true },
    {
      field: "Map",
      width: 120,
      renderCell: (cellValues) => {
        return (
          <IconButton color="primary" onClick={(event) => {
            event.stopPropagation();
            handleClick(event, cellValues);
          }}><MapIcon /></IconButton>
        );
      }
    },
    { field: "vin", headerName: "VIN", width: 170 },
    { field: "name", headerName: "Name", width: 124 },
    { field: "engineType", headerName: "Engine", width: 140 },
    { field: "fuel", headerName: "Fuel", width: 120 },
    { field: "interior", headerName: "Interior", width: 150 },
    { field: "exterior", headerName: "Exterior", width: 150 },
    { field: "address", headerName: "Address", width: 450 },
  ];

  return (
    <div style={{ height: 300, width: "100%" }}>
      <DataGrid rows={rows} columns={columns} />
      <MapDialog
        openDialog={openDialog}
        handleCloseDialog={handleCloseDialog}
        point={point}
      />
    </div>
  )
}


export default TravelNowTable