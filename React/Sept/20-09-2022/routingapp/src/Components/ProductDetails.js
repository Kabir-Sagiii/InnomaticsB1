import React from "react";
import { useParams } from "react-router-dom";

function ProductDetails(props) {
  const { id } = useParams();
  return (
    <div>
      <h2>Product Details : {id}</h2>
    </div>
  );
}

export default ProductDetails;
