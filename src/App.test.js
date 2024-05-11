import { render, screen } from '@testing-library/react';
<<<<<<< HEAD
import App from './App';
=======
import App from './app';
>>>>>>> origin/delete

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
