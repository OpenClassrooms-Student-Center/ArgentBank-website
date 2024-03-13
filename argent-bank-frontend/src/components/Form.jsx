import React from "react";
import { NavLink } from "react-router-dom";

const Form = () => {
  return (
    <form>
      <div className="input-wrapper">
        <label htmlFor="username">Username</label>
        <input type="text" id="username" />
      </div>
      <div className="input-wrapper">
        <label htmlFor="password">Password</label>
        <input type="password" id="password" />
      </div>
      <div className="input-remember">
        <input type="checkbox" id="remember-me" />
        <label htmlFor="remember-me">Remember me</label>
      </div>

      <NavLink to="/user">
        <button className="sign-in-button">Sign In</button>
      </NavLink>
    </form>
  );
};

export default Form;
