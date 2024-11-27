import header_logo from "../assets/img/argentBankLogo.webp";
import React from "react";
import { useNavigate } from "react-router-dom";
export default function Header(props) {
  const navigate = useNavigate();
  const Logout = () => {
    sessionStorage.removeItem("token");
    sessionStorage.removeItem("user"); //supprime le token
    navigate("/");
  };
  return (
    <nav className="main-nav">
      <a className="main-nav-logo" href="./">
        <img
          className="main-nav-logo-image"
          src={header_logo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </a>
      <div>
        <a className={props.connexion} href="./login">
          <i className="fa fa-user-circle"></i>
          Sign In
        </a>
        <div className={props.deconnexion} onClick={Logout}>
          <i className="fa fa-user-circle"></i>
          <div>{props.name}</div>
          <i className="fa fa-sign-out"></i>
          Sign Out
        </div>
      </div>
    </nav>
  );
}
