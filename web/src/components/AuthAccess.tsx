import { RootState } from '../types';
import Navbar from './Navbar';
import { useSelector } from 'react-redux';

function AuthComponent() {
  const user = useSelector((state: RootState) => state.user);
  return (
    <>
      <Navbar />
      {user && (
        <h1 className="text-center mt-20">Welcome back, {user.name}!</h1>
      )}
    </>
  );
}

export default AuthComponent;
