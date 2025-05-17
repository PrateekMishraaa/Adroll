import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import SignUp from './Pages/SignUp.jsx';
import SignIn from './Pages/SignIn.jsx';
import PrivateRoute from './Components/PrivateRoutes.jsx';

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(!!localStorage.getItem('token'));

  const handleAuthenticate = () => {
    setIsAuthenticated(!isAuthenticated);
  };

  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            // <PrivateRoute>
              <Home />
            // {/* </PrivateRoute> */}
          }
        />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/signin" element={<SignIn />} />
      </Routes>
    </Router>
  );
};

export default App;
