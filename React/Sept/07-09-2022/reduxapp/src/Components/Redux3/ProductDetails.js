import React, { Component } from "react";
import { connect } from "react-redux";

class ProductDetails extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div>
        <h2>Product Details</h2>
      </div>
    );
  }
}

export default connect((storeData) => {
  return {
    storeData: storeData,
  };
}, null)(ProductDetails);
