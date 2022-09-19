import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div id="nav" className="container-fluid p-3 bg-dark">
      <Link to="/">Home</Link>
      <Link to="/product">Product</Link>
      <Link to="/productD">ProductDetails</Link>
      <Link to="/profile">Profile</Link>
    </div>
  );
}

export default Nav;
