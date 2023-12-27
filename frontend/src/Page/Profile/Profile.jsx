import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ProfilePage from '../../Components/ProfilePage/ProfilePage';

function UserProfile() {
  const { user } = useSelector((state) => state.auth);
  const firstName = user?.firstName;

  return (
    <>
      <ProfilePage />
      <Footer />
    </>
  );
}

export default UserProfile;
