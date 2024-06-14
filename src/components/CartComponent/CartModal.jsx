import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CartContext } from "../../components/CartComponent/CartContext";
import "../CartComponent/styles.css";

const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart, clearCart, getTotalPrice } =
    useContext(CartContext);
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
                  <img src={item.pizzaImg} alt={item.pizzaName} />
                  <div>
                    <p id="pizza-name">
                      {item.pizzaName} ({item.pizzaSize})
                    </p>
                    <p id="pizza-price">R${item.pizzaPrice},00</p>
                    {item.observations && (
                      <p id="obs-text">Observações: {item.observations}</p>
                    )}
                    <button id="remove-btn" onClick={() => removeFromCart(index)}>
                      Remover
                    </button>
                  </div>
                </li>
              ))}
            </ul>
            <div className="total-price">
              <h3>Total: R${getTotalPrice()}</h3>
            </div>
            <div className="cart-buttons">
              <button className="clear-cart-button" onClick={clearCart}>
                LIMPAR CARRINHO
              </button>
              <button className="checkout-button" onClick={handleCheckout}>
                CONCLUIR COMPRA
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CartModal;
