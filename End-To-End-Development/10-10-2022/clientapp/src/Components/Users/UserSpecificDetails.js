import React from "react";
import { useParams } from "react-router-dom";

function UserSpecificDetails(props) {
  const id = useParams();
  console.log(id.id);
  return (
    <div>
      <h2>Specific User Details</h2>
    </div>
  );
}

export default UserSpecificDetails;
