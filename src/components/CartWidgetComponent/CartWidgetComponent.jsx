import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"


import "./CartWidgetComponent.css";
import { useCart } from "../../Context/CartContext";





const CartWidgetComponent =()=>{
 const {totalItemsInCart}= useCart();
    return(
    <div className="cartwidget">
        <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#f5f5f5",}} />
               
        
        {totalItemsInCart > 0 && <span className="cart-count">{totalItemsInCart}</span>}
   </div>
    

    )
}

export default CartWidgetComponent;
