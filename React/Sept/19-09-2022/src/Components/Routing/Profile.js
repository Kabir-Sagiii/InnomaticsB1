import React from "react";
import { Link, Outlet } from "react-router-dom";

function Profile(props) {
  return (
    <div className="container boxShadoww text-success  mt-5">
      <div className="row">
        <div className="col-4 bg-dark p-5">
          <Link to="electronics">Electronics</Link>
          <br />
          <br />
          <br />
          <Link to="jewelery">Jewellary</Link>
          <br />
          <br />
          <br />

          <Link to="men's clothing">MensWearing</Link>
          <br />
          <br />
          <br />
          <Link to="women's clothing">WomensWearing</Link>
          <br />
          <br />
          <br />
        </div>
        <div className="col-8  bg-white">
          <Outlet className="text-success p-5 mt-5" />
        </div>
      </div>
    </div>
  );
}

export default Profile;
