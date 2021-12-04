import { render, screen } from '@testing-library/react'
import ActionBar from '../ActionBar'

it('renders same text passed through props for the header', () => {
  render(<ActionBar title="Test Header" />);
  const headingElement = screen.getByRole("heading", { name: "Test Header" })
  expect(headingElement).toBeInTheDocument();
});
