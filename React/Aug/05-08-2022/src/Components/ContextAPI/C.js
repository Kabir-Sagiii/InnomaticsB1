import React, { Component } from "react";
import Child from "./Child";

class C extends Component {
  render() {
    return (
      <div className="card ">
        <div className="card-header bg-primary text-white">
          <h4>C Component</h4>
        </div>

        <div className="card-body">
          <Child />
        </div>
      </div>
    );
  }
}

export default C;
