const urlDecode = function(text) {
  var x = {};
  var url = text.match(/[A-z0-9%]+/gi);

  var encode = [];
  //console.log(encode);
  for (var i = 0; i < url.length; i++) {
    var string = url[i].replace(/%20/g, " ");
    
    encode.push(string);

  }
  
  var j = 1;
  var k = 0;
    
    
    while (j < encode.length) {
      var tv = encode[k];
      x[tv] = encode[j];
      j+=2;
      k += 2;
    }

    
  
  return x;
};

console.log(urlDecode("duck=rubber"));
console.log(urlDecode("bootcamp=Lighthouse%20Labs"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain"));
console.log(urlDecode("city=Vancouver&weather=lots%20of%20rain").weather);