import React, { useEffect } from "react";

function BComp() {
  useEffect(() => {
    return () => {
      console.log("B Comp will be removed soon");
    };
  });
  return (
    <div className="container">
      <p className="display-3 text-danger">I am B Component</p>
    </div>
  );
}

export default BComp;
