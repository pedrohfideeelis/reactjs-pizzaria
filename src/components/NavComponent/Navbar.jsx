import React, { useContext, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { CartContext } from "../../components/CartComponent/CartContext";
import CartModal from "../CartComponent/CartModal";
import Logo from "../../assets/images/PIZZA_LOGO_HORIZONTAL.png";
import "./styles.css";

const Navbar = () => {
  const { cartItems } = useContext(CartContext);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const location = useLocation();

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };

  return (
    <header>
      <nav id="navbar">
        <div className="nav-brand">
          <Link to="/">
            <img src={Logo} alt="Logo Pizzaria" />
          </Link>
        </div>
        <ul className="nav-list">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/cardapio">Cardápio</Link>
          </li>
          <li>
            <Link to="/sobre-nos">Sobre Nós</Link>
          </li>
          {location.pathname === "/admin" && (
            <li id="login-button">
              <Link to="/admin/login">Login</Link>
            </li>
          )}
          {location.pathname !== "/admin" && (
            <li>
              <button className="cart-button" onClick={toggleCart}>
                Carrinho{" "}
                {cartItems.length > 0 && (
                  <span className="cart-count">{cartItems.length}</span>
                )}
              </button>
            </li>
          )}
        </ul>
      </nav>
      {isCartOpen && <CartModal onClose={toggleCart} />}
    </header>
  );
};

export default Navbar;
