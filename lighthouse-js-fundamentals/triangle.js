/*

function triangle (length) {
  var step = "";
  for (var i = 0; i < length; i++) {
    var step = "";
    for (var j = 0; j < i; j++) {
      step += "#";
    }
      step += "#";
  }
  return step;
}

*/

function makeLine(length) {
  var line = "";
  for (var j = 0; j < length; j++ ) {
    line += "#"
  }
  return line;
}

//console.log(makeLine(5));

function makeTriangle(length) {
  var step = "";
  for (var i = 0; i <= length; i++) {
    makeLine(i);
    step += makeLine(i) + "\n";
  }
  return step;
}

console.log(makeTriangle(5));