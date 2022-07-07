class Parent {
  pname = "Raj";
  pcity = "Hyd";

  display() {
    console.log("Parent Class :", this.pname, this.pcity);
  }
}

class Child extends Parent {
  cname = "Rohan";
  ccity = "Pune";
  display() {
    // super.display();
    this.cname = "Aryan";
    console.log("Child Class :", this.cname, this.ccity);
  }
  p1() {
    super.display();
    this.display();
  }
}

var c1 = new Child();
c1.p1();
