const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  var pastry = "";
  for (var i = 0; i < recipes.length; i++) { 
    for (var j = 0; j < bakeryA.length; j ++) {
      if (recipes[i].ingredients[0] === bakeryA[j] || recipes[i].ingredients[1] === bakeryA[j]) {
        for (var k = 0; k < bakeryB.length; k++) {
          if (recipes[i].ingredients[0] === bakeryB[k] || recipes[i].ingredients[1] === bakeryB[k]) {
            pastry = recipes[i].name;
          }
        }
          
      } 
        
      
      
    }
    
  }
  return pastry;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'ground beef'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];



console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

/*
const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  var pastry = "";
  for (var i = 0; i < recipes.length; i++) {
  console.log("hi1");  
    for (var j = 0; j < bakeryA.length; j ++) {
      console.log("hi2");
      if (recipes[i].ingredients[0] === bakeryA[j]) {
        console.log("hi3");
        for (var k = 0; k < bakeryB.length; k++) {
          console.log("hi4");
          if (recipes[i].ingredients[0] === bakeryB[k]) {
            pastry = recipes[i].name;
            console.log("hi");
          }
        }
      }
      
    }
    return pastry;
  }
}

*/