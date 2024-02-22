// import { useState } from "react";
import { useEffect, useState } from "react";
import CallLogin from "./../../CallAPI/CallLogin.jsx";
import { useDispatch } from "react-redux";
import { logUser } from "./../../redux.js";
import { useNavigate } from "react-router-dom";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [idToken, setIdToken] = useState("");
  const [userInfo, setUserInfo] = useState([]);

  useEffect(() => {
    if (idToken && userInfo.length > 0) {
      dispatch(logUser({ idToken, userInfo }));
      navigate("/user");
    }
  }, [idToken, userInfo, dispatch, navigate]);

  const loginClick = async (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    await CallLogin(username, password, setIdToken, setUserInfo);
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={loginClick}>
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
          {/*
                    PLACEHOLDER DUE TO STATIC SITE
          <a href="./user.html" className="sign-in-button">
            Sign In
          </a>
                    SHOULD BE THE BUTTON BELOW
                    */}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
