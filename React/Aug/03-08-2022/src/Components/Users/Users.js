import React from "react";
import { userDetails } from "../../UsersData";

class Users extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  updateState = () => {
    this.setState({
      users: userDetails,
    });
  };

  hideState = () => {
    this.setState({
      users: [],
    });
  };

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-12">
            <h3>User Details</h3>
            <p className="lead">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Placeat
              dicta, veritatis ab ut impedit quia praesentium optio natus,
              excepturi labore assumenda adipisci rerum quibusdam iste doloribus
              corporis accusamus laborum facilis nostrum! Quisquam doloremque
              dolor magnam suscipit tempora labore neque tenetur officiis hic
              perferendis consequuntur amet, soluta facilis mollitia aspernatur
              impedit non tempore officia id velit, excepturi odit! Atque saepe
              nostrum odio illo exercitationem, non commodi blanditiis rem minus
              ipsa quod at reprehenderit. Veritatis, ducimus! Nisi labore vero
              optio sapiente ab.
            </p>
            <button
              className="btn btn-outline-primary"
              onClick={this.updateState}
            >
              Show Users Details
            </button>
            <button
              className="btn btn-outline-danger mx-3"
              onClick={this.hideState}
            >
              Hide Users Details
            </button>
          </div>
        </div>

        {this.state.users.length > 0 ? (
          <div className="row mt-5">
            <div className="col-2">
              <input type="radio" name="gender" checked />
              ALL
            </div>

            <div className="col-2">
              <input type="radio" name="gender" />
              MALE
            </div>

            <div className="col-2">
              <input type="radio" name="gender" />
              FEMALE
            </div>
          </div>
        ) : (
          <div> </div>
        )}

        {this.state.users.length > 0 ? (
          <div className="row mt-5 ">
            <div className="col">
              <table className=" table table-hover">
                <thead>
                  <tr>
                    <th>IMAGE</th>
                    <th>NAME</th>
                    <th>GENDER</th>
                    <th>EMAIL</th>
                    <th>CITY</th>
                    <th>ACTION</th>
                  </tr>
                </thead>

                <tbody>
                  {this.state.users.map((ele, index) => {
                    return (
                      <tr>
                        <td>
                          <img
                            src={ele.picture.medium}
                            width="70px"
                            height="70px"
                          />
                        </td>
                        <td>
                          {ele.name.first} {ele.name.last}
                        </td>
                        <td>{ele.gender}</td>
                        <td>{ele.email}</td>
                        <td>{ele.location.city}</td>
                        <td>
                          <a href="" className="btn btn-primary">
                            Details
                          </a>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        ) : (
          <div className="text-danger mt-5 text-center">
            <h2>No Data</h2>
          </div>
        )}
      </div>
    );
  }
}

export default Users;
