export var a = 10;

export default function f1() {
  var name = "Inn";
  console.log("F1", a);
  console.log(name);
}

function f2() {
  console.log("F2", a);
  console.log(name); //error
}
console.log(name); //error

f1();
f2();
