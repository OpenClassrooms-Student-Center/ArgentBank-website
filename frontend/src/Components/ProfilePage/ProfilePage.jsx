import React, { useEffect, useState } from 'react';
import Account from '../Account/Account'; 
import EditButton from '../EditButton/EditButton'; 
import '../../Styles/Components/ProfilePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/reducers/authSlice'; // Importez l'action de déconnexion

function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState({ userName: '' });

  useEffect(() => {
    const token = localStorage.getItem('userToken'); // Récupérez le token du localStorage
    if (!token) {
      dispatch(logout());
      navigate('/login');
      return;
    }
  
    const fetchData = async () => {
      try {
        const response = await fetch('http://localhost:3001/api/v1/user/profile', {
          method: 'POST',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          },
        });
  
        if (!response.ok) {
          localStorage.removeItem('userToken'); // Supprimer le token invalide
          dispatch(logout());
          navigate('/login');
          return;
        }
  
        const data = await response.json();
        if (data.status === 200) {
          setProfileData(data.body);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error:', error);
        localStorage.removeItem('userToken'); // Supprimer le token en cas d'erreur
        dispatch(logout());
        navigate('/login');
      }
    };
  
    fetchData();
  }, [navigate, dispatch]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{profileData.userName}!</h1>
        <EditButton onProfileUpdate={setProfileData} />
      </div>
      <h2 className="sr-only">Accounts</h2>
    <Account
      title="Argent Bank Checking (x8349)"
      amount="$2,082.79"
      description="Available Balance"
    />
    <Account
      title="Argent Bank Savings (x6712)"
      amount="$10,928.42"
      description="Available Balance"
    />
    <Account
      title="Argent Bank Credit Card (x8349)"
      amount="$184.30"
      description="Current Balance"
    />
  </main>
  );
}

export default ProfilePage;
