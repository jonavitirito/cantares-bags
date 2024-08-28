import React from "react";
import { useParams } from "react-router-dom";
import { useCollection } from "../../hooks/UseCollection";
import ItemListContainer from "../../components/ItemListContainer/ItemListContainer";
import "./Category.css";
import CategoryFilter from "../../components/CategoryFilter/CategoryFilter";

const Category = () => {
  const [productsFiltered, setProductsFiltered] = React.useState([]);

  const { categoryName } = useParams();
  const { data, loading } = useCollection("products");

  React.useEffect(() => {
    const productsFiltered = data.filter((product) => {
      return product.category === categoryName;
    });
    setProductsFiltered(productsFiltered);
  }, [data, categoryName]);

  return (
    <div className="products-filtered">
<div className="filter">
<CategoryFilter/>
</div>

    <ItemListContainer productsData={productsFiltered} />
    
    </div>
  );
};

export default Category;