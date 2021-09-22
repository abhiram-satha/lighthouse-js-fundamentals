function chooseStations (stations) {
  var spot = [];

  for (var i = 0; i < stations.length; i++) {
      if (stations[i][1] >= 20 && (stations[i][2] === "school" || stations[i][2] === "community centre")) {
      spot.push(stations[i][0]);
      }
      
  }
  return spot;
}

const stations = [
  ['Big Bear Donair', 10, 'restaurant'],
  ['Bright Lights Elementary', 50, 'school'],
  ['Moose Mountain Community Centre', 45, 'community centre']
];

console.log(chooseStations(stations));