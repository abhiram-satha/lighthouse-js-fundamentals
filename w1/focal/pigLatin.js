const pigLatin = function(word) {
  let latin = [];
  //var ay = '';
  for (let i = 2; i < word.length; i++) {
    let words = word[i]
    let ay = words.shift;
    //console.log(ay);
    for (j = 0; j < words.length - 1; j++) {
      latin[j] += words[j];
    }
    latin[word[i].length] += ay + "ay";
  }
    
  

  //let latinWord = latin.join("");
  return latin.join();
}






console.log(pigLatin(process.argv))