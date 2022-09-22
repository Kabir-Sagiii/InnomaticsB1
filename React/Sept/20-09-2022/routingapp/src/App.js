import logo from "./logo.svg";
import "./App.css";
import Nav from "./Components/Nav";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Home from "./Components/Home";
import Category from "./Components/Category";
import Electronic from "./Components/Electronic";
import Jewelary from "./Components/Jewelary";
import ProductDetails from "./Components/ProductDetails";
import Pagenotfound from "./Components/Pagenotfound";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/category" element={<Category />}>
            <Route path="" element={<Navigate to="electronics" />} />
            <Route path="electronics" element={<Electronic />} />
            <Route path="jewelery" element={<Jewelary />} />
          </Route>
          <Route path="/productDetails/:id" element={<ProductDetails />} />

          <Route path="*" element={<Pagenotfound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
