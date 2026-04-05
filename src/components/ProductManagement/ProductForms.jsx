import React, { useState } from "react";

const ProductForms = ({ handleAddProducts }) => {
  const [error, setError] = useState("");

  const handleProductSubmit = (e) => {
    e.preventDefault();
    const name = e.target.name.value;
    const price = e.target.price.value;
    const quantity = e.target.quantity.value;

    console.log(name, price, quantity);

    if (name.length === 0) {
      setError("Please provide a product Name");
    } else if (price.length == 0) {
      setError("Please Provide a price");
    } else if (price < 0) {
      setError("Price can not be negative");
    } else {
      setError("");
    }

    const newProduct = {
      name,
      price,
      quantity,
    };

    handleAddProducts(newProduct);
  };
  return (
    <div>
      <h3>Add a product</h3>
      <form onSubmit={handleProductSubmit}>
        <input type="text" name="name" placeholder="Product Name" />
        <br />
        <input type="text" name="price" placeholder="Product Price" />
        <br />
        <input type="text" name="quantity" placeholder="Product Quantity" />
        <br />
        <input type="submit" value="Submit" />
      </form>

      <p style={{ color: "red" }}>
        <small>{error}</small>
      </p>
    </div>
  );
};

export default ProductForms;
