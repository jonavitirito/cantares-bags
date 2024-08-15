import React, { useEffect, useState } from 'react'
import { collection,getDocs,getFirestore } from 'firebase/firestore';
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
const Home = () => {

    const [products, setProducts] = useState([]);

    useEffect(()=>{
   const db= getFirestore();
   const productsCollection = collection(db, "products");
   getDocs(productsCollection).then((snapshot)=>{
    setProducts(snapshot.docs.map((doc)=>({id: doc.id, ...doc.data()})))
   })
    }, [])


  return (
    <div className='products'>
        <ItemListContainer productsData={products}/>
    </div>
  )
}

export default Home