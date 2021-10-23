const multiplicationTable = function(maxValue) {
  var x = "";
  var y = 1;
  var l = "";
  for (var i = 1; i <= maxValue; i++) {
      l += multiply(maxValue , x , y);
      y++;
  };
  return l;
}

function multiply(value , num, num2) {
  
  for (let j = 1; j <= value; j++) {
    num += j * num2;
    num += " ";
  }
  return num + "\n";
}
console.log(multiplicationTable(1));
console.log(multiplicationTable(5));
console.log(multiplicationTable(10));

//console.log(multiply(5, "", 4));