import React, { useContext } from "react";
import Context from "./functionalContext";

function C() {
  const mydata = useContext(Context);
  return (
    <div className="card">
      <div className="card-header bg-danger text-white">
        <h3>C Component</h3>
      </div>

      <div className="card-body">
        <dl>
          <dt className="text-danger">Software Institute Name</dt>
          <dd>{mydata}</dd>
        </dl>
      </div>
    </div>
  );
}

export default C;
