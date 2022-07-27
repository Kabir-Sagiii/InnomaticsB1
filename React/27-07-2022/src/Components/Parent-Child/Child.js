import React, { Component } from "react";

class Child extends Component {
  render() {
    return (
      <div className="container p-3">
        <div className="row">
          <div className="col">
            <div className="card">
              <div className="card-header bg-success text-white">
                <h4>Child Component</h4>
              </div>
              <div className="card-body">
                <div className="row">
                  <div className="col-8">
                    <input
                      type="text"
                      placeholder="Enter Name"
                      className="form-control"
                    />
                  </div>
                  <div className="col-4">
                    <button className="btn btn-success">Send </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Child;
