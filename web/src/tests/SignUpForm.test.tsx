import { render, screen, fireEvent } from '@testing-library/react';
import SignUpForm from '../components/SignUpForm';
import { MemoryRouter } from 'react-router-dom';


describe('SignUpForm', () => {
  test('should show an error message when an invalid email is entered', () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    const emailInput = screen.getByPlaceholderText('Email');
    fireEvent.change(emailInput, { target: { value: 'invalidemail' } });
    const errorMessage = screen.getByText(/Email is invalid/);
    expect(errorMessage).toBeInTheDocument();
  });
  test('blank input fields returns an error', () => {
    render(
      <MemoryRouter>
        <SignUpForm />
      </MemoryRouter>
    );
    const signUpButton = screen.getByRole('button', { name: /sign up/i });
    fireEvent.click(signUpButton);
    expect(screen.getByText('Password field is empty')).toBeInTheDocument();
  });
});
