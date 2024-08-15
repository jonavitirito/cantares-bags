import "./ButtonComponent.css";

const ButtonComponent = ({label, arialabel}) =>{

    return(
<button className="button-component"> {label}</button>
    );
}


export default ButtonComponent