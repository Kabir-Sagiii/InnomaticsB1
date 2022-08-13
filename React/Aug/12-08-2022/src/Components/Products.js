import React, { useState } from "react";
import axios from "axios";

function Products() {
  var res;
  const [state, setState] = useState({
    productDetails: [],
  });

  const getElecData = async () => {
    res = await axios.get(
      "https://fakestoreapi.com/products/category/electronics"
    );
    console.log(res.data);
    setState({
      productDetails: res.data,
    });
  };

  const getJewData = async () => {
    res = await axios.get(
      "https://fakestoreapi.com/products/category/jewelery"
    );

    setState({
      productDetails: res.data,
    });
  };

  const getMenData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/men's clothing")
      .then((res) => {
        setState({
          productDetails: res.data,
        });
      });
  };
  const getWomenData = () => {
    axios
      .get("https://fakestoreapi.com/products/category/women's clothing")
      .then((res) => {
        setState({
          productDetails: res.data,
        });
      });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-2">
          <div className="row">
            <button className="btn btn-danger my-3" onClick={getElecData}>
              Electronics
            </button>
          </div>
          <div className="row">
            <button className="btn btn-danger my-3" onClick={getJewData}>
              Jewelery
            </button>
          </div>
          <div className="row">
            <button className="btn btn-danger my-3" onClick={getMenData}>
              Men's Clothing
            </button>
          </div>
          <div className="row">
            <button className="btn btn-danger my-3" onClick={getWomenData}>
              Women's Clothing
            </button>
          </div>
        </div>
        <div className="col-10">
          {state.productDetails.length > 0 ? (
            <div className="container">
              <div className="row">
                <div className="col">
                  <h2>{state.productDetails[0].category}</h2>
                  <p>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quos cum laboriosam libero illo, dolor numquam, fugit
                    dolores voluptatibus, quae eos mollitia quam fugiat
                    molestiae. Dolorum accusantium magni blanditiis dolorem
                    aliquid tempora iste hic esse perferendis facilis, eligendi
                    laborum explicabo vitae accusamus, dolores laudantium
                    temporibus quia sapiente earum consequatur culpa eius.
                    Mollitia atque ullam veniam inventore harum voluptas
                    sapiente sit similique.
                  </p>
                </div>
              </div>
              <div className="row">
                {state.productDetails.map((ele) => {
                  return (
                    <div className="col-4">
                      <div className="card">
                        <div className="card-header">
                          <img src={ele.image} width="100%" height="200px" />
                        </div>

                        <div className="card-body">
                          <p className="text-muted">{ele.title}</p>
                          <h4>{ele.price}</h4>
                          <button className="btn btn-primary">
                            More Details
                          </button>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          ) : (
            <div className="text-center mt-5">
              <h2 className="text-danger mt-5">No Data</h2>{" "}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

export default Products;
