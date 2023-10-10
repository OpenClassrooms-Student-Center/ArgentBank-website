import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/signin';
import UserAccount from './pages/user';
import Error404 from './pages/NotFound';
import PrivateRoute from './components/PrivateRoute';
import Header from "./components/Header"
import Footer from './components/Footer'


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes> 
        <Route path='/' element={<Home />} />
        <Route path='/signin' element={<Login />} />
        <Route element={<PrivateRoute />}>
          <Route path='/user-account' element={<UserAccount />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  );
};

export default App;