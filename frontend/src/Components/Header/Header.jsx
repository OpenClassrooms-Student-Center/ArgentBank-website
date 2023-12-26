import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { checkRememberMe, logout } from '../../redux/reducers/authSlice';
import logo from "../../Assets/Images/argentBankLogo.png";
import '../../Styles/Components/Header.css';

export default function Header() {
  const { isAuthenticated, rememberMe } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const profileData = useSelector((state) => state.profile);

  useEffect(() => {
    if (!isAuthenticated && !rememberMe) {
      navigate('/login');
    }
  }, [isAuthenticated, rememberMe, navigate]);
  const handleSignOut = () => {
    localStorage.removeItem('token');
    dispatch(logout());
    navigate('/login');
  };

  const handleLogoClick = () => {
    const token = localStorage.getItem('token');
    if (!token) {
      navigate('/login');
    }
  };

  return (
    <header>
      <nav className="main-nav">
        <Link className="main-nav-logo" to="/" onClick={handleLogoClick}>
          <img className="main-nav-logo-image" src={logo} alt="Argent Bank Logo" />
        </Link>

        <div>
        {isAuthenticated ? (
            <>
<span>Welcome, {profileData.userName}!</span>

              <Link className="main-nav-item" to="/" onClick={handleSignOut}>
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
