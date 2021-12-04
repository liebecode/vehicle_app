import React from 'react';
import GoogleMapReact from 'google-map-react'
import RoomIcon from '@mui/icons-material/Room'
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

const defaultZoom = 13
const PointComponent = () => <RoomIcon data-testid="point-component" />;

export default function MapDialog({ openDialog, handleCloseDialog, point }) {

  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

  return (
    <div>
      <Dialog
        fullScreen={fullScreen}
        open={openDialog}
        fullWidth={true}
        onClose={handleCloseDialog}
        aria-labelledby="responsive-dialog-title">

        <DialogContent>

          <div style={{ height: '100vh', width: '100%' }}>
            <GoogleMapReact
              hover={false}
              bootstrapURLKeys={{ key: process.env.REACT_APP_GOOGLE_KEY }}
              defaultCenter={point}
              defaultZoom={defaultZoom}
              options={{
                streetViewControl: true,
                fullscreenControl: true,
                zoomControlOptions: { position: 1 },
              }}>
              <PointComponent lat={point.lat} lng={point.lng} />

            </GoogleMapReact>
          </div>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseDialog} autoFocus>
            Close
          </Button>
        </DialogActions>
      </Dialog>
    </div>
  );
}