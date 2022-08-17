import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Card from "./Components/Card";
import DynamicCard from "./Components/DynamicCard";
function App() {
  return (
    <div className="App">
      <div className="container">
        <div className="row">
          <div className="col-4">
            <DynamicCard />
          </div>
          <div className="col-4">
            <DynamicCard />
          </div>
          <div className="col-4">
            <DynamicCard />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
