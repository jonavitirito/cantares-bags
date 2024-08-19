import React, { useEffect, useState } from 'react'
import { collection,getDocs,getFirestore} from 'firebase/firestore';
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
      <div className='filter'><img src="https://firebasestorage.googleapis.com/v0/b/cantares-bags-f2181.appspot.com/o/filter-found-removebg-preview.png?alt=media&token=5d4090ab-1597-4274-9c3f-005474704874" alt="" />
        <h3>FILTRAR BÚSQUEDA</h3>
        </div>
        <ItemListContainer productsData={products}/>
   
    <div>
    
    </div>
     </div>
  )
}

export default Home