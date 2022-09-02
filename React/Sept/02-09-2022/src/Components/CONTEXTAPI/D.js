import React, { Component } from "react";
import myContext from "./context";

class D extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-danger text-white">
          <h3>D Component</h3>
        </div>

        <div className="card-body">
          <myContext.Consumer>
            {(contextData) => {
              //contextData === this.state
              return (
                <dl>
                  <dt>User Name</dt>
                  <dd>{contextData.username}</dd>
                  <dt>User City</dt>
                  <dd>{contextData.city}</dd>
                </dl>
              );
            }}
          </myContext.Consumer>
        </div>
      </div>
    );
  }
}

export default D;
