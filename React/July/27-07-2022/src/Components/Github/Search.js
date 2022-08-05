import React, { Component } from "react";

class Search extends Component {
  render() {
    return (
      <div className="card">
        <div className="card-header bg-dark text-white">
          <h2>GITHUB SEARCH</h2>
        </div>

        <div className="card-body">
          <div className="row">
            <div className="col-8">
              <input
                type="text"
                placeholder="Enter User Name"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <button className="btn btn-outline-dark px-5">Search</button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
