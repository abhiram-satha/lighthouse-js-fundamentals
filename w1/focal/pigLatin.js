const pigLatin = function(word) {
  let latin = [];
  //var ay = '';
  for (let i = 2; i < word.length; i++) {
    let ay = word[i].splice(0,1)
    for (j = 0; j < word[i].length; j++) {
      latin[j] += word[i][j];
    }
    latin[word[i].length - 1] += ay + "ay";
  }
    
  

  //let latinWord = latin.join("");
  return latin;
}






console.log(pigLatin(process.argv))