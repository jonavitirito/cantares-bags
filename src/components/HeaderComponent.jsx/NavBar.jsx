import "./NavBar.css";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";
import { Link } from "react-router-dom";
import { NavDropdown } from "react-bootstrap";

import CategoryFilter from "../CategoryFilter/CategoryFilter";
import { useCollection } from "../../hooks/UseCollection";



const NavBar = () => {
   
//     const [data, setData]=useState([])
//     useEffect(()=>{
// const db = getFirestore("categories");
// const dataCollection = collection(db);
//     },[])
   
    return (
        <header className="header">
            
          <div className="header-container">
            <Link to="/cantares-bags"><div className='logo'>
            <img src=
        "https://firebasestorage.googleapis.com/v0/b/cantares-bags-f2181.appspot.com/o/WhatsApp%20Image%202024-08-14%20at%2019.02.20.jpeg?alt=media&token=ec316fa4-0559-429d-9a86-e655c3ca79bd" alt="logo"  />
</div></Link>
         <div className="cart-widget">
            <CartWidgetComponent/>
        </div>
</div>
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
        {/* <NavDropdown title="FILTRAR BUSQUEDA" className="filtro" id="basic-nav-dropdown">
        
              
      
              
                {data[0].categories.map((category, index) => {
                  return (
                    <NavDropdown.Item key={index} >
                      <Link to={`/cantares-bags/${category}`} className='category'>{category}</Link>
                    </NavDropdown.Item>
                  );
})}

              </NavDropdown> */}
              <CategoryFilter/>
            </div>
        

        </header>
    )
}

export default NavBar;