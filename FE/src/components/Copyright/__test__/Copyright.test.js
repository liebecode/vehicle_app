import { render, screen } from '@testing-library/react'
import Copyright from '../Copyright'

it('renders the text passed to the prop', () => {
  render(<Copyright company='Test Company' />);
  const linkElement = screen.getByRole("link", { name: "Test Company" })
  expect(linkElement).toBeInTheDocument();
});
