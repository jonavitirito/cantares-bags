import { useParams } from "react-router-dom";
import { useItemCollection } from "../../hooks/useItemsCollection";
import ItemDetailContainer from "../../components/ItemDetailContainer/ItemDetailContainer";




const ItemDetails = () => {

    const {itemId}= useParams(); 
    
const {product}= useItemCollection("products", itemId);
  return (
    <ItemDetailContainer productData={product}/>
  )
}

export default ItemDetails
