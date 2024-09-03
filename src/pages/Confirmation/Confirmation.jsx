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
    
    const { cartItems = [], clearCart } = useCart();
    const { formData = {}, totalAmount = 0 } = location.state || {};

    const sendOrderEmails = async (orderDetails) => {
        const functions = getFunctions();
        const sendEmails = httpsCallable(functions, 'sendOrderEmails');

        try {
            const result = await sendEmails({
                customerEmail: formData.email,
                adminEmail: 'correo_de_la_tienda@example.com',
                orderDetails: orderDetails,
            });
            console.log('Correo enviado:', result.data);
        } catch (error) {
            console.error('Error al enviar el correo:', error);
        }
    };

    const handleCheckout = () => {
        const orderDetails = {
          name: formData.firstName + ' ' + formData.lastName,
          address: formData.address,
          email: formData.email,
          phone: formData.phone,
          city: formData.city,
          items: cartItems.map(item => ({
            title: item.name,
            img: item.img,  // Asegúrate de que la URL de la imagen sea accesible
            qty: item.qty,
            price: item.price,
            subtotal: item.qty * item.price
          })),
          total: totalAmount,
          receipt: '', // Aquí podrías poner el URL del comprobante si lo has subido
          deliveryOption: formData.deliveryOption // Asegúrate de incluir la opción de entrega
        };
      
        sendOrderEmails(orderDetails)
          .then(() => {
            // Limpiar el carrito y borrar el localStorage
            clearCart();
            localStorage.clear();
      
            // Redirigir a una página de agradecimiento o donde prefieras
            navigate('/gracias'); // Redirige a una página de agradecimiento (opcional)
          })
          .catch(error => {
            console.error('Error al finalizar la compra:', error);
            alert('Hubo un problema al finalizar la compra. Inténtalo de nuevo.');
          });
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
                        <Link to="/cantares-bags/Checkout/" className='back'>
                            <FontAwesomeIcon icon={faArrowLeft} size="xl" style={{color: "#482115",}} />
                        </Link>
                        <div className='datos-cliente'>
                        <h2>Datos del Cliente</h2>
                        </div>
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
                        <img src="https://firebasestorage.googleapis.com/v0/b/cantares-bags-f2181.appspot.com/o/Mp.jpg?alt=media&token=b5b144b4-3423-4511-b271-4cf926caccbb" alt="mp-logo" />
                    </div>
                    <div className='comprobante'>
                        <h2>Subir comprobante de transferencia</h2>
                        <input className='comprobante-img' type="file" multiple onChange={handleFileChange} />
                    </div> 
                    
                    <div className="options-container">
                        <h2>¿Qué opción de entrega vas a elegir?</h2>
                        <div className='options'>
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
                    </div>
                    <button className='finalizar' onClick={handleCheckout}>Finalizar Compra</button>
                </div>
            ) : (
                <p>No se encontraron detalles de la compra.</p>
            )}
        </div>
    );
};

export default Confirmation;


