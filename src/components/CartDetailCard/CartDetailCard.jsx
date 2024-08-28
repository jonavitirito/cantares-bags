import React from 'react';
import"./CartDetailCard.css";
import { useCart } from '../../Context/CartContext';
const CartDetailCard = ({ product, qty }) => {
  
  const formatPrice = (price) => {
    const priceString = price.toString();
    return priceString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};

const { removeFromCart, updateProductQuantity } = useCart();

const handleIncrease = () => {
  updateProductQuantity(product.id, product.qty + 1);
};

const handleDecrease = () => {
  if (product.qty > 1) {
      updateProductQuantity(product.id, product.qty - 1);
  }
};
    const handleRemove = () => {
        removeFromCart(product.id);
    };


    return (
        
            product && product.id && (
                <div className='cards-container'>
                     <div className='title-price-img'>
                        <img className='card-img' src={product.img} alt={product.title} />
                    
                   <div className='title-price' >
                        <h2 className='card-title' >{product.title}</h2>
                        <p className='card-price' >${formatPrice(product.price)}</p></div></div>
                        <div className='qty-subtotal'>
                        <p className='card-qty'>Cantidad</p>
                        <div className='btns-qty'>
                        <button className='button-qty' onClick={handleDecrease}>-</button>{qty}<button className='button-qty' onClick={handleIncrease}>+</button></div>
                        <p className='card-subtotal'>Subtotal ${formatPrice(product.price*qty)}</p>
                        <button className='button-remove' onClick={handleRemove}>Eliminar</button>
                        </div>
                    
                </div>
            )
        
    );
};

export default CartDetailCard;
