import React, { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setGetProfile } from '../redux/reducers/profileSlice';
import Account from '../Account/Account'; 
import EditButton from '../EditButton/EditButton'; 
import '../../Styles/Components/ProfilePage.css';

function ProfilePage() {
  const dispatch = useDispatch();
  const profile = useSelector((state) => state.profile);
  const fetchDataUser = useCallback(async () => {
    try {
      const token = localStorage.getItem('token'); // Retrieve the token from localStorage
  
      const response = await fetch('http://localhost:3001/api/v1/user/profile', {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`
        }
      });
  
      const data = await response.json();
      console.log('Profile data:', data);
  
      if (response.ok) {
        // Assuming your setGetProfile action expects an object with the user's info directly
        dispatch(setGetProfile({ 
          email: data.body.email,
          id: data.body.id,
          // Add other fields if your profile state includes more fields
        }));
       }
        else {
      }
    } catch (err) {
    }
  }, [dispatch]);

  useEffect(() => {
    fetchDataUser();
  }, [fetchDataUser]);

  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>Welcome back<br />{profile.firstName + " " + profile.lastName + "!"}</h1>
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
