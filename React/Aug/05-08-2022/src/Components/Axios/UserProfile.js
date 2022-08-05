import React, { Component } from "react";
import Axios from "axios";

class UserProfile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  getUserDetails = () => {
    Axios.get("https://randomuser.me/api/?results=50").then((res) => {
      console.log(res.data.results);
      this.setState({
        users: res.data.results,
      });
    });
  };
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col">
            <h4>User Details</h4>
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Incidunt
              maxime doloribus exercitationem recusandae mollitia dicta quod
              debitis rem eligendi nam, rerum, magni eos? Praesentium temporibus
              possimus iusto quos perspiciatis facilis dolores odit voluptate
              repudiandae, debitis pariatur delectus ad eius, officia eaque
              exercitationem autem sed ducimus quisquam commodi adipisci libero!
              Laborum, deleniti odit. Tempora minus omnis explicabo tempore
              optio cupiditate. Recusandae debitis ipsa saepe cum ex libero
              pariatur eius quia eaque.
            </p>
            <button className="btn btn-primary" onClick={this.getUserDetails}>
              Get User
            </button>
          </div>
        </div>
        <div className="row mt-5">
          {this.state.users.length > 0 ? (
            this.state.users.map((ele) => {
              return (
                <div className="col-4">
                  <div className="card">
                    <div className="card-header">
                      <img
                        src={ele.picture.medium}
                        width="100%"
                        height="200px"
                      />
                    </div>

                    <div className="card-body">
                      <h2>
                        {ele.name.first} {ele.name.last}
                      </h2>
                    </div>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="display-3 text-center text-danger">
              No User Data
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default UserProfile;
