const camelCase = function(input) {
  var word = "";
  var word3 = "";

  var word2 = input.split(" ");
  //console.log(word2);

  for (var i = 1; i < word2.length; i++) {
    word2[i] = word2[i][0].toUpperCase() + word2[i].substr(1);
    //console.log(word2);
  }
  return word2.join("");
};
  
  /*
  for (var i = 0; i < word3.length; i++) {
    if (word3[i] === " ") {
      word += "";
    }
    else {
      word += word3[i];
    }
  }
  return word;
};
*/

console.log(camelCase("this is a string"));
console.log(camelCase("loopy lighthouse"));
console.log(camelCase("supercalifragalisticexpialidocious"));