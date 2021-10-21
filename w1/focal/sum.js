const args = process.argv;


//let x = Number(args.slice(2 , 3));
//let y = Number(args.slice(3 , 4));
//console.log(x + y);

function sum (x) {
  for (var i = 2; i < x.length; i++) {
    x[i] = Number(x[i]);
  }
  return x[2] + x[3];
}

console.log(sum(args));

