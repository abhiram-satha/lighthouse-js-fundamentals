const pigLatin = function(arr) {
  let latin = [];
  //console.log(arr);
  
  for (let i = 0; i < arr.length; i++) {
    let ay = arr[0][0].shift();
    console.log(arr);
    //console.log(ay);
    for (j = 0; j < arr.length[i]; j++) {
      latin.push(arr[j][i]);
    }
    latin.push(ay + "ay");
  }
    
  

  //let latinWord = latin.join("");
  return latin.join();
}

var lets = process.argv;
const toTranslate = lets.slice(2 , process.argv.length);


console.log(pigLatin(toTranslate))