import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/CartComponent/CartContext";
import "../CartComponent/styles.css";

const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart, getTotalPrice } = useContext(CartContext);
  const navigate = useNavigate();

  const handleCheckout = () => {
    onClose();
    navigate("/entrega");
  };

  return (
    <div className="cart-modal">
      <div className="cart-modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <h2>Carrinho de Compras</h2>
        {cartItems.length === 0 ? (
          <p>Seu carrinho está vazio</p>
        ) : (
          <>
            <ul>
              {cartItems.map((item, index) => (
                <li key={index}>
                  <img src={item.pizzaImg} alt={item.title} />
                  <div>
                    <p>{item.title}</p>
                    <p>R${item.pizzaPrice}</p>
                    <button onClick={() => removeFromCart(index)}>
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total-price">
              <h3>Total: R${getTotalPrice()}</h3>
            </div>
            <button className="checkout-button" onClick={handleCheckout}>
              CONCLUIR COMPRA
            </button>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
