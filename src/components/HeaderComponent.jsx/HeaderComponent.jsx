


import "./HeaderComponent.css";
import LOGO from "./IMG_9423.jpg";



const HeaderComponent = () => {
    return (
        <header className="header">
            <div className="menu-hamburguesa"></div>
               <img src={LOGO} alt="logo" className="logo"/>
               <div className="carrito"></div>
        

        </header>
    )
}

export default HeaderComponent;