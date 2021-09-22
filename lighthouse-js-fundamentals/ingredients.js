const ingredients = ["eggs", "milk", "flour", "sugar", "baking soda", "baking powder", "chocolate chips", "bananas"];

// Write a while loop that prints out the contents of ingredients:

let j = 0;
while (j < ingredients.length) {
  console.log(ingredients[j]);
  j++;
}

console.log("\n")
// Write a for loop that prints out the contents of ingredients:

for (let j = 0; j <ingredients.length; j++) {
  console.log(ingredients[j]);
}

console.log("\n");


// Write any loop (while or for) that prints out the contents of ingredients backwards:



let i = ingredients.length -1;
while (i >= 0) {
  console.log(ingredients[i]);
  i --;
}

console.log("\n");

for (let i = ingredients.length -1; i >= 0; i--) {
  console.log(ingredients[i]);
}