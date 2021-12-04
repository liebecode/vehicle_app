import { DataGrid } from "@mui/x-data-grid";
import React, { useEffect, useState } from 'react'
import IconButton from '@mui/material/IconButton'
import MapIcon from '@mui/icons-material/Map'
import MapDialog from "../MapDialog/MapDialog";

function GoNowTable() {

  const [rows, setRows] = useState([]);
  const [point, setPoint] = useState({ id: 1, title: "goNowPoint", lat: 51.4970, lng: 11.9688 });
  // useEffect(() => { console.log(point) }, [point])



  // dialog
  const [openDialog, setOpenDialog] = useState(false);
  const handleCloseDialog = () => setOpenDialog(false)

  useEffect(() => {
    setRows([])
    fetch('http://localhost:5011/go-now/vehicles')
      .then(response => response.json())
      .then(result => {
        // console.log(result)
        setRows(result['poiList'])
      })
  }, []);

  const handleClick = (param, event) => {
    setOpenDialog(true);
    setPoint({ id: 1, title: "Point", lat: event.row.coordinate.latitude, lng: event.row.coordinate.longitude });
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
    { field: "state", headerName: "State", width: 399 },
    { field: "type", headerName: "Type", width: 335 }
  ]

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


export default GoNowTable