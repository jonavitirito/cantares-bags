import React, { useEffect, useState } from 'react'
import "./ItemListContainer.css";
import ButtonComponent from '../ButtonComponent/ButtonComponent';



const ItemListContainer = ({productsData}) => {
  const formatPrice = (price) => {
  // Convierte el precio a una cadena
  const priceString = price.toString();
  // Usa una expresión regular para agregar puntos como separadores de miles
  return priceString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
};




  
    return (
     
      productsData.map((products)=>{
        
                  return(
                    
            
                    <div className='card' key={products.id}>
                  
                    <img src={products.img} alt="#"/>
                    
              {/* <Link to={`/item/${products.id}`}>    </Link> */}
                    <div className='card-info'>
                      <h2 className='titulo-card'>{products.title}</h2>
                      <p className='price'>
                        ${formatPrice(products.price)}
                      </p>
                      <ButtonComponent  label="AÑADIR AL CARRITO" />
                      <p className='ventas-minoristas'>VENTAS MINORISTAS POR WHATSAPP</p>
                    </div>
                  
                
                 </div> )
                  })
                
                
                 )
                ;
                
                }


// Función para formatear el número con puntos como separadores de miles
export default ItemListContainer
