function getUserData() {
  //here write the logic to send request to server and get the response from server
  var nameRef = document.getElementById("name");
  var cityRef = document.getElementById("city");
  var divRef = document.getElementById("div2");

  var userData;
  //create instance of XMLHttpRequest
  var httpObj = new XMLHttpRequest();

  //Prepare the request
  httpObj.open("get", "https://jsonplaceholder.typicode.com/users");

  //send the request
  httpObj.send();

  //handling the success response
  httpObj.onload = function () {
    userData = httpObj.responseText;

    //Convert into JSON Format using JSON.parse(<data>)
    userData = JSON.parse(userData);

    divRef.style.display = "block";
    nameRef.innerText = "User Name :" + userData[0].name;
    cityRef.innerText = "City :" + userData[0].address.city;
    nameRef.style.color = "green";
    cityRef.style.color = "green";
    console.log(userData);
  };

  //handling failure Response
  httpObj.onerror = function () {
    alert("Error while getting data from server, Please try after sometime");
  };
}
