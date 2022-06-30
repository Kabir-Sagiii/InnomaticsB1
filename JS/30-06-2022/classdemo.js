class Mobile {
  name;
  price;
  qty;

  display() {
    console.log(this.name, this.price, this.qty);
  }
  p1() {
    this.display();
  }
}

var m1 = new Mobile();
m1.name = "Oneplus 9pro";
m1.price = 60000;
m1.qty = 5;

m1.display();
m1.p1();

var m2 = new Mobile();
m2.name = "Iphone 13pro";
m2.price = 110000;
m2.qty = 10;
m2.display();
