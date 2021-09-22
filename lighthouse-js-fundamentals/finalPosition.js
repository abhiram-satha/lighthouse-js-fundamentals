const finalPosition = function (moves) {
  var x = 0;
  var y = 0;
  var spot = [];
  for (var i = 0; i < moves.length; i++) {
    if(moves[i] === "north") {
      x += 1;
    } else if (moves[i] === "south") {
      x -= 1;
    } else if (moves[i] === "west") {
      y -= 1;
    } else if (moves[i] === "east") {
      y += 1;
    }

  }
  spot.push(y);
  spot.push(x);
  return spot;
}

var arr = ['north', 'north', 'west', 'west', 'north', 'east','north'];
console.log(finalPosition(arr));