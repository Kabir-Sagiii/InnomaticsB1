import React, { Component } from "react";
import D from "./D";
import myContext from "./context";

class C extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-success text-white">
          <h3>C Component</h3>
          <myContext.Consumer>
            {(context) => {
              //  context === this.state
              return <p>{context.city}</p>;
            }}
          </myContext.Consumer>
        </div>

        <div className="card-body">
          <D />
        </div>
      </div>
    );
  }
}

export default C;
