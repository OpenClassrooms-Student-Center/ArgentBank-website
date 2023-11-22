import React from 'react';
import './Header.css';
import Images from '../../Assets/Images/argentBankLogo.png';
import { Link } from 'react-router-dom'; 

function Header() {
  return (
<>
<nav className="main-nav">
        <a className="main-nav-logo" href="#">
          <img
            className="main-nav-logo-image"
            src={Images}
            alt="Argent Bank Logo"
          />
          <h1 className="sr-only">Argent Bank</h1>
        </a>
        <div>
          <Link to="/login" className="main-nav-item"> 
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        </div>
      </nav>
</>
  );
}

export default Header;
