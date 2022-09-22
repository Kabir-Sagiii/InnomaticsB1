import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";

function Nav(props) {
  return (
    <div id="nav" className="container-fluid p-3 bg-dark">
      <Link to="/">Home</Link>

      <Link to="/products">Products</Link>
      <Link to="/profile">Profile</Link>
      <Link to="/contactus">Contact Us</Link>
      <Link to="/login">Login</Link>
      <Link to="/signup">Signup</Link>
    </div>
  );
}

export default Nav;
