import React from "react";
import Navbar from "./components/NavComponent/Navbar";
import Banner from "./components/PromoComponent/Banner";
import CardapioPreview from "./components/CardapioPreviewComponent/CardapioPreview";
import SobrePreview from "./components/SobrePreviewComponent/SobrePreview";
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <CardapioPreview />
        <SobrePreview />
      </div>
    )
  }
}

export default App;
