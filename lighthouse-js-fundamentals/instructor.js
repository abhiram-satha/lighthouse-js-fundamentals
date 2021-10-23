
const instructorWithLongestName = function(instructors) {
  var x = {
    name: "" , course: ""
  };
  for (var i = 0; i < instructors.length; i++) {
      if (x.name.length < instructors[i].name.length) {
        x = instructors[i];
      }
  }
  return x;
};

console.log(instructorWithLongestName([
  {name: "Samuel", course: "iOS"},
  {name: "Jeremiah", course: "Web"},
  {name: "Ophilia", course: "Web"},
  {name: "Donald", course: "Web"}
]));
console.log(instructorWithLongestName([
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]));

var teacher = [
  {name: "Matthew", course: "Web"},
  {name: "David", course: "iOS"},
  {name: "Domascus", course: "Web"}
]

console.log(teacher.length);