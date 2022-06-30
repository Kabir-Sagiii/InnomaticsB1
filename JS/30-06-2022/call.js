var obj1 = {
  c: 100,
};

var obj2 = {
  c: 150,
};

var obj3 = {
  c: 200,
};

function addNums(x, y) {
  var a = x;
  var b = y;
  var res = a + b + this.c; //100
  console.log(res);
}

addNums.call(obj1, 20, 30);

addNums.call(obj2, 50, 50);

addNums.call(obj3, 100, 100);
