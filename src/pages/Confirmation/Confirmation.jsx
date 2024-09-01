import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import "./Confirmation.css";
import { useCart } from '../../Context/CartContext';
import { getFunctions, httpsCallable } from 'firebase/functions';

const Confirmation = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [files, setFiles] = useState([]);

    const { cartItems = [] } = useCart();
    const { formData = {}, totalAmount = 0 } = location.state || {};

    const handleSubmit = async (event) => {
        event.preventDefault();
    
        const orderData = {
            customerEmail: formData.email, // Usa el email del formData
            orderDetails: {
                items: cartItems.map(item => ({
                    id: item.id,
                    name: item.name,
                    quantity: item.quantity
                })),
                total: totalAmount // Usa el totalAmount que ya tienes
            }
        };
    
        try {
            const response = await fetch('https://us-central1-cantares-bags-f2181.cloudfunctions.net/sendOrderConfirmation', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(orderData)
            });
    
            if (!response.ok) {
                const errorText = await response.text(); // Captura el mensaje de error del backend
                throw new Error(`HTTP error! status: ${response.status}, ${errorText}`);
            }
    
            const result = await response.text();
            console.log('Order confirmation sent:', result);
        } catch (error) {
            console.error('Error al enviar el pedido:', error);
        }
    };
    
    

    const handleFileChange = (e) => {
        setFiles(Array.from(e.target.files));
    };

    const formatPrice = (price) => {
        return price.toLocaleString('es-AR', { style: 'currency', currency: 'ARS' });
    };

    return (
        <div className="confirmation">
            {formData ? (
                <div className="form-details">
                    <div className='datos-container'>
                        <Link to="/cantares-bags/Checkout/">
                            <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{color: "#482115",}} />
                        </Link>
                        <h2>Datos del Cliente</h2>
                    </div>
                    <div>
                        <p><strong>Nombre:</strong> <span>{formData.firstName}</span></p>
                        <p><strong>Apellido:</strong> <span>{formData.lastName}</span></p>
                        <p><strong>Email:</strong><span> {formData.email}</span></p>
                        <p><strong>Teléfono:</strong> <span>{formData.phone}</span></p>
                        <p><strong>Dirección:</strong> <span>{formData.address}</span></p>
                        <p><strong>Localidad:</strong> <span> {formData.city}</span></p>
                    </div>
                    <div className='importe'>
                        <h2>Importe Total</h2>
                        <p>{formatPrice(totalAmount)}</p>
                    </div>
                    <div className='pago'>
                        <h2>Copia el CBU y paga con tu billetera virtual</h2>
                        <h3>0000003100040986885347</h3>
                        <h4>Luis Antonio Gallardo</h4>
                        <img src="https://firebasestorage.googleapis.com/v0/b/cantares-bags-f2181.appspot.com/o/WhatsApp%20Image%202024-08-29%20at%2020.47.30.jpeg?alt=media&token=6dafc563-9e74-4db5-b666-fc8ee469ba9f" alt="mp-logo" />
                    </div>
                    <div className='comprobante'>
                        <h2>Subir comprobante de transferencia</h2>
                        <input className='comprobante-img' type="file" multiple onChange={handleFileChange} />
                    </div> 
                    <div className="options-container">
                        <label className="option">
                            <input 
                                type="radio" 
                                name="deliveryOption" 
                                value="pickup" 
                                className="radio" 
                            />
                            <div className="icon-text">
                                <div className="text">
                                    <p><strong>Retiro por depósito</strong></p>
                                    <p>Boulevard Buenos Aires 1715, Luis Guillón</p>
                                </div>
                            </div>
                        </label>
                        <label className="option">
                            <input 
                                type="radio" 
                                name="deliveryOption" 
                                value="delivery" 
                                className="radio" 
                            />
                            <div className="icon-text">
                                <div className="text">
                                    <p><strong>Quiero realizar envío</strong></p>
                                    <p>Envío con vía cargo 4 a 5 días hábiles</p>
                                </div>
                            </div>
                        </label>
                    </div>
                    <button className='finalizar' onClick={handleSubmit}>Finalizar Compra</button>
                </div>
            ) : (
                <p>No se encontraron detalles de la compra.</p>
            )}
        </div>
    );
};

export default Confirmation;


