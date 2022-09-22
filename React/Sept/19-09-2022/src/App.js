import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./Components/Routing/Nav";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import Home from "./Components/Routing/Home";
import Profile from "./Components/Routing/Profile";
import Skills from "./Components/Routing/Skills";
import Product from "./Components/Redux3/Product";
import ProductDetails from "./Components/Redux3/ProductDetails";
import Electronic from "./Components/Routing/Electronic";
import Jewellary from "./Components/Routing/Jewellary";
import Mens from "./Components/Routing/Mens";
import Womens from "./Components/Routing/Womens";
import PDetails from "./Components/Routing/PDetails";
import PagenotFound from "./Components/Routing/PagenotFound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/products" element={<Profile />}>
            <Route path="" element={<Navigate to="electronics" />}></Route>
            <Route path="electronics" element={<Electronic />}></Route>
            <Route path="jewelery" element={<Jewellary />} />
            <Route path="men's clothing" element={<Mens />} />
            <Route path="women's clothing" element={<Womens />} />
          </Route>
          <Route path="/support" element={<Home />} />

          <Route path="/productD" element={<ProductDetails />} />
          <Route path="/profile/:id" element={<PDetails />} />
          <Route path="*" element={<PagenotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
