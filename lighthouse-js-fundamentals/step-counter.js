//var array1 = [];
/*
function range (start , end , step) {
  if (start === undefined || end === undefined || step === undefined) {
    return array1;
  } else if (start > end) {
    return array1;
  } else if (step <= 0) {
    return array1;
  } else {
      array1 = [start];
      for (var i = start; i < end; i ++ ) {
        if (start + step <= end) {
            start += step;
            array1[i] = start;
        } else {
          return array1;
        }
          
        }
      }
}
*/


function range (start, end, step) {
  var array1 = [];
  
  if (start === undefined || end === undefined || step === undefined || start > end || step <= 0) {
    return array1;
  } else if (start <= end ){
    
      for (var i = start; i <= end ; i += step) {
          array1.push(i);
      }
      return array1;   
  }
  
}
console.log(range(5, 10, 2));
console.log(range(10, 30,5));
console.log(range(-5, 2, 3));

