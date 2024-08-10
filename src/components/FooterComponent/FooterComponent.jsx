
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBuildingColumns, faMoneyBillTransfer} from "@fortawesome/free-solid-svg-icons";
import "./FooterComponent.css";
import { faFacebook, faInstagram, faWhatsapp } from "@fortawesome/free-brands-svg-icons";

const FooterComponent =()=>{
    return(

<footer className="footer">
    <div className="medios-pago">
        <h2>MEDIOS DE PAGO</h2>
    </div>
    <div className="icons-pago"><FontAwesomeIcon icon={faBuildingColumns} size="2xl" style={{color: "#dab5a9",}} className="icon-primero" /> <FontAwesomeIcon icon={faMoneyBillTransfer} size="2xl" style={{color: "#dab5a9",}} className="icon-segundo" />
    <h3 className="transfer">Transferencia</h3>
    <h3 className="efect">Efectivo</h3>
    
    </div>
    <div className="local"><h2>LOCAL FÍSICO</h2></div>
    <div>
        <div className="direccion"><p>Boulevard Buenos Aires 1715, Luis Guillón</p></div>
        <div className="encontranos"><h2>Encontranos en...</h2></div>
        </div>
        <div className="redes">
            <div className="ig"><a href="https://www.instagram.com/cantares.bags/?hl=es"><FontAwesomeIcon icon={faInstagram} size="2xl" style={{color: "#dab5a9",}} /></a>
            <p>Cantares.bags</p></div>
            <div className="fb"><a href="https://www.facebook.com/cantaresacc/"><FontAwesomeIcon icon={faFacebook} size="2xl" style={{color: "#dab5a9",}} /></a>
            <p>Cantares Bags</p></div>
            <div className="wp"><a href="https://wa.link/qz4qe7"><FontAwesomeIcon icon={faWhatsapp} size="2xl" style={{color: "#dab5a9",}} /></a>
            <p>1122498957</p></div>
        
    </div>
    
</footer>

    )
}


export default FooterComponent;