import React from "react"; // Mandatory Line
import Header from "./Header";
function Main() {
  return (
    <div>
      <h2>Main Component</h2>
      <img
        src="https://th.bing.com/th/id/R.bc71c1c1c50551a1d65e7b529ea29d08?rik=EU42gCFH4J%2bBZA&riu=http%3a%2f%2fwww.goodworklabs.com%2fwp-content%2fuploads%2f2016%2f10%2freactjs.png&ehk=qvQ5EVoUnJZ7k5L347zsU3f87YTckr1iQBzKdwXJd0w%3d&risl=&pid=ImgRaw&r=0"
        width="300px"
        height="300px"
      />

      <h3>React JS</h3>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam in
        perspiciatis consequatur, voluptas facilis pariatur modi ipsam
        veritatis, quaerat aliquid dolor unde ab consectetur, quam veniam?
        Temporibus doloremque sed earum.
      </p>
      <Header />
      <button>Explore More !!!</button>
      <Header />
    </div>
  );
}

export default Main;
