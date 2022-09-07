import React, { Component } from "react";
import hoc from "./hoc";

class Emp extends Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <h2>Employee Details</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis
            aliquid, sequi maxime voluptas odit architecto non libero asperiores
            velit eaque ducimus harum quam. Debitis voluptas atque
            exercitationem quasi recusandae nemo assumenda culpa, nesciunt
            quaerat! Neque aliquam corrupti officia veritatis accusamus
            expedita? Distinctio repellat illum veniam veritatis fugit, porro
            voluptatem voluptatibus! Deserunt, ex temporibus voluptates quia
            voluptatem dolore provident delectus sapiente consectetur recusandae
            nostrum earum veritatis praesentium nesciunt nihil asperiores!
            Repudiandae nihil itaque ratione quasi provident iusto suscipit
            praesentium similique iste!
          </p>
        </div>
        <div className="row">
          <div className="col-1">
            <input
              defaultChecked
              type="radio"
              value="all"
              name="gender1"
              className="mx-1"
              onChange={() => {
                this.props.filterData("all");
              }}
            />
            ALL
          </div>
          <div className="col-1">
            <input
              type="radio"
              value="male"
              name="gender1"
              className="mx-1"
              onChange={() => {
                this.props.filterData("male");
              }}
            />
            Male
          </div>
          <div className="col-2">
            <input
              type="radio"
              value="female"
              name="gender1"
              className="mx-1"
              onChange={() => {
                this.props.filterData("female");
              }}
            />
            Female
          </div>
        </div>
        <div className="row mt-3">
          <div className="col">
            <table className="table table-hover">
              <thead className="table-dark">
                <tr>
                  <th>IMAGE</th>
                  <th>NAME</th>
                  <th>EMAIL</th>
                  <th>GENDER</th>
                </tr>
              </thead>
              <tbody>
                {this.props.state.data.length > 0 ? (
                  this.props.state.data.map(function (ele) {
                    return (
                      <tr>
                        <td>
                          <img
                            src={ele.picture.medium}
                            width="100px"
                            height="100px"
                          />
                        </td>
                        <td>{ele.name.first}</td>
                        <td>{ele.email}</td>
                        <td>{ele.gender}</td>
                      </tr>
                    );
                  })
                ) : (
                  <div>No data</div>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }
}

export default hoc(Emp);
