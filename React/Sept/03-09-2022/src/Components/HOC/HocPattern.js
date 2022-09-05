import React, { useState } from "react";

function hoc(ReactComponent) {
  function NewComponent() {
    const [state, setState] = useState(500);
    const increaseCount = () => {
      setState(state + 1);
    };
    return <ReactComponent state={state} increaseCount={increaseCount} />;
  }

  return NewComponent;
}

export default hoc;
