import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';
import { Link, useNavigate } from 'react-router-dom';
import "./Checkout.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';

const Checkout = () => {
    const { itemCount } = useCart();
    const navigate = useNavigate();
    const [form, setForm] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        address: '',
        city: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm(prevForm => ({
            ...prevForm,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const totalAmount = calculateSubtotal(); // Calcula el subtotal
        navigate('/cantares-bags/confirmation', { state: { formData: form, totalAmount } });
    };

    const calculateSubtotal = () => {
        return itemCount.products.reduce((total, product) => total + (product.price * product.qty), 0);
    };

    const formatPrice = (price) => {
        const priceString = price.toString();
        return priceString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    return (
        <div className="checkout-page">
            <Link to="/cantares-bags/Cart/">
                <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{ color: "#482115" }} />
            </Link>
            <h1>Detalles de Compra</h1>
            <div className="cart-summary">
                {itemCount.products.length === 0 ? (
                    <p>El carrito está vacío</p>
                ) : (
                    <div className='products-container'>
                        {itemCount.products.map(product => (
                            <div key={product.id} className="product-item">
                                <div className='image-title-container'>
                                    <img src={product.img} alt={product.title} className="product-image" />
                                    <p>{product.title}</p>
                                </div>
                                <div className="product-details">
                                    <p>Cantidad: {product.qty}</p>
                                    <p>Subtotal: ${formatPrice(product.price)}</p>
                                </div>
                            </div>
                        ))}
                        <h3>Total = ${formatPrice(calculateSubtotal())}</h3>
                    </div>
                )}
            </div>
            <form onSubmit={handleSubmit} className="checkout-form">
                <h2>Datos para la entrega</h2>
                <div className='input'>
                    <label>
                        Nombre:
                        <input type="text" name="firstName" value={form.firstName} onChange={handleChange} required />
                    </label>
                    <label>
                        Apellido:
                        <input type="text" name="lastName" value={form.lastName} onChange={handleChange} required />
                    </label>
                    <label>
                        Email:
                        <input type="email" name="email" value={form.email} onChange={handleChange} required />
                    </label>
                    <label>
                        Teléfono:
                        <input type="tel" name="phone" value={form.phone} onChange={handleChange} required />
                    </label>
                    <label>
                        Dirección:
                        <input type="text" name="address" value={form.address} onChange={handleChange} required />
                    </label>
                    <label>
                        Localidad:
                        <input type="text" name="city" value={form.city} onChange={handleChange} required />
                    </label>
                </div>
                <button className='btn-confirmar' type="submit">Confirmar Compra</button>
            </form>
        </div>
    );
};

export default Checkout;


