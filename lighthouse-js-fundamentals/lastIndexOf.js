function lastIndexOf (arr , num) {
  if (arr.length === 0) {
    return -1;
  } else {
      for (var i = arr.length -1; i >= 0; i--) {
      if (arr[i] === num) {
        var spot = i;
        return spot;
      } else {
        var spot = -1;
      }
      
    }
  }
  return spot;
}

console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 1));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 2));
console.log(lastIndexOf([ 0, 1, 4, 1, 2 ], 3));
console.log(lastIndexOf([ 5, 5, 5 ], 5));
console.log(lastIndexOf([], 3));
