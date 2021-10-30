// The second argument/parameter is expected to be a (callback) function
const findWaldo = function(names, found) {
  //for (let i = 0; i < names.length; i++)
  let num = 0;
  names.forEach(function(name) {
    //let name = names[i];

    if (name === "Waldo") {
      found(num);   // execute callback
    }
    num++;
  });
  
};

// const actionWhenFound = function(index) {
//   console.log(`Found Waldo at index ${index}!`);
// }

const index = function(i) {
  console.log("Waldo is located at:", i);
  return i;
  
};

findWaldo(["Alice", "Bob", "Waldo", "Winston"], index);

