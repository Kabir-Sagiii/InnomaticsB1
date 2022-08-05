import React, { Component } from "react";

class Search extends Component {
  constructor(props) {
    super(props);
    this.inputRef = React.createRef();
    this.state = {
      userDetails: {},
    };
  }

  getUserDetails = () => {
    fetch(`https://api.github.com/users/${this.inputRef.current.value}`)
      .then((res) => {
        return res.json();
      })
      .then((actualData) => {
        console.log(actualData);
        this.props.updateHomeState(actualData);
      });
  };

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
                ref={this.inputRef}
                type="text"
                placeholder="Enter User Name"
                className="form-control"
              />
            </div>
            <div className="col-4">
              <button
                className="btn btn-outline-dark px-5"
                onClick={this.getUserDetails}
              >
                Search
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Search;
