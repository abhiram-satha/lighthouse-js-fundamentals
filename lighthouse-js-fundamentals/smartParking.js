const whereCanIPark = function (spots, vehicle) {
  var x = [];
  for (var i = 0; i < spots.length; i++) {
    for (var j = 0; j < spots.length; j++) {
      if (vehicle === "regular" && spots[i][j] === "R") {
        x[1] = i;
        x[0] = j;
      } else if (vehicle === "small" && (spots[i][j] === "R" || spots[i][j] === "S")) {
        x[1] = i;
        x[0] = j;
      } else if (vehicle === "motorcycle" && (spots[i][j] === "M" || spots[i][j] === "S" || spots[i][j] === "R")) {
        x[1] = i;
        x[0] = j;
      } 
    } 
  } if (x.length === 0) {
    return false;
  }
  return x;
};

console.log(whereCanIPark(
  [
    // COLUMNS ARE X
    // 0    1    2    3    4    5
    ['s', 's', 's', 'm', 'r', 'R'], // 0 ROWS ARE Y
    ['s', 'm', 's', 'm', 'r', 'm'], // 1
    ['s', 'm', 's', 'm', 'r', 'm'], // 2
    ['m', 'r', 's', 'm', 'r', 'm'], // 3
    ['m', 'r', 's', 'm', 'r', 'm'], // 4
    ['m', 'r', 'm', 'm', 'm', 'm']  // 5
  ],
  'motorcycle'
));

console.log(whereCanIPark(
  [
    ['M', 'M', 'M', 'M'],
    ['M', 's', 'M', 'M'],
    ['M', 'M', 'M', 'M'],
    ['M', 'M', 'r', 'M']
  ],
  'small'
));

console.log(whereCanIPark(
  [
    ['s', 's', 's', 's', 's', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['s', 'm', 's', 'S', 'r', 's'],
    ['S', 'r', 's', 'm', 'r', 's'],
    ['S', 'r', 's', 'm', 'R', 's'],
    ['S', 'r', 'S', 'M', 'm', 'S']
  ],
  'regular'
))