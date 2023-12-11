import React from 'react';
import '../../Styles/Components/Body.css';
import Images from '../../Assets/Images/argentBankLogo.png';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux'; 
import { logout } from '../../redux/reducers/authSlice';

function Header() {
  const { isAuthenticated, user } = useSelector((state) => state.auth);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignOut = () => {
    dispatch(logout());
    navigate('/');
  };
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
            <span className="main-nav-username">Bienvenue, {user.firstName}</span>
            <button className="main-nav-signout" onClick={handleSignOut}>
              Sign Out
            </button>
          </div>
        ) : (
          <Link to="/login" className="main-nav-item">
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default Header;