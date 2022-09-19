import React from "react";
import Input from "./Input";
import Text from "./Text";

function Home(props) {
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-6">
          <Input />
        </div>
      </div>
      <div className="row">
        <div className="col-6">
          <Text />
        </div>
      </div>
    </div>
  );
}

export default Home;
