import React, { Component } from "react";

class Profile extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <img
            src={this.props.userData.avatar_url}
            width="100%"
            height="200px"
          />
        </div>

        <div className="card-body">
          <h4>{this.props.userData.login}</h4>
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
