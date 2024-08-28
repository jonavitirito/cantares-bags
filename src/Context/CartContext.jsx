import React, { createContext, useContext, useState } from 'react';

const CartContext = createContext();

export const CartProvider = ({ children }) => {
    const [itemCount, setItemCount] = useState({ qtyItems: 0, products: [] });
    const [cartItems, setCartItems] = useState([]);
    const addToCart = (product) => {
        setItemCount(prevState => {
            // Asegúrate de que `product` tenga `id`, `price`, `img`, y `qty`
            if (!product || !product.id) {
                console.error('Producto inválido:', product);
                return prevState;
            }

            const existingProduct = prevState.products.find(p => p.id === product.id);

            if (existingProduct) {
                // Actualizar cantidad si el producto ya está en el carrito
                return {
                    qtyItems: prevState.qtyItems + product.qty,
                    products: prevState.products.map(p =>
                        p.id === product.id ? { ...p, qty: p.qty + product.qty } : p
                    ),
                };
            } else {
                // Agregar nuevo producto al carrito
                return {
                    qtyItems: prevState.qtyItems + product.qty,
                    products: [...prevState.products, { ...product, qty: product.qty }],
                };
            }
        });
    };
    const removeFromCart = (productId) => {
        setItemCount(prevState => {
            const productToRemove = prevState.products.find(p => p.id === productId);

            if (!productToRemove) {
                return prevState;
            }

            const updatedProducts = prevState.products.filter(p => p.id !== productId);

            return {
                qtyItems: prevState.qtyItems - productToRemove.qty,
                products: updatedProducts,
            };
        });
    };
    const updateProductQuantity = (productId, quantity) => {
        setItemCount(prevState => ({
            products: prevState.products.map(product => 
                product.id === productId ? { ...product, qty: quantity } : product
            )
        }));
    };

    const totalItemsInCart = cartItems.reduce((total, item) => total + item.qty, 0);
    return (
        <CartContext.Provider value={{ itemCount, addToCart, removeFromCart, updateProductQuantity, totalItemsInCart, cartItems }}>
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

