var ol = document.createElement("ol");
function getData() {
  // Method type --- get
  // url --- https://jsonplaceholder.typicode.com/users

  //   var response = fetch("https://jsonplaceholder.typicode.com/users");
  //   response.then()

  //   fetch("https://jsonplaceholder.typicode.com/users") //axios-- one time
  //     .then(function (res) {
  //       // console.log(res); // binary format -- 00110001
  //       console.log(res.json);
  //       return res.json(); /// convert data in binary to json
  //     })
  //     .then(function (results) {
  //       results.forEach(function (e, i) {
  //         var li = document.createElement("li");
  //         li.innerText = e.name + "------>" + e.email + "---->" + e.phone;
  //         ol.appendChild(li);
  //       });
  //       document.getElementById("div1").appendChild(ol);
  //     });

  fetch("https://randomuser.me/api/?results=50") //axios-- one time
    .then(function (res) {
      // console.log(res); // binary format -- 00110001
      console.log(res.json);
      return res.json(); /// convert data in binary to json
    })
    .then(function (results) {
      results.results.forEach(function (e, i) {
        var img = document.createElement("img");
        var li = document.createElement("li");
        img.src = e.picture.medium;
        img.width = 100;
        img.height = 100;
        li.innerText = e.name.first + "------>" + e.name.last + "---->";
        ol.appendChild(img);
        ol.appendChild(li);
      });
      document.getElementById("div1").appendChild(ol);
    });
}
