import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function EditUser(props) {
  const [state, setState] = useState({
    name: "",
    id: 0,
    city: "",
    email: "",
    phone: "",
  });
  const id = useParams();
  useEffect(() => {
    getUserDetail();
  }, []);

  const getUserDetail = async () => {
    var userData = await axios.get(
      `http://localhost:9797/specificUser/${id.id}`
    );
    // console.log(userData.data.results[0]);
    setState({
      id: userData.data.results[0]._id,
      name: userData.data.results[0].name,
      city: userData.data.results[0].city,
      email: userData.data.results[0].email,
      phone: userData.data.results[0].phone,
    });
  };

  const sendData = async () => {
    const result = await axios.put(
      `http://localhost:9797/update?id=${state.id}`,
      state
    );
    console.log(result);
    if (result.statusText === "OK") {
      alert("Updated User Successfully");
    }
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-4"></div>
        <div className="col-4">
          <div className="card mt-3">
            <div className="card-header bg-danger text-white text-center">
              <h2>Update User</h2>
            </div>
            <div className="card-body">
              <input
                type="text"
                value={state.name}
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
                value={state.email}
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
                value={state.phone}
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
                value={state.city}
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
                  Update User
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default EditUser;
