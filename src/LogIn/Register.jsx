import React from "react";
import { Link } from "react-router-dom";
const Register = () => {
  return (
    <div>
      <div className="Register">
        <h1>Create an account</h1>
        <input type="text" placeholder="username" />
        <input type="text" placeholder="password" />
        <input type="text" placeholder="email" />
        <input type="submit" value=" Register" className="regBtn" />
        <Link to="/LogInPage" className="loginLink">
          Already registered
        </Link>
      </div>
    </div>
  );
};

export default Register;
