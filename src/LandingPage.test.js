import { render, screen } from '@testing-library/react';
import LandingPage from './components/LandingPage';

test('renders learn react link', () => {
  render(<LandingPage />);s
  const linkElement = screen.getByText(/test/i);
  expect(linkElement).toBeInTheDocument();
});
