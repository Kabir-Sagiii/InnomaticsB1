import React, { useState } from "react";
import C from "./C";

function B() {
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h3>B Component</h3>
      </div>

      <div className="card-body">
        <C />
      </div>
    </div>
  );
}

export default B;
