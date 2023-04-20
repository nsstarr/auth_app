import './App.css';
import { Routes, Route } from 'react-router-dom';

//imports of pages to match routes
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import FreeAccess from './components/FreeAccess';
import AuthAccess from './components/AuthAccess';

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
      <Route path="/free" element={<FreeAccess/>} />
      <Route path="/auth" element={<AuthAccess/>} />
      <Route path="*" element={<NotFound/>} />
    </Routes>
  );
}

export default App;
