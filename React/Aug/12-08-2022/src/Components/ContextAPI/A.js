import React, { Component } from "react";
import B from "./B";

class A extends Component {
  render() {
    return (
      <div className="card ">
        <div className="card-header bg-primary text-white">
          <h4>A Component</h4>
        </div>

        <div className="card-body">
          <B />
        </div>
      </div>
    );
  }
}

export default A;
