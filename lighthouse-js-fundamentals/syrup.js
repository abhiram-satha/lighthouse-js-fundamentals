function howManyHundreds(num) {
  var ship = 0;
  
  var toRound = num / 100;
  ship = Math.floor(toRound);

  return ship;
} 

console.log(howManyHundreds(1000));
console.log(howManyHundreds(894));
console.log(howManyHundreds(520));
console.log(howManyHundreds(99));
console.log(howManyHundreds(0));