let diceRoll = function(num) {
  let result = [];
  
  for (let i = 0; i < num; i++) {
    result.push(Math.floor(Math.random() * 6) + 1);
  }
  return result.join(" ,");
};



console.log(`Rolled ${process.argv[2]} dice: ${diceRoll(process.argv[2])}`);