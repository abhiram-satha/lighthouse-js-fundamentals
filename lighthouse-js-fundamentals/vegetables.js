function judgeVegetable (vegetables, metric) {
  vegetables.sort(function (a , b) {
    return b[metric] - a[metric];
    });
    return vegetables[0].submitter
}



const vegetables = [
  {
    submitter: 'Old Man Franklin',
    redness: 0,
    plumpness: 5
  },
  {
    submitter: 'Sally Tomato-Grower',
    redness: 12,
    plumpness: 8
  },
  {
    submitter: 'Hamid Hamidson',
    redness: 4,
    plumpness: 3
  }

];



console.log(judgeVegetable(vegetables, 'plumpness'));
//judgeVegetable(vegetables, 'redness');




/*
const judgeVegetable = function (vegetables, metric) {
  var scale = 0;
  var name = "";
  if (metric === 'redness') {
    for (var i = 0; i < vegetables.length; i++) {
      if (vegetables[i].redness > scale) {
        scale = vegetables[i].redness;
        name = vegetables[i].submitter;
      } 
      
    } 
 
  } else if (metric === 'plumpness') {
    for (var j = 0; j < vegetables.length; j++) {
      if (vegetables[j].plumpness > scale) {
        scale = vegetables[j].plumpness;
        name = vegetables[j].submitter;
      } 
      
    } 
    
  }
  return name; 
}
*/