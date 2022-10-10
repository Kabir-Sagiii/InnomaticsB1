import React, { useState } from "react";
import axios from "axios";

function NewUser(props) {
  const [state, setState] = useState({
    name: "",
    city: "",
    email: "",
    phone: "",
  });

  const sendData = async () => {
    // alert("Working");
    console.log(state);
    const result = await axios.post("http://localhost:9797/userdata", state);
    console.log(result);
    if (result.statusText === "OK") {
      alert("User Created Successfully");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card mt-3">
            <div className="card-header bg-success text-white text-center">
              <h2>New User</h2>
            </div>
            <div className="card-body">
              <input
                type="text"
                className="form-control my-3"
                placeholder="Enter Name"
                onChange={(event) => {
                  setState({
                    ...state,
                    name: event.target.value,
                  });
                }}
              />
              <input
                type="text"
                className="form-control my-3"
                placeholder="Enter Email"
                onChange={(event) => {
                  setState({
                    ...state,
                    email: event.target.value,
                  });
                }}
              />
              <input
                type="number"
                className="form-control my-3"
                placeholder="Enter Phone"
                onChange={(event) => {
                  setState({
                    ...state,
                    phone: event.target.value,
                  });
                }}
              />
              <input
                type="text"
                className="form-control my-3"
                placeholder="Enter City"
                onChange={(event) => {
                  setState({
                    ...state,
                    city: event.target.value,
                  });
                }}
              />
              <div className="text-center">
                <button className="btn btn-outline-success" onClick={sendData}>
                  Create User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NewUser;
