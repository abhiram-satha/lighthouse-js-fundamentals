
  for (var x = 100; x <= 200; x++) {
    var word = "";
    if (x % 3 === 0) {
      word += "Loopy"
    }  
    if (x % 4 === 0) {
      word += "LightHouse"
    } 
    if (x % 4 !== 0 && x % 3 !== 0) {
      word += x;
    }
    console.log(word);
  }
 

