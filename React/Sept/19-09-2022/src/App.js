import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./Components/Routing/Nav";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Components/Routing/Home";
import Profile from "./Components/Routing/Profile";
import Skills from "./Components/Routing/Skills";
import Product from "./Components/Redux3/Product";
import ProductDetails from "./Components/Redux3/ProductDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/support" element={<Home />} />
          <Route path="/product" element={<Product />} />
          <Route path="/productD" element={<ProductDetails />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
