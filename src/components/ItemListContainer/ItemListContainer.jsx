import React from 'react';
import "./ItemListContainer.css";
import ButtonComponent from '../ButtonComponent/ButtonComponent';

const ItemListContainer = ({ productsData }) => {
    const formatPrice = (price) => {
        const priceString = price.toString();
        return priceString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    };

    return (
        productsData.map(product => (
                <div className='card' key={product.id}>
                    <h2 className='titulo-card'>{product.title}</h2>
                    <img src={product.img} alt={product.title} />
                    <div className='card-info'>
                        
                        <p className='price'>${formatPrice(product.price)}</p>
                        
                        <div className='button-add'>
                            <ButtonComponent 
                                label="AÑADIR AL CARRITO" 
                                product={{ ...product, qty: 1 }} // Asegúrate de que `qty` está presente
                            />
                        </div>
                        <p className='ventas-minoristas'>{product.description}</p>
                        <p className='stock'>Disponible : {product.stock}</p>
                    </div>
                </div>
            ))
        
    );
}

export default ItemListContainer;


