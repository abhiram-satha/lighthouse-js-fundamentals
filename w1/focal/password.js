

const obfuscate = function(arr) {
  var password = arr.split("");
  for (let i = 0; i < password.length; i++) {
    if (password[i] === "a") {
      password[i] = "4";
      // console.log(password)
    } else if (password[i] === "e") {
      password[i] = "3";
      // console.log(password)
    } else if (password[i] === "o") {
      password[i] = "0";
      // console.log(password)
    } else if (password[i] === "l") {
      password[i] = "1";
      // console.log(password)
    } else {
      continue;
    }
  }
  return password.join("");
};

const userInput = process.argv[2];

console.log(obfuscate(userInput));