import React, { Component } from "react";

class Details extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <h3>User Details</h3>
        </div>

        <div className="card-body">
          <ul className="list-group">
            <li className="list-group-item">{this.props.userData.login}</li>
            <li className="list-group-item">{this.props.userData.email}</li>
            <li className="list-group-item">{this.props.userData.repos_url}</li>
            <li className="list-group-item">Male</li>
            <li className="list-group-item">9999999999</li>
            <li className="list-group-item">Kabir@gmail.com</li>
            <li className="list-group-item">Delhi</li>
            <li className="list-group-item">Male</li>
            <li className="list-group-item">9999999999</li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Details;
