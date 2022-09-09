import React, { useState } from "react";
import textAction from "../../Actions/textAction";

function Input(props) {
  const [state, setState] = useState("");

  const callReducer = () => {
    textAction(state);
  };
  return (
    <div className="card">
      <div className="card-header bg-primary text-white">
        <h3>Input Component</h3>
      </div>

      <div className="card-body">
        <div className="row">
          <div className="col-8">
            <input
              type="text"
              placeholder="Enter Text"
              className="form-control"
              onChange={(event) => {
                setState(event.target.value);
              }}
            />
          </div>
          <div className="col-4">
            <button className="btn btn-primary px-5" onClick={callReducer}>
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Input;
