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

function App() {
  return (
    <div id="app">
      <Nav />
      {/* <UserProfile /> */}
      {/* <FunctionalComp /> */}
      {/* <Emp /> */}
      <Products />
    </div>
  );
}

export default App;
