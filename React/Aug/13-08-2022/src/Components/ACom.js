import React, { Component } from "react";

class ACom extends Component {
  componentWillUnmount() {
    console.log("A Component Will be Removed Soon");
  }
  render() {
    return (
      <div className="container">
        <p className="display-3 text-primary">I am A Component</p>
      </div>
    );
  }
}

export default ACom;
