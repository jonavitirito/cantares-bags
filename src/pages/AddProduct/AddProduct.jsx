import React, { useState } from 'react';
import { getFirestore, collection, addDoc } from 'firebase/firestore';
import { app } from '../../main';
// import { app } from 'firebase-functions';
// import { app } from '../../firebase'; // Asegúrate de importar correctamente tu configuración de Firebase

const AddProduct = () => {
    const [title, setTitle] = useState('');
    const [img, setImg] = useState('');
    const [price, setPrice] = useState('');
    const [stock, setStock] = useState('');
    const [category, setCategory] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        const db = getFirestore(app);
        try {
            const docRef = await addDoc(collection(db, "products"), {
                title,
                img,
                price: parseFloat(price),
                stock: parseInt(stock),
                category,
            });
            console.log("Producto agregado con ID: ", docRef.id);
            // Limpiar los inputs después de subir
            setTitle('');
            setImg('');
            setPrice('');
            setStock('');
            setCategory('');
        } catch (e) {
            console.error("Error al agregar el producto: ", e);
        }
    };

    return (
        <div>
            <h1>Subir Producto</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <label>Título:</label>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </div>
                <div>
                    <label>Imagen (URL):</label>
                    <input type="text" value={img} onChange={(e) => setImg(e.target.value)} required />
                </div>
                <div>
                    <label>Precio:</label>
                    <input type="number" value={price} onChange={(e) => setPrice(e.target.value)} required />
                </div>
                <div>
                    <label>Stock:</label>
                    <input type="number" value={stock} onChange={(e) => setStock(e.target.value)} required />
                </div>
                <div>
                    <label>Categoría:</label>
                    <input type="text" value={category} onChange={(e) => setCategory(e.target.value)} required />
                </div>
                <button type="submit">Subir Producto</button>
            </form>
        </div>
    );
};





export default AddProduct;