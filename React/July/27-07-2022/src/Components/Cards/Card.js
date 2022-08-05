import React from "react";

class Card extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-header">
          <img src={this.props.img} width="100%" height="250px" />
        </div>

        <div className="card-body">
          <h3>{this.props.n}</h3>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit.
            Praesentium fugit ratione nesciunt rerum. Mollitia animi dolore
            consequuntur eligendi, officia alias?
          </p>
          <button className="btn btn-primary">{this.props.n} Profile</button>
        </div>
      </div>
    );
  }
}

export default Card;
