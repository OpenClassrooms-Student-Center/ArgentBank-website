import { BrowserRouter, Route, Routes } from "react-router-dom";
import './assets/SASS/_index.scss';
import Footer from './components/Footer/Footer';
import Header from "./components/Header/Header";
import Home from "./pages/Home";

function App() {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        <Route path="/" element={<Home/>} />
      </Routes>
      <Footer/>
    </BrowserRouter>
    );
}

export default App;
