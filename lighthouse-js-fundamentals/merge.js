function merge (arr1 , arr2) {
  for (var i = 0; i < arr2.length; i++) {
    arr1.concat(arr2[i])
  }
  return arr1.sort();
}


merge([ 4, 5, 6 ], [ 1, 2, 3, 4 ]);