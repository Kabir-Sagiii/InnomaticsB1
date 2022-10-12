import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import PageNotFound from "./Components/PageNotFound/Pagenotfound";
import Home from "./Components/Home/Home";
import NewUser from "./Components/Users/NewUser";
import UserDetails from "./Components/Users/UserDetails";
import UserSpecificDetails from "./Components/Users/UserSpecificDetails";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/newuser" element={<NewUser />} />
          <Route path="/users" element={<UserDetails />} />
          <Route path="/details/:id" element={<UserSpecificDetails />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
