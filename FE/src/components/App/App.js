import * as React from 'react'
import CssBaseline from '@mui/material/CssBaseline'
import GlobalStyles from '@mui/material/GlobalStyles'
import Container from '@mui/material/Container'
import TabbedTable from '../TabbedTable/TabbedTable'
import Header from '../Header/Header'
import ActionBar from '../ActionBar/ActionBar'
import Instructions from '../Instructions/Instructions'
import Footer from '../Footer/Footer'

function App() {
  return (
    <React.Fragment>
      <GlobalStyles styles={{ ul: { margin: 0, padding: 0, listStyle: 'none' } }} />
      <CssBaseline />
      <ActionBar title='CarsNow' />
      <Container disableGutters maxWidth="sm" component="main" sx={{ pt: 8, pb: 6 }}>
        <Header title="Vehicles" />
        <Instructions message='Use the table below to browse available vehicles.' />
      </Container>
      <Container disableGutters maxWidth="md">
        <TabbedTable />
      </Container>
      <Footer />
    </React.Fragment>
  );
}
export default App