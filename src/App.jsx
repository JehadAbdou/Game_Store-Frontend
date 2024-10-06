import React, { useState } from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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
      {isAuthenticated ? (
        <>
          {/* Display Navbar and routes if authenticated */}
          <NavBar />
          <Routes>
            <Route
              path="/home"
              element={<Home />}
            />
            <Route
              path="/CartContainer"
              element={<CartContainer />}
            />
            <Route
              path="/game/:id"
              element={<GameDetails />}
            />
          </Routes>
        </>
      ) : (
        <>
          {/* Show login page if not authenticated */}
          <Routes>
            <Route
              path="LogIn/LogInPage"
              element={<LogInPage onLogin={handleLogin} />}
            />
            <Route
              path="LogIn/Register"
              element={<Register />}
            />
          </Routes>
        </>
      )}
    </Router>
  );
};

export default App;
