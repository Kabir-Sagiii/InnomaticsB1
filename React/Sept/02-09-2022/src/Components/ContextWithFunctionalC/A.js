import React, { useState } from "react";
import B from "./B";
import Context from "./functionalContext";

function A() {
  const [state, setState] = useState("Sagar");

  const updateState = () => {
    setState("Kabir ");
  };
  return (
    <div className="card">
      <div className="card-header bg-dark text-white">
        <h3>A Component</h3>
      </div>

      <div className="card-body">
        <button className="btn btn-dark mx-5 my-2" onClick={updateState}>
          Send Data To C
        </button>
        <Context.Provider value={state}>
          <B />
        </Context.Provider>
      </div>
    </div>
  );
}

export default A;
