class A {
  name = "Aryan";
  city = "hyd";

  display() {
    console.log(this.name, this.city);
  }
}

class B extends A {
  email = "Aryan@gmail.com";
  phn = 9999999;

  print() {
    this.display();
    console.log(this.email, this.phn);
  }
}

class C extends B {

}

var b1 = new B();
b1.print();
