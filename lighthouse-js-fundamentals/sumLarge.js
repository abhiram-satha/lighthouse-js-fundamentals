function sumLargestNumbers(data) {
  var x = 0;
  var y = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i] > x) {
      x = data[i];
    } 
  }
  for (var j = 0; j < data.length; j++) {
    if (data[j] > y && data[j] !== x) {
      y = data[j];
    }
  }
  return x + y;
}

console.log(sumLargestNumbers([1, 10]));
console.log(sumLargestNumbers([1, 2, 3]));
console.log(sumLargestNumbers([10, 4, 34, 6, 92, 2]));