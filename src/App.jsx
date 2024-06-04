import React from "react";
import Navbar from "./components/NavComponent/Navbar";
import Banner from "./components/PromoComponent/Banner";
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
      </div>
    )
  }
}

export default App;
