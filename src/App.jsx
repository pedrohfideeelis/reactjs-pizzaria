import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavComponent/Navbar";
import Footer from "./components/FooterComponent/Footer";
import Home from "./components/HomeComponent/Home";

import "./App.css";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
          </Routes>
        <Footer />
      </div>
    );
  }
}

export default App;
