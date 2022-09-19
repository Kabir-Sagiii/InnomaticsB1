import React from "react";
import secondAction from "../../Actions/secondAction";

function SecondComp(props) {
  function sendDataToAction(data) {
    secondAction(data);
  }
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <input
            type="text"
            placeholder="Enter Name"
            className="form-control"
            onChange={(event) => {
              sendDataToAction(event.target.value);
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default SecondComp;
