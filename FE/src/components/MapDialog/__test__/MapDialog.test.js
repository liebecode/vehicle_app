import { render, screen } from '@testing-library/react'
import MapDialog from '../MapDialog'
import React, { useState } from 'react'

it('renders the point passed as a prop', () => {
  const openDialog = true;
  const handleCloseDialog = () => false;
  const point = { id: 1, title: "testNowPoint", lat: 51.4970, lng: 11.9688 };
  render(<MapDialog
    openDialog={openDialog}
    handleCloseDialog={handleCloseDialog}
    point={point} />);
  const pointElement = screen.getByTestId('point-component')
  expect(pointElement).toBeInTheDocument();
});
