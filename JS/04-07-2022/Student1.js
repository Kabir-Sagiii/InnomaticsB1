class Studentdemo {
  name;
  age;
  static city = "hyd";

  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  display() {
    console.log(this.name, this.age, Studentdemo.city);
  }

  changeAge(age) {
    this.age = age;
  }

  changeName(name) {
    this.name = name;
  }

  static changeCity(city) {
    Studentdemo.city = city;
  }
}

var s1 = new Studentdemo("Raj", 24);
var s2 = new Studentdemo("Sneha", 21);

s1.display();
s2.display();
console.log("------------------------------");
s1.changeName("Aryan");
Studentdemo.changeCity("Delhi");
s1.display();
s2.display();
