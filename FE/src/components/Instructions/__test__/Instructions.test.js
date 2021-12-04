import { render, screen } from '@testing-library/react'
import Instructions from '../Instructions'

it('renders the text passed as a prop', () => {
  render(<Instructions message='Test Instructions' />);
  const linkElement = screen.getByText("Test Instructions")
  expect(linkElement).toBeInTheDocument();
});
