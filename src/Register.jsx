import React from "react";
import { Link } from "react-router-dom";
const LogInPage = () => {
  return (
    <div>
      Welcome to my game store
      <div>
        <input
          type="text"
          placeholder="username"
        />
        <input
          type="text"
          placeholder="password"
        />
        <input
          type="submit"
          value=" Login"
        />
      </div>
      <Link to="/LogInPage">Already registered</Link>
    </div>
  );
};

export default LogInPage;
