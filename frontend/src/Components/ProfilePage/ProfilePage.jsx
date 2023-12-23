import React, { useEffect, useState } from 'react';
import Account from '../Account/Account'; 
import EditButton from '../EditButton/EditButton'; 
import '../../Styles/Components/ProfilePage.css';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import Header from '../Header/Header';

function ProfilePage() {
  const { token } = useSelector((state) => state.auth);
  const navigate = useNavigate();
  const [profileData, setProfileData] = useState(null);

  useEffect(() => {
    if (!token) {
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
          throw new Error('Profile fetch failed');
        }
  
        const data = await response.json();
        if (data.status === 200) {
          setProfileData(data.body);
          localStorage.getItem('userToken');
          navigate(`/profile/${data.body.id}`);
        } else {
          navigate('/login');
        }
      } catch (error) {
        console.error('Error fetching profile:', error);
        navigate('/login');
      }
    };
  
    fetchData();
  
  }, [token, navigate]);

  if (!profileData) {
    return <div>Loading...</div>;
  }

  return (

    <main className="main bg-dark">
    <div className="header">
      
      <h1>Welcome back<br />{profileData.firstName + " " + profileData.lastName + "!"}</h1>
      <EditButton /> 
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
