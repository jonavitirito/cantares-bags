import React from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/UseCollection";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";



const Category = () => {
  const [productsFiltered, setProductsFiltered] = React.useState([]);

  const { categoryName } = useParams();
  const { data, loading } = useCollection("products");

  React.useEffect(() => {
    const productsFiltered = products.filter((product) => {
      return product.category === categoryName;
    });
    setProductsFiltered(productsFiltered);
  }, [data, categoryName]);

  return (<div className="card-container"> 
    <ItemListContainer productsData={productsFiltered} />
  </div>);
};

export default Category;