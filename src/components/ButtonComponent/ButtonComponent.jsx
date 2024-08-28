import React, { useState } from 'react';
import { useCart } from '../../Context/CartContext';
import  "./ButtonComponent.css";

const ButtonComponent = ({ label, product }) => {
    const { addToCart } = useCart();

    const handleClick = () => {
        if (!product || !product.id) {
            console.error('Producto no válido:', product);
            return;
        }
        console.log('Producto antes de añadir:', product);
        addToCart(product);
        console.log('Producto añadido al carrito:', product);
    };

    return (
        <button className='button-component' onClick={handleClick}>
            {label}
        </button>
    );
}

export default ButtonComponent;



