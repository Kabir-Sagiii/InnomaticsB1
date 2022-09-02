import React from "react";

class Child extends React.Component {
  constructor(props) {
    super(props);
    this.input = React.createRef();
  }

  sendDataToParent = () => {
    this.props.updateChildData(this.input.current.value);
  };

  render() {
    return (
      <div className="card">
        <div className="card-header bg-danger text-white">
          <h4>Child Component</h4>
        </div>

        <div className="card-body">
          <input type="" className="form-control" ref={this.input} />
          <button
            className="btn mt-2 btn-danger"
            onClick={this.sendDataToParent}
          >
            Send Data to Parent
          </button>
        </div>
        <div className="card-footer">
          <h3 className="text-danger">{this.props.d}</h3>
        </div>
      </div>
    );
  }
}

export default Child;
