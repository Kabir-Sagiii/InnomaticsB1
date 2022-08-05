import React from "react";
import "./State2.css";

class State2 extends React.Component {
  render() {
    return (
      <div id="state2">
        NAME: <input type="text" />
        <br />
        Password: <input type="password" /> <br />
        <button>Login</button>
      </div>
    );
  }
}

export default State2;
