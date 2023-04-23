import axios from 'axios';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

interface SignUpFormProps {}

function SignUpForm({}: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [register, setRegister] = useState(false);
  const [error, setError] = useState(null as string | null);

  //check if the email is in the correct format
  const isValidEmail = (email: string) => {
    return /\S+@\S+\.\S+/.test(email);
  };
  //check if the email is valid
  const handleEmailChange = (e: React.FormEvent<HTMLInputElement>) => {
    const target = e.target as HTMLInputElement;
    if (!isValidEmail(target.value)) {
      setError('Email is invalid');
    } else {
      setError(null);
    }
    setEmail(target.value);
  };

  //password change handlers
  const handlePasswordChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const handleConfirmPasswordChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(event.target.value);
  };

  //handle the submit
  const handleSubmit = (e: React.FormEvent) => {
    // prevent the page from reloading
    e.preventDefault();

    // check if the key input values are empty
    let hasError = false;

    if (username.trim().length === 0) {
      setError('Username field is empty');
      hasError = true;
    }
    if (email.trim().length === 0) {
      setError('Email field is empty');
      hasError = true;
    }
    if (password.trim().length === 0) {
      setError('Password field is empty');
      hasError = true;
    }
    if (hasError) {
      return;
    }
    // check if the password and confirm password are the same
    if (password !== confirmPassword) {
      setError('Passwords do not match');
      return;
    }
    
    //set axios configuration
    const configuration = {
      method: 'post',
      url: `${import.meta.env.VITE_API_URL}user/register`,
      data: {
        firstName,
        lastName,
        username,
        email,
        password,
      },
    };
    // make the API call
    axios(configuration)
      .then((result) => {
        console.log(result);
        setRegister(true);
      })
      .catch((error) => {
        console.log(error);
        error = new Error();
      });
  };
  // if the user is registered, redirect to login page
  if (register) {
    return <Navigate to="/login" />;
  }

  return (
    <section className="flex flex-col mt-10 items-center justify-center">
      <div className="text-left w-96 ">
        <h2 className="text-3xl py-3 font-bold font-display tracking-wide">
          Register Online Account
        </h2>
        <h4 className="py-2">
          We will use this information to secure your account and provide you
          with access to www.cromwell.co.uk
        </h4>
        <p className="py-2 text-orange cursor-pointer font-bold hover:underline">
          <Link to="/login">Already have an online account? Log in here.</Link>
        </p>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col w-96 py-4 space-y-4 rounded-md ">
          <div className="flex flex-row space-x-2">
            <input
              type="first name"
              placeholder="First Name"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              className="p-2 border border-medium_grey rounded-md hover:border-dark_grey"
            />
            <input
              type="last name"
              placeholder="Last Name"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              className="p-2 border border-medium_grey rounded-md hover:border-dark_grey"
            />
          </div>
          <input
            type="username"
            placeholder="Username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            className="p-2 border border-medium_grey rounded-md hover:border-dark_grey"
          />
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => handleEmailChange(e)}
            className="p-2 border border-medium_grey rounded-md hover:border-dark_grey"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={handlePasswordChange}
            className="p-2 border  border-medium_grey rounded-md hover:border-dark_grey"
          />
          <input
            type="password"
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            className="p-2 border  border-medium_grey rounded-md hover:border-dark_grey"
          />
          <small className="cursor-pointer text-orange font-bold text-right hover:underline"></small>
          {error && (
            <small className="text-danger pb-2 font-semibold">{error}</small>
          )}
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-orange tracking-wider p-4 font-bold bg-blue-500 rounded-md text-white hover:bg-dark_orange active:bg-dark_orange"
          >
            SIGN UP
          </button>
          {register ? (
            <h4 className="text-success font-semibold text-sm mx-auto">
              You Are Registered Successfully
            </h4>
          ) : (
            <h4 className="text-danger font-semibold text-sm mx-auto">
              You Are Not Registered
            </h4>
          )}
        </div>
      </form>
    </section>
  );
}

export default SignUpForm;
