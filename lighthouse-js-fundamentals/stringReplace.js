const urlEncode = function(text) {
  var text2 = text.trim();
  text3 = "";
  for (var i = 0; i < text.length; i++) {
    if (text.charAt(i)=== " " && i !== 0 && i !== -1) {
      text3 += "%20"
    } else {
      text3 += text[i];
    }
  }
  return text3;
};

console.log(urlEncode("Lighthouse Labs"));
console.log(urlEncode(" Lighthouse Labs "));
console.log(urlEncode("blue is greener than purple for sure"));