class Product {
  pname;
  category;

  constructor() {
    this.pname = "dummy";
    this.category = "dummy";
  }

  display() {
    console.log(this.pname, this.category);
  }
}

class MobileProduct extends Product {
  price;
  qty;
  totalAmount;

  constructor() {
    super();
    this.price = 0;
    this.qty = 0;
    this.totalAmount = 0;
  }

  totalAmt() {
    this.totalAmount = this.price * this.qty;
    this.display();
    console.log(this.totalAmount);
  }
}

class Jewellary extends Product {}

var M1 = new MobileProduct();
M1.pname = "Iphone 12";
M1.category = "Electronics";
M1.price = 60000;
M1.qty = 4;
M1.totalAmt();
