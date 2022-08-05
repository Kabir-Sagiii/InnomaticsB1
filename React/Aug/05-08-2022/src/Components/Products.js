import React, { useState } from "react";

function Products() {
  const [state, setState] = useState({
    productDetails: [],
  });

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-2">
          <div className="row">
            <button className="btn btn-danger my-3">Electronics</button>
          </div>
          <div className="row">
            <button className="btn btn-danger my-3">Jewelery</button>
          </div>
          <div className="row">
            <button className="btn btn-danger my-3">Men's Clothing</button>
          </div>
          <div className="row">
            <button className="btn btn-danger my-3">Women's Clothing</button>
          </div>
        </div>
        <div className="col-10">
          {state.productDetails.length > 0 ? (
            <div>Show Data </div>
          ) : (
            <div className="text-center mt-5">
              <h2 className="text-danger mt-5">No Data</h2>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
