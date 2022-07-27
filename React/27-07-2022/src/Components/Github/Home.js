import React, { Component } from "react";
import Search from "./Search";
import Profile from "./Profile";
import Details from "./Details";

class Home extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Search />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <Profile />
          </div>

          <div className="col-8">
            <Details />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
