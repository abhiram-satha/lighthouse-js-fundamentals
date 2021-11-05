const printItems = function (arr) {
  for (let index of arr) {
    if (Array.isArray(index)) {
      printItems(index)
    }
    else {
      console.log(index);
    }
  }
}

const array = ["😎", [["💩", ["🤗"]], [[["😼"]], "😂"]]];
//const array = ["😎", ["💩", "🤗"], "😼", "😂"];
//const array = ["😎", "💩", "🤗", "😼", "😂"];
//printItems(array);



