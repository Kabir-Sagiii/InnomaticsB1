import React from "react";
import Child from "./Child";

class Parent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: "No Data Available",
    };
    this.inputRef = React.createRef();
    this.h4Ref = React.createRef();
  }

  getData = () => {
    this.h4Ref.current.innerText =
      "Parent Component Sent Data To Child Component";
    // this.inputRef.current.style.backgroundColor = "red";
    // this.inputRef.current.type = "password";
    this.setState({
      data: this.inputRef.current.value,
    });
    this.inputRef.current.value = "";
  };

  render() {
    return (
      <div className="card">
        <div className="card-header bg-primary text-white">
          <h4 ref={this.h4Ref}>Parent Component</h4>
        </div>

        <div className="card-body">
          <input type="text" className="form-control" ref={this.inputRef} />
          <button className="btn mt-2 btn-primary" onClick={this.getData}>
            Send Data to Child
          </button>
          <p className="text-primary mt-2">No data</p>
        </div>
        <div className="card-footer">
          <Child d={this.state.data} />
        </div>
      </div>
    );
  }
}

export default Parent;
