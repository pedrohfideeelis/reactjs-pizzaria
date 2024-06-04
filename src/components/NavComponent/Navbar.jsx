import React from "react";
import logoImg from "../../assets/images/PIZZA_LOGO_HORIZONTAL.png";
import "./styles.css"

class Navbar extends React.Component {
  render() {
    return (
      <header>
        <nav id="navbar">
          <div className="nav-brand">
            <a href="/">
              <img src={logoImg} alt="Logo Pizzaria Vovó Beth" />
            </a>
          </div>

          <ul className="nav-list">
            <li>
              <a href="/">Menu</a>
            </li>
            <li>
              <a href="/">Cardápio</a>
            </li>
            <li>
              <a href="/">Sobre Nós</a>
            </li>
            <li>
              <a href="/">
                <button>Entrar</button>
              </a>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}

export default Navbar;
