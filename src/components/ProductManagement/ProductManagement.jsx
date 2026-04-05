import React, { useState } from "react";
import ProductForms from "./ProductForms";
import ProductTable from "./ProductTable";

const ProductManagement = () => {
  const [products, setProducts] = useState([]);

  const handleAddProducts = (newProduct) => {
    const newProducts = [...products, newProduct];
    setProducts(newProducts);
  };
  return (
    <div>
      <ProductForms handleAddProducts={handleAddProducts}></ProductForms>

      <ProductTable products={products}></ProductTable>
    </div>
  );
};

export default ProductManagement;
