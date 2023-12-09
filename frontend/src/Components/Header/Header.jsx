import React from 'react';
import '../../Styles/Components/Header.css';
import Images from '../../Assets/Images/argentBankLogo.png';
import { Link } from 'react-router-dom';

function Header({ isAuthenticated, userName, onSignOut }) {
  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={Images}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {isAuthenticated ? (
          <div className="main-nav-item">
            <i className="fa fa-user-circle main-nav-user-icon"></i>
            <span className="main-nav-username">Bienvenue, {userName}</span>
            <button className="main-nav-signout" onClick={onSignOut}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="main-nav-item">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;
