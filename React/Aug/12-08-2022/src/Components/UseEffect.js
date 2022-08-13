// import React, { useState, useEffect } from "react";

// function UseEffectComp() {
//   const [state, setState] = useState(0);
//   const [name, setName] = useState("Sameer");
//   const [city, setCity] = useState("Hyderabad");

//   useEffect(() => {
//     console.log("this callback act like both didmount and didupdate");
//   });

//   useEffect(() => {
//     console.log("this callback will act like only didmount");
//   }, []);

//   useEffect(() => {
//     console.log(
//       "this callback will act like didupdate only if name and city changes"
//     );
//   }, [name, city]);

//   const updateState = () => {
//     setState(state + 1);
//   };

//   const updateName = () => {
//     setName("Riya");
//   };

//   const updateCity = () => {
//     setCity("Delhi");
//   };

//   return (
//     <div className="container text-center mt-5">
//       <p className="lead">
//         <b> {name}</b>, Count is: <b>{state}</b>{" "}
//       </p>
//       <p className="lead mt-2">
//         User city is <b>{city}</b>
//       </p>
//       <button className="btn btn-success" onClick={updateState}>
//         Update Count
//       </button>

//       <button className="btn btn-success mx-3" onClick={updateName}>
//         Update to Name
//       </button>
//       <button className="btn btn-success mx-3" onClick={updateCity}>
//         Update to City
//       </button>
//     </div>
//   );
// }

// export default UseEffectComp;

import React, { useState } from "react";
import ACom from "./ACom";
import BComp from "./BComp";

function UseEffectComp() {
  const [state, setState] = useState(true);

  return (
    <div className="container mt-5 text-center">
      <div className="row ">
        <div className="col">{state ? <ACom /> : <BComp />}</div>
      </div>
      <div className="row mt-4">
        <div className="col">
          <button
            className="btn btn-success"
            onClick={() => {
              setState(true);
            }}
          >
            Show A Component
          </button>
          <button
            className="btn btn-secondary mx-3"
            onClick={() => {
              setState(false);
            }}
          >
            Show B Component
          </button>
        </div>
      </div>
    </div>
  );
}

export default UseEffectComp;
