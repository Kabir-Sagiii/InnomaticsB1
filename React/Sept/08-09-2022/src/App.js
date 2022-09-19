import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Redux1/Home";
import SecondComp from "./Components/Redux1/SecondComp";
import Product from "./Components/Redux3/Product";
import ProductDetails from "./Components/Redux3/ProductDetails";

function App() {
  return (
    <div className="App">
      <nav className="bg-dark text-white p-3">
        <h3>Redux Concept with Class Component</h3>
      </nav>
      <div className="container mb-5">
        <div className="row">
          <div className="col">
            <Product />
          </div>
        </div>
        <div className="row">
          <div className="col"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
