import React from "react";
import { Route, Routes } from "react-router-dom";
import Navbar from "./components/NavComponent/Navbar";
import { Footer } from "./components/FooterComponent/Footer";
import { Home } from "./components/HomeComponent/Home";
import { Cardapio } from "./components/CardapioComponent/Cardapio";
import { Sobre } from "./components/SobreComponent/Sobre";
import { Admin } from "./components/AdminComponent/Admin";
import { Login } from "./components/LoginComponent/Login";
import { Entrega } from "./components/FormEntregaComponent/Entrega";
import { CartProvider } from "./components/CartComponent/CartContext";
import { AdminDashboard } from "./components/AdminDashboardComponent/AdminDashboard";
import "./App.css";

class App extends React.Component {
  render() {
    return (
      <CartProvider>
        <div id="root">
          <Navbar />
          <main>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/cardapio" element={<Cardapio />} />
              <Route path="/sobre-nos" element={<Sobre />} />
              <Route path="/admin" element={<Admin />} />
              <Route path="/admin/login" element={<Login />} />
              <Route path="/entrega" element={<Entrega />} />
              <Route path="/admin/dashboard" element={<AdminDashboard />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </CartProvider>
    );
  }
}

export default App;
