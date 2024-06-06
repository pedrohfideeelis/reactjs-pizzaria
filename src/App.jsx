import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavComponent/Navbar";
import Footer from "./components/FooterComponent/Footer";
import Home from "./components/HomeComponent/Home";

import "./App.css";
import { Cardapio } from "./components/CardapioComponent/Cardapio";

class App extends React.Component {
  render() {
    return (
      <>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cardapio" element={<Cardapio/>}/>
          </Routes>
        <Footer />
      </>
    );
  }
}

export default App;
