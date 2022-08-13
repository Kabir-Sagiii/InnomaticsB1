import React from "react";

import "./Counter.css";

class Counter extends React.Component {
  incCount = () => {
    this.setState({
      count: this.state.count + 1,
    });
  };
  constructor() {
    super();
    this.state = {
      count: 0,
      url: "https://th.bing.com/th/id/R.f81a6f373c244b1f70f4b7402b5ab372?rik=rbXh4ieLuKt%2bmA&riu=http%3a%2f%2flogos-download.com%2fwp-content%2fuploads%2f2016%2f09%2fReact_logo_logotype_emblem.png&ehk=QhGOkKcUKCU7FBQgHOajOiJqJBACUTD2Ni6LsfqzCEA%3d&risl=&pid=ImgRaw&r=0",
    };
  }
  render() {
    return (
      <div className="counter">
        <h2>Count is {this.state.count}</h2>
        <img src={this.state.url} height="100%" width="100%" />

        <button>Family</button>
        <button onClick={this.incCount}>Add Count</button>
        <button>Firends</button>
      </div>
    );
  }
}

export default Counter;
