import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="card">
              <div className="card-header">
                <img
                  src="https://static.vecteezy.com/system/resources/previews/000/662/702/original/vector-man-face-cartoon.jpg"
                  width="100%"
                  height="200px"
                />
              </div>
              <div className="card-body">
                <h2>Rajiv Mehta</h2>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus iste voluptate reiciendis aut a quia accusantium in
                  laboriosam, dolorum rerum.
                </p>
                <button className="btn btn-primary">Profile</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Card;
