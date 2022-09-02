import React, { Component } from "react";

class D extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-danger text-white">
          <h3>D Component</h3>
        </div>

        <div className="card-body">
          <dl>
            <dt>User Name</dt>
            <dd></dd>
            <dt>User City</dt>
            <dd></dd>
          </dl>
        </div>
      </div>
    );
  }
}

export default D;
