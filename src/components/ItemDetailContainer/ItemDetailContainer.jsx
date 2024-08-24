import React, { useState } from 'react'
import ButtonComponent from '../ButtonComponent/ButtonComponent';


const ItemDetailContainer = ({productData}) => {
    // const [stock, setStock]= React.useState(10);
    // const [onAdd, setOnAdd]= React.useState(false);
    // const formatPrice = (price) => {
    //     // Convierte el precio a una cadena
    //     const priceString = price.toString();
    //     // Usa una expresión regular para agregar puntos como separadores de miles
    //     return priceString.replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    
    
    // };
    

        
      return(
        

        <div className='card' key={productData.id}>
      
        <img src={productData.img} alt="#"/>
        
  {/* <Link to={`/item/${products.id}`}>    </Link> */}
        <div className='card-info'>
          <h2 className='titulo-card'>{productData.title}</h2>
          <p className='price'>
            {productData.price}
          </p>
          <ButtonComponent  label="AÑADIR AL CARRITO" />
          <p className='ventas-minoristas'>VENTAS MINORISTAS POR WHATSAPP</p>
        </div>
      
    
     </div> 
      
  )
}

export default ItemDetailContainer;