const PI = 3.14159 ;

const sphereVolume = function (radius) {
  var v = (4/3)*PI*Math.pow(radius, 3);
  return v;
}


console.log(4186 < sphereVolume(10) && sphereVolume(10) < 4189);

const coneVolume = function (radius, height) {
  var c = PI*Math.pow(radius, 2)*(height/3);
  return c;
}

console.log(45 < coneVolume(3, 5) && coneVolume(3, 5) < 49);

const prismVolume = function (height, width, depth) {
  var r = height * width * depth;
  return r;
}



console.log(prismVolume(3, 4, 5) === 60);


var solids = [sphereVolume(10), coneVolume(3 ,5), prismVolume(3, 4, 5)];
//console.log(solids);


const totalVolume = function (solids) {
  var x = 0;
  for (var i = 0; i < solids.length; i++) {
    if (solids[i] === largeSphere) {
      x += sphereVolume(solids[i].radius);
    } else if (solids[i] === cone) {
        x += coneVolume(solids[i].radius, solids[i].height)
      } else if (solids[i] === smallSphere) {
          x += sphereVolume(solids[i].radius);
        }
  }
  return x;
}

const largeSphere = {
  type: 'sphere',
  radius: 40
}

const smallSphere = {
  type: 'sphere',
  radius: 10
}

const cone = {
  type: 'cone',
  radius: 3,
  height: 5
}

const duck = [
  largeSphere,
  smallSphere,
  cone
]
console.log(272000 < totalVolume(duck) && totalVolume(duck) < 275000);