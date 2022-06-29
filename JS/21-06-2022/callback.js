function fn1(total) {
  total();
  var data = {
    name: "Sneha",
  };
  console.log(data.name);
  total();
}

fn1(function () {
  var price = 1500;
  var qty = 3;
  console.log(price * qty);
});
