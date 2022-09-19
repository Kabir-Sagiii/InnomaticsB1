import React, { Component } from "react";
import { connect } from "react-redux";

class ProductDetails extends Component {
  componentDidMount() {
    console.log(this.props);
  }
  render() {
    return (
      <div className="container mt-3 p-5 bg-success">
        {Object.keys(this.props.storeData.secondReducer.productData).length >
        0 ? (
          <div className="card p-5" style={{ boxShadow: "0 0 10px black" }}>
            <div className="row">
              <div className="col-4">
                <img
                  src={this.props.storeData.secondReducer.productData.image}
                  width="100%"
                  height="250px"
                />
              </div>
              <div className="col-8">
                <dl>
                  <dt>Product ID</dt>
                  <dd>{this.props.storeData.secondReducer.productData.id}</dd>
                  <dt>Product Name</dt>
                  <dd>
                    {this.props.storeData.secondReducer.productData.title}
                  </dd>
                  <dt>Product Price</dt>
                  <dd>
                    ${this.props.storeData.secondReducer.productData.price}
                  </dd>
                  <dt>Product Category</dt>
                  <dd>
                    {this.props.storeData.secondReducer.productData.category}
                  </dd>
                  <dt>Product Description</dt>
                  <dd>
                    {this.props.storeData.secondReducer.productData.description}
                  </dd>
                  <dt>Product Rating</dt>
                  <dd>
                    {this.props.storeData.secondReducer.productData.rating.rate}
                  </dd>
                </dl>
              </div>
            </div>
          </div>
        ) : (
          <div className="text-center">
            {" "}
            <h2 className="text-danger">Data is not Available</h2>{" "}
          </div>
        )}
      </div>
    );
  }
}

export default connect((storeData) => {
  return {
    storeData: storeData,
  };
}, null)(ProductDetails);
