import axios from 'axios';
import { useState } from 'react';
import { Link, Navigate } from 'react-router-dom';

interface SignUpFormProps {}

function LoginForm({}: SignUpFormProps) {
  const [email, setEmail] = useState('');
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [register, setRegister] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
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
        console.log(result)
        setRegister(true);
      })
      .catch((error) => {
        console.log(error)
        error = new Error();
      });
    e.preventDefault();
  };
  // if the user is registered, redirect to login page
if (register){
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
            onChange={(e) => setEmail(e.target.value)}
            className="p-2 border border-medium_grey rounded-md hover:border-dark_grey"
          />
          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="p-2 border  border-medium_grey rounded-md hover:border-dark_grey"
          />
          <small className="cursor-pointer text-orange font-bold text-right hover:underline"></small>
          <button
            onClick={(e) => handleSubmit(e)}
            className="bg-orange tracking-wider p-4 font-bold bg-blue-500 rounded-md text-white hover:bg-dark_orange active:bg-dark_orange"
          >
            SIGN UP
          </button>
          {register ? (
            <small className="text-success font-semibold">You Are Registered Successfully</small>
          ) : (
            <small className="text-danger font-semibold">You Are Not Registered</small>
          )}
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
