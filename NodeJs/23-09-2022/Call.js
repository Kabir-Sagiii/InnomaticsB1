var firstObj = {
  c: 100,
};

var secondObj = {
  c: 75,
};

function fnSum(a, b) {
  return a + b + this.c;
}

// console.log(fnSum(20, 30)); // 100

// console.log(fnSum(20, 30)); // 75

console.log(fnSum.call(firstObj, 20, 30));

console.log(fnSum.call(secondObj, 20, 30));

console.log(fnSum.apply(firstObj, [50, 50]));

console.log(fnSum.apply(secondObj, [50, 50]));

const f = fnSum.bind(firstObj);
console.log(f(100, 200));
