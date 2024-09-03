

import { useCollection } from "../../hooks/UseCollection";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

import "./Home.css";

import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";





const Home = () => {
  // 
  
const {data}= useCollection("products")

  
  return (
   <div>

  
    <div className='products'> 
    <div className="ventas-menor">
       <p>
        ¡VENTAS POR MAYOR Y MENOR!
       </p>
       <p>
       VENTA MAYORISTA A PARTIR DE LAS 6 UNIDADES
       </p>
        </div>
        <div className="direccion-header-container">
            <p className="direccion-header">Rojas 7, Monte Grande</p>
        </div>


  <div className="filter">
       <CategoryFilter/>
      </div>
      <ItemListContainer productsData={data}/>
        
     </div>  
        
</div>
        


 

 
    
   


   
   
   
    

    
    
   
                   
                    
     
  )
}

export default Home;