import React, { Component } from "react";
import B from "./B";

class A extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "Ayush Sharma",
      city: "Delhi",
    };
  }

  render() {
    return (
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h3>A Component</h3>
        </div>

        <div className="card-body">
          <button className="btn btn-dark mx-5 my-2">Send Data To E</button>
          <B />
        </div>
      </div>
    );
  }
}

export default A;
