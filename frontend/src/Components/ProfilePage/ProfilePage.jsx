import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom'; // Importez useParams depuis 'react-router-dom'
import { logout, checkRememberMe } from '../../redux/reducers/authSlice'; // Importez checkRememberMe depuis votre authSlice
import EditButton from '../EditButton/EditButton';
import Account from '../Account/Account';
import Header from '../../Components/Header/Header';

function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token) || localStorage.getItem('token');
  const [profileData, setProfileData] = useState({ id: '', email: '', userName: '' });
  const [isLoading, setIsLoading] = useState(true);

  // Utilisez useParams pour obtenir l'userId de l'URL
  const { userId } = useParams();

  useEffect(() => {
    // Vérifiez d'abord si l'utilisateur est connecté
    if (!token) {
      // S'il n'y a pas de token, déconnectez l'utilisateur
      dispatch(logout());
      navigate('/login');
    } else {
      // Si l'utilisateur est connecté, vérifiez "remember me"
      dispatch(checkRememberMe()); // Utilisez l'action checkRememberMe pour récupérer le token si "remember me" est coché

      // Ensuite, utilisez le token et l'userId pour obtenir les informations du profil
      fetchData();
    }
  }, [token, dispatch, navigate]);

  const fetchData = async () => {
    try {
      // Utilisez userId dans l'URL pour la requête
      const response = await fetch(`http://localhost:3001/api/v1/user/profile`, {
        method: 'POST', 
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
      });
  
      if (!response.ok) {
        throw new Error(`Error: ${response.status} ${response.statusText}`);
      }
  
      const data = await response.json();
      if (data.status === 200) {
        setProfileData({ 
          id: data.body.id, 
          email: data.body.email,
          userName: data.body.userName
        });
  
        // Redirigez vers la page de profil avec l'userId
        navigate(`/profile/${data.body.id}`);
      }
    } catch (error) {
      console.error('Error:', error);
      localStorage.removeItem('token');
      dispatch(logout());
      navigate('/login');
    } finally {
      setIsLoading(false);
    }
  };
  
  return (
    <>
      <Header />
      <main className="main bg-dark">
        <div className="header">
          {isLoading ? (
            <h1>Loading...</h1>
          ) : (
            <h1>Welcome back<br />{profileData.userName || profileData.id}!</h1>
          )}
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
    </>
  );
}

export default ProfilePage;
