import {
  fireEvent,
  render,
  screen,
  waitFor,
} from '@testing-library/react';
import LoginForm from '../components/LoginForm';
import { MemoryRouter } from 'react-router-dom';

test('displays "You Are Not Logged in" when user is not logged in', () => {
  render(
    <MemoryRouter>
      <LoginForm setIsAuthenticated={() => {}} />
    </MemoryRouter>
  );

  const notLoggedInText = screen.getByText(/You Are Not Logged in/i);
  expect(notLoggedInText).toBeInTheDocument();
});

test('displays error message when incorrect email or password is entered', async () => {
  render(
    <MemoryRouter>
      <LoginForm setIsAuthenticated={() => {}} />
    </MemoryRouter>
  );

  // enter incorrect email and password
  const emailInput = screen.getByPlaceholderText('Email');
  fireEvent.change(emailInput, { target: { value: 'test@example.com' } });

  const passwordInput = screen.getByPlaceholderText('Password');
  fireEvent.change(passwordInput, { target: { value: 'incorrectpassword' } });

  // submit the form
  const submitButton = screen.getByText('LOGIN');
  fireEvent.click(submitButton);

  // wait for error message to appear
  await waitFor(() => {
    const errorElement = screen.queryByText('Incorrect email or password', {
      exact: false,
    });
    expect(errorElement).toBeInTheDocument();
  });
});
