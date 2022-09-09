import React from "react";
import { useSelector } from "react-redux";

function Text(props) {
  const data = useSelector((storeData) => {
    return storeData;
  });
  return (
    <div className="card">
      <div className="card-header bg-success text-white">
        <h3>Text Component</h3>
      </div>

      <div className="card-body">
        <h2>
          Content:<span className="text-danger">{data.textReducer}</span>
        </h2>
      </div>
    </div>
  );
}

export default Text;
