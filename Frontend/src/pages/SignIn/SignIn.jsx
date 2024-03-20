// import { useState } from "react";
import { useEffect, useState } from "react";
import CallLogin from "./../../CallAPI/CallLogin.jsx";
import { useDispatch } from "react-redux";
import { logUser } from "./../../redux.js";
import { useNavigate } from "react-router-dom";
import "./SignIn.css";

function SignIn() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [idToken, setIdToken] = useState("");
  const [userInfo, setUserInfo] = useState([]);
  const [responseCode, setResponseCode] = useState(0);
  const [errorTxt, setErrorTxt] = useState("");
  const [reCall, setReCall] = useState(false);

  function isEmail(emailAdress) {
    let regex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;

    if (emailAdress.match(regex)) return true;
    else return false;
  }

  function error(param) {
    let errorMessage = "";
    switch (param) {
      case 1:
        errorMessage = "Veuillez rentrer une adresse mail/Mot de passe valide";
        break;
      case 2:
        errorMessage = "Identifiant(s) incorrect(s)";
        break;
      case 3:
        errorMessage = ""; // Aucun message d'erreur
        break;
    }

    setErrorTxt(""); // Réinitialise l'état pour forcer la mise à jour

    setTimeout(() => setErrorTxt(errorMessage), 0); // Utiliser setTimeout pour éviter le batch des mises à jour d'état
  }

  useEffect(() => {
    if (idToken && userInfo.length > 0 && responseCode === 200) {
      console.log(idToken, userInfo);
      dispatch(logUser({ token: idToken, userinfo: userInfo }));
      console.log(responseCode);
      navigate("/user");
    } else if (responseCode !== 0 && responseCode !== 200) {
      error(2);
      setReCall(false);
    }
  }, [idToken, userInfo, dispatch, navigate, responseCode, reCall]);

  const loginClick = async (e) => {
    e.preventDefault();
    const username = document.querySelector("#username").value;
    const password = document.querySelector("#password").value;
    setReCall(true);
    console.log(username, password);
    if (isEmail(username) && password !== "") {
      error(3);
      await CallLogin(
        username,
        password,
        setIdToken,
        setUserInfo,
        setResponseCode
      );
    } else {
      error(1);
      setResponseCode(0);
    }
  };

  return (
    <main className="main bg-dark">
      <section className="sign-in-content">
        <i className="fa fa-user-circle sign-in-icon"></i>
        <h1>Sign In</h1>
        <form onSubmit={loginClick}>
          <div className="input-wrapper">
            <label htmlFor="username">Username</label>
            <input type="text" id="username" autoComplete="username" />
          </div>
          <div className="input-wrapper">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              id="password"
              autoComplete="current-password"
            />
          </div>
          <div className="input-remember">
            <input type="checkbox" id="remember-me" />
            <label htmlFor="remember-me">Remember me</label>
          </div>
          {errorTxt && <p className="errorTxt">{errorTxt}</p>}
          <button type="submit" className="sign-in-button">
            Sign In
          </button>
        </form>
      </section>
    </main>
  );
}

export default SignIn;
