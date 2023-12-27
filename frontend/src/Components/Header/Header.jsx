import React, { useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from 'react-redux';
import { logout } from '../../redux/reducers/authSlice';
import logo from "../../Assets/Images/argentBankLogo.png";
import '../../Styles/Components/Header.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUser, faRightFromBracket  } from '@fortawesome/free-solid-svg-icons';
import SignIn from '../../Page/Signin/Signin';


export default function Header() {
  const isAuthenticated = useSelector((state) => state.auth.isAuthenticated);
  const { user: { rememberMe } } = useSelector((state) => state.auth);

  const profileData = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
  }); 
  const handleLogoClick = () => {
    const token = localStorage.getItem('token');

    if (token && rememberMe) {
      dispatch(SignIn()); 
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


  

  const userName = profileData.userName || 'Guest'; 
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
              <Link to={`/profile/${userId}`}>{profileData.userName}</Link>
              <span className='main-nav-item'>{userName}</span>
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
