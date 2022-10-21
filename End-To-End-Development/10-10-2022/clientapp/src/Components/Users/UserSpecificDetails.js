import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";

function UserSpecificDetails(props) {
  const [state, setState] = useState({
    name: "",
    id: 0,
    city: "",
    email: "",
    phone: "",
  });
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
  const id = useParams();
  console.log(id.id);
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <div className="card  mt-3 boxShadow">
            <div className="row">
              <div className="col-4">
                <img
                  src="https://www.greenprophet.com/wp-content/uploads/2013/03/shutterstock_128863255-cell-phone-user-560x423.jpg"
                  width="100%"
                  height="100%"
                />
              </div>
              <div className="col-8 p-4">
                <dl>
                  <dt>User Id</dt>
                  <dd>{state.id}</dd>
                  <dt>User Name</dt>
                  <dd>{state.name}</dd>
                  <dt>User Email</dt>
                  <dd>{state.email}</dd>
                  <dt>User City</dt>
                  <dd>{state.city}</dd>
                  <dt>User Phone</dt>
                  <dd>{state.phone}</dd>
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default UserSpecificDetails;
