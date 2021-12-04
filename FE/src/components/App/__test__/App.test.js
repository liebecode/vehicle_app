import { render, screen } from '@testing-library/react'
import App from '../App'

it('renders a tab for each table', () => {
  render(<App />);
  const GoNowTabElement = screen.getByText(/GO NOW/i);
  const TravelNowTabElement = screen.getByText(/TRAVEL NOW/i);
  expect(GoNowTabElement).toBeInTheDocument();
  expect(TravelNowTabElement).toBeInTheDocument();
});


