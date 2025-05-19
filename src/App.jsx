import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home.jsx';
import SignUp from './Pages/SignUp.jsx';
import SignIn from './Pages/SignIn.jsx';
import PrivateRoute from './Components/PrivateRoutes.jsx';
import About from './Pages/About.jsx';
import Request from './Pages/Request.jsx';
import MarketingPlatform from './Pages/Marketing-Platform.jsx';

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
        <Route path="/about" element={<About/>}/>
        <Route path='/request' element={<Request/>}/>
        <Route path='/marketing' element={<MarketingPlatform/>}/>
      </Routes>
    </Router>
  );
};

export default App;
