function calculateRectangleArea(length, width) {
  var area = 0;
  if (length < 0 || width < 0) {
      return ;
  } else {
    area = length * width;
  }
  return area;
}



function calculateTriangleArea(base, height) {
  var area = 0;
  if (base < 0 || height < 0) {
    return ;
  } else {
    area = (base * height) / 2
  }
  return area;
}

function calculateCircleArea(radius) {
  var area = 0;
  if (area < 0) {
    return ;
  } else {
    area = Math.PI * (radius * radius);
  }
  return area;
}

console.log(calculateRectangleArea(10, 5));     // should print 50
console.log(calculateRectangleArea(1.5, 2.5));  // should print 3.75
console.log(calculateRectangleArea(10, -5));    // should print undefined

console.log(calculateTriangleArea(10, 5)); // should print 25
console.log(calculateTriangleArea(3, 2.5)); // should print 3.75
console.log(calculateTriangleArea(10, -5)); // should print undefined

console.log(calculateCircleArea(10)); // should print 314.159...
console.log(calculateCircleArea(3.5)); // should print 38.484...
console.log(calculateCircleArea(-1)); // should print undefined