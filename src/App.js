import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from "./Pages/Home/home.jsx";
import SignIn from './Pages/SignIn/signIn.jsx';
import Error from './Pages/Error/error.jsx';
import User from './Pages/User/user.jsx';


function App() {
  return (
        <Router>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/signIn' element={<SignIn />} />
            <Route path='/user' element={<User />} />
            <Route path='*' element={<Error />} />
          </Routes>
        </Router>
  );
}

export default App;
