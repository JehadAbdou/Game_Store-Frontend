import React, { useState } from "react";
import { Link } from "react-router-dom";

const LogInPage = ({ onLogin }) => {
  const [email, setEmail] = useState("");
  const [passWord, setPassWord] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Send request to the login endpoint
    const response = await fetch("http://localhost:5000/users/api/login", {
      // Corrected endpoint
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password: passWord }), // Fixed to match DTO structure
    });

    // Check for a successful response
    if (response.ok) {
      const data = await response.json();
      console.log(data); // Log the response to see the returned user or token
      onLogin(data.user); // Call onLogin with the user data received
    } else {
      const errorData = await response.json(); // Read the error response
      console.error(errorData.message); // Log the error message or show it to the user
    }
  };

  return (
    <div>
      <div>
        <form onSubmit={handleSubmit} className="Register">
          <h1>Welcome to my game store</h1>
          <input
            type="text"
            placeholder="email"
            value={email} // Set value for controlled component
            onChange={(e) => setEmail(e.currentTarget.value)}
            required
          />
          <input
            type="password" // Changed to password type for security
            placeholder="password"
            value={passWord} // Set value for controlled component
            onChange={(e) => setPassWord(e.currentTarget.value)}
            required
          />
          <input type="submit" value="Login" className="regBtn" />
          <Link to="/Register" className="loginLink">
            Register
          </Link>
        </form>
      </div>
    </div>
  );
};

export default LogInPage;
