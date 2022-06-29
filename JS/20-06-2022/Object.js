var student = {
  id: 101,
  name: "sneha",
  city: "Hyd",
  phone: 999999,
};

console.log(student);

//Accessing a Particular Property

console.log(student.phone); // dot notation
console.log(student.name);
console.log(student["city"]); //square bracket notation

//Inserting New Property

student.email = "sneha@gmail.com";
student.state = "TS";

console.log(student);

// update Property

student.phone = 888888;
student.name = "Rahul";
console.log(student);

student.city = "Warangal"; // insertion or updation
student.email = "Rahul@gmail.com"; //insertion or updation - updation

//delete a Property from Object
delete student.state;

console.log(student);
