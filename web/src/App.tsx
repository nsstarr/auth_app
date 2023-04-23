import { useState } from 'react';
import { Routes, Route, HashRouter } from 'react-router-dom';
import Home from './pages/Home';
import SignUp from './pages/SignUp';
import Login from './pages/Login';
import NotFound from './pages/NotFound';
import AuthAccess from './components/AuthAccess';
import ProtectedRoute from './components/ProtectedRoute';

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/signup" element={<SignUp />} />
      <Route
        path="/login"
        element={<Login setIsAuthenticated={setIsAuthenticated} />}
      />
      <Route
        path="/auth"
        element={
          <ProtectedRoute
            path="/home"
            component={AuthAccess}
            isAuthenticated={isAuthenticated}
            redirectTo="/auth"
          />
        }
      />
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;
