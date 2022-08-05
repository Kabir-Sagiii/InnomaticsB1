import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Github/Home";
// import Parent from "./Components/Parent-Child/Parent";
import Parent from "./Components/ContextAPI/Parent";
import UserProfile from "./Components/Axios/UserProfile";

function App() {
  return (
    <div id="app">
      <Nav />
      <UserProfile />
    </div>
  );
}

export default App;
