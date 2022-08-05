import React, { Component } from "react";
import Search from "./Search";
import Profile from "./Profile";
import Details from "./Details";

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userData: {},
    };
  }

  updateHomeState = (newState) => {
    this.setState({
      userData: newState,
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <Search updateHomeState={this.updateHomeState} />
          </div>
        </div>

        <div className="row">
          <div className="col-4">
            <Profile userData={this.state.userData} />
          </div>

          <div className="col-8">
            <Details userData={this.state.userData} />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
