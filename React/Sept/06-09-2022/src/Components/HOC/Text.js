import React, { useState } from "react";
import hoc from "./HocPattern";

function Text(props) {
  return (
    <div className="container mt-5 text-center">
      <div className="row">
        <div className="col">
          <h2 className="display-4" onMouseOver={props.increaseCount}>
            Hovered me {props.state} Times
          </h2>
        </div>
      </div>
    </div>
  );
}

export default hoc(Text);
