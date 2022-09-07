import React, { useState } from "react";
import hoc from "./HocPattern";

function Button(props) {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="col">
          <button
            className="btn btn-success px-5"
            onClick={props.increaseCount}
          >
            Clicked Me {props.state} Times
          </button>
        </div>
      </div>
    </div>
  );
}

export default hoc(Button);
