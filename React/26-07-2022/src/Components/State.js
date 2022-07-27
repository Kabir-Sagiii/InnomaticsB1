import React from "react";
import "./State.css";

class State extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "Rahul",
      city: "Hyderabad",
    };
  }

  updateState = () => {
    // alert("working");
    this.setState({
      name: "Raj",
      city: "Delhi",
    });
  };

  render() {
    return (
      <div id="statecomp">
        <h3>State Concept</h3>
        <dl>
          <dt>NAME</dt>
          <dd> {this.state.name}</dd>
          <dt>CITY</dt>
          <dd>{this.state.city}</dd>
        </dl>
        <button onClick={this.updateState}>Change Content</button>
      </div>
    );
  }
}

export default State;
