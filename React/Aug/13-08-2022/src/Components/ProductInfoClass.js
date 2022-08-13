// import React, { Component } from "react";
// import axios from "axios";

// class ProductInfoClass extends Component {
//   productInfo;
//   constructor(props) {
//     super(props);
//     this.state = {
//       product: {
//         image: "",
//         description: "",
//         title: "",
//         price: "",
//       },
//     };
//   }
//   componentDidMount() {
//     this.getProductInfo();
//   }

//   getProductInfo = async () => {
//     this.productInfo = await axios.get("https://fakestoreapi.com/products/1");
//     console.log(this.productInfo);
//     this.setState({
//       product: this.productInfo.data,
//     });
//   };

//   render() {
//     console.log(this.state.product.data);
//     return (
//       <div className="container mt-5">
//         <div className="row">
//           <h2>Product Information</h2>
//           <p>
//             Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquam
//             omnis consequatur reprehenderit ullam, animi minus incidunt maiores
//             ad aut velit necessitatibus earum minima placeat voluptatibus dolore
//             laboriosam nihil, iusto neque cupiditate sed eius? Iure omnis
//             accusantium nobis eligendi voluptate illo, odit commodi blanditiis
//             quaerat qui excepturi quo accusamus reprehenderit doloribus.
//           </p>
//           <button onClick={this.getProductInfo}>Get Product</button>
//         </div>
//         <div className="row">
//           <div className="col-4"></div>
//           <div className="col-4">
//             <div className="card">
//               <div className="card-header">
//                 <img
//                   src={this.state.product.image}
//                   width="100%"
//                   height="250px"
//                 />
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     );
//   }
// }

// export default ProductInfoClass;

import React, { useState, useEffect } from "react";
import axios from "axios";

function ProductInfoClass() {
  const [state, setState] = useState({
    image: " ",
    description: "No Data",
    title: "",
  });
  var res;

  useEffect(() => {
    getData();
    return () => {};
  }, []);

  const getData = async () => {
    res = await axios.get("https://fakestoreapi.com/products/9");
    setState(res.data);
  };

  return (
    <div className="container mt-5">
      <div className="row my-3">
        <div className="col">
          <h2>Products Information</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Est commodi
            nesciunt officia iure tenetur itaque repudiandae soluta amet
            consequatur modi, ut inventore expedita dolores fugiat cupiditate
            sit? Laborum quasi voluptate consequuntur sequi voluptas debitis
            omnis aliquam alias atque reiciendis autem, sapiente, cupiditate
            molestiae sunt sit ullam ea explicabo quas aut?
          </p>
          <button className="btn btn-outline-primary" onClick={getData}>
            Get Product
          </button>
        </div>
      </div>
      <div className="row">
        <div className="col-4">
          <img src={state.image} width="100%" height="250px" />
        </div>
        <div className="col-8">
          <h4 className="text-primary">{state.title}</h4>
          <p className="lead">{state.description}</p>
        </div>
      </div>
    </div>
  );
}

export default ProductInfoClass;
