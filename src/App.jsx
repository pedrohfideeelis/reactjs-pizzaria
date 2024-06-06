import React from "react";
import Navbar from "./components/NavComponent/Navbar";
import Banner from "./components/PromoComponent/Banner";
import CardapioPreview from "./components/CardapioPreviewComponent/CardapioPreview";
import SobrePreview from "./components/SobrePreviewComponent/SobrePreview";
import Footer from "./components/FooterComponent/Footer"
import "./App.css"

class App extends React.Component {
  render() {
    return (
      <div>
        <Navbar />
        <Banner />
        <CardapioPreview />
        <SobrePreview />
        <Footer />
      </div>
    )
  }
}

export default App;
