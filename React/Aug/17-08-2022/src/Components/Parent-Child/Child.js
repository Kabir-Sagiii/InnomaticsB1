import React from "react";

class Child extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-danger text-white">
          <h4>Child Component</h4>
        </div>

        <div className="card-body">
          <input type="" className="form-control" />
          <button className="btn mt-2 btn-danger">Send Data to Parent</button>
        </div>
        <div className="card-footer">
          <h3 className="text-danger">{this.props.d}</h3>
        </div>
      </div>
    );
  }
}

export default Child;
