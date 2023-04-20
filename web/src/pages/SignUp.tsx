import LoginForm from '../components/LoginForm';
import Navbar from '../components/Navbar';
import SignUpForm from '../components/SignUpForm';

interface SignUpProps {}

function SignUp({}: SignUpProps) {
  return (
    <main>
      <Navbar />
      <SignUpForm/>
    </main>
  );
}

export default SignUp;
