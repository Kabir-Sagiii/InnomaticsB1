class Operation {
  result;
  operate(num1, num2) {
    console.log(num1, num2);
  }
}

class Add extends Operation {
  operate(num1, num2) {
    this.result = num1 + num2;
    console.log(this.result);
  }
}

class Sub extends Operation {
  operate(num1, num2) {
    this.result = num1 - num2;
    console.log(this.result);
  }
}

var add1 = new Add();
add1.operate(100, 200);

var sub1 = new Sub();
sub1.operate(200, 100);
