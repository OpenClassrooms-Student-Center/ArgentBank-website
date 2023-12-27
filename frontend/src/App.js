import './App.css';
import Home from './Page/Home/Home';
import Signin from './Page/Signin/Signin';
import Profile from './Page/Profile/Profile';
import Error from './Page/Error/Error';
import React, {useEffect} from 'react';
import { initializeAuth } from './redux/reducers/authSlice';
import { useDispatch } from 'react-redux';



import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(initializeAuth());
  }, [dispatch]);


  return (
    <Router>
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path="/login" element={<Signin />} />
        <Route path="/profile/:userId" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
    </Router>
  );
}

export default App;
