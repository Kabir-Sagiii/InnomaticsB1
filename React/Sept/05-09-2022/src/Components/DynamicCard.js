import React from "react";

class Card extends React.Component {
  constructor() {
    super();

    this.state = {
      img: "https://static.vecteezy.com/system/resources/previews/000/662/702/original/vector-man-face-cartoon.jpg",
      name: "Rajiv Mehta",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    };
  }
  updateState = () => {
    this.setState({
      img: "https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg",
      name: "Kabir Sagar",
      desc: "Description has been updated for User 2",
    });
  };

  updateProfile1 = () => {
    this.setState({
      img: "https://static.vecteezy.com/system/resources/previews/000/662/702/original/vector-man-face-cartoon.jpg",
      name: "Rajiv Mehta",
      desc: " Lorem ipsum dolor sit amet consectetur adipisicing elit.",
    });
  };
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <img src={this.props.image} width="100%" height="200px" />
        </div>
        <div className="card-body">
          <h2>{this.props.name}</h2>
          <p>{this.state.desc}</p>
          <button className="btn btn-primary" onClick={this.updateState}>
            User Profile 1
          </button>
          <button
            className="btn btn-primary mx-2"
            onClick={this.updateProfile1}
          >
            User Profile 2
          </button>
        </div>
      </div>
    );
  }
}

export default Card;
