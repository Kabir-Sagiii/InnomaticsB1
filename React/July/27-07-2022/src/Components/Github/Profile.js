import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <img
            src="https://static.vecteezy.com/system/resources/previews/000/662/702/original/vector-man-face-cartoon.jpg"
            width="100%"
            height="200px"
          />
        </div>

        <div className="card-body">
          <h4>Kabir Jaiswal</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad dolor
            rerum nesciunt iste aperiam hic perferendis eius ipsum, error cum!
          </p>
          <button className="btn btn-primary">Profile</button>
        </div>
      </div>
    );
  }
}

export default Profile;
