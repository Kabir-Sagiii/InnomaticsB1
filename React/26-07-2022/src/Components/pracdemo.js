import React, { Component } from "react";

class pracdemo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      email: "",
    };
    this.nameRef = React.createRef();
    this.passwordRef = React.createRef();
    this.emailRef = React.createRef();
  }

  handleReg = () => {
    console.log(this.nameRef.current);
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-6">
            <div className="card">
              <div className="card-header">
                <h3>Registration</h3>
              </div>

              <div className="card-body">
                <div className="mt-3">
                  <input
                    refs={this.nameRef}
                    type="text"
                    className="form-control"
                    placeholder="Enter Name"
                  />
                </div>
                <div className="mt-3">
                  <input
                    ref={this.passwordRef}
                    type="password"
                    className="form-control"
                    placeholder="Enter Password"
                  />
                </div>
                <div className="mt-3">
                  <input
                    ref={this.emailRef}
                    type="email"
                    className="form-control"
                    placeholder="Enter Email"
                  />
                </div>
                <button
                  className="btn mt-3 btn-primary"
                  onClick={this.handleReg}
                >
                  Register
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default pracdemo;
