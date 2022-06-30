var trIds = [];

var userDetails = [
  {
    image:
      "https://static.vecteezy.com/system/resources/previews/000/662/785/original/man-face-cartoon-vector.jpg",
    name: "Chris",
    gender: "male",
    email: "Chris@gmail.com",
    city: "Delhi",
    phone: 99999999,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
  {
    image:
      "https://cdn4.vectorstock.com/i/1000x1000/95/28/cartoon-male-teacher-vector-16659528.jpg",
    name: "Adam",
    gender: "male",
    email: "adam@gmail.com",
    city: "Mumbai",
    phone: 888888888,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
  {
    image:
      "https://i.pinimg.com/originals/7f/68/fc/7f68fc74675dc2234ba931f826263cd3.jpg",
    name: "Swapna",
    gender: "female",
    email: "swapna@gmail.com",
    city: "Banglore",
    phone: 98989765431,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
  {
    image: "https://wallpapercave.com/wp/wp7141936.jpg",
    name: "zoya",
    gender: "female",
    email: "zoya@gmail.com",
    city: "Hyderabad",
    phone: 98989876543,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
  {
    image:
      "https://cdn2.vectorstock.com/i/1000x1000/28/96/young-man-face-cartoon-design-vector-9772896.jpg",
    name: "Raj",
    gender: "male",
    email: "Raj@gmail.com",
    city: "Bhopal",
    phone: 99999999,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
  {
    image:
      "https://th.bing.com/th/id/OIP.4jNOB46AIDjgFCaLI4a4sgHaJC?pid=ImgDet&rs=1",
    name: "Sri",
    gender: "male",
    email: "Sri@gmail.com",
    city: "Vizag",
    phone: 888888888,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
  {
    image:
      "https://st4.depositphotos.com/8230070/23108/v/950/depositphotos_231086746-stock-illustration-face-expression-woman-blond-hair.jpg",
    name: "Rajshree",
    gender: "female",
    email: "Rajshree@gmail.com",
    city: "Gurugram",
    phone: 98989765431,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
  {
    image:
      "https://media.istockphoto.com/photos/young-business-woman-picture-id467257691?k=6&m=467257691&s=612x612&w=0&h=5uMLYLpKNQQotr6BlE04_BRfBbBcKsSagaR4X3bUJ88=",
    name: "Raziya",
    gender: "female",
    email: "Raziya@gmail.com",
    city: "Hyderabad",
    phone: 98989876543,
    description:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Laboriosam at assumenda natus et dignissimos? Cumque, magni labore iure culpa quia, eum,earum id placeat impedit velit voluptates corrupti accusantium ea?",
  },
];

var temp = userDetails;

function filterData(data) {
  trIds.forEach(function (ele) {
    document.getElementById(ele).remove();
  });
  trIds = [];

  if (data === "male") {
    temp = userDetails.filter(function (ele) {
      return ele.gender === "male";
    });
  } else if (data === "female") {
    temp = userDetails.filter(function (ele) {
      return ele.gender === "female";
    });
  } else {
    temp = userDetails;
  }

  fnShowTable();
}

function fnShowTable() {
  var tableRow = document.getElementById("tableRow");
  var radiowRow = document.getElementById("radioRow");
  var btnHide = document.getElementById("hide");
  var btnShow = document.getElementById("show");
  var tbody = document.getElementById("tbody");

  temp.map(function (element, index) {
    //create the tr,img and td
    var tr = document.createElement("tr");
    tr.id = "tr" + (index + 1); //tr8
    trIds.push(tr.id);

    var td0 = document.createElement("td");
    var td1 = document.createElement("td");
    var td2 = document.createElement("td");
    var td3 = document.createElement("td");
    var td4 = document.createElement("td");
    var td5 = document.createElement("td");
    var img = document.createElement("img");

    img.src = element.image;
    img.width = 50;
    img.height = 50;
    img.style.borderRadius = "50%";

    td1.appendChild(img);
    td0.innerText = index + 1;
    td2.innerText = element.name;
    td3.innerText = element.gender;
    td4.innerText = element.email;
    td5.innerText = element.city;
    tr.appendChild(td0);
    tr.appendChild(td1);
    tr.appendChild(td2);
    tr.appendChild(td3);
    tr.appendChild(td4);
    tr.appendChild(td5);

    tbody.appendChild(tr);
  });

  tableRow.style.display = "block";
  radiowRow.removeAttribute("style");
  btnHide.disabled = false;
  btnShow.disabled = true;
}

function fnHideTable() {
  var tableRow = document.getElementById("tableRow");
  var radiowRow = document.getElementById("radioRow");
  var btnHide = document.getElementById("hide");
  var btnShow = document.getElementById("show");

  console.log(trIds);

  trIds.forEach(function (ele) {
    document.getElementById(ele).remove();
  });

  // get reference of 8 rows and remove it  // remove()

  tableRow.style.display = "none";
  radiowRow.style.display = "none";
  btnHide.disabled = true;
  btnShow.disabled = false;

  trIds = [];
}
