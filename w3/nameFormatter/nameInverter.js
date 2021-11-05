const nameInverter = function(name) {
  if (name === '') {
    return '';
  } else if (name === undefined) {
    throw new Error;
  }
  name = name.trim();
  let nameArray = name.split(' ');
    if (nameArray.length === 2 && name.includes(".")) {
      return name;
    } else if (nameArray.length === 2){
    nameArray = nameArray.reverse().join(", ");
    
    return nameArray;
  } else if (nameArray.length === 1 && name.includes(".")) {
    return "";
  } else if (nameArray.length ===3 && name.includes(".")) {
    return `${nameArray[0]} ${nameArray[2]}, ${nameArray[1]}`;
  }

  return name.trim();
}

module.exports = nameInverter;