import logo from "./logo.svg";
import "./App.css";
import Header from "./Header";
import Main from "./Main";
import Card from "./Components/Card";
import DynamicCard from "./Components/DynamicCard";
import Parent from "./Components/Parent-Child/Parent";
function App() {
  return (
    <div className="App">
      {/* <div className="container">
        <div className="row">
          <div className="col-4">
            <DynamicCard
              name="Sneha Reddy"
              image="https://th.bing.com/th/id/OIP.-Fp-eW6s4ncX8-6Hv7wu2QHaKQ?pid=ImgDet&rs=1"
            />
          </div>
          <div className="col-4">
            <DynamicCard
              name="Rahul Verma"
              image="https://1.bp.blogspot.com/-WbMPsCJq81Y/X8EK2bWmHuI/AAAAAAAAIt4/i7iwAlbFprc8PKTglS7QbX6wNzegfCQgACLcBGAsYHQ/s2048/PNGKH_0000064.png"
            />
          </div>
          <div className="col-4">
            <DynamicCard
              name="Rajesh sharma"
              image="https://th.bing.com/th/id/R.cbab2ad6821b7acf3d522d675cf46bbc?rik=TgAECy8aXqCNNQ&riu=http%3a%2f%2fclipart-library.com%2fimages_k%2fboy-transparent-background%2fboy-transparent-background-22.png&ehk=kXiLFPfrBH97YtvvMJzEOeqbNH3Y8xBwlOxByncwcrw%3d&risl=&pid=ImgRaw&r=0"
            />
          </div>
        </div>
      </div> */}

      <div className="container mt-5">
        <div className="row">
          <div className="col-8">
            <Parent />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
