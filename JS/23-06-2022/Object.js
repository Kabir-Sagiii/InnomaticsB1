// var student = {
//   name: "Rajiv",
//   address: {
//     city: "Hyd",
//     state: "TS",
//   },
//   marks: [50, 60, 70, 89, 90], //  student.marks[3]
// };

// console.log(student.marks[3]);

var student = {
  name: "Rajiv",
  address: {
    city: "Hyd",
    state: "TS",
  },
  marks: [
    {
      name: "Maths",
      score: 70,
    },
    {
      name: "Science",
      score: 90,
    },
    {
      name: "SS",
      score: 80, // student.marks[2].score
    },
    [
      {
        city: "Delhi", //
      },
    ],
  ], //  student.marks[3]                         //  student.marks[3][0].city
};

// console.log(student.marks[2].score);
console.log(student.marks[3][0].city);
