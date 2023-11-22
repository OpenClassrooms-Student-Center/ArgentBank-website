import './App.css';
import Home from './Page/Home/Home';
import Login from './Page/Login/Login';
import Profile from './Page/Profile/Profile';
import Error from './Page/Error/Error';

import {BrowserRouter as Router, Routes, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/' element={ <Home />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/profile" element={<Profile />} />
        <Route path="*" element={<Error />} />
      </Routes>
  </Router>
  );
}

export default App;
