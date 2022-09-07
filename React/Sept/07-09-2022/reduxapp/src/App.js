import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./Components/Redux1/Home";

function App() {
  return (
    <div className="App">
      <nav className="bg-dark text-white p-3">
        <h3>Redux Concept</h3>
      </nav>
      <Home />
    </div>
  );
}

export default App;