import "./App.css";
// import A from "./Components/CONTEXTAPI/A";
import A from "./Components/ContextWithFunctionalC/A";
import Button from "./Components/HOC/Button";
import Text from "./Components/HOC/Text";
import User from "./Components/HOC2/User";
import Emp from "./Components/HOC2/Emp";

function App() {
  return (
    <div className="App">
      <nav className="bg-dark text-white p-2">
        <h3>HOC PATTERN</h3>
      </nav>
      {/* <div className="container mt-5">
        <div className="row">
          <div className="col">
            <A />
          </div>
        </div>
      </div> */}
      {/* <Button />
      <Text /> */}
      <User />
      <Emp />
    </div>
  );
}

export default App;
