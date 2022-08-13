import React, { Component } from "react";

class Child extends Component {
  constructor(props) {
    super(props);

    this.inputRef = React.createRef();
  }

  changeBorderColor = () => {
    this.inputRef.current.style.borderColor = "red";
    this.inputRef.current.placeholder = "Value Changed";
    // alert(this.inputRef.current.value);
  };

  takeDataFromInput = () => {
    this.props.updateState(this.inputRef.current.value);
  };

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
                      ref={this.inputRef}
                      type="text"
                      placeholder="Enter Name"
                      className="form-control"
                    />
                  </div>
                  <div className="col-4">
                    <button
                      className="btn btn-success"
                      onClick={this.takeDataFromInput}
                    >
                      Send{" "}
                    </button>
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
