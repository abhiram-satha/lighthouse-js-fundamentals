const reverse = function(arr) {
  let word1 = "";
  for (let i = 2; i < arr.length; i++) {
    word1 += reverse1(arr[i]);
    
  }
  return word1;
};

const reverse1 = function(arr1) {
  let word = "";
  for (let j = arr1.length - 1; j >= 0; j--) {
    word += arr1[j];
  }
  return word + "\n";
};

console.log(process.argv.length);
console.log(reverse(process.argv));