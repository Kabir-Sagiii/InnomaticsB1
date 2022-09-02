import React, { Component } from "react";
import D from "./D";

class C extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-success text-white">
          <h3>C Component</h3>
        </div>

        <div className="card-body">
          <D />
        </div>
      </div>
    );
  }
}

export default C;
