import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function UserDetails(props) {
  const [state, setState] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const deleteUser = async (id) => {
    var res = await axios.delete(`http://localhost:9797/delete/${id}`);
    console.log(res);
    if (res.statusText === "OK") {
      alert("Deleted Successfully");
      getData();
    }
  };

  const getData = async () => {
    var res = await axios.get("http://localhost:9797/accessdata");
    console.log(res);
    setState(res.data);
  };
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col">
          <h2>User Details</h2>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptatum
            deleniti quod sequi aut maiores? Ipsum quis ut vero cumque dolor
            maxime, nesciunt cupiditate ducimus hic? Amet asperiores doloremque
            culpa blanditiis reprehenderit ullam necessitatibus molestiae
            eligendi vero voluptate veritatis, aliquam earum. Ut maiores esse ab
            ipsum veritatis ratione repellat! Placeat, nemo totam iure aut
            similique quidem culpa deleniti hic dicta est sapiente voluptatibus
            quo delectus voluptatum ratione. Ea quos dignissimos minima
            similique unde id hic autem, rerum recusandae. Maxime asperiores
            dolor saepe cupiditate placeat hic consectetur odit officia incidunt
            nihil architecto dolores ipsa facere, id voluptate perferendis
            quibusdam provident eveniet nobis!
          </p>
        </div>
      </div>

      <div className="row mt-5">
        <div className="col">
          <table className="table table-hover">
            <thead>
              <tr>
                <th>SNO</th>
                <th>NAME</th>
                <th>EMAIL</th>
                <th>CITY</th>
                <th colSpan="3">ACTIONS</th>
              </tr>
            </thead>
            <tbody>
              {state.length > 0 ? (
                state.map(function (element, index) {
                  return (
                    <tr>
                      <td>{index + 101}</td>
                      <td>{element.name}</td>
                      <td>{element.email}</td>
                      <td>{element.city}</td>
                      <td>
                        <Link to={`/details/${element._id}`}>
                          {" "}
                          <button className="btn btn-success">Details</button>
                        </Link>
                      </td>
                      <td>
                        <Link to={`/update/${element._id}`}>
                          {" "}
                          <button className="btn btn-primary">Edit</button>
                        </Link>
                      </td>
                      <td>
                        <button
                          className="btn btn-danger"
                          onClick={() => {
                            deleteUser(element._id);
                          }}
                        >
                          Delete
                        </button>
                      </td>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td>
                    <h2>No Data</h2>
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
