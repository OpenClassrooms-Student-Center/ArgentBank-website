import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/home';
import Login from './pages/signin/index';
import UserAccount from './pages/user/index';
import Error404 from './pages/NotFound';
import Header from "./components/Header"
import Footer from './components/Footer'
import PrivateRoute from './components/PrivateRoute';


const App = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes> 
        <Route exact path='/' element={<Home />} />
        <Route path='/login' element={<Login />} />
        <Route element={<PrivateRoute/>}>
          <Route path='/profile' element={<UserAccount />} />
        </Route>
        <Route path='*' element={<Error404 />} />
      </Routes>
      <Footer/>
    </BrowserRouter>
  ); 
};

export default App;