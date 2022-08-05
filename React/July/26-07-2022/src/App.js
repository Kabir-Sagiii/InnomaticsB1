import "./App.css";
import "bootstrap/dist/css/bootstrap.css";

import Nav from "./Components/Nav/Nav";
import Button from "./Components/Button";

function App() {
  return (
    <div id="app">
      <Nav />
      <Button btnName="Angular" bgcolor="btn btn-primary mx-2 mt-5" />
      <Button btnName="React" bgcolor="btn btn-success mx-2 mt-5" />
      <Button btnName="HTML" bgcolor="btn btn-danger mx-2 mt-5" />
      <Button btnName="CSS" bgcolor="btn btn-warning mx-2 mt-5" />
    </div>
  );
}

export default App;
