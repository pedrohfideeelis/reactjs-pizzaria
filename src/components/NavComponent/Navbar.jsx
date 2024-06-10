import React from "react";
import logoImg from "../../assets/images/PIZZA_LOGO_HORIZONTAL.png";
import "./styles.css";
import { Link } from "react-router-dom";

export class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <Link to="/">
              <img src={logoImg} alt="Logo Pizzaria Vovó Beth" />
            </Link>
          </div>

          <ul className="nav-list">
            <li>
              <Link to="/">Menu</Link>
            </li>
            <li>
              <Link to="/cardapio">Cardápio</Link>
            </li>
            <li>
              <Link to="/sobre-nos">Sobre Nós</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
