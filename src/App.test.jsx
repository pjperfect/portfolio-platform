import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from './App';

test('adds a project and shows it in the list', async () => {
  render(<App />);
  const user = userEvent.setup();

  await user.type(screen.getByLabelText(/title/i), 'New Project');
  await user.type(screen.getByLabelText(/description/i), 'Some details');
  await user.click(screen.getByRole('button', { name: /add/i }));

  expect(screen.getByText('New Project')).toBeInTheDocument();
  expect(screen.getByText('Some details')).toBeInTheDocument();
});
