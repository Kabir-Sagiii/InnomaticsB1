import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function Electronic(props) {
  const [state, setState] = useState([]);
  useEffect(() => {
    axios
      .get("https://fakestoreapi.com/products/category/electronics")
      .then((res) => {
        setState(res.data);
      });
  }, []);
  return (
    <div className="container mt-5 ">
      <div className="row">
        <div className="col">
          <div className="card">
            <div className="card-header">
              {state.length > 0 ? (
                <h2 className="text-success text-center">
                  {state[0].category.toUpperCase()} CATEGORY
                </h2>
              ) : (
                <h3 className="text-danger text-center">No Data</h3>
              )}
            </div>

            <div className="card-body">
              {state.map((ele, i) => {
                return (
                  <ul>
                    <li>
                      <Link to={`/productDetails/${ele.id}`}>
                        {ele.title.slice(0, 20)}
                      </Link>
                    </li>
                  </ul>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Electronic;
