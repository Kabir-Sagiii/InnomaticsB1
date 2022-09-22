import React from "react";
import { Link, Outlet } from "react-router-dom";

function Category(props) {
  return (
    <div className="container boxShadoww mt-5">
      <div className="row">
        <div className="col-4 p-5 text-center bg-dark text-white">
          <Link to="electronics" className="text-white mx-4">
            Electronics
          </Link>
          <br />
          <br />
          <br />
          <Link to="jewelery" className="text-white mx-4">
            Jewelary
          </Link>
          <br />
          <br />
          <br />
          <Link to="/mens" className="text-white mx-4">
            MensWearning
          </Link>
          <br />
          <br />
          <br />
          <Link to="/womens" className="text-white mx-4">
            WomensWearning
          </Link>
          <br />
          <br />
          <br />
        </div>
        <div className="col-8">
          <Outlet />
        </div>
      </div>
    </div>
  );
}

export default Category;
