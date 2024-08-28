
import { Link } from "react-router-dom";
import { useCollection } from "../../hooks/UseCollection";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';

import "./Home.css";

import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";



const Home = () => {
  // 
  
const {data}= useCollection("products")

  
  return (
   <div>

  
    <div className='products'> 
    
  <div className="filter">
       <CategoryFilter/>
      </div>
      <ItemListContainer productsData={data}/>
          
     </div>  
        
</div>
        


 

 
    
   


   
   
   
    

    
    
   
                   
                    
     
  )
}

export default Home;