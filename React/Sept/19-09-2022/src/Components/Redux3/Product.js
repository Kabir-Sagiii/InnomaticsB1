import React, { Component } from "react";
import axios from "axios";
import productDetail from "../../Actions/product";
import ProductDetails from "./ProductDetails";
import { Link } from "react-router-dom";

class Product extends Component {
  constructor(props) {
    super(props);
    this.state = {
      image: "",
      title: "",
      price: "",
    };
  }
  componentDidMount() {
    axios.get("https://fakestoreapi.com/products/5").then((productDetails) => {
      console.log(productDetails.data);
      productDetail(productDetails.data);
      this.setState({
        image: productDetails.data.image,
        title: productDetails.data.title,
        price: productDetails.data.price,
      });
    });
  }

  render() {
    return (
      <div className="container mt-5">
        <div className="row">
          <div className="col"></div>
        </div>
        <div className="row">
          <div className="col-4"></div>
          <div className="col-4">
            <div className="card">
              <div className="card-header">
                <img src={this.state.image} width="100%" height="250px" />
              </div>
              <div className="card-body">
                <h4>{this.state.title}</h4>
                <h4>${this.state.price}</h4>
                <Link to="/productD">
                  <button className="btn btn-primary">Product Details</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Product;
