// import React, { createContext, useContext, useEffect, useState } from 'react';

// const CartContext = createContext();

// export const CartProvider = ({ children }) => {
//     const [itemCount, setItemCount] = useState({ qtyItems: 0, products: [] });
//     const [cartItems, setCartItems] = useState(() => {
//         // Cargar el carrito desde localStorage si existe
//         const savedCart = localStorage.getItem('cartItems');
//         return savedCart ? JSON.parse(savedCart) : [];
//       });
    
//       // Guardar el carrito en localStorage cada vez que cambie
//       useEffect(() => {
//         localStorage.setItem('cartItems', JSON.stringify(cartItems));
//       }, [cartItems]);

//   // Guardar el carrito en localStorage cada vez que cambie
//   useEffect(() => {
//     localStorage.setItem('cartItems', JSON.stringify(cartItems));
//   }, [cartItems]); 
  
//   const addToCart = (product) => {

//     // setCartItems(prevItems => {
//     //     const itemIndex = prevItems.findIndex(item => item.id === product.id);
//     //     if (itemIndex >= 0) {
//     //         const updatedItems = [...prevItems];
//     //         updatedItems[itemIndex].qty += qty;
//     //         return updatedItems;
//     //     } else {
//     //         return [...prevItems, { ...product, qty }];
//     //     }
//     // });
//         setItemCount(prevState => {
//             // Asegúrate de que `product` tenga `id`, `price`, `img`, y `qty`
//             if (!product || !product.id) {
//                 console.error('Producto inválido:', product);
//                 return prevState;
//             }

//             const existingProduct = prevState.products.find(p => p.id === product.id);

//             if (existingProduct) {
//                 // Actualizar cantidad si el producto ya está en el carrito
//                 return {
//                     qtyItems: prevState.qtyItems + product.qty,
//                     products: prevState.products.map(p =>
//                         p.id === product.id ? { ...p, qty: p.qty + product.qty } : p
//                     ),
//                 };
//             } else {
//                 // Agregar nuevo producto al carrito
//                 return {
//                     qtyItems: prevState.qtyItems + product.qty,
//                     products: [...prevState.products, { ...product, qty: product.qty }],
//                 };
//             }
//         });


//     };
//     const removeFromCart = (productId) => {
//         setItemCount(prevState => {
//             const productToRemove = prevState.products.find(p => p.id === productId);

//             if (!productToRemove) {
//                 return prevState;
//             }

//             const updatedProducts = prevState.products.filter(p => p.id !== productId);

//             return {
//                 qtyItems: prevState.qtyItems - productToRemove.qty,
//                 products: updatedProducts,
//             };
//         });
//     };
//     const updateProductQuantity = (productId, quantity) => {
//         setItemCount(prevState => ({
//             products: prevState.products.map(product => 
//                 product.id === productId ? { ...product, qty: quantity } : product
//             )
//         }));
//     };

//     const totalItemsInCart = cartItems.reduce((total, item) => total + item.qty, 0);
//     // Cargar el carrito desde localStorage si existe
    
    
    
//     return (
//         <CartContext.Provider value={{ itemCount, addToCart, removeFromCart, updateProductQuantity, totalItemsInCart, cartItems }}>
//             {children}
//         </CartContext.Provider>
//     );
// }

// export const useCart = () => useContext(CartContext);


import React, { createContext, useContext, useEffect, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [itemCount, setItemCount] = useState(() => {
    const savedCart = localStorage.getItem('cartItems');
    return savedCart ? JSON.parse(savedCart) : { qtyItems: 0, products: [] };
  });

  useEffect(() => {
    localStorage.setItem('cartItems', JSON.stringify(itemCount));
  }, [itemCount]);

  const addToCart = (product) => {
    setItemCount(prevState => {
      if (!product || !product.id) {
        console.error('Producto inválido:', product);
        return prevState;
      }

      // Asegúrate de que prevState.products sea un array
      const products = Array.isArray(prevState.products) ? prevState.products : [];

      const existingProduct = products.find(p => p.id === product.id);

      if (existingProduct) {
        return {
          qtyItems: prevState.qtyItems + product.qty,
          products: products.map(p =>
            p.id === product.id ? { ...p, qty: p.qty + product.qty } : p
          ),
        };
      } else {
        return {
          qtyItems: prevState.qtyItems + product.qty,
          products: [...products, { ...product, qty: product.qty }],
        };
      }
    });
  };

  const removeFromCart = (productId) => {
    setItemCount(prevState => {
      // Asegúrate de que prevState.products sea un array
      const products = Array.isArray(prevState.products) ? prevState.products : [];

      const productToRemove = products.find(p => p.id === productId);

      if (!productToRemove) {
        return prevState;
      }

      const updatedProducts = products.filter(p => p.id !== productId);

      return {
        qtyItems: prevState.qtyItems - productToRemove.qty,
        products: updatedProducts,
      };
    });
  };

  const updateProductQuantity = (productId, quantity) => {
    setItemCount(prevState => {
      // Asegúrate de que prevState.products sea un array
      const products = Array.isArray(prevState.products) ? prevState.products : [];

      const product = products.find(p => p.id === productId);

      if (!product) {
        return prevState;
      }

      const qtyDifference = quantity - product.qty;

      return {
        qtyItems: prevState.qtyItems + qtyDifference,
        products: products.map(p =>
          p.id === productId ? { ...p, qty: quantity } : p
        ),
      };
    });
  };

  // Asegúrate de que itemCount.products sea un array
  const totalItemsInCart = (itemCount.products || []).reduce((total, item) => total + item.qty, 0);
  
  return (
    <CartContext.Provider value={{ itemCount, addToCart, removeFromCart, updateProductQuantity, totalItemsInCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);
















// Creamos el provider de nuestro context como un componente HOC el cual recibirá un children

// export const CartProvider = ({ children }) => {
//   const [itemCount, setItemCount] = useState({ qtyItems: 0, products: [] });

//   return (
//     <CartContext.Provider
//       value={{
//         itemCount,
//         setItemCount,
//       }}
//     >
//       {children}
//     </CartContext.Provider>
//   );
// };

