
import { Link } from "react-router-dom";
import { useCollection } from "../../hooks/UseCollection";
import ItemListContainer from '../../components/ItemListContainer/ItemListContainer';
import NavDropdown from 'react-bootstrap/NavDropdown';
import "./Home.css";




const Home = () => {
  const {data}= useCollection("products");

  

  return (
    
    <div className='products'>
         
      <div className='filter'>
        
        

      
        {/* <NavDropdown title="FILTRAR BUSQUEDA" className="filtro" id="basic-nav-dropdown">
        
              
        
              
                {data[0].categories.map((category, index) => {
                  return (
                    <NavDropdown.Item key={index} >
                      <Link to={`/cantares-bags/${category}`} className='category'>{category}</Link>
                    </NavDropdown.Item>
                  );
                })}
              </NavDropdown> */}
            
            
              {/* <NavDropdown.Item><Link to={"/categories/MOCHILAS"}>MOCHILAS</Link></NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item>
                Another action
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item> */}
              
            
            
            
            </div>
        
        <ItemListContainer productsData={data}/>
     </div>  
        

        


 

 
    
   


   
   
   
    

    
    
   
                   
                    
     
  )
}

export default Home;