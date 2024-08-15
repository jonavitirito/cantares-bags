import { faCartShopping } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"

 
const CartWidgetComponent =()=>{


    return(
    <div>
        <FontAwesomeIcon icon={faCartShopping} size="2xl" style={{color: "#f5f5f5",}} />
    </div>

    )
}

export default CartWidgetComponent;
