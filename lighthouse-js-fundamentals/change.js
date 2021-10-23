const calculateChange = function(total, cash) {
  var change = {};
  
  var amount = cash - total;
  if (amount >= 2000 ) {
    var twenty = Math.floor(amount / 2000);
    change.twentyDollars = twenty;
    amount -= (twenty * 2000);
  }
  if (amount >= 1000 ) {
    var ten = Math.floor(amount / 1000);
    change.tenDollars = ten;
    amount -= (ten * 1000);
  }
  if (amount >= 500 ) {
    var five = Math.floor(amount / 500);
    change.fiveDollars = five;
    amount -= (five * 500);
  }
  if (amount >= 200 ) {
    var two = Math.floor(amount / 200);
    change.twoDollars = two;
    amount -= (two * 200);
  }
  if (amount >= 100 ) {
    var one = Math.floor(amount / 100);
    change.oneDollars = one;
    amount -= (one * 100);
  }
  if (amount >= 25 ) {
    var quarter = Math.floor(amount / 25);
    change.quarter = quarter;
    amount -= (quarter * 25);
  }
  if (amount >= 10 ) {
    var dime = Math.floor(amount / 10);
    change.dime = dime;
    amount -= (dime * 10);
  }
  if (amount >= 5 ) {
    var nickel = Math.floor(amount / 5);
    change.nickel = nickel;
    amount -= (nickel * 5);
  }
  if (amount >= 1 ) {
    var penny = Math.floor(amount / 1);
    change.penny = penny;
    amount -= (penny * 1);
  }
  return change;
};


console.log(calculateChange(1787, 2000));
console.log(calculateChange(2623, 4000));
console.log(calculateChange(501, 1000));

