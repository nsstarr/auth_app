import LoginForm, { LoginFormProps } from '../components/LoginForm';
import Navbar from "../components/Navbar";

interface LoginProps extends LoginFormProps {
  setIsAuthenticated: (isAuthenticated: boolean) => void;
}

function Login({ setIsAuthenticated }: LoginProps) {
  return (
    <>
      <Navbar />
      <LoginForm setIsAuthenticated={setIsAuthenticated} />
    </>
  );
}

export default Login;

