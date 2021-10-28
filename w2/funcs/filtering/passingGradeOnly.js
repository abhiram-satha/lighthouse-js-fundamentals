const grades = [73, 69, 3, 100, 50, 70, 69, 88, 95, 77, 35];



const passingGrades = grades.filter(mark => (mark >= 70))

// const passingGrades = grades.filter(function (mark) {
//   return (mark >= 70);
// })

console.log(passingGrades)