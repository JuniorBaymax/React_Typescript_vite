import { render, screen, fireEvent } from '@testing-library/react';
import AuthLogin from '../AuthLogin';

describe('AuthLogin', () => {
  it('should render email and password input fields', () => {
    render(<AuthLogin />);
    expect(screen.getByLabelText('Email Address')).toBeInTheDocument();
    expect(screen.getByLabelText('Password')).toBeInTheDocument();
  });

  it('should render the "Forgot Password?" link', () => {
    render(<AuthLogin />);
    expect(screen.getByText('Forgot Password?')).toBeInTheDocument();
  });

  it('should render the "Login with" divider', () => {
    render(<AuthLogin />);
    expect(screen.getByText('Login with')).toBeInTheDocument();
  });

  it('should call the onSubmit function when the form is submitted', () => {
    const onSubmitMock = jest.fn();
    render(<AuthLogin onSubmit={onSubmitMock} />);
    const submitButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(submitButton);
    expect(onSubmitMock).toHaveBeenCalledTimes(1);
  });

  it('should show an error message if the email field is empty and the form is submitted', () => {
    const onSubmitMock = jest.fn();
    render(<AuthLogin onSubmit={onSubmitMock} />);
    const submitButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(submitButton);
    expect(screen.getByText('Email is required')).toBeInTheDocument();
  });

  it('should show an error message if the password field is empty and the form is submitted', () => {
    const onSubmitMock = jest.fn();
    render(<AuthLogin onSubmit={onSubmitMock} />);
    const submitButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.click(submitButton);
    expect(screen.getByText('Password is required')).toBeInTheDocument();
  });

  it('should show an error message if the email field is invalid and the form is submitted', () => {
    const onSubmitMock = jest.fn();
    render(<AuthLogin onSubmit={onSubmitMock} />);
    const emailInput = screen.getByLabelText('Email Address');
    const submitButton = screen.getByRole('button', { name: 'Login' });
    fireEvent.change(emailInput, { target: { value: 'invalid-email' } });
    fireEvent.click(submitButton);
    expect(screen.getByText('Must be a valid email')).toBeInTheDocument();
  });
});
