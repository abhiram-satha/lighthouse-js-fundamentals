const organizeInstructors = function(instructors) {
  var courses = {};

  for (var i = 0; i < instructors.length; i++) {

    if (instructors[i].course in courses) {
      continue; 
    }
    courses[instructors[i].course] = [];

    for (var j = 0; j < instructors.length; j++) {
      if (instructors[j].course === instructors[i].course) {
        courses[instructors[j].course].push(instructors[j].name);
      }

    }

          
    
  }

  return courses;
}

console.log(organizeInstructors([
  {name: "Brendan", course: "Blockchain"},
  {name: "David", course: "Web"},
  {name: "Martha", course: "iOS"},
  {name: "Carlos", course: "Web"}
]));

/*
console.log(organizeInstructors([
  {name: "Samuel", course: "iOS"},
  {name: "Victoria", course: "Web"},
  {name: "Karim", course: "Web"},
  {name: "Donald", course: "Web"}
]));
*/