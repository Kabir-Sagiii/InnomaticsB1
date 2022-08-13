import React, { Component } from "react";

class Lifecyle extends Component {
  //  name = "";

  constructor(props) {
    super(props);
    console.log("Constructor is Called");
    // this.name = "Innomatics"
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps(props, state) {
    // console.log(props, state);
    console.log("getDerivedStateFromProps is Called");
  }

  componentDidMount() {
    console.log(" componentDidMount is Called");
  }
  updateCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  shouldComponentUpdate(nextProps, nextState) {
    console.log("Previous State", this.state.count);
    console.log("Nextstate", nextState.count);
    if (nextState.count === this.state.count) {
      return false;
    }
    console.log("shouldComponent update is called");
    return true;
  }
  componentDidUpdate() {
    console.log("ComponentDidUpdate is Called");
  }
  getSnapshotBeforeUpdate() {
    console.log("getSnapShotBeforeUpdate is Called");
  }

  render() {
    console.log("Render is Called");
    return (
      <div className="container text-center mt-5">
        <p className="lead">Count Value : {this.state.count}</p>
        <button className="btn btn-primary mt-3" onClick={this.updateCount}>
          Update Count
        </button>
      </div>
    );
  }
}

export default Lifecyle;
