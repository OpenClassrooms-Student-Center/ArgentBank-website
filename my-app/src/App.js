import React from "react";
import Header from "../src/components/header";
import RoutesPath from "../src/containers/RoutesPath";
import Footer from "./components/footer";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Header />
     
       <RoutesPath />
       
       <Footer />
    </div>
  );
}

export default App;
