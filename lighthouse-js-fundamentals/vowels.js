const numberOfVowels = function (data) {
  var x = 0;
  for (var i = 0; i < data.length; i++) {
    if (data[i] === "a" || data[i] === "e" || data[i] === "i"  || data[i] === "o"  || data[i] === "u" ) {
      x ++;
    }
  }
  return x;
}

console.log(numberOfVowels("orange"));
console.log(numberOfVowels("lighthouse labs"));
console.log(numberOfVowels("aeiou"));