import LoginForm from "../components/LoginForm";
import Navbar from "../components/Navbar";

interface LoginProps {}

function Login({}: LoginProps) {
  return (
    <>
    <Navbar/>
    <LoginForm/>
    </>
  );
}

export default Login;

