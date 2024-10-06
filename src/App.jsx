import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Navigate,
} from "react-router-dom";
import Home from "./Home";
import GameDetails from "./GameDetails";
import NavBar from "./NavBar";
import CartContainer from "./CartContainer";
import LogInPage from "./LogIn/LogInPage";
import Register from "./LogIn/Register";

const App = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Mock login handler (you would implement your actual login logic)
  const handleLogin = () => {
    setIsAuthenticated(true); // This would be done after successful login
  };

  return (
    <Router>
      {isAuthenticated && <NavBar />} {/* Render NavBar if authenticated */}
      <Routes>
        {isAuthenticated ? (
          <>
            <Route path="/home" element={<Home />} />
            <Route path="/cart" element={<CartContainer />} />
            <Route path="/game/:id" element={<GameDetails />} />
            <Route path="*" element={<Navigate to="/home" />} />
          </>
        ) : (
          <>
            <Route
              path="/login"
              element={<LogInPage onLogin={handleLogin} />}
            />
            <Route path="/register" element={<Register />} />
            <Route path="*" element={<Navigate to="/login" />} />
          </>
        )}
      </Routes>
    </Router>
  );
};

export default App;
