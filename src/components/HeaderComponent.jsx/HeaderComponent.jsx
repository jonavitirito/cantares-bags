import "./HeaderComponent.css";
import CartWidgetComponent from "../CartWidgetComponent/CartWidgetComponent";



const HeaderComponent = () => {
    return (
        <header className="header">
            
          <div><a href="./index.html"><img src=
        "https://firebasestorage.googleapis.com/v0/b/cantares-bags-f2181.appspot.com/o/WhatsApp%20Image%202024-08-14%20at%2019.02.20.jpeg?alt=media&token=ec316fa4-0559-429d-9a86-e655c3ca79bd" alt="logo" className='logo' /></a></div>

         <div className="cart-widget">
            <CartWidgetComponent/>
        </div>
            
        

        </header>
    )
}

export default HeaderComponent;