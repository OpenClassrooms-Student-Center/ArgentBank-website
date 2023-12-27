import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/authSlice';
import logo from "../../Assets/Images/argentBankLogo.png";
import '../../Styles/Components/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket } from '@fortawesome/free-solid-svg-icons';

export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { user: { rememberMe, firstName } } = useSelector((state) => state.auth);

  const profileData = useSelector((state) => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogoClick = () => {
    const token = localStorage.getItem('token');

    if (token && rememberMe) {
      navigate('/profile');
    } else if (!token) {
      localStorage.removeItem('token');
      dispatch(logout());
      navigate('/');
    }
  };

  const handleSignOut = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/login');
  };

  const userName = firstName || 'Guest'; // Utilisez firstName au lieu de userName
  const userId = profileData.id;

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/" onClick={handleLogoClick}>
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        </Link>
  
        <div>
          {isAuthenticated ? (
            <>
              <FontAwesomeIcon icon={faUser} />
              <Link className='main-nav-item' to={`/profile/${userId}`}>
                {profileData.userName} 
              </Link>
              <Link className="main-nav-item" to="/" onClick={handleSignOut}>
                <FontAwesomeIcon icon={faRightFromBracket} />
                Sign Out
              </Link>
            </>
          ) : (
            <Link className="main-nav-item" to="/login">
              Sign In
            </Link>
          )}
        </div>
      </nav>
    </header>
  );
}
