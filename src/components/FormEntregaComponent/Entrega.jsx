import React, {useState, useContext} from "react";
import {useNavigate} from "react-router-dom";
import ConfirmModal from "../ConfirmComponent/ConfirmModal";
import {CartContext} from "../CartComponent/CartContext";
import OrderContext from "../OrderComponent/OrderContext";
import "./styles.css";
import axios from "axios";

export const Entrega = () => {
    const [name, setName] = useState("");
    const [phone, setPhone] = useState("");
    const [address, setAddress] = useState("");
    const [paymentMethod, setPaymentMethod] = useState("");
    const [errors, setErrors] = useState({});
    const [isModalOpen, setIsModalOpen] = useState(false);

    const {cart, cartItems, clearCart} = useContext(CartContext);
    const {addOrderToQueue, addOrderToHistory} = useContext(OrderContext);

    const navigate = useNavigate();

    const validateForm = () => {
        const newErrors = {};
        if (name.length < 10) {
            newErrors.name = "Nome deve ter pelo menos 10 caracteres.";
        }
        if (!/^\(\d{2}\) \d{5}-\d{4}$/.test(phone)) {
            newErrors.phone = "Telefone deve estar no formato (XX) XXXXX-XXXX.";
        }
        if (address.length < 10) {
            newErrors.address = "Endereço deve ter pelo menos 10 caracteres.";
        }
        if (!paymentMethod) {
            newErrors.paymentMethod = "Selecione uma forma de pagamento.";
        }
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (validateForm()) {
        setIsModalOpen(true);
        }
        const formData = new FormData(e.target);
        const formProps = Object.fromEntries(formData);
        // console.log(formProps)
        console.log(cartItems)
        let produtos = []
        try {
            const config = {
                headers: {
                    "Access-Control-Allow-Origin": "*",
                    "Access-Control-Allow-Methods": "GET,PUT,POST,DELETE,PATCH,OPTIONS"
                }
            };
            const res = await axios.get('http://localhost:8080/api/produtos',config);
            if(res.status !== 200) alert('Houve um erro')
            produtos = res.data
        } catch (e) {
            alert(`Houve um erro`)
        }

        if (produtos.length > 0) {
            const data = {
                observacoes: '',
                nome: formProps.name,
                telefone: formProps.phone,
                endereco: formProps.address,
                formaPagamento: formProps.paymentMethod,
                status: "Em processamento",
                produtos: []
            }
            for (const item of cartItems) {
                const find = produtos.find((produto) => produto.nome === item.pizzaName && produto.preco === item.pizzaPrice);
                if(find)data.produtos.push({id:find.id});
            }
            const save = await axios.post('http://localhost:8080/api/pedidos',data);
            if(save.status === 200 ||save.status === 201) alert('Pedido salvo com sucesso')
        }//nao trouxe produtos

    };

    const handleCancel = () => {
        clearCart();
        navigate("/");
    };

    const order = {
        name,
        phone,
        address,
        paymentMethod,
        cart,
        timestamp: new Date(),
        status: "A FAZER",
    };

    return (
        <div className="delivery-form">
            <h2>Dados para Entrega</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="name">Nome Completo:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    {errors.name && <span className="error">{errors.name}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="phone">Telefone:</label>
                    <input
                        type="text"
                        id="phone"
                        name="phone"
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                    />
                    {errors.phone && <span className="error">{errors.phone}</span>}
                </div>
                <div className="form-group">
                    <label htmlFor="address">Endereço:</label>
                    <input
                        id="address"
                        name="address"
                        type="text"
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    {errors.address && <span className="error">{errors.address}</span>}
                </div>
                <div className="form-group">
                    <label>Forma de Pagamento:</label>
                    <div className="payment-methods">
                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="PIX"
                                checked={paymentMethod === "PIX"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            PIX
                        </label>
                        <label>
                            <input
                                type="radio"
                                name="paymentMethod"
                                value="Cartão de Crédito/Débito"
                                checked={paymentMethod === "Cartão de Crédito/Débito"}
                                onChange={(e) => setPaymentMethod(e.target.value)}
                            />
                            Cartão de Crédito/Débito
                        </label>
                    </div>
                    {errors.paymentMethod && (
                        <span className="error">{errors.paymentMethod}</span>
                    )}
                </div>
                <div className="form-buttons">
                    <button
                        type="button"
                        className="cancel-button"
                        onClick={handleCancel}
                    >
                        CANCELAR
                    </button>
                    <button type="submit" className="submit-button">
                        ENVIAR
                    </button>
                </div>
            </form>
            {isModalOpen && (
                <ConfirmModal
                    onClose={() => setIsModalOpen(false)}
                    order={order}
                    addOrderToHistory={addOrderToHistory}
                    addOrderToQueue={addOrderToQueue}
                />
            )}
        </div>
    );
};
