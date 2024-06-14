import React, { useContext } from "react";
import { CartContext } from "../../components/CartComponent/CartContext";
import "../CartComponent/styles.css"

const CartModal = ({ onClose }) => {
  const { cartItems, removeFromCart, totalAmount } = useContext(CartContext);

  return (
    <div className="modal">
      <div className="modal-content">
        <h2>Carrinho de Compras</h2>
        {cartItems.length === 0 ? (
          <p>O carrinho está vazio.</p>
        ) : (
          <ul>
            {cartItems.map((item, index) => (
              <li key={index}>
                <div className="cart-item">
                  <img src={item.pizzaImg} alt={item.pizzaName} />
                  <div className="item-info">
                    <h4>{item.pizzaName}</h4>
                    <p>R${item.pizzaPrice}</p>
                    <button onClick={() => removeFromCart(index)}>
                      Remover
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        )}
        <div className="total">
          <h3>Total: R${totalAmount}</h3>
        </div>
        <button className="close" onClick={onClose}>
          Fechar
        </button>
      </div>
    </div>
  );
};

export default CartModal;
