import { render, screen } from '@testing-library/react';
import App from './App';

test('renders title', () => {
  render(<App />);
  const titleElement = screen.getByText(/SPOOKY Memory Game/i);
  expect(titleElement).toBeInTheDocument();
});
