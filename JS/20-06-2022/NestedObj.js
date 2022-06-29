var student = {
  id: 101,
  name: "Rajiv",
  address: {
    Area: {
      area1: "sector 48",
      area2: "sector 50",
    },
    city: "Pune",
    state: "MH",
    country: "India",
  },
};

console.log(student.address.city);

student.address.city = "Mumbai";
console.log(student);

console.log(student.address.Area.area2);
