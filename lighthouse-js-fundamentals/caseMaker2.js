const makeCase = function(input , case1) {
  var word = input.split(" ");
  //return word;
    
  if (case1 === "camel") {
    var word1 = [];
    word1.push(word[0]);
    for (var i = 1; i < word.length; i++) {
      word1[i] = word[i][0].toUpperCase() + word[i].substr(1);
      
    }
    var result = word1.join("");
  }
      else if (case1 === "pascal") {
    var word1 = [];
    for (var i = 0; i < word.length; i++) {
      word1[i] = word[i][0].toUpperCase() + word[i].substr(1);
      
    }
    var result = word1.join("");
  }   else if (case1 === "snake") {
    var result = word.join("_");
  }    else if (case1 === "kebab") {
          var result = word.join("-");
  }   else if (case1 === "title") {
        var word1 = [];
        for (var i = 0; i < word.length; i++) {
          word1[i] = word[i][0].toUpperCase() + word[i].substr(1);
        }
        var result = word1.join(" ")   
      } else if (case1 === "vowel") {
        var word1 = [];
        var word2 = [];
        for (var i = 0; i < input.length; i++) {
          //for (var j = 0; j < word[i].length; j++) {
            if (input[i] === 'a' || input[i] === 'e' || input[i] === 'i' || input[i] === 'o' || input[i] === 'u') {
              word2 = input[i].toUpperCase();
              word1.push(word2);
            } else {
              word2 = input[i];
              word1.push(word2);
            } 

          //}
          var result = word2//.join(" ") 
        } 
        var result = word1.join("");
      } else if (case1 === "consonant") {
        let word1 = [];
        let word2 = [];
        for (var i = 0; i < input.length; i++) {
          //for (var j = 0; j < word[i].length; j++) {
            if (input[i] !== 'a' && input[i] !== 'e' && input[i] !== 'i' && input[i] !== 'o' && input[i] !== 'u') {
              word2 = input[i].toUpperCase();
              word1.push(word2);
            } else {
              word2 = input[i];
              word1.push(word2);
              continue;
            } 

          //}
        } 
        var result = word1.join("") 

      }else if (case1[0] === "upper" && case1[1] === "snake") {
        var word1 = word.join("_");
        var word2 = [];
        for (var i = 0; i < word1.length; i++) {
          for (var j = 0; j < word1[i].length; j++) {
            word2.push(word1[i][j].toUpperCase());
          }
          
        }
        var result = word2.join(""); 
      }

  return result;
}

console.log(makeCase("this is a string", "camel"));
console.log(makeCase("this is a string", "pascal"));
console.log(makeCase("this is a string", "snake"));
console.log(makeCase("this is a string", "kebab"));
console.log(makeCase("this is a string", "title"));
console.log(makeCase("this is a string", "vowel"));
console.log(makeCase("this is a string", "consonant"));
console.log(makeCase("this is a string", ["upper", "snake"]));




