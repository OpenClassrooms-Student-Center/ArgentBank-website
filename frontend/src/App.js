import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/SASS/_index.scss';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";
import User from "./pages/User";
/// AUTH
import Layout from './pages/Layout';
import RequireAuth from './features/auth/RequireAuth';


function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {/* Public */}
        <Route path="/" element={<Layout/>}>
          <Route index element={< Home/>}/>
          <Route path="/signin" element={<SignIn />} />
          {/* Private */}
          <Route element={<RequireAuth/>}>
            <Route path="/user" element={<User/>} />
          </Route>
        </Route>
      </Routes>
      <Footer/>
    </BrowserRouter>
    );
}

export default App;
