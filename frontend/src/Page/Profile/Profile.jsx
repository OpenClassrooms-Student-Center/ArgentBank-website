import React from 'react';
import { useSelector } from 'react-redux';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import ProfilePage from '../../Components/ProfilePage/ProfilePage';
function SignIn() {
  const { user } = useSelector((state) => state.auth);
  const firstName = user?.firstName;
console.log(firstName, user.firstName)
  return (

    <>
    
    <Header firstName={firstName} /> 
      <ProfilePage />
      <Footer />
    </>
  );
}

export default SignIn;