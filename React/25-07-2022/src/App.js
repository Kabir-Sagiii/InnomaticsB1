import "./App.css";
import "bootstrap/dist/css/bootstrap.css";
import Card from "./Components/Cards/Card";
import Users from "./Components/Users/Users";
import Nav from "./Components/Nav/Nav";

function App() {
  return (
    <div id="app">
      <Nav />
      <Users />

      {/* <div className="container">
        <div className="row">
          <div className="col-4">
            <Card
              bio=""
              n="Rajiv"
              img="https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg"
            />
          </div>
          <div className="col-4">
            <Card
              n="Sneha"
              img="https://res.cloudinary.com/dn9idtu7d/image/upload/v1612872610/go-filing/icn16_d9brpy.png"
            />
          </div>
          <div className="col-4">
            <Card
              n="Raj"
              img="https://th.bing.com/th/id/R.50b628c296e7af456d0c4a89e8feed7d?rik=oEKwMN5eeoh9QQ&riu=http%3a%2f%2fwww.newsshare.in%2fwp-content%2fuploads%2f2017%2f04%2fMiniclip-8-Ball-Pool-Avatar-16.png&ehk=gfYc46ri80H40vAuceGb8rp4zJ7v9oJI11T9%2bb9%2f6mA%3d&risl=&pid=ImgRaw&r=0"
            />
          </div>
        </div>
      </div> */}
    </div>
  );
}

export default App;
