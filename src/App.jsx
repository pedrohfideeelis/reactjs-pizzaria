import React from "react";
import Navbar from "./components/NavComponent/Navbar";
import Footer from "./components/FooterComponent/Footer"
import "./App.css"
import Home from "./components/HomeComponent/Home";

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Home/>
        <Footer />
      </div>
    )
  }
}

export default App;
