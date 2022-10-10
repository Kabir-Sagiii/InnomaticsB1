import React from "react";
import { Link } from "react-router-dom";

class Nav extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-dark bg-dark">
        <div className="container">
          <a className="navbar-brand" href="/">
            React-Express-Mongodb
          </a>
          <ul className="nav">
            <li className="nav-item">
              <Link to="/" className="nav-link text-white">
                Home
              </Link>
            </li>
            <li>
              <Link to="/users" className="nav-link text-white">
                Users
              </Link>
            </li>
            <li>
              <Link to="/newuser" className="nav-link text-white">
                New User
              </Link>
            </li>
            <li>
              <Link to="/login" className="nav-link text-white">
                Login
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Nav;
