import React from 'react';
import Footer from '../../Components/Footer/Footer';
import Header from '../../Components/Header/Header';
import LoginPage from '../../Components/Login/LoginPage';

import './Signin.css';


function SignIn() {
  return (
<>
    <Header />
    <main className="main bg-dark">
    <LoginPage />
      </main>
    <Footer />

</>
  );
}

export default SignIn;
