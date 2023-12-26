import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logout } from '../../redux/reducers/authSlice';
import EditButton from '../EditButton/EditButton';
import Account from '../Account/Account';

function ProfilePage() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const token = useSelector(state => state.auth.token) || localStorage.getItem('token');
  const [profileData, setProfileData] = useState({ id: '', email: '' });



  useEffect(() => {

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
          localStorage.removeItem('token');
          dispatch(logout());
          navigate('/login');
          return;
        }
    
        const data = await response.json();
        if (data.status === 200) {
          localStorage.setItem('profileData', JSON.stringify(data.body));
          setProfileData({ id: data.body.id, email: data.body.email });
                } else {
          navigate('/login');
        }

        const savedProfileData = localStorage.getItem('profileData');
        if (savedProfileData) {
          setProfileData(JSON.parse(savedProfileData));
        } else if (token) {
          fetchData();
        } else {
          dispatch(logout());
          navigate('/login');
        }

            if (!token) {
      localStorage.removeItem('profileData');
      dispatch(logout());
      navigate('/login');
      return;
    }
      } catch (error) {
        console.error('Error:', error);
        localStorage.removeItem('token');
        dispatch(logout());
        navigate('/login');
      }
    };
    
    fetchData();
  }, [token, navigate, dispatch]);

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
