import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Github/Home";
// import Parent from "./Components/Parent-Child/Parent";
import Parent from "./Components/ContextAPI/Parent";
import UserProfile from "./Components/Axios/UserProfile";
import FunctionalComp from "./Components/FunctionalComp";
import Emp from "./Components/Emp";
import Products from "./Components/Products";
import Lifecyle from "./Components/Lifecyle";
import UseEffectComp from "./Components/UseEffect";
import ProductInfoClass from "./Components/ProductInfoClass";

function App() {
  return (
    <div id="app">
      <Nav />
      {/* <UserProfile /> */}
      {/* <FunctionalComp /> */}
      {/* <Emp /> */}
      {/* <Products /> */}
      {/* <Lifecyle /> */}
      {/* <UseEffectComp /> */}
      <ProductInfoClass />
    </div>
  );
}

export default App;
