import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/SASS/_index.scss';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import SignIn from "./pages/SignIn";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/SignIn" element={<SignIn/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    );
}

export default App;
