import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';


import Home from './pages/Home/index';
import SignIn from './pages/SignIn';
import Profile from './pages/Profile';

import Error from './pages/Error';


import Header from './components/Header';
import Footer from './components/Footer';
import store from './redux/store';
import { Provider } from 'react-redux';
import './style/css/style.css';




const container = document.getElementById('root');
const root = createRoot(container);


root.render(
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          
          <Route path="/signIn" element={<SignIn />} />
          <Route path="/profile" element={<Profile />} />
          
                      
          <Route path="*" element={<Error />}/>
        </Routes>
        <Footer />
      </Router>
      
    </React.StrictMode>
  </Provider>
);


