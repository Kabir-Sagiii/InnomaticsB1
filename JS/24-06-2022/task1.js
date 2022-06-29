function fnArray() {
  //   var arr = [10, 20, 30, 40, 50, 60];
  var arr = [10, 20, 3, 40, 5, 60];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      arr[i] = arr[i] + 10;
    } else {
      arr[i] = arr[i] * 10;
    }
  }
  console.log(arr);
}

fnArray();
