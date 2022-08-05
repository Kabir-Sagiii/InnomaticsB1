import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./Components/Nav/Nav";
import Home from "./Components/Github/Home";
// import Parent from "./Components/Parent-Child/Parent";
import Parent from "./Components/ContextAPI/Parent";

function App() {
  return (
    <div id="app">
      <Nav />
      <Parent />
      {/* <Home /> */}
      {/* <Parent /> */}
    </div>
  );
}

export default App;
