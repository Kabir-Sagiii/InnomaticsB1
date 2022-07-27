import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Kabir",
      city: "Delhi",
    };
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-3"></div>
          <div className="col-6">
            <div className="card">
              <div className="card-header bg-primary text-white">
                <h3>Parent Component</h3>
              </div>

              <div className="card-body">
                <dl>
                  <dt>User Name</dt>
                  <dd>{this.state.name}</dd>
                </dl>
              </div>
              <div className="card-footer">
                <Child />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Parent;
