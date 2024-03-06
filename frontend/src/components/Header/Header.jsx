// import { useState } from "react";
import argentBankLogo from "./../../assets/img/argentBankLogo.webp";
import { useSelector } from "react-redux";
import "./Header.css";

function Header() {
  const reduxdata = useSelector((state) => state.user);
  let userData = "";
  if (reduxdata.isLogged) {
    userData = reduxdata;
  } else if (localStorage.getItem("userInfo")) {
    userData = JSON.parse(localStorage.getItem("userInfo"));
  }

  console.log(userData);

  function logout() {
    localStorage.removeItem("idToken");
    localStorage.removeItem("userInfo");
  }

  // if (
  //   !userData &&
  //   localStorage.getItem("idToken") &&
  //   localStorage.getItem("userInfo")
  // ) {
  //   userDataLocal = localStorage.getItem("userInfo");
  // }

  return (
    <header id="header">
      <nav className="main-nav">
        <a className="main-nav-logo" href="./">
          <img
            className="main-nav-logo-image"
            src={argentBankLogo}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        {userData.isLogged || localStorage.getItem("userInfo") ? (
          <nav>
            <a onClick={() => logout()} href="./">
              Logout
            </a>
            <a className="main-nav-item" href="./sign-in">
              <i className="fa fa-user-circle"></i>
              {userData.userinfo && userData.userinfo[0]
                ? userData.userinfo[0].userName
                : userData[0].userName}
            </a>
          </nav>
        ) : (
          <div>
            <a className="main-nav-item" href="./sign-in">
              <i className="fa fa-user-circle"></i>
              Sign In
            </a>
          </div>
        )}
      </nav>
    </header>
  );
}

export default Header;
