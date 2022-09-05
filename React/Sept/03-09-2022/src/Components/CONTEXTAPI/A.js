import React, { Component } from "react";
import B from "./B";
import myContext from "./context";

class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      city: "",
    };
  }

  updateState = () => {
    this.setState({
      username: "Krishna",
      city: "Hyderabad",
    });
  };

  render() {
    return (
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h3>A Component</h3>
        </div>

        <div className="card-body">
          <button className="btn btn-dark mx-5 my-2" onClick={this.updateState}>
            Send Data To E
          </button>
          <myContext.Provider value={this.state}>
            <B />
          </myContext.Provider>
        </div>
      </div>
    );
  }
}

export default A;
