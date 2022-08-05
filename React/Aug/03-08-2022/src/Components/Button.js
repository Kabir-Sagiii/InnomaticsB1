import React, { Component } from "react";

class Button extends Component {
  render() {
    return <button className={this.props.bgcolor}>{this.props.btnName}</button>;
  }
}

export default Button;
