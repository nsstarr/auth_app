import axios from 'axios';
import Cookies from 'universal-cookie';
import { Link, Navigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

//initialize cookies
const cookies = new Cookies();

export interface LoginFormProps {
  setIsAuthenticated: (value: boolean) => void;
}

function LoginForm({ setIsAuthenticated }: LoginFormProps) {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [login, setLogin] = useState(false);
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

  useEffect(() => {
    if (login) {
      setIsAuthenticated(true);
      return () => {};
    }
  }, [login, setIsAuthenticated]);

  const handleSubmit = (e: React.FormEvent) => {
    const configuration = {
      method: 'post',
      url: `${import.meta.env.VITE_API_URL}user/login`,
      data: {
        email,
        password,
      },
    };
    axios(configuration)
      .then((result) => {
        console.log(result);
        setLogin(true);
        // set the cookie
        cookies.set('TOKEN', result.data.token, {
          path: '/',
        });
      })
      .catch((error) => {
        console.log(error);
        setError('Incorrect email or password');
      });
    e.preventDefault();
  };
  if (login) {
    return <Navigate to="/auth" />;
  }

  return (
    <section className="flex flex-col mt-20 items-center justify-center content-center md:ml-0">
      <div className="text-center lg:text-left w-96 ">
        <h2 className="text-3xl py-3 font-bold font-display tracking-wide">
          Login
        </h2>
        <p className="py-2 text-orange cursor-pointer font-bold hover:underline">
          <Link to="/signup">
            Not purchased from us before? Register a new account here.
          </Link>
        </p>
        <h4 className="py-2">
          Please enter your email and password to access your account.
        </h4>
      </div>
      <form onSubmit={(e) => handleSubmit(e)}>
        <div className="flex flex-col w-96 py-4 space-y-4 rounded-md ">
          <input
            type="email"
            placeholder="Email"
            name="email"
            value={email}
            className="p-2 border border-medium_grey rounded-md hover:border-dark_grey"
            onChange={(e) => handleEmailChange(e)}
          />
          {error && <small className="text-danger font-semibold">{error}</small>}
          <input
            type="password"
            placeholder="Password"
            name="password"
            className="p-2 border  border-medium_grey rounded-md hover:border-dark_grey"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <small className="cursor-pointer text-orange font-bold text-right hover:underline">
            <a>Forgot password?</a>
          </small>
          <button
            className="bg-orange tracking-wider w-60 mx-auto p-4 font-bold bg-blue-500 rounded-md text-white hover:bg-dark_orange active:bg-dark_orange lg:w-full"
            onClick={(e) => handleSubmit(e)}
          >
            LOGIN
          </button>
          {login ? (
            <h4 className="text-success text-sm mx-auto font-semibold">
              You Are Logged in Successfully
            </h4>
          ) : (
            <h4 className="text-danger text-sm mx-auto font-semibold">
              You Are Not Logged in
            </h4>
          )}
          {error && <small className="text-danger font-semibold">{error}</small>}
        </div>
      </form>
    </section>
  );
}

export default LoginForm;
