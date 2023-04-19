import './App.css';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import { useState } from 'react';
import SignUp from './pages/SignUp';
import Login from './pages/Login';

function App() {
  const [count, setCount] = useState(0);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route path="/login" element={<Login />} />
    </Routes>
  );
}

export default App;
