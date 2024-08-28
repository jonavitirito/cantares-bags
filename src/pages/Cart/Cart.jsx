import React from 'react';
import { useCart } from '../../Context/CartContext';
import CartDetailCard from '../../components/CartDetailCard/CartDetailCard';
import "./Cart.css";
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';

const Cart = () => {
    const { itemCount } = useCart();

    const calculateSubtotal = () => {
        return itemCount.products.reduce((total, product) => total + (product.price * product.qty), 0);
    };

    const formatPrice = (price) => {
        const priceString = price.toString();
        return priceString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    return (
        <div className="cart">

            <div className='title-container'>
               <Link to="/cantares-bags/"> <FontAwesomeIcon icon={faArrowLeft} size="2xl" style={{color: "#482115",}} /></Link>
            <h1>CARRITO DE COMPRAS</h1></div>
            {itemCount.products.length === 0 ? (
                <h2 className='p'>El carrito está vacío</h2>
            ) : (
                <div>
                    {itemCount.products.map(product => (
                        <CartDetailCard 
                            key={product.id} 
                            product={product} 
                            qty={product.qty} 
                        />
                    ))}
                    <div className='total'>
                    <h2 className='h2'>Total = ${formatPrice(calculateSubtotal())}</h2>
                    
                    
                    
                <button className='checkout'>Continuar compra</button>    
                </div>
                
                </div>
                
            )}
        </div>
    );
};

export default Cart;




