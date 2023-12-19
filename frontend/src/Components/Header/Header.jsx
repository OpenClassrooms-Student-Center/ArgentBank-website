import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserCircle, faSignOutAlt } from '@fortawesome/free-solid-svg-icons';
import '../../Styles/Components/Body.css';
import Images from '../../Assets/Images/argentBankLogo.png';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { logout } from '../../redux/reducers/authSlice';

function Header() {
  const { user, isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = (event) => {
    event.preventDefault();
    dispatch(logout());
    navigate('/');
  };

  return (
    <nav className="main-nav">
      <a className="main-nav-logo" onClick={handleSignOut}> 
        <img
          className="main-nav-logo-image"
          src={Images}
          alt="Argent Bank Logo"
        />
      </a>
      <div>
        {isAuthenticated ? (
          <>
            <FontAwesomeIcon icon={faUserCircle} />
            {user.firstName}
            <a className="main-nav-item" onClick={handleSignOut}>
              <FontAwesomeIcon icon={faSignOutAlt} /> Sign Out
            </a>
          </>
        ) : (
          <a className="main-nav-item" href="/login">
            <FontAwesomeIcon icon={faUserCircle} /> Sign In
          </a>
        )}
      </div>
    </nav>
  );
}

export default Header;
