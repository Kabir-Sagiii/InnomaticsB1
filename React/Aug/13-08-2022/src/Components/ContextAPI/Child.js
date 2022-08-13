import React, { Component } from "react";
import myContext from "./Context";

class Child extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-secondary text-white">
          <h4>Child Component</h4>
        </div>
        <div className="card-body">
          <dl>
            <dt>User Name</dt>
            <dd>
              <myContext.Consumer>
                {(userData) => {
                  return userData;
                }}
              </myContext.Consumer>
            </dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default Child;
