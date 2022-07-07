class Student {
  name;
  age;
  city;

  constructor(name, age, city) {
    this.name = name;
    this.age = age;
    this.city = city;
  }

  display() {
    console.log(this.name, this.age, this.city);
  }

  changeAge(age) {
    this.age = age;
  }

  changeName(name) {
    this.name = name;
  }
}

var s1 = new Student("Rahul", 21, "Delhi");
s1.display();

var s2 = new Student("Riya", 24, "Pune");
// s2.name = "Sneha";
// s2.age = 28;
// s2.city = "Hyd";
s2.display();
