var Product = {
  pname: "Iphone 13",
  price: 90000,
  qty: 6,
  totalAmount: function (name) {
    console.log(name);
    // console.log(Product.price * Product.qty);
    return Product.price * Product.qty;
  },
};

console.log(Product.totalAmount("Iphone 13"));
